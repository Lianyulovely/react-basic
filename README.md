# react-basic
基础的react 框架代码
# 概述

* 本项目开发环境采用 [NodeJS](http://nodejs.org) 搭建，你的电脑上必须先要安装 NodeJS。
* [NPM](https://www.npmjs.org/) 是 NodeJS 的模块管理系统，本项目所有依赖的第三方模块都通过 NPM 来进行安装。

# 安装开发环境

1. 安装 NodeJS

* MAC

方法1: 推荐通过 `brew install node` 命令来安装

方法2: 下载 [NodeJS 的 Mac 安装包](https://nodejs.org/dist/v4.1.1/node-v4.1.1.pkg)

* Windows

64 位: https://nodejs.org/dist/v4.1.1/node-v4.1.1-x64.msi

32 位: https://nodejs.org/dist/v4.1.1/node-v4.1.1-x86.msi

* Linux

Linux 下的安装方法有待补充。

* 通常安装完 NodeJS 就意味着已经安装了 NPM。

2. check-out 源代码

* 请咨询你周围的同事

3. 准备开发环境

* 在源代码的base目录及modules目录分别执行以下命令

`npm install`

将会自动安装所有依赖的第三方开发包。注意只有首次运行这份源代码时才需要执行这个命令。

# 运行

* 项目基本介绍

base目录存放打包编译的好的整理项目，里面嵌入多个功能模块，包含左菜单及登录逻辑

modules 目录存放的是多个独立的功能模块，采用react的多页应用的开发模式，开发某个独立功能时需切换到此目录新建一个入口

base与modules 可以看成是2个独立运行的项目，开发时需要分别安装对应的依赖启动对应的服务

* 启动服务

需要执行下列命令

`npm run server`

该命令会自动打开浏览器展示对应的web页面，每当监测到文件发生变化时会自动刷新浏览器。

注意控制台的输出结果，如果是一片绿色，则说明所有文件都已经被正确生成了。

* 编译

`npm run build`

该命令执行后对源文件进行打包生成浏览器可识别的编译文件，生成的代码打进dist文件夹

* 修改主题色

分别切换到base，modules目录，找到theme.js 文件，修改主题色值，重启服务打包编译即可看到主题切换

* 运行编译指定模块

进入modules 模块，找到dev.config.json ,配置modules 数组，数组值为对应的模块的简拼，配置完成后`npm run server ` 即可编译对应的模块，打开控制台地址 `服务器地址/模块名/模块名.html` 即可看到对应的模块显示

同上，配置build.config.json 是打包对应的模块成静态文件
打包后的dist目录会自动copy 到base目录中
开启base 的服务即可看到所有已打包完成的模块


# 开发

(待完善)

* 修改源代码
* 观察 webpack -w 界面是否正确生成了更新的文件
* 用浏览器查看运行效果，调试你的代码
