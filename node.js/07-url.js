let http=require('http');
let url=require('url');
let server=http.createServer((req,res)=>{
    if(req.url==='/favicon.ico'){
        return;
    }
    console.log(url.parse(req.url));
    res.end();
})
console.log('B');
server.listen(4000,'127.0.0.1');