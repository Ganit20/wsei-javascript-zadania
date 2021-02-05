// Zadanie 1
let n1 = 15,
    n2 = 16;

if(n1 > n2){
  console.log(n1);
} else {
    console.log(n2);
}
//zadanie 2
let n1 = 2,
n2 = 4,
n3= 5;




if(n1>n2 && n1>n3){
    console.log(n1 + ' jest największe');
}else if ( n2>n1 && n2>n3) {
    console.log(n2 + ' jest najwieksze');
} else{
  console.log( n3+ ' jest najwiekszy');
} 
//zadanie 3
for (let i=0; i<10; i++) {
    console.log("Ok");
}
//zadanie 4
let result = 0;
for(i=0; i<10; i++){
    result += i;
}
console.log(result);
//zadanie 5
var n = 5;
for(i=0; i<n; i++){
    if (i%2 === 0){
        console.log(i + " parzysta");
    }else{
        console.log(i + " nieparzysta");
    }
}
//zadanie 6
for(let i=0; i<5; i++){
    
    for(let j=0; j<5; j++)
    {
       console.log("i= " + i + ", j= " + j);
    }
}

//zadanie 7
for(let i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0){
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0){
        console.log(`${i} Buzz`);
    } else{
        console.log(`${i}`);
    }
}
//zadanie 8.a

let star = 5;
let result = '';

for(let i = 1; i <= star; i++){
    for(let j = 0; j < i; j++){
         result += "*";
    }
    console.log(result);
    result = ""
}
//zadanie 8.b
for (let i = 1; i <= 5; i++) {
    let lineToPrint = "";
    for (let j = 5 - i; j > 0; j--) {
        lineToPrint += " ";
    }
    for (let j = i * 2 - 1; j > 0; j--) {
      	if(j % 2)
        lineToPrint += "*";
      	else lineToPrint += " ";
    }
    console.log(lineToPrint);
}
//zadanie 8.c

for (let i = 1; i <= 5; i++) {
    let lineToPrint = "";
    for (let j = 5 - i; j > 0; j--) {
        lineToPrint += " ";
    }
    for (let j = i * 2 - 1; j > 0; j--) {
        lineToPrint += "*";
    }
    console.log(lineToPrint);
}
//zadanie 8.d
var c = 5;
var star = 1;

for (var i = 0; i < c; i++) {
    let str = "";

    for (var j = 0; j < c; j++) {
        if (j < star) {
            str += "*";
        }
        else {
            str += j;
        }
    }

    star++;
    console.log(str);
}
console.log("-----");
star = c;
for (var i = 0; i < c; i++) {
    let str = "";

    for (var j = 0; j < c; j++) {
        if (j >= star) {
            str += j;
        }
        else {
            str += "*";
        }
    }

    star--;
    console.log(str)
}
//zadanie 8.e
for (let i = 1; i <= 5; i++) {
    let lineToPrint = "";
    for (let j = 5 - i; j > 0; j--) {
        lineToPrint += " ";
    }
    for (let j = i * 2 - 1; j > 0; j--) {
      	if(j % 2)
        lineToPrint += "*";
      	else lineToPrint += " ";
    }
    console.log(lineToPrint);
}

for(let k = 0; k < 3; k++){
  console.log("    *");
}