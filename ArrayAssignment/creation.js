//JS array is a collecion of heterogenous,duplicate elements as a single entitiy

let a=[10,20,"Rahul",{id:101,name:"Sonia"},20] //Array creation
console.log(a)  

//Accessing Array items
//using while loop
let i=0
while(i<=a.length-1)
{
    console.log(a[i])
    i=i+1
}
//Accessing the last item
console.log("last array item is: ",a[a.length-1])
//Access all elements using for loop
console.log("for loop:")
for(let i=0;i<=a.length-1;i++)
{
    console.log(a[i])
}
console.log("for of loop:")
for(arr of  a)
{
    console.log(arr)
}

