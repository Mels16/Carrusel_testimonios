let slider = document.querySelector(".slider-contendor");
let sliderind = document.querySelectorAll(".slider-test")
let contador = 1;
let tamañowith = sliderind[0].clientwith;
let intervalo = 3000;

setInterval(function tiempo(){
    slides();
}),intervalo;

function slides(){
    slider.style.transform = "translate("+(- tamañowith * contador) + "px)"; 
    slider.style.transition = "trasnform 1s"; 
    contador++;

    if (contador ===sliderind.length) {
        contador = 0;
        setTimeout(function(){
            slider.style.transform = "translate (0px)"; 
            slider.style.transition = "trasnform 0s"; 
        },intervalo)
    }
}
