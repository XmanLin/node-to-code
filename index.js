const fs = require("fs");
const path = require("path");
//引入配置文件
const profileData = require("./template/data")
//引入文件模板
let template = require("./template/template");
let content = template.app;

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return console.log(`创建目录成功-${dirname}`);
        }
    }
}
//遍历配置文件并调用闯将目录方法
profileData.data.forEach((item) => {
    if(item.folder){
        mkdirsSync(`./pages/${item.folder}`)
    }
})


//批量创建目录

// fs.mkdir('./pages/home',function(err){
//     if(err){
//         return console.log('创建失败', err);
//     }
//     console.log("创建成功！");
// })
// //创建文件
// fs.writeFile('./pages/list/index.js', content, function(err){
//     if(err){
//         return console.log('创建失败', err);
//     }
//     console.log("创建成功！");
// })