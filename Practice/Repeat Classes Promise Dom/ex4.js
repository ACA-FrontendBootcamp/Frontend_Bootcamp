// 2)  implement the same using Constructor function

class Customer {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    answerCall() {
        console.log(`phone with phoneNumber${this.phoneNumber} answered!`); 
    }

    static detectOperator (object) {
        const code = object.phoneNumber.slice(0,3)
        return operatorCodes[code];
    }
}

var operatorCodes = {
    '098' : 'viva',
    '095': 'uCom',
}

let a = new Customer("098i");
a.answerCall()



function Customer1(phoneNumber){
    this.phoneNumber = phoneNumber;
}

Customer1.prototype.answerCall = function(){
    console.log(`phone with phoneNumber${this.phoneNumber} answered!`); 
}
Customer1.detectOperator = function(object) {
    const code = object.phoneNumber.slice(0,3)
    return operatorCodes[code];
}

