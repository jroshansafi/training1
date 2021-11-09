// // // 1. assignment
// let num = 3;
// console.log(num);
// num += 3; // num = num + 3;
// console.log(num);

// // // 2. Destructuring
const examResult = [98,97,89,70,72,70,69];

const[first,second,third, ...justPass] = examResult;
console.log(third);
console.log(justPass);
const nums = [1,2];
// how will we assign the first and second element into variables
const first1 = nums[0];
const second1 = nums[1];
// destructure
const [first11,second11] = nums;
const person = {
    name: "faiyaz",
    age: 27
}
const name = person.name;
const age = person.age;
console.log(person.name)
// destructure
const {name1} = person;
console.log({name1})
const {age1} = person;
console.log({age1})
const {name11,age11} = person;
console.log(person)
// // // 2. Destructuring
// // eg.1 Destructuring of Array
// const nums = [1,2,3,4,5];
// // how will we assign the first and second element into variables
// const first = nums[0];
// const second = nums[1];

// console.log(first, second);
// //destructure
// const [first1,second1,third1,forth1,fifth1] = nums;
// console.log(first1);
// console.log(fifth1);

// //eg.1 Destructuring of Objects
// const person = {
//     name: "faiyaz",
//     age: 27
// }
// const name = person.name;
// const age = person.age;
// console.log(name, age)

// // // destructure
// const {name} = person;
// const {age} = person;
// const {name,age} = person;
// console.log(name,age);

// // // 3.comparison operator
// const num1 = 3;
// const num2 = 4;
// const string1 = "3";
// console.log(num1 == 3);
// console.log(num1 == num2);
// console.log(num1 != num2);
// console.log(num1 === string1);
// console.log(num1 !== string1);
// console.log(num1 < num2);
// console.log(num1 > num2);
// console.log(num2 < num1);

// // //4. arithmetic operators
// // let numb= 3;
// // numb++; 


// // console.log(numb);
// // const  output = numb--;
// // console.log(output);
// // console.log(numb);

// // let numb1 = 3;
// // ++numb1;
// // console.log(numb1);

// // // 5.logical operators
// // const isMale = true;
// // const isFemale = false; // with above two we represent same information
// // const gender = 'male';
// // console.log(isMale && gender === 'male')
// // console.log(isFemale || gender === 'male');
// // console.log(!isMale);

// // // // 6.string operators
const firstname = "muhammed";
const lastname = "faiyaz";
const noOfParticipants = 50;
const programGenre = "music";
const fullname = firstname + lastname;
 console.log(fullname);
const fullnameWithSpace = firstname + " " + lastname;
console.log(fullnameWithSpace);
// // // const message = "around " + noOfParticipants + "people participated in " + programGenre +  "event";
// // // console.log(message);
// // // // concatenating string using plus is tedious so use template strings
// // // const messageWithStringLiteral = `around ${noOfParticipants} people participated in  ${programGenre} event`;
// // // console.log(messageWithStringLiteral);

// // // 7. Ternary operators
// // const isMale1 = true;
// // const gender1 = isMale1 ? 'male' : 'female';
// // console.log(gender1);

// // 8. in operator
// const numsOf = [1,2];
// const person = {
//     name: "faiyaz",
//     age: 27
// }
// console.log(0 in numsOf); //false
// console.log(2 in numsOf); //true
// console.log('name' in person); //true
// console.log('company' in person); //false







