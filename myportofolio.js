const sandwitch = document.getElementById("sandwitch");
const overlay = document.getElementById("overlay");
const back = document.getElementById("back");
sandwitch.addEventListener("click",()=>{
        overlay.style.width="100%";
})
back.addEventListener("click",()=>{
        overlay.style.width="0%";
})

// function showCase(id){
//         const sections = document.querySelectorAll("section");
//         sections.forEach(section =>{
//                 section.classList.remove("active");
//         })
//         document.getElementById(id).classList.add("active");    
// }
