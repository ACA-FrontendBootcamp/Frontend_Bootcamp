class  InfoWebsite{
    constructor(){
        if (this.constructor == InfoWebsite){
            throw new Error("You can’t create an instance with that class, you can only extend from it.")
        }
    }
    
    requirements(){
        console.log("Internet and computer/phone access.")
    }
    
    audience(){
        console.log("International")
    }
}


class NewsWebsite extends InfoWebsite {
    targetAge(){
        console.log("18-65")
    }
}

class EntertainmentWebsite extends InfoWebsite{
    targetAge(){
        console.log("14-40")
    }
}

class SportWebsite extends InfoWebsite{
    targetAge(){
        console.log("16-60")
    }
}

let infowebsite1  = new InfoWebsite()
// let infowebsite2 =  new NewsWebsite ()
// console.log(infowebsite2)
