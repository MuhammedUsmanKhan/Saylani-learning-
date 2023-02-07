// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// var age = 19;

// alert("My Age is : " + age)

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// var track = 0;

// var visited = track++;

//     if(visited == 0){

//         alert("You have visited this site " + visited + " times.") 

//     }
//     else
//     {
// ++visited
//         alert("You have visited this site " + visited + " times.") 

//     }



// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 2004;

alert("My birthYear is : " + birthYear)

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var Visitors_name = prompt("Enter your name");

var Product_title = prompt("Enter your Product name");

var Quantity = +prompt("Enter the quantity of product you want to purchase ");

alert(Visitors_name + " ordered " + Quantity + " " + Product_title + " on XYZ clothing store ");