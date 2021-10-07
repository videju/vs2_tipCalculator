let btn  = document.getElementById('btn');

btn.addEventListener('click',function(){
 let billAmount = document.getElementById('bill_amount').value = "50";
 let tipPercentage = document.getElementById('tip-percentage').value;
 
 let tipAmount = document.getElementById('tip_amount').value = billAmount / tipPercentage;
 document.getElementById('total_bill').value = parseFloat(billAmount) + parseFloat(tipAmount)
})