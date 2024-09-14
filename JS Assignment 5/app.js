//                                      Question # 1

var num1= 3;
var num2= 5;
var add= num1 + num2
document.write("Sum of 3 and 5 is : " + add  +"<br>" +"<br>");


//                                      Question # 2

var num1= 23;
var num2= 5;
var subtract= num1 - num2
document.write("Subtraction of 23 and 5 is : " + subtract   +"<br>" );

var num1= 2;
var num2= 5;
var multiply= num1 * num2
document.write("Multiplication  of 2 and 5 is : " + multiply +"<br>");

var num1= 25;
var num2= 5;
var divide= num1 / num2
document.write("Division of 25 and 5 is : " + divide  +"<br>");

var num1= 10;
var num2= 9;
var modulus= num1 % num2
document.write("Modulus of 10 and 9 is : " + modulus  + "<br>"   +"<br>");

//                                         Question # 3

var value;
document.write("Value after variable declaration is : " + value +"<br>");
value=5;
document.write("Initial value is : " + value +"<br>");
++value;
document.write("Value after increment  is : " + value +"<br>");
value=value + 7;
document.write("Value after addition  is : " + value +"<br>");
--value;
document.write("Value after decrement  is : " + value +"<br>");
value= value % 3;
document.write("The remainder is  : " + value +"<br>" +"<br>");


//                                          Question # 4

var ticket= 600;
ticket= ticket * 5 ;
document.write("Total cost to buy 5 tickets to a movie is : " + ticket +"<br>" +"<br>");


//                                          Question # 5

var num1 = 4;
var num2 = 1;
var table = num1 * num2;
document.write(num1 + " x " + num2 + " = " + table +"<br>");
var num1 = 4;
var num2 = 2;
var table = num1 * num2;
document.write(num1 + " x " + num2 + " = " + table +"<br>");
var num1 = 4;
var num2 = 3;
var table = num1 * num2;
document.write(num1 + " x " + num2 + " = " + table +"<br>");
var num1 = 4;
var num2 = 4;
var table = num1 * num2;
document.write(num1 + " x " + num2 + " = " + table +"<br>");
var num1 = 4;
var num2 = 5;
var table = num1 * num2;
document.write(num1 + " x " + num2 + " = " + table +"<br>");
var num1 = 4;
var num2 = 6;
var table = num1 * num2;
document.write(num1 + " x " + num2 + " = " + table +"<br>");
var num1 = 4;
var num2 = 7;
var table = num1 * num2;
document.write(num1 + " x " + num2 + " = " + table +"<br>");
var num1 = 4;
var num2 = 8;
var table = num1 * num2;
document.write(num1 + " x " + num2 + " = " + table +"<br>");
var num1 = 4;
var num2 = 9;
var table = num1 * num2;
document.write(num1 + " x " + num2 + " = " + table +"<br>");
var num1 = 4;
var num2 = 10;
var table = num1 * num2;
document.write(num1 + " x " + num2 + " = " + table +"<br>" +"<br>");

//                                                Question # 6

var celsius=25;
var farenhiet=70;
var celsiusConcoverter = (farenhiet-32) * 5/9;
var farenhietconverter = ( celsius *  9/5) + 32;
document.write("<br><h1>The temperature converter : </h1>")
document.write("<br> 25<sup>0</sup>C is " + farenhietconverter +"<sup>0</sup>F")
document.write("<br> 70<sup>0</sup>F is " + celsiusConcoverter +"<sup>0</sup>C   <br><br><br><br>")

//                                                 Question # 7

document.write("<br><h1>Shopping Cart : </h1>")
var priceItem1 = 650;
document.write("Price of item 1 is : " +priceItem1 +"<br>");
var quantityItem1 = 3;
document.write("Quantity of item 1 is : " +quantityItem1 +"<br>");
var CostItem1 = priceItem1 * quantityItem1 ;
document.write("Total Cost of Item1 is : " + CostItem1 +"<br>");
var priceItem2 = 100;
document.write("Price of item 2 is : " +priceItem2 +"<br>");
var quantityItem2 = 7;
document.write("Quantity of item 2 is : " +quantityItem2 +"<br>");
var CostItem2 = priceItem2 * quantityItem2 ;
document.write("Total Cost of Item2 is : " + CostItem2 +"<br>");
var shippingCharges = 100;
document.write("Shipping Charges is : " +shippingCharges +"<br>");
var totalCost = CostItem1 + CostItem2 + shippingCharges;
document.write("Total Cost of your order is : " +totalCost +"<br>" +"<br>");

//                                                  Question # 8

var totalMarks =980;
var obtainedMarks =804;
document.write("Percentage is : "+ obtainedMarks / totalMarks * 100 +"<br>" +"<br>");

//                                                   Question # 9

var dollar = 10;
var riyal = 25;
dollar= 10*104.80; 
riyal = 25*28;
var totalCurrency= dollar + riyal;
document.write("Total currency in PKR is : " +totalCurrency +"<br>" +"<br>");


//                                                   Question # 10

var value = 4;
value= value+5;
document.write("Value after adding 5 = " + value +"<br>");
value= value*10;
document.write("Value after multipling 10 = " + value +"<br>");
var result= value/2;
document.write("Final value after divided by 2 = " + result +"<br>" +"<br>");

//                                                   Question # 11

var currentYear= 2024;
var birthYear= 2003;
var age = currentYear - birthYear;
document.write(" Your age is : " + age +"<br>" +"<br>");

//                                                    Question # 12

var radius= 20;
var pi=3.142; 
document.write("The Radius of circle is: " + radius);  
document.write(" <br>The circumference of circle is : " + (2*pi*radius) );
document.write(" <br>The area is : " + (pi*radius*radius) +"<br>" +"<br>");

//                                                  Question # 13

var favSnack= "Choclate Chip";
var age= 15;
var maxAge= 65;
var snacksPerDay= 3;
var restLife= maxAge - age;
var snack= restLife * snacksPerDay;
document.write("<br> <h1>The Lifetime Supply Calculator : </h1>")
document.write("<br> Favourite Snack : " + favSnack);
document.write("<br> Currecnt Age : " +  Number(age));
document.write("<br> Estimated MAximum  Age: " + Number(maxAge));
document.write("<br> Amount of snacks per day : " + Number(snacksPerDay));
document.write(" <br>You will need " + snack + "  " +  favSnack + " to  last  you until th age of " + maxAge);
