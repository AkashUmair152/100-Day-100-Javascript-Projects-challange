
let istatus = document.querySelector("h5");
let addFriend = document.querySelector("#add");
let btn = document.querySelector("button");

addFriend.addEventListener("click", function () {
  if (istatus.innerHTML == "Stranger") {
    istatus.innerHTML = "Friends with You";
    istatus.style.color = "green";
    btn.innerHTML = "Unfriend";
    btn.style.backgroundColor = "red";
    
  } 
    else if (istatus.innerHTML == "Friends with You") {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "black";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "blue";
    }


});
