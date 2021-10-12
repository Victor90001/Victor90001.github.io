document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});
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
    if(!isNumeric(a1)){
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