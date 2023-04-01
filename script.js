var menuBtn = document.getElementById("menuBtn");
var sidebar = document.getElementById("sidebar");
var menu = document.getElementById("menu");

sidebar.style.right = "-250px";

menuBtn.onclick = function(){
    if(sidebar.style.right == "-250px"){
        sidebar.style.right = "0";
        menu.src = "./assets/close.png";
    }
    else{
        sidebar.style.right = "-250px";
        menu.src = "./assets/menu.png"
    }
}

function myFunction(){
    alert("Message Sent Successfully");
}

// All animations will take exactly 1500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1500,
	speedAsDuration: true
});