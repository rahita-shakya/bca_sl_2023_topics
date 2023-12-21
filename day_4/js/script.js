//defining array
let places = ["Kathmandu", "Lalitpur", "Pokhara", "Butwal"];
const gender = ["Male", "Female", "Others"];

//accessing array elements with indexing
console.log(places[0]);
console.log(places[1]);
console.log(places[3]);

//since array is an object so we can define it using array
let lakes = new Array("Phewa", "Begnas", "Rara", "Tilicho");
console.log(lakes);

//array properties and methods
//properties

//length - return the length of an array
//example
console.log(places.length);
console.log(gender.length);
console.log(lakes.length);

//methods
//1. push -append an element in an array
//example
let days = ["Sunday", "Monday"];
console.log("Push example");
console.log(days);
days.push("Tuesday");
console.log(days);
days.push("Wednesday");
console.log(days);

//2. pop - removes last index element from an array
let capital = ["Kathmandu", "New Delhi", "Beijing", "Dhaka"];
console.log("Pop example");
console.log(capital);
capital.pop();
console.log(capital);
capital.pop();
console.log(capital);

//3. shift() - removes element of first index
let movies = ["Animal", "The Marvels", "Dimag Kharab", "Batman"];
console.log("Shift example");
console.log(movies);
movies.shift();
console.log(movies);
movies.shift();
console.log(movies);

//4. unshift() - add an element at the beginning of the array
let kings = ["Mahendra", "Birendra", "Gyaendra"];
console.log("Unshift Example");
kings.unshift("Prithvi");
console.log(kings);
kings.unshift("Gehendra");
console.log(kings);

//5. splice() - add and/or element from specified index
let language = ["Java", "Javascript", "Php"];

//this method takes 3 arguments
//1st - position
//2nd - number item want to remove
//3rd - elements can be more
console.log("Splice Example");
// to add element
console.log(language);
language.splice(1, 0, "Python");

//to remove element - set 2nd argument greater than 0
console.log(language);
language.splice(1, 1, "Dart");
console.log(language);
console.log(language);
language.splice(1, 2, "ruby");
console.log(language);
console.log(language);
language.splice(3, 0, "Go lang");
console.log(language);
language.splice(2, 1, "C#");
console.log(language);

//6. slice() - to break array into another piece
console.log("Slice example");
let province = ["Bagmati", "Koshi", "Sudur Paschim", "Karnali"];
let province_two = province.slice(1, 3);
console.log(province);
console.log(province_two);

//7. concat - to merge one or more array without mutating primary array
let group_one = ["Red", "Blue"];
let group_two = ["Green", "Yellow"];
let group = group_one.concat(group_two);
console.log(group);

//8. flat() - converts multi dimension array to single flat array
let cities=[["KTM","pokhara"],["Butwal","Hetauda","Jhapa"]]
let cities_nepal=cities.flat()
console.log(cities)
console.log(cities_nepal)

// //9. Delete 
// let  fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits([0])
// console.log(fruits)
