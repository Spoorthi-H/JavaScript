let a=[1,2,3,4,5,6,7,8,9]
//slice reurns section of arrau from start pos(index) to end pos(index),a.slice(start,end),including start,excluding end
console.log(a.slice(1)) //if end is not defined then end of array is considered
console.log(a.slice(undefined,a.length-1))//if start is undefined,index 0 is considred as sart
console.log(a.slice(1,-1))// end value -1 indicates last but one ele, similarly -2 indicates last but second ele
console.log(a.slice(0,-2))
console.log(a.slice(2,5))