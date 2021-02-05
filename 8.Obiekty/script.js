//zadanie 1 

    let car = {};

    car.color = "red";
    car.model = "Fiat";

    console.log(car);


//zadanie 2

    let car = {
        color: "red",
        model: "Fiat",
        changeColor(newColor)
        {
            this.color = newColor;
        }
    };

    car.changeColor("BMW");
    console.log(car);


//zadanie 3

    let calc = {
        sum: 0,
        calculateSum(tableWithNumbers) {
            this.sum = tableWithNumbers.reduce((a, b) => {return a + b});
        }
    }

    calc.calculateSum([20,50,30]);
    console.log(calc.sum);


//zadanie 4

    let car = {
        name: 'Audi',
        year: 2021,
        driver_name: 'John'
    }
    
    for(let key in car) {
        console.log(`${key}: ${car[key]}`);
    }

//zadanie 5

    let car = {
        color: "red",
        model: "Fiat"
    };

    let driver = {
        name: 'John',
        age: 28
    }

    car.driver = driver;

    console.log(car.driver)


//zadanie 6

    var car = {
        name: 'BMW',
        year: 2021,
        driver_name: 'Tom'
    }

    car.color = "red";
    car.sayHello = () => console.log('Hello');
    
    car.sayHello();
    console.log(car.color);
