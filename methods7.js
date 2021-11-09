// 1. Array methods - push,pop,shift,unshift,slice,splice,concat,join,includes,indexOf
// 2. Object methods - keys, values,assign
 // 3. String methods - split,substring,charAt,includes,repeat,toLowerCase,toUpperCase,trim
// so total  20 methods. please send 20 snippets using these

// 1. Array methods - push,pop,shift,unshift,slice,splice,concat,join,includes,indexOf

const array = [1,2,3,4,5];
// //no 1. push() method => (add element at the end)
// array.push(6,7,8,9,10);
// console.log(array);

// //no 2. unshift() method => (add element at the front)
// array.unshift(6,7,8,9,10);
// console.log(array);

// //no 3. pop() method =>(erase last element)
// array.pop();
// console.log(array);

//no 4. shift() method
// array.shift();
// console.log(array);

//no 5. slice() method => (select the elements in the array, it wont change the original array)
let output = array.slice(1,3);
console.log(output);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);

//no.6 splice() method => (adds and/or removes array elements.)
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.splice(1 ,0 , "watermelon"); // one element added
// console.log(fruits);
// fruits.splice(2 ,2, "strawberry"); // 2 elements taken away
// console.log(fruits);

//no. 7 concat() method => (joining two or more arrays)

// const gopiTeam = ["Roshan", "Reshma", "Priyanka"];
// const umarTeam = ["Sowmya", "Sangavi", "chitra"];
// const trainingTeam1 = gopiTeam.concat(umarTeam);
// const trainingTeam2 = umarTeam.concat(gopiTeam);

// console.log(trainingTeam1);
// console.log(trainingTeam2);

//no.8 indexOf() method => (search the item in the array & return its position)
//indexOf() returns -1 if the item is not found.
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const output1 = fruits.indexOf("orange"); //lowercase(-1)
// console.log(output1);
// const output2 = fruits.indexOf("Orange"); // 1
// console.log(output2);

// no. 9 includes() method => (whether that element is there or not)
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// const output1 = fruits.includes("Banana"); // true
// console.log(output1);
// const output2 = fruits.includes("Strawberry"); // false
// console.log(output2);

// no. 10 join() method =>(returns an array as a string, it wont change the original array.The separator is comma(,).
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// const output = fruits.join();
// console.log(output); // Banana,Orange,Lemon,Apple,Mango

// // no. 11 reverse( method)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const output = fruits.reverse();
// console.log(output);

// // // No. 1(Object method of Keys & values) => it will give only keys and it will give only values
// const person = {
//     name: 'roshan',
//     age: 28,
//     isMale: false
//   };
  
// //   console.log(Object.keys(person)); //Array ["name", "age", "isMale"]
// //   console.log(Object.values(person)); //Array ["roshan", 28, false]
// console.log(Object.assign({}, person)); //Array ["roshan", 28, false]


  // 3. String methods - split,substring,charAt,includes,repeat,toLowerCase,toUpperCase,trim
 
  // no. 1 split() method =>
//   let str = "what is your name?";
// const output = str.split(" ");
// console.log(output); //[ 'what', 'is', 'your', 'name?' ]

// // no.2  & no. 3 toLowerCase() and toUpperCase() method (change the string to lower case or capital letter)

// const str = "roshan is my friend."
// const upperResult = str.toUpperCase();
// console.log(upperResult);
// const lowerResult = str.toLowerCase();
// console.log(lowerResult);

// //no. 4 repeat() method 
// const str = "roshan is my friend."
// const upperResult = str.toUpperCase();
// console.log(upperResult.repeat(3));


// //no . 5 trim() method (it removes the white space on right and left sides)
// const str = "          roshan is my friend. She is good.     ";
// const trimResult = str.trim();
// console.log(trimResult);

//no. 6 substring() method =>Extract characters from a string.
// const str = "Roshan is my friend.";
// const output = str.substring(0,10);
// console.log(output); // Roshan is

// //no. 7 charAt() method => it tells the character of the words
// const name = "Roshan";
// const output1 = name.charAt(1);
// console.log(output1); // 'R'

// //no. 8 includes() method => (whether that element is there or not)
// const sentence = "What is your name";

// const output1 = sentence.includes("is"); // true
// console.log(output1);
// const output2 = sentence.includes("Strawberry"); // false
// console.log(output2);

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const word = 'fox';

// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// // expected output: "The word "fox" is in the sentence"


