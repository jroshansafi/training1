// write a function that has one argument as an array of numbers and return a new array with the same values
// you should use for loop
// old array values
// input is [1,2,3] and output is [1,2,3]
// you should create a new array and copy value form old array

// const nums = [1,2,3];
// const numsCopy = nums;
// console.log(numsCopy);



// // //10.Take time with this
// const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];
// let temp;
// let start = 0;
// let end = nums.length - 1;
// while (start < end) {
//   temp = nums[start];
//   nums[start] = nums[end];
//   nums[end] = temp;
//   start++;
//   end--;
// }
// console.log(nums);

// write a function that has one argument as an array of numbers and return a new array with the same values
// const nums = [1,2,3];

// function sameOutput(val){
// const array = [];
// let numbers = nums;
// for(let i = 0; i<nums.length; i++ ){
//     //array.push(numbers[i]);

//     array[i] = numbers[i];
//     return array;
// }
// }


//sameOutput();
//console.log(numbers);

// //write a function that has one argument as an array of numbers and return a new array with the same values
// const nums = [1,2,3];
// function sameOutput(){
// const array = [];
// let temp = 
// for(let i = 0; i<3; i++ ){
//     array.push(nums[i]);
//     array[i] = temp[i];
//     //return array;
// }
// }

// sameOutput();
// //console.log(array)

// //1.
// let dividend = 18;
// let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// let idx;
// for (idx = 0; idx < numbers.length; idx++) {
//   let factor;
//   let divisor = numbers[idx];
//   if (dividend % divisor === 0) {
//     factor = true;
//   }
//   if (factor) {
//     console.log(divisor + ' is a factor of ' + dividend + '!');
//   }
// }


// //2.
// function displayEvenNumbers(output) {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++) {
//         if (numbers % 2 == 0); {
//             evenNumbers.push(numbers[i]);
//         }
//         return evenNumbers;
//     }
// }
//displayEvenNumbers(); // should return [2,4,6,8]


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// function displayEvenNumbers() {
// const evenNumbers = [];
// for (let i = 0; i < numbers.length-1; i++) {
//         if(i % 2 === 0) { // index is even
//             evenNumbers.push(numbers[i]+1);
//     }
// }
// return evenNumbers;
// }
// console.log(displayEvenNumbers()); // should return [2,4,6,8]

// //3. word ladder
// const words = ['head','heal','tail','teal','tell'];
// let ladder = '';
// for(let word of words){
//     if(word !== ''){
//         word +='-';
//     }
//     ladder += word;
//     //var output = ladder.slice(0,24);  
//     var output = ladder.slice(0,-1);  
// }
// console.log(output); // expected : head-heal-tail-teal-tell


// //4. Random recipe generator
// // * adding a new task
// // * completing a given number of existing task
// // * displaying the task list
 
let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];
function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}
function completeTasks(n = 1) {
  let tasksComplete = 0;
  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    delete todos[0];
    tasksComplete++;
  }
  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}
function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');
  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}
// Utilizing our task manager
addTask('oil change');
addTask('dentist');
addTask('homework');
completeTasks();
displayTaskList();





