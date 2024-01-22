import {execSync} from 'child_process';

// Function to execute shell commands
function executeCommand(command: string): void {
  try {
    execSync(command, {stdio: 'inherit'});
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
}

const markdown = `
### Completed
- Added 

### Test
- Test

### Notes
- NA
`;

// Get the current branch
const currentBranch = execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim();

// Make changes to the branch
// Add your logic here...

// Commit changes
// executeCommand('git add .');
// executeCommand(
//   `git commit -m "Auto-commit changes on branch: ${currentBranch}"`
// );

// Push changes to the remote
// executeCommand(`git push origin ${currentBranch}`);

// Create a pull request
executeCommand(
  `npx create-pull-request --base beta --head ${currentBranch} --title "${currentBranch}" --body "${markdown}"`
);
