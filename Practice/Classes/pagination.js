/*Your task is to create a class to handle paginated content in a website. A pagination is used
to divide long lists of content into a series of pages.
The Pagination class will accept 2 parameters:
● items (default: []): An array of contents to paginate.
● pageSize (default: 10): The amount of items to show in each page.
So for example we could initialize our pagination like this:
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4);
And then use the method getVisibleItems to show the contents of the paginated array.
You will have to implement various methods to go through the pages such as:
● prevPage
● nextPage
● firstPage
● lastPage
● goToPage
Here's a continuation of the example above using nextPage and lastPage:   */

class Pagination{
   
    constructor (arr, size = 10){
        this.arr = arr;
        this.size = size;
        this.page = 0;
    }
    getVisibleItems(){

        let arr1=[];
        for (let i  =this.page*this.size; i< this.page* this.size +4;i++){
        arr1.push(this.arr[i])
        }
        
        return arr1;
    }
    prevPage(){
        this.page--;
        let arr1=[];
        for (let i  =this.page*this.size; i< this.page* this.size +4;i++){
            if (!this.arr[i]) {return "ups"}
        arr1.push(this.arr[i])
        }
        return arr1;
    }

    nextPage(){
        this.page++;
        let arr1=[];
        
        for (let i  =this.page*this.size; i< this.page* this.size +4;i++){
            if (!this.arr[i]) {return "ups";}
        arr1.push(this.arr[i])
        }
        return arr1;
    }
    firstPage(){
        this.page=0;
        let arr1=[];
        for (let i  =this.page*this.size; i< this.page* this.size +4;i++){
        arr1.push(this.arr[i])
        }
        return arr1;
    }
    lastPage(){
        this.page = Math. floor(this.arr.length / this.size)
        this.q= this.arr.length %this.size
        let arr1=[];
        for (let i  =this.arr.length- this.arr.length % this.size; i < this.arr.length ;i++){
        arr1.push(this.arr[i])
        }
        return arr1
    }
    goToPage(p){
        this.page= p;
        let arr1=[];
        for (let i  =(this.page-1)*4; i < this.page*4 ;i++){
            if(!this.arr[i]) {return "ups"}
        arr1.push(this.arr[i])
        }
        return arr1
    }
    
}

let alphabetArray =  "abcdefghijklmnopqrstuvwxyz".split("");
const p = new Pagination(alphabetArray, 4)
console.log(p.getVisibleItems())