// const employees = [
//     {
//         : 'john',
//         age: 20,
//         salary: 10
//     },
//     {
//         : 'george',
//         age: 25,
//         salary: 20
//     },
//     {
//         : 'kumar',
//         age: 30,
//         salary: 35
//     },
// ]
// const cars = [
//     {
//         make: '2000',
//         model: 'ford',
//         type: 'hatchback'
//     },
//     {
//         make: '2010',
//         model: 'maruti',
//         type: 'hatchback'
//     },
//     {
//         make: '1999',
//         model: 'ford',
//         type: 'sedan'
//     },

// ]

// function findIndex1(data){
//     for(let i=0;i< data.length;i++){
//        if(data[i]. === "john"){
//            return i
//        }
//     }
// }
// function findIndex2(data){
//     for(let i=0;i< data.length;i++){
//        if(data[i].age === 25){
//            return i
//        }
//     }
// }
// function findIndex3(data){
//     for(let i=0;i< data.length;i++){
//        if(data[i].type === 'sedan'){
//            return i
//        }
//     }
// }
// function findIndex4(data){
//     for(let i=0;i< data.length;i++){
//        if(data[i].model === 'ford'){
//            return i
//        }
//     }
// }
// console.log(findIndex1(employees));
// console.log(findIndex2(employees));
// console.log(findIndex3(cars));
// console.log(findIndex4(cars));

// /* 
//     REQUIREMENT for this program

//     1. findIndex of employee john
//     2. findIndex of employeed with age 25
//     3. findIndex of sedan type car
//     4. findIndex of ford car
// */
// const employees1 = [
//     {
//         : 'john',
//         age: 20,
//         salary: 10
//     },
//     {
//         : 'george',
//         age: 25,
//         salary: 20
//     },
//     {
//         : 'kumar',
//         age: 30,
//         salary: 35
//     },
// ]
// const cars1 = [
//     {
//         make: '2000',
//         model: 'ford',
//         type: 'hatchback'
//     },
//     {
//         make: '2010',
//         model: 'maruti',
//         type: 'hatchback'
//     },
//     {
//         make: '1999',
//         model: 'ford',
//         type: 'sedan'
//     },

// ]
// // //2nd method
// function findIndexWithArguments(data,key,value){
//     for(let i=0;i< data.length;i++){
//         if(data[i][key] === value){
//             return i
//         }
//      }
//      return -1;    
// }

// console.log(findIndexWithArguments(employees1,"","john"));
// console.log(findIndexWithArguments(employees1,"age",25));
// console.log(findIndexWithArguments(cars1,"type","sedan"));
// console.log(findIndexWithArguments(cars1,"model","ford"));

// const employees3 = [
//     {
//         : 'john',
//         age: 20,
//         salary: 10
//     },
//     {
//         : 'george',
//         age: 25,
//         salary: 20
//     },
//     {
//         : 'kumar',
//         age: 30,
//         salary: 35
//     },
// ]
// const cars3 = [
//     {
//         make: '2000',
//         model: 'ford',
//         type: 'hatchback'
//     },
//     {
//         make: '2010',
//         model: 'maruti',
//         type: 'hatchback'
//     },
//     {
//         make: '1999',
//         model: 'ford',
//         type: 'sedan'
//     },

// ]


//3rd method(CALLBACK FUNCTION)
// function findIndex(data,fn){
//     for(let i=0;i< data.length;i++){
//         let condition = fn(data[i]);
//         if(condition){
//             return i
//         }
//      }
//      return -1;
// }

// const index1 = findIndex(cars3,function(c) {
//     return c.model = "ford" && c.make == '1999'
// })
// console.log(index1);
// function sedanCheck(c){
//     return c.type == "sedan"
// }
// console.log(
//     findIndex(cars3,sedanCheck)
// )
// const index = findIndex(employees3,function(e) {
//     return e. = "john" || e.salary == 10
// })
// console.log(index);

// const index1 = findIndex(cars3,function(c) {
//     return c.model = "ford" && c.make == '1999'
// })
// console.log(index1);


// function square(numbers){
//     const output = [];
//     for(let n of numbers){{
//         output.push( n*n );
//         }
//     }
//     return output;
// }
// const nums = [1,3,6,7,4,8]; // [6,4,8]
// console.log(square(nums));

// function even(numbers){
//     const output = [];
//     for(let n of numbers){
//         if(n % 2 === 0){
//         output.push( n);
//         }
//     }
//     return output;
// }

//const nums1 = [1,3,6,7,4,8]; // [6,4,8]
//console.log(even(nums1));

// const nums1 = [1,3,6,7,4,8]; // [6,4,8]
// const evenNumbers = nums1.filter((n) => {
//     return n % 2 === 0
// })
// console.log(evenNumbers);

// const data = [['a', 1], ['b', 2]];
// let output ={}
// data.forEach((d) => {
//     const [key,value] = d;
//     output[key] = value;
// })

// console.log(output)

//const allAreEven  = nums1.every((n) => {
// const allAreEven  = [6,8,4].every((n) => {
//     return n%2 ==0
// })
// console.log(allAreEven)


// const employees = [
//     {
//         name: 'john',
//         age: 20,
//         salary: 10
//     },
//     {
//         name: 'george',
//         age: 25,
//         salary: 20
//     },
//     {
//         name: 'kumar',
//         age: 20,
//         salary: 35
//     },
// ]

//const allAreEven  = nums1.every((n) => {
//    return n%2 ==0
// })
// console.log(allAreEven)

