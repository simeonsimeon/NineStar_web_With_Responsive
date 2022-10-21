let Show = document.getElementById("bright");
let click = document.getElementById("Click");
let head = document.getElementById("Head");
let Hero = document.getElementById("Hero")
 let isActive = false
 function show(){
   isActive = !isActive;
   if(isActive){
     Show.style.display = "block";
    //  if(click.classList.contains("icofont-navigation-menu")){
    //   click.classList.contains.replace("icofont-navigation-menu,icofont-simple-down");
    //  }
    //  document.body.classList.add("Bdy");
    //  head.classList.add("blur");
    //  hero.classList.add("blur");
    
   }else{
    Show.style.display = "none";
    // hero.classList.remove("blur")
    // document.body.classList.remove("Bdy");
   }
 }
 click.addEventListener("click",show);