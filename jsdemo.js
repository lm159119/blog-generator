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
            fs.writeFileSync("./index.html", "<!DOCTYPE><title>Hello</title><h1>Hi</h1>")
            fs.writeFileSync("css/style.css", "h1{color: red;}")
            fs.writeFileSync("./js/main.js", "var string = 'Hello World';\n alert(string)")   
            process.exit(0)
            
        }else{
            console.log('目录已经存在')
            process.exit(0)
        }
    });



     
    
  
 