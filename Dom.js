import { searchPosts } from "./SearchPosts.js";

document.addEventListener("DOMContentLoaded", (e) => {
    searchPosts(".search", ".card-container");

    $("#myForm").submit(function (e) {
        //Prevenimos el comportamiento de submit 
        e.preventDefault();
        //Obtenemos hijos del formulario
        let hijos = $(e.target).children();
        //Primer input type="text"
        console.log(hijos[0].value);
        //Primer input type="number"
        console.log(hijos[1].value);
    });
    
});