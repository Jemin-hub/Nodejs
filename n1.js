//read data and arrange data in assending order "50 -1 99 100 20 0 56 78 59"
var f1=require("fs")
f1.writeFileSync("node/n1.txt","50 -1 99 100 20 0 56 78 59")
data=f1.readFileSync("node/n1.txt","utf-8")
data1=data.split(" ")
d=data1.sort((a,b)=>a-b);
console.log(d);