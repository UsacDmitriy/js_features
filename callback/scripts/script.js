window.onload = function(){

    let items = document.querySelectorAll('.items .item');

    for (let i = 0; i < items.length; i++) {
        
        items[i].addEventListener('click', function () { 
            fade(this, 1000, function () { 
                this.style.display = 'none';
             });
            console.log(this);
         });        
    }
}

function fade(elem, t, f){
    let fps = 50,
        time = t || 1000,
        steps = time/fps,
        op = 1,
        d0 = op/steps;

    let callback = f || function () {};

    let timer = setInterval(() => {
        op -= d0;
        elem.style.opacity = op;
        steps--;
        if (steps === 0){
            clearInterval(timer);
            callback.call(elem);
        }

    }, (1000 / fps));
}