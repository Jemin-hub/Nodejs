// read and arrange data in assending order "50,-1,100,20,0,56,78,59"
var f1=require("fs")
f1.writeFileSync("n4.txt","50,-1,100,20,0,56,78,59")
data=f1.readFileSync("n4.txt","utf-8")

data=data.split(",")
d=data.sort((a,b)=>a-b)
console.log(d)