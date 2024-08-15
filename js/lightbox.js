const imagenes = document.querySelectorAll(".img-galeria"); //Cada una de las seis imágenes 
const imagenesLight = document.querySelector(".agregar-imagen"); //Imagen que aparecerá en la caja gris
const contenedorLight = document.querySelector(".imagen-light"); //Caja gris
const hamburger1 = document.querySelector(".hamburger"); 

// console.log(imagenes); 
// console.log(imagenesLight);  
// console.log(contenedorLight); 

imagenes.forEach (imagen => {//forEach recorre los elementos internos de un objeto o nodelist, a esos elementos los bauticé como imagen  
  imagen.addEventListener("click", () => { 
    //alert("auch, me dolio ");
    //console.log(imagen.getAttribute("src"));  //Cuando se le dé click a algún elemento de la nodelist me devolverá su atributo src   
    //imagen.getAttribute("src");               //yo puedo manipular el código para que en vez del src me mande cualquier otro atributo
    aparecerImagen(imagen.getAttribute("src")); //Esta función recibe como parámetro esto: '(imagen.getAttribute("src")', o sea él
                                                //src de la imagen a la que yo le doy click
                                                //Al ejecutar esta función ya también remplazo el src basal de imagenesLight por el src
                                                //de la imagen a la que yo le di click
  });                         
}); 

contenedorLight.addEventListener("click", (e) => {  //ESTE CIERRA EL contenedorLight .imagen-light        
  //console.log(e.target);    
  if (e.target !== imagenesLight) {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
    hamburger1.style.opacity = "1";      
  }  
});

//ESTA FUNCIÓN ABRE el contenedorLight(caja gris) que es el elemento html que cuenta con la clase .imagen-light  
const aparecerImagen = (imagen) => {  //Aquí declaro la función  
  imagenesLight.src = imagen;        //Remplazar el src basal de imagenesLight por el src de la imagen a la que le di click   
  //console.log(imagenesLight.src);  //en el que se le dio click 
  contenedorLight.classList.toggle("show"); //La clase show es la que hace que aparezca la caja gris  
  imagenesLight.classList.toggle("showImage"); //Con esta línea le doy un scale de 1 para que aparezca la imagen    
  hamburger1.style.opacity = "0";              //La clase showImage es la que hace que aparezca la imagen sobre la caja gris 
}  



