/* --- ---- section carousel_containers ---- --- */
document.querySelector(".items").addEventListener("wheel", event =>{
    if(event.deltaY > 0){
        event.target.scrollBy(400, 0)

    }else{
        event.target.scrollBy(-300, 0)
    }
    })


/*
* Nav buttons proximo
*/
document.querySelector('button#prox').addEventListener('click', function(event){
    document.querySelector('.items').scrollBy(300, 0);
  });
  
  document.querySelector('button#ant').addEventListener('click', function(event){
    document.querySelector('.items').scrollBy(-300, 0);
  });
  /*
  * Nav buttons end
  */