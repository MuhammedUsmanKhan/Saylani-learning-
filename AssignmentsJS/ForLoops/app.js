// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.
document.write("<h2>Q1 Answer :</h2><br>");
for(var i = 0 ; i < 5 ;i++)
{
 document.write("Hello World <br>");
}
// 2. Write a program to print numeric counting from 1 to 10.
document.write("<h2>Q2 Answer :</h2><br>");
for(var i = 1 ; i <= 10 ;i++)
{
 document.write(i+"<br>");
}
// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.
document.write("<h2>Q3 Answer :</h2><br>");
var num1;
var num2;
num1 = prompt("Enter any number");
num2 = prompt("Length of Number");
for(var i = 1 ; i <= num2 ;i++)
{
 document.write(num1 + " x " + i + " = " + num1*i + "<br>");
}