const obj = {
    bar : function() {
        return () => this;
    }
};
console.log(obj.bar()());

//{bar: ƒ}