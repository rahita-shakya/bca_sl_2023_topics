// defining objects in javascript
const item = {
  item_code: "002",
  item_title: "wireless mouse",
  item_price: 1200,
  item_quantity: 5,
  item_category: "Computer Accessories",
};

const bike = {
  model: "yamaha R7",
  category: "Sports",
  brand: "Yamaha",
  price: 40000.0,
  year: 2023,
  color: "blue",
};
console.log(item);
console.log(bike);

// accessing properties of object
// method one
console.log("Bike Model: " + bike.model);
console.log("Bike Model: " + bike.brand);
console.log(bike.price);

// method two
console.log("Item Category: " + item["item_category"]);
console.log("Item Category: " + item["item_price"]);
console.log(item["item_quantity"]);

// defining function inside object
// using this keyword - indicates the properties belong to
// that particularly object
const movie = {
  movieName: "12th Fail",
  movieGenre: "Drama",
  productionHouse: "H2 Productions",
  origin: "India",
  budget: "20 Cr",
  releasedYear: 2023,
  platform: "OTT",
  movieDetails: function () {
    return "Name: " + this.movieName + " Genre: " + this.movieGenre;
  },
};
// accessing funtion inside object
console.log("movie origin: " + movie.origin);
console.log("movie details: " + movie.movieDetails());

// date objects
// year - must be in proper format
const d1 = new Date("2024");
console.log(d1);

const d2 = new Date("2024", "01");
console.log(d2);

const d3 = new Date("2024", "01", "24");
console.log(d3);

const d4 = new Date("2023-02-12");
const d5 = new Date("2023/02/12");
const d6 = new Date("12/10/2024");
const d7 = new Date("12-10-2024");

console.log(d4);
console.log(d5);
console.log(d6);
console.log(d7);

// we can also pass hours, win and sec
const d8 = new Date("2023", "12", "24", "12", "25", "58");
console.log(d8);

// we can also create js object using new Keyword
// example
// defining Place

function Place(pName, pType, code) {
  // here "this" keyword is use to indicate poroperties of Place
  this.placeName = pName;
  this.placeType = pType;
  this.zipCode = code;
}
// creating Place object
const place = new Place("Kathmandu", "Capital", 44600); // passing alues
console.log(place);
console.log("Name: " + place.placeName);
console.log("Type: " + place.placeType);
console.log("Zip Code: " + place.zipCode);
