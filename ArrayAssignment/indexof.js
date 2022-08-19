//a.indexOf(ele) returns index of array ele
let a=[1,2,3,4,5,6,7,8,9]
console.log("indexof ele 8 is",a.indexOf(8))
//find method
function check(no)
{
    if(no>5 && no<8)
    {
        return(no)
    }
}
console.log("find:",a.find(check))
//findindex method
console.log("findIndex:",a.findIndex(check))
let b=[2,3,4,2,5]
console.log("lastIndexOf:",b.lastIndexOf(2))