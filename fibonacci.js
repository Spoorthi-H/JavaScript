const prompt = require("prompt-sync")();
var n = prompt("Enter a Number")
var f1=0
var f2=1
console.log(f1)
console.log(f2)
for(let i=3;i<=n;i++)
{
    
    let f3=f1+f2
    console.log(f3)
    f1=f2
    f2=f3
}