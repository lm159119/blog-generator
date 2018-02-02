var fs = require('fs')

var dirName = process.argv[2] 
var reqPath=process.cwd()+"\\"+dirName;
    fs.exists(reqPath, function(exists){
        if(!exists){
            process.cwd()
            fs.mkdirSync("./" + dirName) 
            process.chdir("./" + dirName) 
            fs.mkdirSync('css')
            fs.mkdirSync('js')    
            fs.writeFileSync("./index.html", "")
            fs.writeFileSync("css/style.css", "")
            fs.writeFileSync("./js/main.js", "")   
            process.exit(0)
            
        }else{
            console.log('目录已经存在')
            process.exit(0)
        }
    });



     
    
  
 