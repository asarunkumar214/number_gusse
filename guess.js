var num = Math.floor(Math.random()*101);
var count = 0 ;
console.log(num);



function findnum()
{
   var gn = parseInt(document.getElementById("n1").value);
   count+=1;
   if(gn==num)
   {
    document.getElementById("u").textContent = "...Congratulations..You are Win..."
   }
    else if(gn<num)
    {
        document.getElementById("u").textContent = "Try with Big number"
    }
    else
    {
        document.getElementById("u").textContent = "Try with small number"
    }
    document.getElementById("r").textContent = count;


}
