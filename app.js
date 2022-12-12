var tamFont = 16; 

function mudarFamiliaFonte(id){
    if(id == 1 ){
        document.getElementsByTagName("body")[0].style.fontFamily = 'Arial';
        document.getElementById('config_font').innerHTML = 'Arial';
    }
    if(id == 2 ){
        document.getElementsByTagName("body")[0].style.fontFamily = "Comic Sans MS", "Comic Sans", cursive;
        document.getElementById('config_font').innerHTML = "Comic Sans";
    }
    if(id == 3 ){
        document.getElementsByTagName("body")[0].style.fontFamily = 'Dyslexia';
        document.getElementById('config_font').innerHTML = 'Dyslexia';
    }
    if(id == 4 ){
        document.getElementsByTagName("body")[0].style.fontFamily = 'Calibri';
        document.getElementById('config_font').innerHTML = 'Calibri';
    }
    if(id == 5 ){
        document.getElementsByTagName("body")[0].style.fontFamily = 'Verdana';
        document.getElementById('config_font').innerHTML = 'Verdana';
    }
}

function mudarTamFonte(id){
    if(id == 'maior' ){
        tamFont ++;
        document.getElementsByTagName("body")[0].style.fontSize = tamFont;
        document.getElementById("insere_fonte").value = tamFont;
    }

    if(id == 'menor' ){
        tamFont --;
        document.getElementsByTagName("body")[0].style.fontSize = tamFont;
        document.getElementById("insere_fonte").value = tamFont;
    }
    
    document.getElementById('config_font_size').innerHTML = tamFont+'px';

}

function mudarTamFontePers(){
        tamFont = document.getElementById("insere_fonte").value;
        document.getElementById("insere_fonte").value = tamFont;
        document.getElementsByTagName("body")[0].style.fontSize = tamFont;
        
    document.getElementById('config_font_size').innerHTML = tamFont+'px';
}

function mudarEspLinhas(){
    document.getElementsByTagName("body")[0].style.lineHeight = document.getElementsByName("entre_linhas")[0].value;
    document.getElementById("label_entre_linhas").innerHTML = document.getElementsByName("entre_linhas")[0].value;    
    document.getElementById('config_esp_linhas').innerHTML = document.getElementsByName("entre_linhas")[0].value; 
        
}

function mudarEspCaracter(){
    document.getElementsByTagName("body")[0].style.letterSpacing = document.getElementsByName("entre_carac")[0].value;
    document.getElementById("label_entre_carac").innerHTML = document.getElementsByName("entre_carac")[0].value; 
    document.getElementById('config_esp_carac').innerHTML = document.getElementsByName("entre_carac")[0].value; 
}

function mudarEspPalavras(){
    document.getElementsByTagName("body")[0].style.wordSpacing = document.getElementsByName("entre_pala")[0].value;
    document.getElementById("label_entre_pala").innerHTML = document.getElementsByName("entre_pala")[0].value; 
    document.getElementById('config_esp_palavras').innerHTML = document.getElementsByName("entre_pala")[0].value; 
}