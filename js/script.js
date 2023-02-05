console.log("External JS file");
// change javascript to html content

var btn = document.getElementById('btn');

// to set content inside html tag

btn.innerHTML = "Custom Button";
btn.style.color = "rgb(255,102,105)";
btn.style.font = "25px";
btn.style.padding = "12px";

// to dislay content or tag

var text = document.getElementById('text');
text.style.display = "block";

// to change adjusting content

var about = document.getElementById('about');
about.innerHTML = "This is basically a JavaScript class powered by mindrisers.";
