console.log("Directory Name:", __dirname);
console.log("File Name:", __filename);

const args = process.argv;

const name = args[2];

console.log("Hello,", name);