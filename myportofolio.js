const sandwitch = document.getElementById("sandwitch");
const overlay = document.getElementById("overlay");
const back = document.getElementById("back");
sandwitch.addEventListener("click",()=>{
        overlay.style.width="100%";
})
back.addEventListener("click",()=>{
        overlay.style.width="0%";
})

