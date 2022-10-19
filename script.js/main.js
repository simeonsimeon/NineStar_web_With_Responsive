let Show = document.getElementById("bright");
 let isActive = false
 function show(){
   isActive = !isActive;
   if(isActive){
     Show.style.display = "block";
    
   }else{
    Show.style.display = "none";
   }
 }
 document.getElementById("Click").addEventListener("click",show);