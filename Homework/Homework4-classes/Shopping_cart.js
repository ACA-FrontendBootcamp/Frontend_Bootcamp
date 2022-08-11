class Product{
    constructor(name, type, price){
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

class ShoppingCart{
    constructor(products = []){
        this.products = products;
    }
    addProduct(product){
        this.products.push(product)
    };
    removeProduct(product){
        this.products = this.products.filter((item) => product.name!=item.name)
    }
    totalPrice(){
        let priceSum = 0;
        this.count = []; 
       
        priceSum = this.products.reduce((current, item ) =>  item.price + current ,priceSum)

        if (this.products.length >= 5)
            {
                priceSum = priceSum - priceSum*10/100;
            }

//create counts array according to indexes
                for(let k = 0; k< this.products.length; k++)
                {
                    this.count[k] = 0;
                }

                for(let i = 0; i< this.products.length; i++)
                {  
                    for (let j = 0; j<this.products.length; j++)
                    {
                    
                        if (this.products[j].name ==  this.products[i].name ) 
                        {
                                this.count[j]++;
                                break;
                        }
                    }
                }


                for(let index= 0; index < this.count.length;index++)
                {
                    if (this.count[index] >3)
                    {
                        let sellNum = Math.floor(this.count[index] / 4);
                        console.log("sellNum", sellNum)
                        priceSum = priceSum - sellNum * this.products[index].price;
                    }
                }
                return priceSum;
            }
        }


let product1 = new Product("tea", "drink", 2)
let product2 = new Product("hotdog", "food", 4)
let product3 = new Product("pencil", "stationery", 4)

let shoppingCart1 = new ShoppingCart()

shoppingCart1.addProduct(product3);
shoppingCart1.addProduct(product1);
shoppingCart1.addProduct(product1);
shoppingCart1.addProduct(product1);
shoppingCart1.addProduct(product1);
shoppingCart1.addProduct(product1);
shoppingCart1.addProduct(product1);
shoppingCart1.addProduct(product1);
shoppingCart1.addProduct(product2);
shoppingCart1.addProduct(product3);
shoppingCart1.addProduct(product3);
shoppingCart1.addProduct(product3);
shoppingCart1.addProduct(product1);

//shoppingCart1.removeProduct(product2)

console.log(shoppingCart1.totalPrice())


