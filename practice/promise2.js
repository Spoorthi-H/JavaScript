let emp=[{id:1,first_name:"Rabbi",email:"rdowney0@rakuten.co.jp"},
{id:2,first_name:"Willem",email:"wcassey1@issuu.com"}]

let createemp=(e)=>
{
    return new Promise((resolve,reject)=>
    {
    setTimeout(() => 
    {
        let flag=true
        emp.push(e)
        flag?resolve("Data Inserted"):reject("Data Insertion Failed")
    }, 3000);
})
}
let getemp=()=>
{
    setTimeout(() => { 
    let rows=""
    emp.forEach((e)=>
    { rows+=`<tr>
    <td>${e.id}</td>
    <td>${e.first_name}</td>
    <td>${e.email}</td>
</tr>`})
document.getElementById("tb").innerHTML=rows
}, 1000);

}
createemp({id:3,first_name:"Rahul",email:"rahul6@gmail.com"})
.then((msg)=>{console.log(msg)
    getemp()
}).catch((err)=>
{console.log(err)})
