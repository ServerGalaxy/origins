import {execSync} from 'child_process';

// Function to execute shell commands
export const executeCommand = (command: string) => {
  try {
    execSync(command, {stdio: 'inherit'});
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};
