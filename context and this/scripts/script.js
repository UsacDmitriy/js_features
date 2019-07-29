window.onload = function(){

    let items = document.querySelectorAll('.items .item');
 /*    for (let i = 0; i < items.length; i++){
        items[i].onclick = activeItem;
    }  */
    
    setInterval(function(){
        let rand = mtRand(0,items.length - 1);
        activeItem.call(items[rand]);
    }, 500); 

    /*     let timer = new Timer(60, item);

    setInterval(function(){
        timer.tick();
    } , 1000); */

}

function activeItem(){
    this.classList.toggle('item-active');
}


 function Timer(time, elem){

    this.time = time;
    this.elem = elem;

    this.tick = function(){
        this.time--;
        this.elem.innerHTML = this.time;
    }
 }

 function mtRand(min,max){
     return Math.floor(Math.random()*(max-min + 1));
 }