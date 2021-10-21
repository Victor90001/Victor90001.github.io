//Задание 5
function isInt(a){
  return /^\d+$/.test(a);
}
function isNumeric(a){
  if(typeof a=="number"){
    return !isNaN(a) && !isNaN(parseFloat(a));
  }
  return false;
}
function summa() {
  let price = document.getElementsByName("price");
  let colvo = document.getElementsByName("amount");
  let sum= parseFloat(price[0].value) * parseFloat(colvo[0].value);
  let a1= parseFloat(price[0].value),a2=parseFloat(colvo[0].value);
  if(!isNumeric(a1) || a1<=0){
    alert("Укажите цену правильно");
    return false;
  }
  if(!isInt(a2)){
    alert("Укажите кол-во товаров правильно");
    return false;
  }
  document.getElementById("result").innerHTML = parseFloat(price[0].value) * parseFloat(colvo[0].value);
  if (sum%10==1 && sum%100!=11)
    document.getElementById("result").innerHTML = "Сумма: "+sum+" рубль";
  else
    if(sum%10<5 && sum%10!=0 && (sum%100<10 || sum%100>20))
      document.getElementById("result").innerHTML = "Сумма: "+sum+" рубля";
    else document.getElementById("result").innerHTML = "Сумма: "+sum+" рублей";
  return false;
}

//Задание 6
function getPrices() {
  return {
    custChoise: [41, 120,500],
    Opt: {
      option1: 10,
      option2: 0,
      option: 5,
    },
    checkProps: {
      Prop1: 1200,
      Prop2: 300,
      Prop3: 100,
    }
  };
}

function updatePrice(){
  let amount=document.getElementsByName("amount");
  let sel=document.getElementsByName("custChoice");
  let s=sel[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex=parseInt(s.value)-1;
  if (priceIndex >= 0) {
    price = prices.custChoise[priceIndex];
  }
  //
  let radioHide1=document.getElementById("radioOptions1");
  radioHide1.style.display = (s.value == "2" ? "block" : "none");
  //no radio, no checkbox
  if(s.value=="1"){
    if(isInt(amount[0].value)){
      price=parseInt(amount[0].value)*prices.custChoise[0];
      console.log(isInt(amount[0].value),parseInt(amount[0].value),prices.custChoise[0],price);
    }
  }

  //only radio
  if(s.value=="2"){
    let radios = document.getElementsByName("Opt");
    price=parseInt(amount[0].value)*prices.custChoise[1];
    radios.forEach(function(radio) {
      if (radio.checked) {
        let optionPrice = prices.Opt[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
  }

  //only checkbox
  
  let formHide = document.getElementById("calcform");
  formHide.style.visibility=(s.value=="3"?"hidden":"");
  let checkHide = document.getElementById("checkboxOptions1");
  checkHide.style.display = (s.value == "3" ? "block" : "none");

  if(s.value=="3"){
    let checkboxes = document.querySelectorAll("#checkboxOptions1 input");
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        let propPrice = prices.checkProps[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    });
  }

  //
  let prodPrice = document.getElementById("result");
  prodPrice.innerHTML = price + " рублей";
}

window.addEventListener('DOMContentLoaded', function (event) {
  //
  let input=document.querySelector("#amount_input");
  let radioH1 = document.getElementById("radioOptions1");
  let checkH = document.getElementById("checkboxOptions1");
  radioH1.style.display = "none";
  checkH.style.display = "none";
  
  // Находим select по имени в DOM.
  let s = document.getElementsByName("custChoice");
  let select = s[0];
  // Назначаем обработчик на изменение select.
  input.addEventListener("input",function(event){
    let target = event.target;
    console.log(target.value);
    updatePrice(); 
  });

  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });
  
  // Назначаем обработчик радиокнопок.  
  let radios = document.getElementsByName("Opt");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });

  // Назначаем обработчик радиокнопок.  
  let checkboxes = document.querySelectorAll("#checkboxOptions1 input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });
  updatePrice();
});