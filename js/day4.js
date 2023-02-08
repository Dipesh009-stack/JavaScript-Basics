// Control Statement-Looping (if/else)
//  If Statement
// If else Statement
// If else if Statement
// Switch Statement
// Nested If


// If Statement
// Condition must be true
var num1 = 30;
var num2 = 0;
if (num2>0){
    console.log("Division: ",num1/num2);
}
else{
     console.log("Infinity");
}

if ((num2>0 ) && (num2<num1)){
    console.log("Division: ",num1/num2);
}

// If else Statement
var username = "mind";
var password = "1313";
if (username === "mind" && password === "1313"){
    console.log("Login Success");
}
else{
    console.log("Invalid username or password");
}

var books = ['java','javascript','python','html']
if(books[1]=="javascript"){
    console.log("array item matched");
}
else{
    console.log("nf");
}

// if else if statement
var item1 = "ram";
var item2 = "shyam";

if (item1=="dcd"){
    console.log("not matched")
}
else if(item1 == "sdsd"){
    console.log("not matched");
}
else{
    console.log("matched")
}


var date = new Date();
day = date.getDay();
if(day === 0){
    day = "Sunday";
}
else if (day ===1 ){
    console.log("Monday");
}
else if (day ===2 ){
    console.log("Tuesday");
}
else if (day ===3 ){
    day = "Wednesday";
}
else if (day ===4 ){
    console.log("Thursday");
}
else if (day ===5 ){
    console.log("Friday");
}
else {
    console.log("Saturday");
}
document.getElementById("demo").innerHTML = "Today is " +day;




// Switch Statement

function getPosition(obtained_marks){
    switch(obtained_marks){
        case obtained_marks <0 || obtained_marks > 100:
            console.log("Marks must be in between 0 to 100");
            break;
        
        
    }
}

getPosition(100);  

function checkCredential(user,pass){
    if (user == username ){
        if(pass= password){
            console.log("Successful Login");
        }
        else{
            console.log("Invalid username or password");
        }
    }
}


