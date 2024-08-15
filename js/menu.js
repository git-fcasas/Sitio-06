const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-navegacion");
// console.log(hamburger);
// console.log(menu);

//1er evento con const hamburger 
hamburger.addEventListener("click", () => { 
  // alert("click ");
  menu.classList.toggle("spread");  
});


//2do evento con const menu 
window.addEventListener("click", (e) =>{
  //console.log(e.target);  //e.target, me dice a que elemento le estoy dando click  
  if (menu.classList.contains("spread") && e.target !== menu && e.target !== hamburger) {  
    menu.classList.toggle("spread");  
  }
  
}); 




