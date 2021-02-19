fruits=['apple','banana','orange']
function AddItem(item)
{
    return new Promise( (resolve,reject))
    setTimeout(()=>
    {
        let complted=false;
        if(!completed)
        {
            resolve();
        }
        else{
            reject("error in completion");
        }
    },1000);
}
function GetItems()
{
    fruits.forEach(item => {
        console.log(item)
        
    });
}
AddItem("grapes").then(GetItems).catch(msg=> console.log(msg))
GetItems();