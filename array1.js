const a = [1,3,5,2,7,8,4,10,6,9];
const position = 4;
console.log(a[6]); // 4
console.log(a[11]); // undefined
console.log(a[a.length]); // undefined
console.log(a[a.length - 1]); // 9
console.log(a[a.length - 3]); // 10
console.log(a[position]); // 7
console.log(a[position - 1]); // 2


// variables -> let, const
//Array //name, age,  Gender(is male or female)
//3 employes details

const emp1Name = "pavithra";
const emp1Age = 25;
const emp1IsFemale = true;

console.log(" The Employee1 name is " + emp1Name);
console.log(" The Employee1 age is " + emp1Age);
console.log(" The Employee1IsFemale " + emp1IsFemale);

const emp2Name = "patel";
const emp2Age = "35";
const emp2IsFemale = false;

console.log(" The Employee2 name is " + emp2Name);
console.log(" The Employee2 age is " + emp2Age);
console.log(" The Employee2IsFemale " + emp2IsFemale);


const emp3Name = "mohammed";
const emp3Age = "28";
const emp3IsFemale = false;

console.log(" The Employee3 name is " + emp3Name);
console.log(" The Employee3 age is " + emp3Age);
console.log(" The Employee3IsFemale " + emp3IsFemale);


const empNames = ["pavithra", "patel", "mohammed"];
const empAges  = [25, 35, 28];
const empIsFemale = [true, false, false];

console.log("The employee 1 is " + empNames[0]);
console.log("The employee 1 is " + empAges[0]);
console.log("The employee 1 is " + empIsFemale[0]);

console.log("The employee 2 is " + empNames[1], empAges[1], empIsFemale[1] );
console.log("The employee 3 is " + empNames[2], empAges[2], empIsFemale[2] );


const pavithraInfo = ["Pavithra", 25, true];
const patelInfo = ["Patel", 35, false];
const mohammedInfo = ["Mohammed", 28, false];

console.log(pavithraInfo, patelInfo, mohammedInfo);











