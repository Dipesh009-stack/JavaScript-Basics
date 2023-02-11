function clickEvent(){
    console.log("Click");
    var username = document.getElementById("username");
    username.style.display = "block";

}

function focusEvent(){
    var input_box = document.getElementById("uname");
    input_box.style.background = "red";
    input_box.style.color = "black";
}

function mouseOverEvent(){
    var btn = document.getElementById("submit");
    btn.innerHTML = "Show";
    btn.style.background = "white";
    btn.style.color = "black";
}

function loadEvent(){
    alert("page id loaded");
}

function keyPressedEvent(){
    var msg = document.getElementById("msg");
    msg.innerHTML = "someone is typing..";
}

function keyReleasedEvent(){
    var msg = document.getElementById("msg");
    msg.innerHTML = ""
}