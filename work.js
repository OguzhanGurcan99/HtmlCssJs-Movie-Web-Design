function largeWidth(){
    let button_1 = document.getElementById("button_1")
    button_1.style.width = (button_1.offsetWidth) + 80 + "px";
    button_1.style.backgroundColor = "green"; 
}
function largeHeight(){
    let button_2 = document.getElementById("button_2")
    button_2.style.height = (button_2.offsetHeight) + 80 + "px";
    button_2.style.backgroundColor = "blue"; 
}

function displayName(){
    let button_4 = document.getElementById("button_4");
    button_4.innerHTML = "Mouse on"
}

function oldButton(){
    let button_4 = document.getElementById("button_4");
    button_4.innerHTML = "Mouse out";
}
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
