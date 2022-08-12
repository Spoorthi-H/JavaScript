const prompt = require("prompt-sync")();
for(let i=1;i<=5;i++)
{
    var n = prompt("Enter a Number")
    if(n%2==0)
    {
        console.log(n)
    }
}

