import 'dotenv/config';
import {getCurrentBranch} from './github';
import {executeCommand} from './config';

function main() {
  executeCommand(`git push origin ${getCurrentBranch()}`);
}
main();
