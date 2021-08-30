const { promisify } = require('util'); //node内部包promisify()可以将普通回调函数转换成promise

const download = promisify(require('download-git-repo')); //cli文件下载插件,需要npm i download-git-repo 安装
// const open = require('open'); //自动打开浏览器插件,需要npm i open安装---可以通过webpage打开更优雅

const { commandSpawn } = require('../utils/terminal'); //执行的终端命令
const { vueRepo } = require('../config/repo-config'); //绑定的vue项目模板
const createActions = async project => {
    console.log('loading...');
    // 1.clone项目
    await download(vueRepo, project, { clone: true });
    // 2.执行npm  install
    const command = process.platform == 'win32' ? 'npm.cmd' : 'npm'; //判断系统是windows,还是mac或者Linux
    await commandSpawn(command, ['install'], { cwd: `./${project}` });
    // 3.运行 npm run serve
    commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` });
    // 4.打开浏览器
    // open('http://localhost:8080/');
};

module.exports = { createActions };
