const prompt = require("prompt-sync")();
var n = prompt("Enter a Number")
var a=n
var res=0

while(n>1)
{
    let r=n%10;
    console.log(Math.floor(r))
    res+=Math.pow(Math.floor(r),3) 
    n=n/10
}
if(res==a)
{
    console.log("Number",a," is an armstrong number")
}
else
{
    console.log("Number",a," is not an armstrong number")
}
