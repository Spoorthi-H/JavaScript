function add(a,b)//Normal Function. 
{
    return(a+b)
}
console.log(add(10,20))

let mul=(a,b)=>{ //FatArrow function type1
    console.log(a*b)
}                                           //Feature1: Short/concise code
mul(8,5)
let raiseto=(x,y)=>{ //FatArrow function type2
    console.log(x**y)
}
raiseto(10)//output:NAN

//FaArow function type3
let mod=(m,n)=>m%n                         //Feature2: Implicit return
console.log("Mod:",mod(10,3))// if function body contains only single statement that too return stmt then no need of return stmt

