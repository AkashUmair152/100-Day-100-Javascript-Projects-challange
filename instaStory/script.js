
let cluter = ""

let istatus =[
    {
        dp:"https://cdn.pixabay.com/photo/2025/02/02/17/21/floral-arrangement-9377225_1280.jpg",story:"https://cdn.pixabay.com/photo/2025/03/29/11/20/bee-9500879_1280.jpg"
    }
    ,{
        dp:"https://cdn.pixabay.com/photo/2023/04/24/16/51/bouquet-7948558_1280.jpg",story:"https://cdn.pixabay.com/photo/2025/04/23/01/35/bird-9551361_1280.jpg"
    }
    ,{
        dp:"https://cdn.pixabay.com/photo/2025/05/02/15/58/flower-girl-9574211_1280.jpg",story:"https://cdn.pixabay.com/photo/2023/08/24/04/07/birthday-8209747_1280.jpg"
    },
    {
        dp:"https://cdn.pixabay.com/photo/2025/04/22/06/54/elephant-9549133_1280.jpg",story:"https://cdn.pixabay.com/photo/2021/04/24/18/07/road-6204694_1280.jpg"
    }
    ,{
        dp:"https://cdn.pixabay.com/photo/2024/05/23/07/17/woman-8782450_1280.jpg",story:"https://cdn.pixabay.com/photo/2025/04/30/04/42/building-9568428_1280.jpg"
    }
    ,{
        dp:"https://cdn.pixabay.com/photo/2024/03/03/21/11/peach-blossoms-8611337_1280.jpg",story:"https://cdn.pixabay.com/photo/2025/04/20/08/44/purple-leaf-plum-9545165_1280.jpg"
    }
]

istatus.forEach((item, idx)=>{
    cluter += `<div id="story">
    <img id="${idx}" src="${item.dp}" alt="dp" class="dp">
    
    </div>`

})

document.getElementById("stories").innerHTML = cluter



document.querySelector("#stories").addEventListener("click", (e) => {
    const screen = document.querySelector("#f-screen");
    screen.style.display = "block";
    screen.style.backgroundImage = `url(${istatus[e.target.id].story})`;

    setTimeout(() => {
        screen.style.display = "none";  // ← this hides the screen again
        screen.style.backgroundImage = "none"; // optional: also clear background
    }, 2500);
});
