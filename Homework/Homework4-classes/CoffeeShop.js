/* Exercise 2. CoffeeShop
Create a constructor CoffeeShop, which has three properties:
● name : a string (basically, of the shop)
● menu : an array of items (of object type), with each item containing the item (name of
the item), type (whether food or a drink) and price.
● orders : an empty array
and seven methods:
● addOrder: adds the name of the item to the end of the orders array if it exists on the
menu. Otherwise, return "This item is currently unavailable!"
 
● fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
● listOrders: returns the list of orders taken, otherwise, an empty array.
● dueAmount: returns the total amount due for the orders taken.
● cheapestItem: returns the name of the cheapest item on the menu.
● drinksOnly: returns only the item names of type drink from the menu.
● foodOnly: returns only the item names of type food from the menu.   */



 /****    I used  "console.log" instead of "return", so that the result is
 visible during the function  call.   ****/
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
                console.log("Add order!")
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
        for (let i = 0; i < this.orders.length; i++){
            sumPrice = sumPrice + this.orders[i].price;
        }
        console.log(sumPrice)
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

//console.log(coffeeShop1)
coffeeShop1.addOrder("bacon");
coffeeShop1.addOrder("coffee");
console.log(coffeeShop1)
coffeeShop1.listOrders()
coffeeShop1.fullfillOrder()

// coffeeShop1.fullfillOrder()
// coffeeShop1.listOrders()
// dueAmount().fullfillOrder()
coffeeShop1.dueAmount()
coffeeShop1.drinksOnly()
coffeeShop1.foodOnly()
coffeeShop1.cheapestItem()
//coffeeShop1.listOrders()
// coffeeShop1.fullfillOrder()
// coffeeShop1.fullfillOrder()
// coffeeShop1.listOrders()

