
let add=()=>
{  
    
    return new Promise((resolve,reject)=>{
        let flag=true
        if (flag)
        {
            resolve("Match found")
        }
        else{
            reject("Mismatch")
        }})
}
add().then((msg)=>{console.log(msg)}).catch((err)=>{console.log(err)})