//const employeesWithGreeting = employees.map((e) => {
// return Object.assign({}, e, {
//     name:`hi ${e.name}`  
//     })
// })
// const employeesWithGreeting = employees.map((e,i) => {
//     return {
//         ...e,
//         name:`hi ${e.name}`
//     }
// })
// const employeesWithAge20 = employees.filter((e) =>{
//     return e.age == 20
// })
// console.log(employeesWithAge20)

// array methods you need to be familiar with.
// map
// filter
// forEach
// find
// findIndex
// some
// every
// reduce // just for sake of completeness

// Click to expand inline (8 lines)

// please go through these methods from any resource in the interent and send code snippets showing their usage @here

// we have discussed most of them in the session though

//findIndex() method

// const numbers = [7, 22, 13, 44, 85];

// const findIndexOutput = numbers.findIndex((fIndex) => {
//     return fIndex > 40
// });
// console.log(findIndexOutput);

// const course = [
//     { id: 1, name: 'roshan' },
//     { id: 2, name: 'sabira' },
// ];
// const courseIndex = course.findIndex((fIndex) => {
//     //return fIndex.id === '1'; // -1
//     return fIndex.name === 'sabira';
// });
// console.log(courseIndex);

//find()method
// const numbers1 = [7, 22, 13, 44, 85];

// const findOutput = numbers1.find((f) => {
//     return f > 40
// });
// console.log(findOutput);

// const course1 = [
//     { id: 1, name: 'roshan' },
//     { id: 2, name: 'sabira' },
// ];
// const courseFind = course1.find((f) => {
//     //return f.id === '1'; // undefined
//     return f.name === 'roshan';
// });
// console.log(courseFind); //{ id: 1, name: 'roshan' }

//forEach() method
// const nums = [1, 2, 3, 4, 5];

// nums.forEach((n) => {
//     console.log(n * n);
// })

// nums.forEach((n1) => {
//     if (n1 % 2 === 0)
//         console.log(n1);
// })

// const movies = [

//     {
//         title: 'Anaconda',
//         year: '1999',
//         score: 90
//     },
//     {
//         title: 'Godzilla',
//         year: '2000',
//         score: 95
//     },
//     {
//         title: 'Titanic',
//         year: '2001',
//         score: 100
//     },

// ];

// movies.forEach((movie) => {
//         //console.log(movie);
//         console.log(`${movie.title} - ${movie.score}/100`)
// });

// //Filter() method
// //eg.1
// const numbers = [1, -2, 3, 4];

// const filtered = numbers.filter((value) => {
//     return value > 0;
// })
// console.log(filtered); //[1,3,4]

//Eg.2

// const movies1 = [

//     {
//         title: 'Anaconda',
//         year: '1999',
//         score: 70
//     },
//     {
//         title: 'Godzilla',
//         year: '2011',
//         score: 95
//     },
//     {
//         title: 'Titanic',
//         year: '2020',
//         score: 100
//     },
// ];

// const gdMovies = movies1.filter((movie) => {
//     return movie.score > 80;
// })
// console.log(gdMovies);
// const bdMovies = movies1.filter((movie) => {
//     return movie.score < 80;
// })
// console.log(bdMovies);
// const recentMovies = movies1.filter((movie) => {
//     return movie.year > 2010;
// })
// console.log(recentMovies);


// some() method
// const array = [1, 2, 3, 4, 5];

// const arrayOutput = array.some((s) => {
//     console.log(s % 2 === 0);
// })

// const employees = [
//     {
//         name: 'john',
//         age: 20,
//         salary: 10
//     },
//     {
//         name: 'kumar',
//         age: 25,
//         salary: 20
//     },
//     {
//         name: 'john',
//         age: 20,
//         salary: 35
//     },
// ]

// const employeesDetails = employees.some((e) => {
//     return e.name == 'john';
//   });
//   console.log(employeesDetails)


// every() method
// const array1 = [1, 2, 3, 4, 5];

// const arrayOutput1 = array1.every((s) => {
//     console.log(s % 2 === 0);
// })
// //1st method
// const arrayValue = [1, 30, 39, 29, 10, 13];
// const isBelow = arrayValue.every((currentValue) => {
//     console.log(currentValue < 40);
// });
// //2nd method
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array2 = [1, 30, 39, 29, 10, 13];
// console.log(array2.every(isBelowThreshold));
// // expected output: true

// const employees1 = [
//     {
//         name: 'john',
//         age: 20,
//         salary: 10
//     },
//     {
//         name: 'george',
//         age: 25,
//         salary: 20
//     },
//     {
//         name: 'kumar',
//         age: 20,
//         salary: 35
//     },
// ]


// const employeesDetails1 = employees1.every((e) => {
//     return e.name == 'john';
//   });
//   console.log(employeesDetails1)

//map() method

// const numbers = [25, 16, 9, 81];
// const newArr = numbers.map((num) => {
//    return Math.sqrt(num);
// })  
// console.log(newArr);

// let array = [{key: 1, value: 10},
//     {key: 2, value: 20},
//     {key: 3, value: 30}]

// let formatArray = array.map(obj => {
// let objOutput = {}
// objOutput[obj.key] = obj.value
// return objOutput;
// })
// console.log(formatArray);
// // formatArray is now [{1: 10}, {2: 20}, {3: 30}]

//reduce() method
// const value = [50,9,8,7,6,5,4];
// let subtractOutput = value.reduce(function (total, num) {
//     return total - num;
// });
// console.log(subtractOutput); // 11

let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]
  
  let allbooks = friends.reduce((previousValue, currentValue) => {
    return [...previousValue, ...currentValue.books]
  }, ['Alphabet'])
  console.log(allbooks);
  















