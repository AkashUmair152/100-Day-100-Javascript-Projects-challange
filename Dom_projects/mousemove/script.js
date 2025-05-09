
let elem = document.querySelectorAll(".elem");

elem.forEach((val) => {

    console.log(val.childNodes[3])
    val.addEventListener("mousemove", () => {
    val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave", () => {
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener("mousemove", (e) => {
        val.childNodes[3].style.left = e.x + "px";  
        val.childNodes[3].style.top = e.y + "px";
    })
   
})