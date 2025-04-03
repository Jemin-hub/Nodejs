const fs = require("fs");

// Write data to source file
fs.writeFileSync("source.txt", "ABC");

// Read data from source file
const data = fs.readFileSync("source.txt", "utf-8");

// Write data to destination file
fs.writeFileSync("destination.txt", data);

// Read and log the copied content
const data1 = fs.readFileSync("destination.txt", "utf-8");
console.log(data1);
