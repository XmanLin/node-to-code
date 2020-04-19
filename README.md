# node-to-code
通过node自动生成重复的js代码

首先要创建pages文件夹，下面为各文件的说明：

- [index.js](https://github.com/XmanLin/node-to-code/blob/master/index.js)为我们的主程序，文件夹（目录）和文件的生成的程序逻辑都在里面，也是最终运行的文件
- pages里面为我们生成的文件夹（目录）和文件
- [template](https://github.com/XmanLin/node-to-code/tree/master/template)里面有两个文件
    - [data.js](https://github.com/XmanLin/node-to-code/blob/master/template/data.js)为我们的配置文件，包含了文件夹（目录）和文件名称以及文件模板的参数等配置
    - [template.js](https://github.com/XmanLin/node-to-code/blob/master/template/template.js)为我们的各种文件的模板

说明一下，因为我们这里是假设是在react的项目下，所以其它的文件基本上是与react相关的，不用过多关注。上面所提到的代码逻辑与react不耦合，其它框架下也同样适用。
