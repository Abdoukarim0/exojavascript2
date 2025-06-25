//creation de randomcolor
function getRandomColor() {
      const lettres = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
    
        color += lettres[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    //gestion de l'evenement 

document.addEventListener("DOMContentLoaded", function() {

    //recuperation des ID color-box etchange-color-box

let  colorbox = document.getElementById("color-box");
let changecolorbtn = document.getElementById("change-color-btn");


 //ecoute et gestion de l'evenement "click"
    

changecolorbtn.addEventListener('click', function(){
    
    let newcolor= getRandomColor();

    colorbox.style.backgroundColor = newcolor;});

});
    