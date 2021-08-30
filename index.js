#!/usr/bin/env node
// hashBar,必须配置否者无法识别自定义的help.js,然后配置package.json.的bin,在执行npm link

const program = require('commander'); //需要npm i commander 安装
const helpOptions = require('./lib/core/help'); //封装得一系列help文件

const createCommands = require('./lib/core/create'); //封装一系列创建文件

// 查看版本号
program.version(require('./package-lock.json').version);

// 帮助和可选信息
helpOptions();

// 创建其他指令
createCommands();

program.parse(process.argv);
