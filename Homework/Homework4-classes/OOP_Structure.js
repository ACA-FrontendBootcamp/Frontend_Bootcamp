class City{
    constructor(){     
    }
}


class Building extends City{
constructor(){
    super()
}   
}

class Hospital extends Building{
    constructor(){
        super()
       
    } 
}

class PoliceDepartment extends Building{
    constructor(){
        super()  
    } 
}


class Car {
    constructor(){
    }   
}

class PoliceCar extends Car{
    constructor(){
        super()
    } 
    model = "NYPD";
}

class AmbulanceCar extends Car{
    constructor(){
        super()
    } 
    model = "ODEON VOLKSWAGEN"
}

const city1 = new City();
const policecar1 = new PoliceCar()
const ambulancecar1 = new AmbulanceCar()
const ambulancecar2 = new AmbulanceCar()


const nairiHospital = new Hospital();
const erebuniHospital = new Hospital();
const centralPoliceDepartment = new PoliceDepartment()
city1.buildings = [nairiHospital, erebuniHospital,centralPoliceDepartment]
centralPoliceDepartment.cars = [policecar1]
nairiHospital.cars = [ambulancecar1]
erebuniHospital.cars= [ambulancecar2]
city1.cars = [...centralPoliceDepartment.cars,...nairiHospital.cars, ... erebuniHospital.cars]

    
console.log(city1.cars)
