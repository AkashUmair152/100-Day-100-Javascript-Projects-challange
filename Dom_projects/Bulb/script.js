
let bulb = document.getElementById("bulb");


bulb.style.backgroundColor = "transparent"; // Initial state of the bulb is off
let bulbOn = false; // false means bulb is off, true means bulb is on

let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    if (bulbOn) {
        bulb.style.backgroundColor = "yellow";
        bulbOn = false;
        btn.innerHTML = "Turn Off";
    } else {
        bulb.style.backgroundColor = "transparent";
        bulbOn = true;
        btn.innerHTML = "Turn On";
        
    }
}
);