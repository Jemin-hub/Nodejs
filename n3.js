// write node js copy contains of one file to anthor file data should be fatch from source.txt and insert into detination.txt and print 
// data on console from destination from txt file.
var f1=require("fs")
// f1.mkdirSync("node");
f1.writeFileSync("node/sorce.txt","hello")
data=f1.readFileSync("node/sorce.txt")
console.log(data);
console.log(data.toString());
datacopy=data.toString()
f1.writeFileSync("node/destination.txt",datacopy)
