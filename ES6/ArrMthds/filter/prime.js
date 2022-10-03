const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isprime(a)
{
    for(let i=2;a>i;i++)
    {
        if(a%i==0){
            return false
        }

    }
    return a>1
}
let new_array=array.filter(isprime)
console.log(new_array)


