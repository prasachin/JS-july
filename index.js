// // console.log("Hey I am JS");
// // console.log(a);
// // console.log(b);
// var a = 10;
// let b = 20;
// // const c = 30;

// console.log(multiply(a, b));

// function multiply(x, y) {
//   // let b = 20;
//   // var a = 100;
//   // console.log(a);
//   var result = x * y;
//   return result;
// }

// // var answer = multiply(a, b);

// // console.log("The answer is: " + answer);

// let a = {};

// console.log(typeof a);

// let a = 10;
// let b = a;

// b = 20;

// console.log(a, b);

// let a = {x:10};
// let b = a;

// b.x = 20;

// console.log(a, b);

// let a = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   "Sachin",
//   null,
//   false,
//   function x() {
//     console.log("Hey I am a function");
//   },
//   { name: "Sachin", age: 30 },
// ];
// console.log(a[3]);
// console.log(a[8]());

// let a = [1, 2, 3, 4, 5];
// console.log(typeof a);//Object
// console.log(Array.isArray(a)); //true
// console.log(a.length);

// function Array(){
//   this.x = 10;
// }

// let a = new Array(5);

// console.log(Array.isArray(a));
// console.log(a.length);

// let a = [1];
// console.log(a);
// // a.push(5, 6); add data at the end of the array
// console.log(a);

// let a = [1];
// console.log(a);
// a.unshift(5, 6);
// console.log(a);

// let a = [1, 2];
// console.log(a);
// a.pop();
// console.log(a);

// let a = [1, 2];
// console.log(a);
// a.shift();
// console.log(a);

// let a = [1, 2, 3, 4, 5];
// a.splice(2, 0, 31, 23);
// console.log(a);

// let a = [1, 2, 3, 4, 5, { x: 10 }];

// for (let i = 0; i < a.length; i++) {
//   console.log("index: " + i + " value: " + a[i]);
// }

// let i = 0;
// while (i < a.length) {
//   console.log("index: " + i + " value: " + a[i]);
//   i++;
// }

// do {
//   console.log("index: " + i + " value: " + a[i]);
//   i++;
// } while (i < a.length);

// let a = [1, 2, 3, 4, 5];

// let foreachRes = a.forEach((value, index) => {
//   //   console.log("index " + index + " value: " + value);
//   //   console.log(2 * value);
//   return 2*value;
// });
// let mapRes = a.map((v, i) => {
//   //   console.log("index " + index + " value: " + value);
//   //   console.log(2 * value);
//   return 2*v;
// });

// console.log(foreachRes);
// console.log(mapRes);

// let a = [1, 2, 3, 4, 5];

// let res = a.filter((value) => {
//   //   console.log(value);
//   return value % 2 === 0;
// });

// console.log(res);

// let res = a.reduce((acc, value)=>{
//     // console.log(value);
//     return acc + value;
// }, 0);

// console.log(res);

// let a = 10;
// let b = '10';

// console.log(a == b);

// console.log(a === b);

// let a = [{ x: 10 }];

// // let b = [...a]; //shallow copy
// let b = structuredClone(a) ;  // deep copy

// console.log(a, b);

// b[0].x = 100;

// console.log(a, b);

// let a = [1, 2, 3, 4, 5];

// console.log(a.slice(2));

// console.log(a.slice(-2, -1));

// let a = [1, 2, 3, 4, 5];
// let res = a.slice(2, 4);
// console.log(res);
// console.log(a);

// let a = [1, 2, 3, 4, 5];
// let res = a.splice(2, 2, 31);
// console.log(res);
// console.log(a);

// let str = "sachin";
// str = "S" + str.slice(1);
// console.log(str);

// let a = "hey i am a sentance";

// let splitted = a.split(" ");
// console.log(splitted);

// splitted = splitted.map((word) => {
//   return word[0].toUpperCase() + word.slice(1);
// });

// splitted = splitted.join(" ");

// console.log(splitted);

// let a = {a:10};
// let a = new Object({ a: 10 });
// function User() {
//   this.a = 100;
// }

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let a = new User("John", 30);
// a.country  ="India";
// delete a.age;
// let b = new User();
// console.log(a, b);

// let a = { name: "sachin", age: 22, country: "India" };
// console.log(Object.keys(a));

// console.log(Object.getOwnPropertyDescriptors(a));
// a.password = "1234";

// Object.defineProperty(a, "password", {
//   value: "1234",
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

// a.password = "xyz";
// console.log(Object.keys(a));

// console.log(a.password);
// console.log(Object.keys(a));
// delete a.password;
// console.log(Object.keys(a));
// console.log(a.x);

// let a = { name: "sachin", age: 22, country: "India" };

// console.log(a);

// // Object.freeze(a);

// Object.seal(a);
// a.password = "1234";
// a.name = "Rohit";
// delete a.age;

// console.log(a);

// let animal = {
//   eats: true,
//   parent:"Animal",
// };

// let cat = Object.create(animal);
// let dog = Object.create(animal);
// cat.meows = true;
// let cat2 = Object.create(cat);

// console.log(Object.getPrototypeOf(cat2));

// cat.meows = true;
// console.log(cat);
// console.log(dog);

// let animal = {
//   eats: true,
//   type: "Living Being",
// };

// let cat = Object.create(animal);

// cat.type = "Mammal";

// console.log(Object.getPrototypeOf(cat));
// console.log(cat.type);
