// Store the wallet amount to your local storage with key "amount"
var a=0; 
var add=document.getElementById("add_to_wallet").addEventListener("click",function(){
     console.log('add:', add)
     addMoney()
 })
 function addMoney(){
  var amount=  document.getElementById("amount") .value;
  a+= +amount;
  console.log('amount:', a);
  localStorage.setItem("amount",JSON.stringify(a));
  document.getElementById("wallet").innerText=a;
 }