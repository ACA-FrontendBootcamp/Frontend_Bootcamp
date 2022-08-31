const foo = function(){
    this.x = 5;     //(1) window.x =5      //(2) create empty obj{} and  add obj.x  = 5; 
    (function(){
        this.x = 3; //(1) window.x = 3     //(2) function is not top level, window.x = 3; 
    })();
    console.log(this.x)
};
const obj = {
    x:4,
    logger: function(){
        console.log(this.x);
    }
};

foo(); // 3
new foo(); //5
obj.logger(); //4
new obj.logger(); //undefined