//Roshan Task Order => [6, 5, 1, 13, 9, 4, 11, 2, 7, 8, 3, 10, 12]

// //1.// /** 
//   * Task description: Write a method that creates a new array with given values 
//   * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
//   * Task Complexity: 1 of 5 // */
// const fill = (arraySize, value) => {
// }
// const data = 3;
// const valueToFill = 'a';
// console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

const fill = (arraySize, value) => {
  const output = [];
  for (let i = 0; i < arraySize; i++) {
    output.push(value);
  }
  return output;
}
const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

// //2.//  * Task description: Write a method to creates a slice of array with n elements dropped from the beginning.
//  * Expected Result: [1, 2, 3, 4] => [3, 4]
//  * Task Complexity: 1 of 5
//  * @param {Array} array - Array of any elements
//  * @param {Number} elementToDrop - number of elements to drop.
//  * @returns {Array}//  */
//  const drop = (array,elementToDrop) => {
//     throw new Error('Put your solution here');
// }
// const data = [1, 2, 3, 4];
// const elementToDrop = 2;
// console.log(drop(data,elementToDrop)); // [3, 4]

// const drop = (array, elementToDrop) => {
//     let dropOutput = [];
//     for (let i = 1; i < array.length - 1; i++) {
//         const val = array[i+1];
//         dropOutput.push(val);
//         //elementToDrop = val;
//         //const val = array.slice(0,2);   
//     }
//     return dropOutput;
// }
// const data = [1, 2, 3, 4];
// const elementToDrop = 2;
// console.log(drop(data, elementToDrop)); // [3, 4]

//2ND METHOD
// const drop = (array, elementToDrop) => {
//     let dropOutput = [];
//     for (let i = elementToDrop ; i < array.length; i++) {
//         const val = array[i];
//         dropOutput.push(val); 
//     }
//     return dropOutput;
// }
// const data = [1, 2, 3, 4];
// const elementToDrop = 2;
// console.log(drop(data, elementToDrop)); // [3, 4]

// //3.//  * Task description: Removes all given values from array using values array for equality comparisons.
//  * Expected Result: ['a', 'b', 'c', 'a', 'b', 'c'] => ['b', 'b']
//  * Task Complexity: 1 of 5
//  * @param {Array} array - The array to query.
//  * @param {Array} values - The values to remove.
//  * @returns {Array}//  */
//  const pull = (array,values) => {
//     throw new Error('Put your solution here');
// }
// const data = ['a', 'b', 'c', 'a', 'b', 'c'];
// const values = ['a', 'c'];
// console.log(pull(data,values)); // ['b', 'b']

const pull = (array, values) => {
  const pullOutput = [];
  for (let i = 0; i < array.length; i++) {

    if (!values.includes(array[i])) {
      pullOutput.push(array[i]);
    }
  }
  return pullOutput;
}
const data = ['a', 'b', 'c', 'a', 'b', 'c'];
const values = ['a', 'c'];
console.log(pull(data, values)); // ['b', 'b']

// //4.// /** //   * Task description: Write a method that reverts input array 
//   * Expected Result: [1, 2, 3] => [3, 2, 1] 
//   * Task Complexity: 1 of 5 
//   * @param {Array} array - Array of any elements 
//   * @returns {Array} // */
// const reverse = (array) => {
//     throw new Error('Put your solution here');
// }
// const data = [1, 2, 3];
// console.log(reverse(data)); // [3, 2, 1]

const reverse = (array) => {
  const output = [];
  for (var i = array.length - 1; i >= 0; i--) {
    const num = data[i];
    output.push(num);
  }
  return output;
}
const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]

// //5.//  * Task description: Gets all but the first element of array.
//  * Expected Result: [1, 2, 3] => [2, 3]
//  * Task Complexity: 1 of 5
//  * @param {Array} array - The array to query.
//  * @returns {Array}//  */
//  const tail = (array) => {
//     throw new Error('Put your solution here');
// }
// const data = [1, 2, 3];
// console.log(tail(data)); // [2, 3]

