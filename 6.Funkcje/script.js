//zadanie 1
const zadanie1 = () => console.log("Udało się!");
zadanie1();
//zadanie2
const zadanie2 = (param) => console.log(param);
zadanie2();
//zadanie 3
const zadanie3 = (arrayParam) => Array.isArray(arrayParam) ? arrayParam : null;
zadanie3();
//zadanie 4
const zadanie4 = (paramString) => {
    var counter = 0;
    var interval = setInterval(() => { 
        
        if(counter >= 5){
            console.log("Koniec");
            clearInterval(interval);
            return;
        }

        console.log(paramString);
        counter++;

    }, 3000);
}




zadanie4();