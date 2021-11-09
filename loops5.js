
/*
    The idea of these code snippets is to reinforce the explained 
    concepts in the session
    each log statement should be asked to trainees one at a time
*/
//const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];
//1.
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]); // 1 12 3 6 2 8 4 5 9 11 7 10
// }

// 2.
// for (let j = nums.length - 1; j > 0; j--) {
//   console.log(nums[j]); // 10 7 11 9 5 4 8 2 3 12
// }
// //3.
// for (let j = nums.length - 1; j >= 0; j--) {
//   console.log(nums[j]); //  10 7 11 9 5 4 8 2 3 12 1
// }

// //4.
// for (let k = 0; k < nums.length; k += 2) {
//   console.log(nums[k]); // 1 3 2 4 9 7
// }

// // //5.
// let i = 0;
// while (i < nums.length) {
//   console.log(nums[i]);
//   i++;
// }
// output: 1 12 3 6 2 8 4 5 9 11 7 10

// //write a function to check for a given array has number 2
// const nums = [1,6,8,2,4,10,14,12]
// function isTwo(){
//     for(let i=0; i<nums.length; i++){
// if(i === 2){
//     console.log("The Array has Two");
// }
// }
// }

// isTwo();

// const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];
// //6.
// let i = 0;
// while (i < nums.length) {
//   i++;
//   console.log(nums[i]);
//   i++;
// }
// // //output: 1 3 2 4 9 7
// // //output: 12 6 8 5 11 10

// // //7.
// let i = 0;
// while (i < nums.length) {
//   i++;
//   console.log(nums[i]);
// }
//output : 12 3 6 2 8 4 5 9 11 7 10

// //write a function to check for a given array has number 2
// const nums = [1,6,8,2,4,10,14,12]
// function isTwo(num){
// if(num === 2){
//     console.log("The Array has Two");
// }
// }
// isTwo(nums[0]);
// isTwo(nums[1]);
// isTwo(nums[2]);
// isTwo(nums[3]);
// isTwo(nums[4]);
// isTwo(nums[5]);
// isTwo(nums[6]);
// isTwo(nums[7]);

// for(let i =0; i<nums.length; i++){
//   isTwo(nums[i]);
// }

// const nums = [1,6,8,2,4,10,14,12];
//     for(let i=0; i<nums.length; i++){
// if(nums === 2){
//     console.log("The Array has Two");
// }
// }



// const nums = [1,6,8,2,4,10,14,12]
// function isTwo(){
//     let i=0; 
// while(i<nums.length){ 
// if(i === 2){
//     console.log("The array has two");
// }
// i++;
// }
// }
// isTwo();



// // No. 8
//  const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];
// let i = nums.length;
// while (i >= 0) {
//   console.log(nums[i]);
//   i--;
// }

// // output : 10 7 11 9 5 4 8 2 6 3 12 1
//  //const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];

// // // //9. This will take some thinking
// // for (let i = 0, j = i + 1; i < nums.length && j < nums.length; i++, j++) {
// //   console.log(nums[i] + nums[j]);
// // }
// // //output: 13 15 9 8 10 12 9 14 20 18 17


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


// if (nums[3] === 2){
//   console.log("array");
// }

//NO 3
// isTwo(nums[0]);
// isTwo(nums[1]);
// isTwo(nums[2]);
// isTwo(nums[3]);
// isTwo(nums[4]);
// isTwo(nums[5]);
// isTwo(nums[6]);
// isTwo(nums[7]);
//NO 4
// let i = 0;
// while(i<8){
//   isTwo(nums[i]);
//   i++;
// }
//NO 5
// let i = 0;
// for(let i =0; i<nums.length; i++){
//   isTwo(nums[i]);
// }
//NO 3,4,5 SECOND STEP
  // function isTwo(num){
  //   if (num === 4){
  //     console.log("array");
  //   }
  // }



// //10.write a function that has one argument as an array of numbers and return a new reversed array

// const nums = [1,2,3,4,5];
// function reversedArray(output){
// output = nums.reverse();
// return output;

// // for(var i=output.length-1; i>=0; i--){
// // console.log(nums[i]);
// // }

// // for(var i = 5; i>=0; i--){
// //   console.log(nums[i]);
// // }

const nums = [2,11,5,10,7,8];
function reversedArray(temp){
temp;
let start = 0;
let end = nums.length - 1;
while (start < end) {
  temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
  start++;
  end--;
  return nums;
}
}
console.log(reversedArray(nums));


