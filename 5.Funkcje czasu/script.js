var counter = 0;
const max = 15;
const timeout = 3000;


const interval = setInterval(() => {
    counter++;
    console.log(`Hi ${counter}`);

    if(counter >= max) clearInterval(interval);
}, timeout)



// ------------------------

const array = ["a","b","c"];
var show = null;
var showCounter = 0;

setTimeout(() => {
    console.log(array);

    show = setInterval(() => {
        if(showCounter <= array.length - 1){
            console.log(array[showCounter]);
        }else{
            clearInterval(show);
        }
        showCounter++;
    }, timeout)

}, timeout)