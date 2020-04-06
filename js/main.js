console.log("HELLO WORLD!");





    
    const menu = document.getElementById("MenuDisplay");
   const button = document.getElementById("hamMenu");
menu.addEventListener('click',toggleMenu);
   

   function toggleMenu() { 
         
    menu.classList.toggle("ShowMenu");
   // button.classList.toggle("fa fa-bars");
}