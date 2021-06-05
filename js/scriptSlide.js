/* --- ---- SLIDE ---- --- */

window.load = slid(1);

var numImgSlide = 1;

function slid(n) {
    var allBgs =4;
    document.getElementById('slide').style.backgroundImage = "url('../img/serralheria/produtosServicos/"+n+".jpg')";
    botoes(n, allBgs);
}

function anterior() {
    if (numImgSlide > 1) {
        numImgSlide--;
        slid(numImgSlide);
        botoes(n, allBgs);
        
    }
    
}

function proximo() {
    if (numImgSlide <4) {
        numImgSlide++;
        slid(numImgSlide);
        
    }
    
}

function botoes(n, m) {
    document.getElementById('botoes').innerHTML = "";
    for(a=1; a <= m; a++){
        if(a==n){
            document.getElementById('botoes').innerHTML += "<li class='selected', onclick='slid("+a+")'></li>";
        }else{
            document.getElementById('botoes').innerHTML += "<li onclick='slid("+a+")'></li>";
        }

    }
    
}

