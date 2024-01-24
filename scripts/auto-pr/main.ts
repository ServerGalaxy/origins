import 'dotenv/config';
import {submitPR, getCurrentBranch} from './github';

function main() {
  submitPR('beta', getCurrentBranch(), getCurrentBranch());
  submitPR('alpha', 'Release Alpha', 'beta');
  submitPR('main', 'Release Production', 'alpha');
}
main();
