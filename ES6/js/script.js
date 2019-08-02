"use strict";

window.onload = function () {

/*     const settings  = {
        a:30,
        b:40,
        c:'ask'
    }

    settings.c = 10;

    console.log(settings);


function timer(t = 5){
    console.log(t);
}

timer(100);
timer();
timer(60); */


function sum(name, ...marks){
    console.log(arguments);
    console.log(marks);
    for (const i in marks) {
        console.log(i);
    }
    for (const i of arguments) {
        console.log(i);
    }
}

sum('test', 4, 4, 2, 1);

}