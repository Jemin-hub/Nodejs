// http://www.googel.com/exam.txt?c1=Hello & c2=FSD2 T1 Test & c3=welcome to LJU #allthw best 
// data must be below inn file name examed.txt file name mistr be fatch friomn tyhe url given below 
// out put :Hello !
//          wlcome to lju FSD2 t1 test 
//          #all the best 
// read and send responce to server and display data in / in same forment as above but in h1 tag and in red colour if any other pages 
// reqest it sjow page not found is page is not found 
const http=require("http");
const fs=require("fs");
const url=require("url");
const url1= "http://www.googel.com/exam.txt?c1=Hello&c2=FSD2T1Test&c3=welcome+to+LJU#Allthebest"
purl=url.parse(url1,true);
const c1=purl.query.c1;
const c2=purl.query.c2;
const c3=purl.query.c3;
const hash=purl.hash;
const filename='.'+purl.pathname;
const filecontant=c1+"!\n"+c3+" "+c2+"\n"+hash;
fs.writeFileSync(filename,filecontant)
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        data=fs.readFileSync(filename,'UTF-8');
        res.writeHead(200,{'content-type':'text/html'});
        res.end("<h1 style='color:red'><pre>"+data+"</pre></h1>")
    }
    else{
        res.writeFileSync(400,{'contant-type':'text/html'});
        res.end("page not found")
    }
})
server.listen(6051);