class TV{
    constructor(brand, channel = 1){
    
        this.brand = brand;
        this.channel = channel;
        this.volume = 50;
        this.channelCount = 50;
    }
    increase(){
        if (this.volume < 100  ){
          this.volume =  this.volume + 1;
        } else {
        console.log("The max volume is 100")
        }
    }
    decrease(){
        if (this.volume > 0){
            this.volume =  this.volume - 1;
        } else {
            console.log("The min volume is 0")
        }
    }
    setChannel(channelNum){
        if (channelNum < this.channelCount)
        {
            this.channel = channelNum;
        }          
    }
    resetTv(){
        this.channel = new this.constructor().channel;
        this.volume = new this.constructor().volume;
    }
    status(){
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`
    }
}

let tv1 =  new TV("LG",50);

tv1.decrease();
tv1.increase();
console.log(tv1)
tv1.setChannel(55);
console.log(tv1)
tv1.setChannel(15);
console.log(tv1)
tv1.resetTv()
console.log(tv1)
console.log(tv1.status())



