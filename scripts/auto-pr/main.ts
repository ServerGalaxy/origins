import 'dotenv/config';
import {execSync} from 'child_process';
import {submitPR, getCurrentBranch} from './github';

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

async function main() {
  executeCommand(`git push origin ${getCurrentBranch()}`);
  await submitPR('dev', getCurrentBranch(), getCurrentBranch());
  await submitPR('int', 'Release Int', 'dev');
  await submitPR('main', 'Release Production', 'int');
}
main();
