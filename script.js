//let currencyId =[298, 145, 292];
async function currencyExchenge(id){
  const url =id
  ? 'https://www.nbrb.by/api/exrates/rates/' +id
  : 'https://www.nbrb.by/api/exrates/currencies';
 
  const result = await fetch(url);
  const fetcheData = await result.json();
  return fetcheData;
 }
 let date;

 Promise.all([
   0,
  currencyExchenge(298),
  currencyExchenge(145),
  currencyExchenge(292)
 ]).then(function(data){
   for (i=0; i<data.length; i++){
   option[i].innerText=data[i].Cur_Abbreviation;
   option[i].value = data[i].Cur_OfficialRate/data[i].Cur_Scale;
   date = data[i].Date;
   }
   option[0].innerText="Select currency";
  let value;
  let abbreviation;
  let CurrencySelect = myForm.language; 
  function changeOption(){
    let selectedOption = CurrencySelect.options[CurrencySelect.selectedIndex];
    for (i=0; i< data.length; i++){
      if(option[i].innerText ==selectedOption.text)
      {value = option[i].value;
        abbreviation = option[i].innerText;}
    }
}
CurrencySelect.addEventListener("change", changeOption);

date = new Date(date);
let day = date.getDate();
let month =  date.getMonth();
let yaer = date.getFullYear();
   button.addEventListener('click',(event)=>{
    if(byn.value && (abbreviation != "Select currency")){
      bynValue=byn.value;
      let val1= parseFloat(value).toFixed(2);
     result.innerText= "You can buy " +(bynValue/value).toFixed(2) + " " + abbreviation + " for " + bynValue +" BYN with  rate " + val1 + " for 1 ye on " + day+"/"+ month+"/"+yaer;
    } else {
      button.disabled = true;
    }
   })
  
 })
let option =[];
let selection = document.getElementById('selection');
let button = document.getElementById('button');
let byn = document.getElementById('byn');
let result = document.getElementById('result');
for (i=0; i<4; i++) {
  option[i] = document.createElement('option');
  option[i].innerText = i;
  selection.append(option[i]);
}











