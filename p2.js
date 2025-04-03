// asyncronus
var f1=require("fs")
f1.writeFile("text.txt","hi",function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("write")
    }
});
f1.appendFile("t1.txt" ,"How are you",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("write2")
    }
});
f1.readFile("t1.txt","UTF-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
});
f1.rename("t1.txt","t2.txt",()=>{
    console.log("renamed");
});

f1.unlink("text.txt",(err)=>{
    if(err){
        throw err;
    }
})