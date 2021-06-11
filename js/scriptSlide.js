/* --- ---- SLIDE ---- --- */



//window.load = slid(1);
var numImgSlide = 1;
var n = 1;
var img =""
window.load = start(n);

function start(n) {
    var allBgs =4;
    botoes(n, allBgs);
     setInterval(() =>{
        img  = document.getElementById("idImgSlide"+n+"");
        img.classList.remove("selectImgSlide")
        n++
        if (n <= 4) {
            img  = document.getElementById("idImgSlide"+n+"");
            img.classList.add("selectImgSlide")
        //console.log(img)
        }else{
            n = 1
            img  = document.getElementById("idImgSlide"+n+"");
            img.classList.add("selectImgSlide")
        }
        //console.log(img)
        botoes(n, allBgs);
        //console.log("-----")
    }, 5000)
    
}

function slid(n) {
    var allBgs =4;
    document.getElementById('slide').style.backgroundImage = "url('img/serralheria/produtosServicos/"+n+".jpg')";
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

