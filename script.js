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
  .set("close", 23);
