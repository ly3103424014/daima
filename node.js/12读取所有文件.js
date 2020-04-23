let http=require('http');
let fs=require('fs');
var dirs
http .createServer((req,res)=>{
   if(req.url==='/favicon.ico') {
       return;
    }
    fs.readdir('../img',function(err,files){
        console.log(files);
        for(let  i=0;i<files.length;i++){
            fs.stat("../img/"+files[i],function(err,stats){
            //  解决回调地狱办法就是同步的东西
            if(fs.isDirectory){
                dirs.push(files[i]);
            }
            })
        }
    })
   res.end("ok");
}).listen(3000,'192.168.0.103');