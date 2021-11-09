// 1. You are conducting an art festival. you need a program to collect and store 
//     details of the participants
//     collect details of at least 3 participants
//     name, location, age, gender, genre
//     2. write a function that takes in two numbers and returns the sum
//     3. write a function that takes a string and return the no of characters i.e length

// try to guess the output without EXECUTING and send the output


//1. unzip . 2. open in vscode terminal 3. run "npm install" 4. write your code in index.js 5. run using "node index.js
// No.1
const prompt = require("prompt-sync")();

// name,age, location, gender, genre
function artFestival(){
    const participants = {};
    const name = prompt("Enter Participant Name:");
    participants.name = "name";
    const age = prompt("Enter Participant Age:");
    participants.age = "age";
    const location = prompt("Enter Participant Location:");
    participants.location = "location";
    const gender = prompt("Enter Participant Gender:");
    participants.gender = "gender";
    const genre = prompt("Enter Participant Genre:");
    participants.genre = "genre";
    return participants;
}
const participant1 = artFestival();
const participant2 = artFestival();
const participant3 = artFestival();
const participantList = [participant1, participant2, participant3];
 
console.log(participantList);

// for(let i = 0; i<3; i++){
//   artFestival();
// }

// No. 2
// method. 1
// function sum(a, b) {
//    return a + b;
// }

// const output = sum(7,3);
// const output = sum(8,7);

// console.log(output);

// // method. 2
// function sum1(a, b) {
//     console.log(a + b);
// }

// sum1(3,5);

// //No. 3
// function findLength(str){
//     return str.length;
// }

// const result = findLength("mohammed");
// console.log(result);


// //1.
// function sum(n1, n2) {
//     n1 + n2;
//   }
//   const r = sum(2, 3);
//   console.log(r);

//   //2.
//   function sum(n1, n2) {
//     return n1 + n2;
//   }
//   const r = sum(2, 3);
//   console.log(r); //5

  //3.
  // function sum(n1, n2) {
  //   return n1 + n2;
  // }
  // const r = sum(2);
  // console.log(r); //4

//   //4.
//   function sum(n1, n2 = 3) {
//     return n1 + n2;
//   }
//   const r = sum(2);
//   console.log(r); //5

//   //5.
//   let n1 = 2;
//   let n2 = 4;
//   function sum(n1, n2) {
//     return n1 + n2;
//   }
//   const r = sum(n1, n2);
//   console.log(r); //6

  //i have few more exercises will send them in the evening
  
  
