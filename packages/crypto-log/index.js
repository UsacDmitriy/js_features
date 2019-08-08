module.exports = function () { 

 }

function Loger() {
    let CM = require('crypt-maker');
    let crypt = new CM({key: 'default'});
    let fs = require('fs');

    this.setKey = function(key){
        crypt = new CM({key:key});
    }

    this.log =function (msg) { 
        let res = crypt.encrypt(msg);
        fs.writeFile('log.txt', (new Date()) + '' + res, (err) => {
            if (err){
                throw err;
            }
        } );
     }
  }

