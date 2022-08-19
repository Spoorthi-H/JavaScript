//creating 2D Array

let a=[[1,2,3],[4,5,6],[7,8,9]]
console.log(a)

//sum of 2DArray
let sum=0
for(let i=0;i<3;i++)
{
    for(let j=0;j<3;j++)
    {
       sum+=a[i][j] 
    }
}
console.log("Sum of 2DArray elements: ",sum)

//Accessing 2DArray item
console.log("2DArray item: ",a[1][2])