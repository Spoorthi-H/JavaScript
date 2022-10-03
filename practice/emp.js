let emp=[{"id":1,"first_name":"Rabbi","last_name":"Downey","email":"rdowney0@rakuten.co.jp","gender":"Male"},
{"id":2,"first_name":"Willem","last_name":"Cassey","email":"wcassey1@issuu.com","gender":"Male"},
{"id":3,"first_name":"Tedmund","last_name":"Coulthard","email":"tcoulthard2@oracle.com","gender":"Male"},
{"id":4,"first_name":"Daisey","last_name":"Fierro","email":"dfierro3@cbslocal.com","gender":"Female"},
{"id":5,"first_name":"Mariellen","last_name":"Eaglen","email":"meaglen4@microsoft.com","gender":"Female"},
{"id":6,"first_name":"Constantia","last_name":"Jasiak","email":"cjasiak5@hhs.gov","gender":"Female"},
{"id":7,"first_name":"Marcellina","last_name":"Packington","email":"mpackington6@google.com.br","gender":"Female"},
{"id":8,"first_name":"Rivi","last_name":"O'Calleran","email":"rocalleran7@washingtonpost.com","gender":"Genderfluid"},
{"id":9,"first_name":"Gordan","last_name":"Ibbott","email":"gibbott8@skype.com","gender":"Male"},
{"id":10,"first_name":"Reena","last_name":"Wellwood","email":"rwellwood9@cisco.com","gender":"Female"},
{"id":11,"first_name":"Renelle","last_name":"Leirmonth","email":"rleirmontha@multiply.com","gender":"Female"},
{"id":12,"first_name":"Jean","last_name":"Bullant","email":"jbullantb@angelfire.com","gender":"Male"},
{"id":13,"first_name":"Rogerio","last_name":"Dovermann","email":"rdovermannc@tiny.cc","gender":"Male"},
{"id":14,"first_name":"Ker","last_name":"Herion","email":"kheriond@microsoft.com","gender":"Agender"},
{"id":15,"first_name":"Tito","last_name":"Buxcy","email":"tbuxcye@google.fr","gender":"Male"}]

function get_empdetails()
{
    let rows=""
    emp.forEach((el)=>{if(el.gender=="Female"){
        el.gender="F"
    }
    if(el.gender=="Male"){
        el.gender="M"
    }})
    emp.forEach((e)=>{rows+=`<tr><td>${e.id}</td>
    <td>${e.first_name.toUpperCase()}</td>
    <td>${e.last_name}</td>
    <td>${e.email}</td>
    <td>${e.gender}</td></tr>`
    
})
document.getElementById("tb").innerHTML=rows
let em=emp.filter((e)=>{
    if(e.gender=='M')
    {
        return e
    }
})
console.log(em)
    
    

}
