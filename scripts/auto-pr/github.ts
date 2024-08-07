import {execSync} from 'child_process';
import {getOpenAiRes} from './openai';

const orgName = 'ServerGalaxy'; // Replace with your organization name
const repoName = 'origins'; // Replace with your repository name
const apiUrl = `https://api.github.com/repos/${orgName}/${repoName}/pulls`;

const getDescription = (completed: string) => {
  return `
### Completed:
${completed}

### Test
- ...

### Notes
- ...
`;
};

// Get the current branch
export const getCurrentBranch = () => {
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
};

export const getCommits = () => {
  return execSync(
    `git log --pretty=format:"%s" -n 15 origin/${getCurrentBranch()}`
  )
    .toString()
    .trim();
};

const getCurrentGitHubUser = () => {
  try {
    // Use git config to retrieve the global user.name configuration
    const userName = execSync('git config --global user.name')
      .toString()
      .trim();
    return userName;
  } catch (error) {
    console.error('Error retrieving GitHub username from git config:', error);
    return null;
  }
};

const githubToken = process.env.GH_TOKEN;
if (!githubToken) {
  console.error(
    'GitHub token not found. Set the GH_TOKEN environment variable.'
  );
  // eslint-disable-next-line no-process-exit
  process.exit(1);
}

/**
 *
 * @param baseBranch Base Branch
 * @param title Title of PR
 * @param head Head branch
 * @returns URL where PR was created
 */
export const submitPR = async (
  baseBranch: string,
  title: string,
  head: string
) => {
  const summary = (await getOpenAiRes()) as string;
  const pullRequestBody = getDescription(summary);
  const gitUser = getCurrentGitHubUser();

  try {
    const github = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${githubToken}`,
      },
      body: JSON.stringify({
        title: title,
        head: head,
        base: baseBranch,
        body: pullRequestBody,
        assignees: [`${gitUser}`],
      }),
    });
    const data = await github.json();
    console.log('The github data:', data);
    console.log('PR created at:', data.html_url);
    return data;
  } catch (error) {
    console.error(error);
  }
};
