"use strict";
window.onload = function () {

    let str = sum('test', 'Smith', 4, 4, 2, 1);
    document.querySelector('.res').innerHTML = str;

    let nz = (x, y) => {
        if (y === 0){
            return null;
        }
        return x/y;
    };

    let t1 = new MyTimer(100);
    t1.tick();
    t1.run();
    
    let items = document.querySelectorAll('.items .item');

    for (let item of items){

        item.onclick = function(e) {
            this.classList.toggle('item-active');            
        }
    }
}

function sum(name, lastname, ...marks){

    let sum = 0;

    for (const i of marks) {
        sum += i;
    }
    let avg = (sum/marks.length).toFixed(2);
    let res = `<div><strong>HELLO: ${avg} </strong></div>`

    return res;
}



class MyTimer{
    constructor(time = 60){
        this.time = time;
    }

    tick() { 
        this.time--;
     }

    run(){
         setInterval(() => {
             this.tick();
           }, 1000);
     }
}

class ConsoleTimer extends MyTimer{
    tick() {
        super.tick();
        console.log(this.time);
    }
}