let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");

cursor.style.backgroundColor = "yellow";

main.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

