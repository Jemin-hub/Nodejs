// asyncronus
var f1=require("fs")
f1.writeFile("text.txt","hi",function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("HELLO ")
        f1.appendFile("text.txt","Good Moring" ,function(err){
            if(err){
                console.log(err)
            }
            else{
                f1.readFile("text.txt","UTF-8",(err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log(data)
                    }
                });
            }
        })
    }
});
