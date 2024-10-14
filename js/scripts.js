alert("Hey this is Kevin, welcome to my portfolio site");
console.log ("Hello world")
var text1 = "Hi"
var text2 = "my friend"
var person = {
    name: "John",
    age: "39"
};
var age = 39;
var name = "John";
var personParent = {
    name: name,
    age: age,
    child: {
        name: "Azul"
    }
}

personParent.name = "Anne";
personParent.child.size = 175;
console.log(personParent.child.name);
console.log(personParent.name);

var weWantThisField = "age";
console.log(personParent[weWantThisField]); // The same as personParent.age

var shortObject = { name: "John", age: 31};
var emptyObject = {}; // Objects can be empty. You can add properties later

delete shortObject.name;

var shortArray = [1,2,3];
var mixedArray = [
  1,
  "Hello",
  {},
  ["nested array"]
];
shortArray[0] = 100; // Overwrites the prior value, 1, with 100

console.log(shortArray[0]); // Outputs "1", the first value
console.log(mixedArray[3][0]); // Outputs "nested array"

var myArray = [1,2];
myArray.push(3);
myArray.push("Test");
console.log(myArray); // Will output: [1,2,3, "Test"]

var myself = {
    name: "Kevin",
    age: 25,
    hobbie: "Gamble"
};

console.log(myself);

function add(number1, number2) {
    return number1 + number2;
  }

var result = add(10, 100);

var ages = [15, 20, 25, 30];
for (var i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}

function menuToggle() {
    const items = document.querySelectorAll('.navtoggle li:not(:last-child)');
    items.forEach(item => {
        item.style.display = item.style.display === 'none' || item.style.display === '' ? 'block' : 'none';
    });
}