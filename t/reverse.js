const prompt = require("prompt-sync")();
var n = prompt("Enter a Number")

while(n>1)
{
    let r=n%10;
    console.log(Math.floor(r))
    n=n/10
}
