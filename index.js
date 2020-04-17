const fs = require("fs");
const path = require("path");
//引入配置文件
const profileData = require("./template/data")
//引入文件模板
let template = require("./template/template");
let page = template.page;
let api = template.api;
let route = template.route;

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
//遍历配置文件并调用创建目录方法
profileData.data.forEach((item) => {
    if(item.folder){
        mkdirsSync(`./pages/${item.folder}`)
    }
})

//遍历创建文件
profileData.data.forEach((item) => {
    if(item.file){
        //创建API文件
        if(item.file.indexOf("api") != -1){
            fs.writeFile(`./pages/${item.folder}/${item.file}`, api, function(err){
                if(err){
                    return console.log('创建失败', err);
                }
                console.log(`创建文件成功！-${item.file}`);
            })
        }
        
        //创建route文件
        if (item.file.indexOf("route") != -1){
            fs.writeFile(`./pages/${item.folder}/${item.file}`, route, function(err){
                if(err){
                    return console.log('创建失败', err);
                }
                console.log(`创建文件成功！-${item.file}`);
            })
        }

        //创建主体页面
        if (item.className){
            fs.writeFile(`./pages/${item.folder}/${item.file}`, page(item.className), function(err){
                if(err){
                    return console.log('创建失败', err);
                }
                console.log(`创建文件成功！-${item.file}`);
            })
        } 
    }
})