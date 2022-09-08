const rest = new Map();

//Set method
rest.set("name", "Classico Italiano");
//key,  value
rest.set(1, "Florence, Italy");
//key,  value
rest.set(2, "Lisbon, Portugal");

//Chaining set map
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

//console.log(rest.get("name"));
//console.log(rest.get(2));
//console.log(rest.get("close"));
//console.log(rest.get(true));

const time = 21;
//console.log(rest.get("open" < time ? rest.get(true) : rest.get(false)));

console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));

rest.delete(2);

console.log(rest);

console.log(rest.size);

//console.log(rest.clear());
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

console.log(rest.get(arr)); // to make this work we need to create a variable for the array and then call it

///////////////////////

const questions = new Map([
  ["question", "What is the best programming language in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(questions);
