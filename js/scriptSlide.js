/* --- ---- SLIDE ---- --- */



//window.load = slid(1);
var numImgSlide = 1;
var n = 1;
window.load = start(n);

function start(n) {
    var allBgs =4;
    botoes(n, allBgs);
    document.getElementById('slide').style.backgroundImage = "url('../img/serralheria/produtosServicos/"+n+".jpg')";
     setInterval(() =>{
        n++   
        if (n <= 4) {
            document.getElementById('slide').style.backgroundImage = "url('../img/serralheria/produtosServicos/"+n+".jpg')";
        //console.log(n)
        }else{
            n = 1
            //console.log("volto a ser 1")
            document.getElementById('slide').style.backgroundImage = "url('../img/serralheria/produtosServicos/"+n+".jpg')";
        }
        //console.log(n)
        botoes(n, allBgs);
        //console.log("-----")
    }, 5000)
    
}

function slid(n) {
    var allBgs =4;
    document.getElementById('slide').style.backgroundImage = "url('../img/serralheria/produtosServicos/"+n+".jpg')";
    botoes(n, allBgs);
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

