// 1. Declare an empty array using JS literal notation to store
// student names in future.

var student = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

var students = [];

// 3. Declare and initialize a strings array.

var studentbiodata = ["Usman","Aarish Aijaz","Abdullah","Areeb","Muneeb"];

// 4. Declare and initialize a numbers array.

var num = [1,2,3,4,5,6,7,8,9,10];

// 5. Declare and initialize a boolean array.

var bool = [true,false];

// 6. Declare and initialize a mixed array.


var mixed_array = [true,69,'Saad',false];

// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.

var mobnetwork = ["Zong", "Telenor", "Ufone","Warid/Jazz"];

// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser
// like:

document.write("<h3>Question 8</h3>")

var qualifica = ["SSC","HSC","BCS","BS","BCOM","MS", "M.Phil", "Phd"]

for(var i = 0; i < qualifica.length ; i++)
{
 document.write((i+1) + ") " + qualifica[i] + "<br>")
}

// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)

document.write("<h3>Question 9</h3>")

var TopMovies2k15 = ["Avengers:AgeOfUltron","Spectre","Jurassic World","Inside Out"];

document.write("<h2>Top Movies Of 2015</h2>")

for(var i = 0; i < TopMovies2k15.length ; i++)
{
 document.write((i+1) + ") " + TopMovies2k15[i] + "<br>")
}
document.write("<br>")
document.write("<b>Length Of an Array</b>" + " = " + TopMovies2k15.length);

// 10. Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array
// d. Car at last index of the array

document.write("<h3>Question 10</h3>")

var FavCars = ["Bhugatti","Tesla","Audi","Ford"];

document.write("<h2>Favourite Cars</h2>")

for(var i = 0; i < FavCars.length ; i++)
{
 document.write((i+1) + ") " + FavCars[i] + "<br>")
}
document.write("<br>")
document.write("<b>First Index of the Array</b>" + " = " + FavCars.indexOf("Bhugatti") + "<br>");
document.write("<b>Car at first Index of the Array</b>" + " = " + FavCars[0] + "<br>");
document.write("<b>Last Index of the Array</b>" + " = " + FavCars.indexOf("Ford") + "<br>");
document.write("<b>Car at last Index of the Array</b>" + " = " + FavCars[3] );

// 11. Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students like:

document.write("<h3>Question 11</h3>")
document.write("<br>");
var Sname = ["Usman","Abdullah","Faisal"];
var Sscore = [380,490,270];

for(var i = 0; i < Sname.length ; i++)
{
  document.write("Score of " + Sname[i] + " " + Sscore[i] + " And Percentage Obtained is : " + (Sscore[i]/500 * 100) + "<br>");
}

// 12. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
document.write("<h3>Question 12 </h3>")

var FavColors = ["Green","Blue","Red","Yellow"];

document.write("<h3>Color Names</h3>")

for(var i = 0; i < FavColors.length ; i++)
{
  document.write("<br>" + FavColors[i]);
}

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

document.write("<h3>Question 12 Part A</h3>")

var choice = prompt("What type of color do you want to add in an existing array ? ");

FavColors.unshift(choice);

for(var i = 0; i < FavColors.length ; i++)
{
  document.write("<br>" + FavColors[i]);
}

// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.

document.write("<h3>Question 12 Part B</h3>")

var choice2 = prompt("What type of color do you want to add in an existing array ? ");

FavColors.push(choice2);

for(var i = 0; i < FavColors.length ; i++)
{
  document.write("<br>" + FavColors[i]);
}

// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.

document.write("<h3>Question 12 Part C</h3>")

var choice3 = prompt("What type of color do you want to add in an existing array ? ");

var choice4 = prompt("What type of color do you want to add in an existing array ? ");

FavColors.unshift(choice3,choice4);

for(var i = 0; i < FavColors.length ; i++)
{
  document.write("<br>" + FavColors[i]);
}

// d. Delete the first color in the array. Display the updated
// array in your browser.

document.write("<h3>Question 12 Part D</h3>")

FavColors.shift();

for(var i = 0; i < FavColors.length ; i++)
{
  document.write("<br>" + FavColors[i]);
}

// e. Delete the last color in the array. Display the updated
// array in your browser.

document.write("<h3>Question 12 Part E</h3>")

FavColors.pop();

for(var i = 0; i < FavColors.length ; i++)
{
  document.write("<br>" + FavColors[i]);
}

// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.

document.write("<h3>Question 12 Part F</h3>");

var choice5 = prompt("What type of color do you want to add in an existing array ? ");

var choice6 = +prompt("At which index of an array ? ");

FavColors.splice(choice6,0,choice5);

for(var i = 0; i < FavColors.length ; i++)
{
  document.write("<br>" + FavColors[i]);
}

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

document.write("<h3>Question 12 Part G</h3>");

var choice7 = +prompt("How many color do you want to delete in an existing array ? ");

var choice8 = +prompt("At which index of an array ? ");

FavColors.splice(choice8,choice7);

for(var i = 0; i < FavColors.length ; i++)
{
  document.write("<br>" + FavColors[i]);
}

// 13. Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method.

document.write("<h3>Question 13</h3>");

var ScoreOfStudent = [320,230,480,120]

document.write("<b>Score Of Student : </b>");

for(var i = 0; i < ScoreOfStudent.length ; i++)
{
  document.write(ScoreOfStudent[i] + " ");
}

 ScoreOfStudent.sort(function(a,b){return a-b});

document.write("<b>Ordered Score Of Student : </b>");

for(var i = 0; i < ScoreOfStudent.length ; i++)
{
  document.write(ScoreOfStudent[i]);
}


// 14. Write a program to sort the below mentioned array:
// var fruits = [“strawberry”, “apple”, “orange”, “banana”];

document.write("<h3>Question 14 </h3>");

var fruits = ["strawberry", "apple", "orange", "banana"];

fruits.sort()

for(var i = 0; i < fruits.length ; i++)
{
  document.write("<br>" + fruits[i]);
}

// 15. Write a program to initialize an array with city names. Copy
// 3 array elements from cities array to selectedCities array. 

document.write("<h3>Question 15 </h3>");

var citynam = ["Karachi","Lahore","Quetta","Multan","Peshawar","Islamabad"];

var selectedCities = [];

citynam.slice(1,4);

selectedCities = citynam.slice(1,4);

for(var i = 0; i < selectedCities.length ; i++)
{
  document.write("<br>" + selectedCities[i]);
}

// 16. Write a program to create a single string from the below
// mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

document.write("<h3>Question 16 </h3>");

var joi = ["This ", " is ", " my " , " cat"];

joined = joi.join();

document.write(joined);

// 17. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they were
// stored. (FIFO-First In First Out)

document.write("<h3>Question 17 </h3>");

var arrOfDev = ["Keryboard","Mouse","Printer","Moniter"]

document.write("<h4>FIFO : First In First Out </h4>")

for(var i = 0; i < arrOfDev.length ; i++)
{
 document.write("<br> Out :" + arrOfDev[i]);
}

// 18. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First
// Out)

document.write("<h3>Question 18 </h3>");

var arrOfDev = ["Keryboard","Mouse","Printer","Moniter"]

document.write("<h4>LIFO : Last In First Out </h4>")

for(var i = arrOfDev.length-1; i != 0 ; i--)
{
 document.write("<br> Out :" + arrOfDev[i]);
}
