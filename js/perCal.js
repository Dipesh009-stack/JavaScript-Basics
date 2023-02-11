function percentage1(){
    var percent = document.getElementById("val1").value;

    var number = document.getElementById("val2").value;

    document.getElementById("val3").value = (percent/100)*number; 

}

var a=1;
var b=2;
console.log(a+b)

function percentage2(){
    var english1 =document.getElementById("english").value;
    var math1 = document.getElementById("math").value;
    var nepali1 = document.getElementById("nepali").value;
    var science1 = document.getElementById("science").value;
    var social1 = document.getElementById("social").value;
    var health1 = document.getElementById("health").value;

    var percentage = english1 + math1 + nepali1 + science1 + social1 + health1;
    console.log(english1 + math1 + nepali1 + science1 + social1 + health1);
    document.getElementById("result").value = percentage;
}


/***
 * for loop 
 * 2.for in
 * 3.
 */