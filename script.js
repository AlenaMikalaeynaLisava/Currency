let currencyId =[0, 298, 145, 292];
let marker=0;
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
  //let marker=0;
  function changeOption(){
    marker=1;
    let selectedOption = CurrencySelect.options[CurrencySelect.selectedIndex];
    for (i=0; i< data.length; i++){
      if(option[i].innerText ==selectedOption.text)
      {value = option[i].value;
        abbreviation = option[i].innerText;}
    }
    if(byn.value){
      button.removeAttribute('disabled'); 
    }
    if(abbreviation == "Select currency"){
      button.disabled = true;
    }
}
CurrencySelect.addEventListener("change", changeOption);

date = new Date(date);
let day = date.getDate();
let month =  date.getMonth();
let yaer = date.getFullYear();

byn.addEventListener('change',(event)=>{
  if(byn.value && marker==1){
    button.removeAttribute('disabled'); 
  } 
})
byn.addEventListener('change',(event)=>{
  if(!byn.value){
    button.disabled = true;
  } 
})

  button.addEventListener('click',(event)=>{
    if(byn.value && (abbreviation != "Select currency")){
      bynValue=byn.value;
      let val1= parseFloat(value).toFixed(2);
     result.innerText= "You can buy " +(bynValue/value).toFixed(2) + " " + abbreviation + " for " + bynValue +" BYN with  rate " + val1 + " for 1 ye on " + day+"/"+ month+"/"+yaer;
    }
   })
 })
let option =[];
let selection = document.getElementById('selection');
let button = document.getElementById('button');
button.disabled = true;
let byn = document.getElementById('byn');
let result = document.getElementById('result');
for (i=0; i<currencyId.length; i++) {
  option[i] = document.createElement('option');
  option[i].innerText = i;
  selection.append(option[i]);
}






















