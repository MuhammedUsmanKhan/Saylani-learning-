// 8. Write a script to take total marks & marks obtained by a
// student. Compute the percentage & show the result in your
// browser.

// var totmarks = prompt("Enter the Total Marks : ")

// var obtained = prompt("Enter the Marks Obtained : ")

// alert("Percenage Achieved : " + ((obtained/totmarks)*100))

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script
// to convert the total currency to Pakistani Rupees. Perform all
// calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104 Pakistani Rupee and
// 1 Saudi Riyal = 28 Pakistani Rupee)

// var currencychange = prompt("From which currency do you want to convert in Pakistani Rupees : ")

// var amount = +prompt("How much amount you want to convert ? ")

// if(currencychange === "Dollar")
// {
//  alert("Amount in Pakistani Rupees : " + (amount*104))
// }
// else if(currencychange === "Riyal")
// {
//  alert("Amount in Pakistani Rupees : " + (amount*28))
// }

// 10. Write a program to initialize a variable with some number
// and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.

// var num = +prompt("Enter the number : ")

// num = ((num + 5)*10)/2;

// alert("The number after some Arthmetic Operations have been Applied : " + num)

// 11. The Age Calculator: Forgot how old someone is? Calculate
// it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// var curryear = 2023;

// var birthyear = 2004;

// alert("They are either " + curryear-birthyear + " or " + birthyear-curryear + " Years Old .")

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)

// var rad = +prompt("Enter the radius of a Circle : ");

// alert("The circumference is : " + (2*3.142*rad));

// Calculate the area based on the radius, and output “The area is
// NN”. (Hint : Area of a circle = π r2, π = 3.142)

// alert("Area of a circle is : " + (3.142*rad*rad));

// 14. What will be the output in variables a, b & result after
// execution of the following script:
//  var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
// Explain the output at each stage:
//  --a; Ans = 1;
//  --a - --b; Ans = 1;
//    1  - 0
//  --a - --b + ++b; Ans = 2;
//   1  -  0  +  1
//  --a - --b + ++b + b--; Ans = 3;
//   1  -  0  +  1  +  1

// 15. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? Wonder no
// more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need NNNN to
// last you until the ripe old age of NN”.

// var snack = prompt("Fav Snack : ");

// var estimateAmount = +prompt("Enter estimated amount of snack :");

// var currage = +prompt("Current Age : ");

// var maxage = +prompt("Maximum Age : ");

// alert("You will need " + ((maxage-currage)*estimateAmount) + " last you until the ripe old age of " + maxage);