

// // const checkIsBlank = (str) => {
// //     if(str !== undefined  && !str) {
// //         return true;
// //     }
// //     return false;
// // }
// // const str = "";
// // console.log(checkIsBlank(str)) // true


// // const camelize = (str) => {
// //     let camelCase = "";
// //     let words = str.split(" ");
// //     for (let word of words) {
// //         let result = word[0].toUpperCase() + word.substring(1);
// //         let output = camelCase + result;
// //         camelCase = output;
// //     }
// //     return `"${camelCase}"`;
// // }
// // const str = 'JavaScript exercises'
// // console.log(camelize(str)) // "JavaScriptExercises"
// // function checkIsBlank(str){
// // let isBlank= false;
// // if (!str) {
// //   isBlank = true;
// // }
// // return isBlank;
// // }
// // let str;
// // console.log(checkIsBlank(str)) // true




// function  callfun(inputfun)  {

//     inputfun(2,3);


// }


// function hello(value, index) {

//     console.log('i am printing  hello', value, index)
// }


// function hello2(value, index) {

//     console.log('i am printing  hello2', value, index)

// }


// //hello();
// //const hello2 = hello;

// //hello2();

// //callfun(hello);

// // [11,222,333].forEach(hello);



// const  list = [11,222,333];

// // for (let index = 0; index < list.length; index++) {
// //     const element = list[index];
// //     hello(element, index)
// // }


// function myForEach(list, callback){

//     for (let index = 0; index < list.length; index++) {
//         const element = list[index];
//         callback(element, index);
//     }

// }



// myForEach(list, hello);  // list.forEach(hello);






// myForEach(list, hello2); // list.forEach(hello2);


// let nums = [2, 3, 5, 6, 7, 1]
// // const adds = nums.map((n) => {
// //     return n += 2
// // })
// const minus = nums.map((n) => {
//     return n -= 1
// })
// console.log(minus)



// let nums = [2, 3, 5, 6, 7, 1]
// const adds = nums.map((n) => {
//     return n += 2
// })
// console.log(adds)
// //
// const minus = nums.map((n) => {
//     return n -= 1
// })
// console.log(minus)
// //
// let names = ["resh", "sam", "ram", "teju"]
// const addNames = names.map((n) => {
//     return n + "bala"
// })
// console.log(addNames);
// //
// const add = names.map((a) => {
//     return `hi ${a}`
// // })
// console.log(add);
// in object
// const marks = [
//     {
//         subject: "maths",
//         score: 90
//     },
//     {
//         subject: "english",
//         score: 80
//     },
//     {
//         subject: "tamil",
//         score: 85
//     }
// ]
// const output = marks.map((m) => {
//     return m.subject;
// })
// console.log(output);
// //
// const capital = marks.map((m) => {
//     return m.subject.toUpperCase();
// })
// console.log(capital)
// //
// const addName = marks.map((m) => {
//     return {
//         ...m,
//         subject: `The marks of raj in ${m.subject}`
//     }
// })
// console.log(addName);



// //findIndex() method

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

//Spread operator

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// //const combined = first.concat(second);
// const combined = [...first, 'a', ...second, 'b'];
// console.log(combined); // [ 1, 2, 3,'a', 4, 5, 6,'b ]

// // const slicing = combined.slice();
// // console.log(slicing); // [ 1, 2, 3, 4, 5, 6 ]
// const copy = [...combined]; // [ 1, 2, 3,'a', 4, 5, 6,'b ]
// console.log(copy);
// // const slicing = combined.slice(1,5);
// // console.log(slicing); // [ 2, 3, 4, 5 ]

// //forEach() method
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


//Filter() method
//eg.1
// const numbers = [1, -2, 3, 4];

// const filtered = numbers.filter((value) => {
//     return value > 0;
// })
// console.log(filtered); //[1,3,4]

// //Eg.2

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


function includes(array,search){
    for(let num of array){
        if(num === search){
            return true;
        }
    }
    return false;
}

const numbers = [1,2,3,4];
console.log(includes(numbers,1));

function except(array,excluded){
    let output = [];
    for(let num of array){
        if(num !== excluded){
            output.push(num);
        }
    }
    return output;
}

const numbers1 = [1,2,3,4];
console.log(except(numbers1,1));




