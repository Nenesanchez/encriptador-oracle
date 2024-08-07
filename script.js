const btnEncriptar = document.querySelector(".btn_encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto_aviso");
const respuesta =document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta_contenedor");
const btnCopiar = document.querySelector(".btn_copiar");
const btnDesencriptar = document.querySelector(".btn_desencriptar")

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if(texto == ""){
        alert("Ingresa un Texto") 
    }

    else if(texto !== txt){
        alert("No debe tener Acentos y/o caracteres especiales");
    }

    else if(texto !== texto.toLowerCase()){
        alert("Solo Minúsculas")
    }

    else{
        texto =texto.replace(/e/g, "enter");
        texto =texto.replace(/i/g, "imes");
        texto =texto.replace(/a/g, "ai");
        texto =texto.replace(/o/g, "ober");
        texto =texto.replace(/u/g, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );

    if(texto == ""){
        alert("Ingresa un Texto") 
    }

    else if(texto !== txt){
        alert("No debe tener Acentos y/o caracteres especiales");
    }

    else if(texto !== texto.toLowerCase()){
        alert("Solo Minúsculas")
    }

    else{
        texto =texto.replace(/enter/g, "e");
        texto =texto.replace(/imes/g, "i");
        texto =texto.replace(/ai/g, "a");
        texto =texto.replace(/ober/g, "o");
        texto =texto.replace(/ufat/g, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
})