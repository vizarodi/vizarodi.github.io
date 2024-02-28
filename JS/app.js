const siButton = document.getElementById("SI");
const noButton = document.getElementById("NO");
const imagen = document.getElementById("banner");
const texto = document.getElementById("texto")

//eventos
siButton.addEventListener("click", dijoSI);
noButton.addEventListener("click", cambiarSize);

function dijoSI(){
    imagen.src="https://media.tenor.com/0tvqT26523MAAAAj/cat-love.gif"
    siButton.style.backgroundColor = "black"
    noButton.style.backgroundColor = "black"
    siButton.textContent = ""
    noButton.textContent = ""
    texto.textContent = "YUPII TE AMOOO <333"
}

function cambiarSize(){
    if(siButton.style.width < "100px" ){
        siButton.style.width = "100px"
        siButton.style.height = "100px"

        noButton.style.width = "80px"
        noButton.style.height = "80px"
    }
    else if(siButton.style.width < "140px"){
        siButton.style.width = "140px"
        siButton.style.height = "140px"

        noButton.style.width = "70px"
        noButton.style.height = "70px"
    }else if(siButton.style.width < "180px"){
        siButton.style.width = "180px"
        siButton.style.height = "180px"

        noButton.style.width = "60px"
        noButton.style.height = "60px"
    }else if(siButton.style.width < "220px"){
        siButton.style.width = "220px"
        siButton.style.height = "220px"

        noButton.style.width = "50px"
        noButton.style.height = "50px"
    }else if(siButton.style.width < "260px"){
        siButton.style.width = "260px"
        siButton.style.height = "260px"
        
        noButton.style.width = "40px"
        noButton.style.height = "40px"
    }else if(siButton.style.width < "300px"){
        siButton.style.width = "300px"
        siButton.style.height = "300px"

        noButton.style.width = "30px"
        noButton.style.height = "30px"
    }else if(siButton.style.width < "340px"){
        siButton.style.width = "340px"
        siButton.style.height = "340px"

        noButton.style.width = "20px"
        noButton.style.height = "20px"
    }else if(siButton.style.width < "380px"){
        siButton.style.width = "380px"
        siButton.style.height = "380px"

        noButton.style.width = "10px"
        noButton.style.height = "10px"
    }else if(siButton.style.width < "420px"){
        siButton.style.width = "420px"
        siButton.style.height = "420px"

        noButton.style.width = "5px"
        noButton.style.height = "5px"
    }else if(siButton.style.width < "460px"){
        siButton.style.width = "460px"
        siButton.style.height = "460px"

        noButton.style.width = "0px"
        noButton.style.height = "0px"
    }
}