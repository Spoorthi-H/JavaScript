//Feature4: Function hoisting or overriding conflict is resolved in Fatarrow functions

var display=()=>{console.log("GM")}
display() //output:GM
var display=()=>{console.log("GN")} //no overriding
display() //output:GN


//in normal function function overridng leads to error

function message(){
    console.log("HI") //this method is overridden
}
message() //ouput:Hello
function message()
{
    console.log("Hello") //overrides 1st method
}
message()//ouput:Hello



