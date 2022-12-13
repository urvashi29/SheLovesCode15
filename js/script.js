// Closures
var counter = 0; //global
function inc() {
  counter++;
  return counter;
}

inc();
inc();
inc();

counter = 5;
console.log(counter); //here problem, anyone can come and change the value

//making counter as local
function increment() {
  var count = 0; //local
  count++;
  return count;
}

increment(); //1
increment(); //1
console.log(increment()); //1

// we can resolve this using closures
function incCounter() {
  var c = 4;
  var d = 80;

  return function () {
    c++;
    return c;
  };
}

var r = incCounter();
r(); //5
r(); //6
console.log(r()); //7

//another example
function calculate() {
  var m = 60;

  function result() {
    m++;
    return 200 - m;
  }

  return result;
}

var func = calculate();
console.log(func());
console.log(func());
console.log(func());

//call()
var person = {
  fullName: function (country, val) {
    // console.log(this.firstName, this.age);
    return this.firstName + " " + this.age + " " + country + " " + val;
  },
};

var personOne = {
  firstName: "alex",
  age: 20,
};

var result = person.fullName.call(personOne, "India", "Norway");
console.log(result);

//apply: similar to call
var user = {
  fullName: function (country) {
    console.log(this.firstName + " " + this.age, +" " + country);
  },
};

var personTwo = {
  firstName: "alina",
  age: 25,
};

user.fullName.apply(personTwo, ["Norway", "Jordon"]);

// applicability
var maximum = Math.max(1, 50, 10, 9);
console.log(maximum);

var arr = [78, 89, 79, 100];

var maxArr = Math.max.apply(null, arr); //
console.log(maxArr);

//Prototype (ES5)
//we can create a function constructor
//Person is object constructor function

function Person(name, age, dept) {
  this.first = name;
  this.age = age;
  this.dept = dept;
}

var stdOne = new Person("alina", 20, "cse"); //create a object for stdOne
console.log(stdOne);

var stdTwo = new Person("harry", 25, "mtech"); //
console.log(stdTwo);

//to add new property in object constrcutor function
Person.prototype.nationality = "Indian";

Person.prototype.fullName = function () {
  console.log(this.first);
};

console.log(stdOne.nationality, stdTwo.nationality);
stdOne.fullName();

var str = "hello";
// var str = new String("hello");//incorrect way
console.log(str.length);

var num = 78;
// var n = new Number(89);//incorrect way

// var b = new Boolean(true); //incorrect way

//task
//display name of a user using closures (returning function from a function): input of name is added by user
//create 2 methods/function in a method/function and return a method/function based on condition and store it outside, in a variable

//task
//try call & apply methods on Math Object, Date Object(study)

//task
//create a University object constructor function
//name, age, marks, city
// create one method
// 5 students want to enroll
//display their data  in UI
