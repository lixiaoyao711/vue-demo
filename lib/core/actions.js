import { promisify } from 'util';
const download = promisify(require('download-git-repo'));
// import {download} from promisify('download-git-repo')
import { vueRepo } from '../config/repo-config';
const createActions = async project => {
    await download(vueRepo);
};

export { createActions };
