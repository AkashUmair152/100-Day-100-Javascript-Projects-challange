
let container = document.querySelector("#container");

let loveButton = document.querySelector("i");


container.addEventListener("dblclick", () => {
    loveButton.style.transform = "translate(-50%, -50%) scale(1.5)";
    loveButton.style.transition = "transform 1s ease-in-out";
    setTimeout(() => {
        loveButton.style.transform = "translate(-50%, -50%) scale(0)";
        loveButton.style.transition = "transform 0.8s ease-in-out";
    },2000);
});