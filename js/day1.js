// variable stores data


var title = "Mind Risers";
const address = "Putallisadak";
let email = "abc@gmail.com";

var course  = "MERN Stack and Web Development";
var price = 1500;
var discount = 10;
var total_amount = price - price*(10/100);

var header = document.getElementById('header');
var body = document.getElementById('body');
var footer = document.getElementById('footer');

header.innerHTML = title;
body.innerHTML = course;
footer.innerHTML = total_amount;

