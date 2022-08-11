class CoffeeShop{
    constructor({name, menu, orders=[]}){
        this.name = name;
        this.menu = menu;
        this.orders = orders;
    }
    
    addOrder(name){
        for (let i = 0; i< this.menu.length; i++){
            if (this.menu[i].name == name){
                this.orders.push(this.menu[i]);
                console.log("Add order!");
                break;
            } 
            else if (this.menu[i].name != name && i == this.menu.length-1)
            {
                console.log("This item is currently unavailable!")
            }
        }
    }

    fullfillOrder(){
        if (this.orders.length !=0) {
            console.log(`The ${this.orders[0].name} is ready!`)
            this.orders.shift();
        }
        else if(this.orders.length ==0){
            console.log("All orders have been fulfilled!")
        }
    }

    listOrders(){
        let list=[];
        for (let i = 0; i<this.orders.length;i++){
            list.push(this.orders[i].name);
        }
        console.log(list)
    }

    dueAmount(){
        let sumPrice =0;
        // for (let i = 0; i < this.orders.length; i++){
        //     sumPrice = sumPrice + this.orders[i].price;
        // }
        sumPrice =  this.orders.reduce((current, item) => item.price + current, sumPrice);
        console.log(sumPrice);

    }

    cheapestItem(){
        let min = this.menu[0].price;
        let index  = 0;
        for (let i = 0; i<this.menu.length; i++){
            if (this.menu[i].price < min){
                min = this.menu[i].price;
                index = i;
            }
         }
         console.log(this.menu[index].name)
        }

    drinksOnly(){
        let drinks=[];
        drinks = (this.menu.filter((item) => item.type == "drink")).map((item) => item = item.name);
        console.log(drinks)
    }
    foodOnly(){
        let food=[];
        food = (this.menu.filter((item) => item.type == "food")).map((item) => item = item.name);
        console.log(food)
    }
}

let coffeeShop1 = new CoffeeShop({
    name : "Shop",
    menu : [{
            name: "coffee",
            type: "drink",
            price: 5,
        },
        {
            name: "tea",
            type: "drink",
            price: 3,
        },
        {
            name: "hot chocolate",
            type: "drink",
            price: 4,
        },
        {
            name: "cinnamon roll",
            type: "food",
            price: 6,
        },
        {
            name: "tuna sandwich",
            type: "food",
            price: 7,
        },
        {
            name: "bacon",
            type: "food",
            price: 8,
        },

    ],
    orders: [],
})


coffeeShop1.addOrder("bacon");
coffeeShop1.addOrder("coffee");
coffeeShop1.listOrders()
coffeeShop1.dueAmount()
coffeeShop1.fullfillOrder()

coffeeShop1.foodOnly()
coffeeShop1.drinksOnly()
coffeeShop1.cheapestItem()



