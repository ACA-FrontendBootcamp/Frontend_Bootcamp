function Timer(time){
    let resTime = time;
    this.start = function(){
        clearInterval(this.startTimer)
        this.startTimer = setInterval(function(){
            if (time > 0){
                time--;
                const hour = Math.floor(time / 3600) % 24;
                const min = Math.floor(time / 60) % 60;
                const sec = Math.floor(time % 60);
                console.log( `${hour} hours : ${min} mins : ${sec} secs`)}
            },1000)
        }

        this.pause = function (){
            clearInterval(this.startTimer)
        }
        
        this.stop = function(){
            clearInterval(this.startTimer)
            time = 0;
            console.log( `0 hours : 0 mins : 0 secs`)
        }
        
        this.restart = function(){
            time = resTime;
            this.start();
        }
    }




let timer1 = new Timer(100) // seconds
let timer2 = new Timer(200)
timer1.start();
timer2.start()