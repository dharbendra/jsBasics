// Single Line Comment
/*
Multi line
Comments
*/

// Creating Variables
// var a;, let name;, const value = 5;
// assigning value
// var a = 5; name = "abc";

// Var and let will change and over ride the initial data
// let will update the final value to initial value and replace it.
// const won't override the initial data

// var name = "Oydee";
// let phone = 12321;
// const dob = "12/12/2012";

// var name ;
// let phone;
// const dob ; // *******declearing value is mandatory for const

// name = "Oydee";
// phone = 12321;
// dob = "12/12/2012"; // const cannot be reassign it's constant value

// console.log(name);
// console.log(phone);
// console.log(dob);
// // ******console is the object and log is used to access/ show data in console of program/browser.
// console.log(name, phone, dob); //doing same shit

// let a = 6;
// let b = 12;

// const c = a / b; // ***********behind the scene 5+6=11 *****
// const d = (b - a) / a;
// console.log(c, d);

// Data Types
// ****** Object Declaration******
// ***** no space in the variable, use const only
// const person = {
//   key: "value",
//   age: 30,
// }; // Key : Value,

// const john = person;
// console.log(person);
// console.log(john);
// //Data mutating above *****

// Array
// const arg = ["name", 12344, [123, "name"], { name: "alfa" }, true];
// arg[2] = { name: "hellow" };
// console.log(arg);

// function arg() {
//   // comment value
//   // code
//   const a = 5;
//   b = a + 5;
//   console.log(b);
// }
////////////////////// console.log(arg); // just copy function value to memory and then call
// console.log(arg()); // inv0eked function

// **** ES6 Function
// const args = (b) => {
//   //codee
//   //   const b = 2 + 5;
//   console.log(b);
// };
// console.log(args(10));

// var animal = "bird";
// if (animal === "bird") {
//   console.log("Tweet");
// } else if (animal === "dog") {
//   console.log("woof");
// } else if (animal === "cat") {
//   console.log("meow");
// } else {
//   console.log("Chipapi Munyanong");
// }

// var animal = "lshflksa";
// console.log(animal);

///////Switch Case
// switch (variable) {
//   case "value":
//     console.log("statement");
//     case "value":
//         console.log("statement");
//   default:
//     console.log("default value");
// }

/////************ Error Handling
// try {
//   // code
//   const a = 5;
//   const b = a + "6";
//   const c = b + 5;
//   console.log(c);

//   //   throw new Error("hellow");
// } catch (err) {
//   ////Gotchya Buddy
//   //   console.log("Gotchya Buddy", err.message );
//   //   console.log(err.message);
//   if (err.message == "hello") {
//     //
//     console.log("Error is mine");
//   } else {
//     console.log(
//       "Dear Valued viewer, Something went wrong with your Internet Service Provider Please contact them",
//       err.message
//     );
//   }
// } finally {
//   console.log("Done Buddy");
// }

// Time Scheduling
// Set Time Out
// const time = 1000;
// const message = "Hey Buddy";
// setTimeout(
//   () => {
//     console.log("Hy Buddy", message);
//   },
//   1000,
//   time
// );

// ////Interbal
// let i = 0;
// const time = setInterval(() => {
//   // code
//   console.log(i++);
// }, 1000);

// const stopper = () => {
//   clearInterval(time);
// };

// const setter = setTimeout(stopper, 10000);

// // clearTimeout(setter); // To stop setter and stopper
