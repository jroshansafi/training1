// //No. 1 Organize friend details into proper js on.
// // There should be details of at least 3 friends
// // each friend should have the following details
// // name, age, is he or she a college friend, hobbies
// // you dont need to use real values for age etc but data types should be apt
// //eg:1

const friends1 = {
    name:  "Priya",
    age :   30,
    isCollegeFriend: true,
    hobbies : ['swimming', 'yoga']
}

const friends2 = {
    name:  "Sabira",
    age :   28,
    isCollegeFriend: true,
    hobbies : ['tailoring', 'skating']
}

const friends3 = {
    name:  "Sathish",
    age :   30,
    isCollegeFriend: false,
    hobbies : ['bowler', 'boxer'] 
}

const friendList = [friends1,friends2, friends3];

//console.log("The Friends are:", friends1 , friends2 , friends3);
 //console.log("My friends Names & Hobbies are:", friends1['name'],friends1.hobbies, friends2['name'], friends2.hobbies,friends3['name'],friends3.hobbies);
// console.log("The 1st Friend is :", friends1.name, friends1.age, friends1.isCollegeFriend, friends1['hobbies']);
// console.log("The 2nd Friend is :", friends2.name, friends2.age, friends2.isCollegeFriend, friends2['hobbies']);
// console.log("The 3rd Friend is :", friends3.name, friends3.age, friends3.isCollegeFriend, friends3['hobbies']);

// const friends = {
//     name:  ["Priya","Sabira", "Sathish"],
//     age :   [30, 29, 31],
//     isCollegeFriend: [true, true, false],
//     hobbies : [['swimming', 'yoga'], ['tailoring', 'skating'], ['bowler', 'boxer']]
// }

// console.log(friends);
// console.log("The 1st friend is:",  friends.name[0], friends.age[0], friends.isCollegeFriend[0], friends.hobbies[0]);
// console.log(friends.name, friends.age, friends.isCollegeFriend, friends.hobbies);

//eg:2
const friendsDetails = [{
    name:  "Priya",
    age :   30,
    isCollegeFriend: true,
    hobbies : ['swimming', 'yoga']
},
{
    name:  "Sabira",
    age :   28,
    isCollegeFriend: true,
    hobbies : ['tailoring', 'skating']
},
{
    name:  "Sathish",
    age :   30,
    isCollegeFriend: false,
    hobbies : ['bowler', 'boxer']
}]

//console.log(friends);
const [friend11, friend22, friend33] = friendsDetails;
console.log(friendsDetails);
console.log(friend11);
//const friend22 = friends[1];
//console.log(friend22);
//const friend33 = friends[2];
//console.log(friend33);

// No.2
const company = {
    name : 'provility',
    noOfEmployess: 20,
    owner:'ashraf',
    services: ['mobile app' ,'web app'],
    companyInfo:'name',
    companyAttributes: ['noOfEmployess','owner']
}
console.log(company.name);
console.log(company.noOfEmployess);
console.log(company['name']);
company.name = "mathdisk"
console.log(company['name']);
console.log(company[company.companyInfo]);
company[company.companyInfo] = "mathdisk"
console.log(company['name']);
console.log(company[company.companyAttributes[1]]);
console.log(company[company.companyAttributes[0]]);


//3.
const bird = {
    size: 'small',
};
  
const mouse = {
    name: 'Mickey',
    small: true,
};
console.log(mouse[bird.size]);
console.log(mouse[bird['size']]);

//4.
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj); // {  a: "three" , b: "two"}

//5.
var employee ={
    name:'gopi'
  }
  
  console.log(employee.name)
  //console.log(employee[name])
  console.log(employee['name'])