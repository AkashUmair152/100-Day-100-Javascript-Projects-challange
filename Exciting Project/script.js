let center = document.querySelector('#center');

let throttle = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = Date.now(); // Corrected this line
        if (now - prev > delay) {
            prev = now;
            func(...args);
        }
    };
};

center.addEventListener("mousemove", throttle((dets) => {
    
    let div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left= dets.clientX +"px";
    div.style.top =dets.clientY +"px";
    document.body.appendChild(div);

    let img = document.createElement("img");
    img.setAttribute('src', 'https://cdn.pixabay.com/photo/2023/08/07/14/52/sunflowers-8175248_1280.jpg');

    div.appendChild(img);

    gsap.to(img, {
        y: "0",
        ease: Power3,
        duration: 0.2

    })
    gsap.to(img, {
        y: "100%",
        ease: Power3,
        delay: .5,
        duration:.2,

       

    })



    setTimeout(function(){
        div.remove();
    }, 2000)


}, 400));
