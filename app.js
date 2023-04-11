// ***********Assignment 2************ //

//           Question 1

// function add(num1) {
//     return function (num2) {
//         console.log(num1 + num2)
//     }
// }
//
// let closureAdd = add(5);
// closureAdd(10)


//         Question 2

// let arr = ["a", "b", "c", "d"];
//
// function search(array, target) {
//   if (array.length == 0) {
//     return false;
//   }
//
//   if (array[0] == target) {
//     return true;
//   }
//   return search(array.slice(1), target);
// }
//
// console.log(search(arr, "a"));
// console.log(search(arr, "f"));

//          Qestion 3

// let body = document.querySelector("body");
// function addPara(string) {
//     body.innerHTML = "<p>" + string + "</p>";
// }
// addPara("This paragraph will be added to HTML document");

//         Question 4

// let body = document.querySelector("body");
// function addListItem(string) {
//     body.innerHTML = "<ul><li>" + string + "</li></ul>";
// }
// addListItem("This list item will be added");

//         Question 5

// let paragraph = document.querySelector("p");
// console.log(paragraph)
// function colorChange(element, hexCode) {
//     element.style.backgroundColor = hexCode;
// }
// colorChange(paragraph, "#e745e7");

//          Question 6

// let objectExample = {
//     key1: "value1",
//     key2: "value2"
// }
// function saveToLocalStorage(key, object) {
//     let stringify = JSON.stringify(object);
//     localStorage.setItem(key, stringify)
// }
// saveToLocalStorage("object", objectExample);

//          Question 7

// function getItemFromLocalStorage(key) {
//     let valueFromStorage = localStorage.getItem(key);
//     console.log(valueFromStorage)
// }
// getItemFromLocalStorage("object");

//          Question 8

// let objectExample = {
//     key1: "value1",
//     key2: "value2"
// }
// function saveObjectToLocalStorage(obj) {
//     for (const key in obj) {
//         const value = obj[key];
//         localStorage.setItem(key, JSON.stringify(value));
//     }
//     const newObj = {};
//     for (const key in obj) {
//         const value = localStorage.getItem(key);
//         newObj[key] = JSON.parse(value);
//     }
//     console.log(newObj)
//     return newObj;
// }
// saveObjectToLocalStorage(objectExample)