// zadanie 1

var findListElements = document.querySelectorAll(".list");

console.log(findListElements);

// zadanie 2 

returnElements = (tag) =>{
    return document.querySelectorAll(tag);
}

console.log(returnElements("body"));

// zadanie 3

const elem = document.getElementById('list');

// zadanie 4

const getElements = (selector)=> {
    return document.querySelectorAll(selector);
}