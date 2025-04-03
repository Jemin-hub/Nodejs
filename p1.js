// syncronus
var fs=require("fs")
fs.writeFileSync("test.txt" ,"Hello")
console.log("completed1")
console.log("test")

// asyncronus
fs.writeFile("text.txt","hi",function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("completed2")
    }
});
console.log("outside")