//1st method 
const tail = (array) => {
  const output = array.slice(1);
  return output;

  //2nd method 
  const tail = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 1) {
        array.splice(i, 1);
      }
      return array;
    }
  }

  //3rd method 
  const tail = (array) => {
    const output = [];
    for (let i = 1; i < array.length; i++) {
      //output.push(array.splice(1));
      output.push(array[i]);
    }
    return output;
  }
  const data = [1, 2, 3];
  console.log(tail(data)); // [2, 3]

  // //6./** * Task description: Write a method that to print a even Numbers only without conditional statement using loop.
  //* Expected Result: (15) => 0,2,4,6,8,10,12,14,16,18,20,22,24,26,28
  //* Task Complexity: 1 of 5// */
  // const printEvenNumbers = (size) => {
  // }
  // const size = 15
  // console.log(printEvenNumbers(size))

  const printEvenNumbers = (size) => {
    for (let i = 0; i <= size; i++) {
      console.log(i * 2);
    }
  }
  const size = 15;
  printEvenNumbers(size);
  console.log(printEvenNumbers(size));

  // //7./*** Task description: Write a method that to add up each element in the same position and
  //   create a new array containing the sum of each pair. Assume both arrays are of the same length.
  // * Expected Result: ([4, 6, 7],[8, 1, 9]) => [12, 7, 16]
  // * Task Complexity: 1 of 5*/
  // const sumOfPairs = (num1, num2) => {
  // }
  // let num1 = [4, 6, 7];
  // let num2 = [8, 1, 9];
  // console.log(sumOfPairs(num1, num2)) // [12, 7, 16]

  // const sumOfPairs = (num1, num2) => {
  //     if (num1.length !== num2.length) {
  //         throw new Error("Both Array length should be same")
  //     }
  //     const output = [];
  //     for (let i = 0; i < num1.length; i++) {
  //         const val1 = num1[i];
  //         const val2 = num2[i];
  //         const result = val1 + val2;
  //         output.push(result);
  //     }
  //     return output;
  // }
  // let num1 = [4, 6, 7, 6];
  // let num2 = [8, 1, 9];
  // console.log(sumOfPairs(num1, num2)) // [12, 7, 16]

  //2nd method
  // const sumOfPairs = (num1, num2) => {
  //     const r = [];
  //     const maxLength = Math.max(num1.length, num2.length);
  //     for (let i = 0; i < maxLength; i++) {
  //       let n1 = num1[i] || 0;
  //       let n2 = num2[i] || 0;
  //       r.push(n1 + n2);
  //     }
  //     return r;
  //   };
  //   let num1 = [4, 6, 7];
  //   let num2 = [8, 1,9,5];
  //   console.log(sumOfPairs(num1, num2));

  // //8.//   * Task description: Write a method that to get the sum of array actually the sum of all their elements.
  //   * Expected Result: ([3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]) => 276
  //   * Task Complexity: 1 of 5// */
  // const sum = (numbers) => {
  // }
  // const numbers = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]
  // console.log(sum(numbers)) // 276
  const sum = (numbers) => {
    let add = 0;
    for (let i = 0; i < numbers.length; i++) {
      //console.log(numbers[0] + numbers[1] + numbers[2] +numbers[3]+ numbers[4] + numbers[5] + numbers[6] + numbers[7]+numbers[8]+ numbers[9] + numbers[10]);
      //console.log(numbers);
      add += numbers[i];
    }
    return add;
  }
  const numbers = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]
  console.log(sum(numbers)) // 276

  // //9.// /**//  * Task description: Creates an object composed of the inverted keys and values of object.
  //  * Expected Result: { 'a': 1, 'b': 2, 'c': 3 } => { '1': 'a', '2': 'b', '3': 'c' }
  //  * Task Complexity: 1 of 5
  //  * @param {Object} data - The object to invert.
  //  * @returns {Object} - Returns the new inverted object.//  */

  // const invert = (data) => {
  //     const invertedOutput = {};
  //     for (let key in data) {
  //         invertedOutput[data[key]] = key;
  //     }
  //     return invertedOutput;
  // }
  // const data = {
  //     a: 1,
  //     b: 2,
  //     c: 3
  // }
  // console.log(invert(data));

  // //10.
  // /**
  //  * Task description: Creates an array of the own enumerable property names of object.
  //  * Expected Result: { 'a': 1, 'b': 2, 'c': 3 } => ['a', 'b', 'c']
  //  * Task Complexity: 1 of 5
  //  * @param {Object} data - The object to query.
  //  * @returns {Array} - Returns the array of property names.
  //  */
  //  const keys = (data) => {

  // }
  // const data = {
  //     a : 1,
  //     b : 2,
  //     c : 3
  // }
  // console.log(keys(data)); // ['a', 'b', 'c']

  // const keys = (data) => {
  //     let keysResult = [];
  //     for (let key in data) {
  //         const out = (key);
  //         keysResult.push(out);
  //     }
  //     return keysResult;
  // }
  // const data = {
  //     a: 1,
  //     b: 2,
  //     c: 3,
  // }
  // console.log(keys(data));// ['a', 'b', 'c']

  // //11.//  * Task description: Creates an object composed of the picked object properties.
  //  * Expected Result: { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'] => { 'a': 1, 'c': 3 }
  //  * Task Complexity: 1 of 5
  //  * @param {Object} data - The source object
  //  * @param {Array} paths - TThe property paths to pick.
  //  * @returns {Object}//  */
  //  const pick = (data,paths) => {
  //     throw new Error('Put your solution here');
  // }
  // const data = {
  //     a : 1,
  //     b : 2,
  //     c : 3
  // }
  // const paths =  ['a', 'c']
  // console.log(pick(data,paths));

  // const pick = (data, paths) => {
  //     const output = {}
  //     for (let key in data) {
  //         if (paths.includes(key)) {
  //             output[key] = data[key];
  //         }
  //     }
  //     return output;
  // }
  // const data = {
  //     a: 1,
  //     b: 2,
  //     c: 3
  // }
  // const paths = ['a', 'c']
  // console.log(pick(data, paths)); //{ 'a': 1, 'c': 3 }

  // //12.//  * Task description: Get all the values from the source object
  //  * Expected Result: {a :1 ,b:2 : c:3} => [1,2,3]
  //  * Task Complexity: 1 of 5
  //  * @param {object} data - The source object
  //  * @returns {Array}//  */
  //  const values = (data) => {
  //     throw new Error('Put your solution here');
  // }
  // const data = {
  //     a : 1,
  //     b : 2,
  //     c : 3,
  // }
  // console.log(values(data)); // [1,2,3]

  // const values = (data) => {
  //     let result = [];
  //     for (let key in data) {
  //         const out = (data[key]);
  //         result.push(out);
  //     }
  //     return result;
  // }
  // const data = {
  //     a: 1,
  //     b: 2,
  //     c: 3,
  // }
  // console.log(values(data));


  // //13.//  * Task description: Omit the properties from the source object
  //  * Expected Result: {a :1 ,b:2 : c:3} => {b : 2}
  //  * Task Complexity: 1 of 5
  //  * @param {object} data - The source object
  //  * @param {Array} paths - The property paths to omit.
  //  * @returns {Object}
  //  */
  //  const omit = (data,paths) => {
  //     throw new Error('Put your solution here');
  // }
  // const data = {
  //     a : 1,
  //     b : 2,
  //     c : 3,
  // }
  // const paths = ['a', 'c']
  // console.log(omit(data,paths));

  // const omit = (data, paths) => {
  //   const output = {};
  //   for (let key in data) {
  //     if (!paths.includes(key)) {
  //       output[key] = data[key];
  //     }
  //   }
  //   return output;
  // }
  // const data = {
  //   a: 1,
  //   b: 2,
  //   c: 3
  // }
  // const paths = ['a', 'c'];
  // console.log(omit(data, paths));

  //14.
  /**
   * Task description: Creates an array of data values not included in the other given arrays
   * Expected Result: [2, 1], [2, 3] => [1]
   * Task Complexity: 2 of 5
//    * @param {Array} array - The array to inspect.
//    * @param {Array} valuesToExclude - The values to exclude.
//    * @returns {Array}
//    */
  //   const difference = (array, valuesToExclude) => {
  //     throw new Error('Put your solution here');
  //   }
  //   const data = [2, 1];
  //   const valuesToExclude = [2, 3];
  //   console.log(difference(data, valuesToExclude)); // [1]

  //   const difference = (array, values) => {
  //     const diffOutput = [];
  //     for (let i = 0; i < array.length; i++) {
  //         if (values.includes(array[i])) {
  //             diffOutput.push(array[i]);
  //         }
  //     }
  //     return diffOutput;
  // }

  // const data = [2, 1];
  // // const valuesToExclude = [2, 3];
  // console.log(difference(data, valuesToExclude)); // [1]

  // Untitled 
  //console.log(difference([1,2],[2,3])) // [1]
  // console.log(difference([3,2],[2,1])) // [3]
  // console.log(difference([2,2],[2,2])) // []
  // console.log(difference([1,2,3,5],[2,3,4])) // [1,5]
  // console.log(difference([2,3,4],[1,2,3,5])) // [4]

  //   let diff1 = difference([1,2],[2,3]);
  // console.log(diff1, diff1.toString()  == [1].toString()); // [1]

  // let diff2 = difference([3,2],[2,1]);
  //  console.log(diff2, diff2.toString()  == [3].toString()); // [3]

  //  let diff3 = difference([2,2],[2,2]);
  //  console.log("the output is " , diff3,  diff3.toString()  == [].toString()); // []

  //15.
  /**
    * Task description: Write a method that to combine elements from 3 arrays to 
    * generate a string
    * Expected Result: (['A', 'B', 'C'],['1', '2', '3', '4', '5', '6', '7', '8'],['a', 'e', 'i', 'o', 'u']) => 'A1aB2eC3i4o5u678'
    * Task Complexity: 2 of 5
  */
  const characters = ['A', 'B', 'C'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const multi_combine = (characters, numbers, vowels) => {
  }
  console.log(multi_combine(characters, numbers, vowels))

  const characters = ['A', 'B', 'C'];
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const multi_combine = (characters, numbers, vowels) => {
    const output = [];
    const maxLength = Math.max(characters.length, numbers.length, vowels.length);
    for (let i = 0; i < maxLength; i++) {
      let n1 = characters[i] || "";
      let n2 = numbers[i] || "";
      let n3 = vowels[i] || "";
      //let result = n1.concat(n2,n3);
      let result = n1 + n2 + n3;
      output.push(result);
    }
    return output.join("");
  }
  let values = multi_combine(characters, numbers, vowels);
  console.log("'" + values + "'");



  //16.//* * Task description: Write a method that finds shallow intersections of objects 
  /* Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 } 
  * Task Complexity: 3 of 5 
  * @param {Object<string | number>} firstObj - Object with values of primitive data types(string, number, bigint, boolean, 
  * undefined, symbol, and null.)
  * @param {Object<string | number>} secondObj - Object with values of primitive data types 
  * @returns {Object} */
  //   const intersection = (firstObject, secondObject) => {
  //     //throw new Error(`put your solution here ${firstObject}, ${secondObject}`);
  //   };
  //   const data1 = { a: 1, b: 2 };
  //   const data2 = { c: 1, b: 2 };
  //   console.log(intersection(data, data2)); // { b: 2 }

  //   const intersection = (firstObject, secondObject) => {
  //     const interOutput = {};
  //     for (let key in firstObject) {
  //         let first = firstObject[key];
  //         let second = secondObject[key];
  //         if (first === second) {
  //             interOutput[key] = second;
  //         }
  //     }
  //     return interOutput;
  // }
  // const data1 = { a: 1, b: 2 };
  // const data2 = { c: 1, b: 2 };
  // console.log(intersection(data1, data2));


  //17.//   * Task description: Write a method that returns an object composed of key-value pairs. 
  //   * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  //   * Task Complexity: 2 of 5 
  //   * @param {Array} array - a deep array of pairs 
  //   * @returns {Array} 
  // */
  // const fromPairs = (array) => {
  //     throw new Error('Put your solution here');
  //   }
  //   const data = [['a', 1], ['b', 2]];
  //   console.log(fromPairs(data)) // { a: 1, b: 2 }


  function fromPairs(array) {
    fromPairsOut = {};
    for (let i = 0; i < array.length; i++) {
      let out = array[i];
      // for(let key of array){
      // let out = array[key];
      fromPairsOut[out[0]] = out[1]
      //fromPairsOut[array[i][0]] = array[i][1] ;
      //   output[array[0][0]] = array[0][1] ;
      // output[array[1][0]] = array[1][1] ;
    }
    return fromPairsOut;
  }
  const data = [['a', 1], ['b', 2], ['c', 3], ['d', 4]];
  console.log(fromPairs(data)); //{ a: 1, b: 2, c: 3, d: 4}


  //18.//     * Task description: Write a method that returns an array composed of nested array
  //     * Expected Result: {a : 1, b :2, c:3} => [['a', 1], ['b', 2], ['c', 3]]
  //     * Task Complexity: 2 of 5
  //     * @param {Object} obj - The object to query.
  //     * @returns {Array}
  //   */
  //   const toPairs = (obj) => {
  //     throw new Error('Put your solution here');
  //   }
  //   const data = {
  //     a : 1,
  //     b : 2,
  //     c : 3,
  //   }
  //   console.log(toPairs(data)) // [['a', 1], ['b', 2], ['c', 3]]

  //   const toPairs = (obj) => {
  //       const output = [];
  //       for(let key in obj){
  //           //console.log(Object.entries(obj));
  //             output.push([key, obj[key]]);
  //       }
  //       return output;
  //   }
  //   const data = {
  //     a : 1,
  //     b : 2,
  //     c : 3,
  //   }
  //   console.log(toPairs(data)) // [['a', 1], ['b', 2], ['c', 3]]


  // const obj = { name: 'Daniel', age: 40, occupation: 'Engineer', level: 4 };

  // console.log(Object.keys(obj));
  // // Expected output: ["name", "age", "occupation", "level"]

  // console.log(Object.values(obj));
  // // Expected output: ["Daniel", 40, "Engineer", 4]

  // console.log(Object.entries(obj));
  //// Expected output: [["name", "Daniel"], ["age", 40], ["occupation", "Engineer"], ["level", 4]]


  // //19.
  // /**
  //   * Task description: Write a method to convert a string into camel case.
  //   * Expected Result: (JavaScript exercises) => "JavaScriptExercises"
  //   * Task Complexity: 1 of 5
  // */
  // const camelize = (str) => {
  // }
  // const str = 'JavaScript exercises'
  // console.log(camelize(str)) // "JavaScriptExercises"

  const camelize = (str) => {
    let camelCase = "";
    let words = str.split(" ");
    console.log(words);
    for (let word of words) {
      let result = word[0].toUpperCase() + word.substring(1);
      console.log(result);
      //let output = camelCase + result;
      camelCase += output;
    }

    return `"${camelCase}"`;
  }
  const str = 'JavaScript exercises'
  console.log(camelize(str)) // "JavaScriptExercises"

  // //20.
  // /**
  //   * Task description: Write a method that creates to capitalize the first letter of each word in a string.
  //   * Expected Result: (js string exercises) => "Js String Exercises"
  //   * Task Complexity: 1 of 5
  // */
  // const capitalize = (str) => {
  // }
  // const str = 'js string exercises'
  // console.log(capitalize(str)) // "Js String Exercises"

  const capitalize = (str) => {
    let capitalized = "";
    const words = str.split(" ");
    for (let word of words) {
      const finalWord = word[0].toUpperCase() + word.substring(1)
      capitalized = `${capitalized} ${finalWord}`
    }
    return capitalized;
  }
  const str = 'js string exercises'
  console.log(capitalize(str)) // jS strinG exerciseS

  // //21.
  // /**
  //   * Task description: Write a method to check whether a string is blank or not
  //   * Expected Result: ('') => true
  //   * Task Complexity: 1 of 5
  // */
  // const checkIsBlank = (str) => {
  // }
  // const str = '';
  // console.log(checkIsBlank(str)) // true
  
  //1st method
  const checkIsBlank = (str) => {
    // let isBlank;
    // if(str !== undefined  && !str.length){
    //   isBlank = true;
    if (!str) {
      return true;
    }
    return false;
  }
const str = '';
  console.log(checkIsBlank(str)) // true
  //2nd method
  const checkIsBlank = (str) => {
    // if(str !== undefined){
    //  return true
    // }
    let isBlank = false;
    if (!str.length) {
      isBlank = true;
    }
    return isBlank;
  }
  const str = '';
  //let str;
  console.log(checkIsBlank(str)) // true
  //22.
  /**
    * Task description: Write a method that to chop a string into chunks of a given length
    * Expected Result: (javascript) =>  ["ja", "va", "sc", "ri", "pt"]
  //   * Task Complexity: 1 of 5
  // */
  // const chop = (str,chunk) => {
  // }
  // const str = 'javascript'
  // const chunk = 2
  // console.log(chop(str,chunk)) // ["ja", "va", "sc", "ri", "pt"]

  const chop = (str, chunk) => {
    let choppedElementsOut = [];

    for (let i = 0; i < str.length; i = i + 2) {
      // let out = str[i];
      // console.log(out)
      let newStr = str.substr(i, chunk);
      // console.log(newStr)
      choppedElementsOut.push(newStr);
    }
    return choppedElementsOut;
  }
  const str = 'javascript'
  const chunk = 2
  console.log(chop(str, chunk))// ['ja','va','sc','ri','pt']

  // //23.
  /**
    * Task description: Write a method to convert a string into snakeCase case.
    * Expected Result: (Robin Singh from USA) => "robin-singh-from-usa"
    * Task Complexity: 1 of 5
  // */
  // const snakeCase = (str) => {
  // }
  // const str = 'Robin Singh from USA.'
  // console.log(snakeCase(str)) // "robin-singh-from-usa"

  //1st method
  const snakeCase = (str) => {
    let newStr = "";
    const words = str.split(" ").join('-').toLowerCase();
    newStr = `"${newStr} ${words}"`;
    return newStr;
  }
  const str = 'Robin Singh from USA.'
  console.log(snakeCase(str));// "robin-singh-from-usa"

//2nd method
const snakeCase = (str) => {
  return `"${str.split(" ").join('-').toLowerCase()}"`;
}
const str = 'Robin Singh from USA.'
console.log(snakeCase(str));// "robin-singh-from-usa"




