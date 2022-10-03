let a=[{id:15},{id:-1},{id:0},{id:3},{id:12.2},{},{id:null},{id:NaN},{id:'undefined'}]
let invalide=0;
function invalid(item)
{
    if(Number.isFinite(item.id) && item.id!=0)
    {
        return true;
    }
    invalide++
    return false;
    
}
let ientries=a.filter(invalid)
console.log("Invalid entries: ",ientries)
console.log("Number of invalid entries: ",invalide)