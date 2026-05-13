// Convert JSON string to JavaScript object and vice versa

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

const jsonObject = JSON.parse(jsonString);//convert JSON string to JavaScript object

console.log(jsonObject);
console.log(jsonObject.name);



const objectJson = {name: "Alice", age: 25};

const stringJson = JSON.stringify(objectJson);//convert JavaScript object to JSON string

console.log(stringJson);