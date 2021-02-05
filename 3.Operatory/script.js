//zadanie 1
let x = true;
let y = false;
console.log(x == y);
//zadanie 2
const numOne = 10;
const numTwo = 3;

let moduloResult = 0;
moduloResult = numOne % numTwo;
console.log(moduloResult); //1  
//zadanie 3
let stringsResult = "",
    a = "test",
    b = " foo";

stringsResult = a + b;
console.log(stringsResult); // test foo
//zadanie 4
var sn = 425;
var ss = "425";
console.log(sn == ss); //true 
console.log(sn === ss); //false poniewaz potrojny sprawdza rowniez typ
//zadanie 5
let counter = 30;
console.log(counter);
counter ++;
console.log(counter);
counter --;
console.log(counter);
// Zadanie 6
let n1 = 5,
    n2 = 6,
    result = null;
    
result = n1 > n2;

console.log(result); // false



const Drabina = {
    position = 0,
    setHeight(height) {
        this.height = height;
    },
    goUp() {
       
        this.position++;
        if(position==height+1)
        console.log("Doszedłeś na góre");
    },
    goDown() {
        this.position--;
        if(position==-1)
        console.log("Zszedłeś z drabiny");
    }

}