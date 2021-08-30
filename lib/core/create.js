const { createActions } = require('./actions'); // 封装actions执行函数
const program = require('commander');

const createCommands = () => {
    program
        .command('create <project> [others...]')
        .description('clone a repository into a folder')
        // 执行创建指令函数
        .action(createActions);
};
module.exports = createCommands;
