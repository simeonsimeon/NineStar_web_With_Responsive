let Show = document.getElementById("bright");
let click = document.getElementById("Click");
let head = document.getElementById("Head");
let Hero = document.getElementById("Hero");
let icon = document.querySelector(".icofont-navigation-menu");
 let isActive = false
 function show(){
   isActive = !isActive;
   if(isActive){
     Show.style.display = "block";
     Show.style.backgroundColor = "rgb(216, 216, 216)";
     document.body.classList.add("Bdy");
     icon.classList.replace("icofont-navigation-menu","icofont-close-line");
     Show.style.boxShadow = "20px 30px 10px -25px"
     Show.style.width = "90%";
     Show.style.left = "5%";
     Show.style.zIndex = "1000";
     head.classList.add("try");
     Show.classList.add("wh");

   }else{
    Show.style.display = "none";
    icon.classList.replace("icofont-close-line","icofont-navigation-menu");
    // hero.classList.remove("blur")
    document.body.classList.remove("Bdy");
   }
 }
 click.addEventListener("click",show);