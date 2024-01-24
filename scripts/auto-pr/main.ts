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

function main() {
  executeCommand(`git push origin ${getCurrentBranch()}`);
  submitPR('beta', getCurrentBranch(), getCurrentBranch());
  submitPR('alpha', 'Release Alpha', 'beta');
  submitPR('main', 'Release Production', 'alpha');
}
main();
