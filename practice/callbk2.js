let add=(a,b)=>a+b
let mult =(a,b)=>a*b
let cal=(a,b,callback)=>
{
    return callback(a,b)

}
let r1=cal(2,3,add)
console.log("sum:",r1)
let r2=cal(4,5,mult)
console.log("product:",r2)