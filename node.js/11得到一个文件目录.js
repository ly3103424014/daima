let http=require('http');
let fs=require('fs');
http.createServer((req,res)=>{
   if(req.url==='/favicon.ico') {
       return;
    }
    fs.stat('../img',function(err,data){
        console.log(data.isDirectory());
    })
   res.end("success");
}).listen(3000,'192.168.0.103');