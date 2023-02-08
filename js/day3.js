// nuber, Stirng, Bigint, Boolean, Null,Undefined,Array,Object,Date

var status = true;
var address = null;
console.log(status);
console.log(address);
console.log("hello");
// Array
var places = ["ktm","npk","pkr"];
console.log(places);
console.log(places[2]);


// object- key value pair
var item_detail = {
    item_title: "monitor",
    item_dimension:"19",
    item_price:2500,
    item_details: {
        company:"abc",
        brand:"nearw",
        color:"sdfsd"
    }
}

console.log(item_detail.item_details);

var date = new Date();
// var currentdate = {
//     year: date.getFullYear(),
//     month: date.getMonth(),
//     day: date.getDay()
// }
console.log(date);
console.log("hehhe");


// Pascal case:-  Address, NameOfCharacter, ApplicationDetail  (Class Name)
// Camel Case:-   address,nameOfCharacter,applicationDetail  (Function Name)
// Snake Case:-  address,name_of_character, application_detail (variable,key,attribute,object name)


// Function
// set of code, block of code which helps to reuse code and no redundancy
// must be called in order to execute its code


function sumOfTwoNumber(){
    var num1 = 10;
    var num2 = 20;
    sum = num1 + num2;
    console.log(sum);
}
sumOfTwoNumber();

// Builtin Function and User Defined FUnction
// Types of User Dfined FUnction:
// 1.without parameter and  without returntype
// 1.wit parameter and without returntype
// 1.without parameter and  with returntype
// 1. with parameter and with returntype

function dipeshWosti(){
    return("hello Dipesh")
}
console.log(dipeshWosti());

function product(num1,num2){
    var output = num1*num2;
    console.log(output);
}

product(12,4);

function areaOfCircle(radius, pi){
    var area = pi*radius*radius;
    return area;
}
console.log("Area of Circle: "+ areaOfCircle(12,3.14));
