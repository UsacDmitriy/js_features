window.onload = function () { 
    class Animal{
        constructor(){
            this.age = 10;
        }
    
        eat(){
        }
    }
    class Cat extends Animal{
        constructor(){
            super();
            this.mustache = true;
        }
    
        getVoice(){
            return 'myaumayu'    
        }
    }

    class Dog extends Animal{
        constructor(){
            super();
            this.tail = true;
        }
    
        getVoice(){
            return 'gafgaf'    
        }
    }
    
    class Tiger extends Cat {
        constructor(){
            super();
            this.color = 'ginger';
        }
    }

    let cat = new Cat();
    let dog = new Dog();
    let tiger = new Tiger();

    console.log(cat);
    console.log(dog);
    console.log(tiger);

 }
