//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let myJob = `UX designer`
let myLocation = `Toronto`
let mySalary =`100000`
let myCompany =`Google`
let liEx1 = document.querySelector(`#ex1`)
liEx1.textContent = `You will be a ${myJob} in ${myLocation}, making $${mySalary} for ${myCompany}.`

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

function ageCalculator() {
    return birthYear - currentYear
}

let currentYear = 2020
let birthYear = 1986
actualAge = currentYear - birthYear

let liEx2 = document.querySelector(`#ex2`)
liEx2.textContent =`They are ${actualAge} years old.`

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let myAge = 34
let maxAge = 70
let perDay = 2

snackConsumed = (maxAge - myAge) * perDay

let liEx3 = document.querySelector(`#ex3`)
liEx3.textContent =`You will need ${snackConsumed} to last you until the ripe old age of ${maxAge}`

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 5
let pi = Math.PI
let cir = 2 * pi * radius
let area = pi * radius **2

let liEx4 = document.querySelector(`#ex4`)
liEx4.textContent = `The circumference is ${cir}, The area is ${area}`

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let currentCel = 20
let currentFah = 90
let fahrenheit =(currentCel * 9/5) + 32
let celsius =(currentFah - 32) * 5/9

let liEx5 = document.querySelector(`#ex5`)
liEx5.textContent =`${currentCel}°C is ${fahrenheit}°F ${currentFah}°F is ${celsius}°C.`

// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num1) {
    return num1 ** 2
}
let n1 = 20
let e1 = squareNumber(n1)

let liEx6 = document.querySelector(`#ex6`)
liEx6.textContent =`The result of squaring ${n1} is ${e1}.`

// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(num2) {
    return num2 / 2
}

let n2 = 30
let e2 = halfNumber(n2)
let liEx7 = document.querySelector(`#ex7`)
liEx7.textContent =`Half of ${n2} is ${e2}.`

// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(per1,per2){
    return per1 / per2*100
}
let p1 = 10
let p2 = 200
let e3 = percentOf(p1,p2)
let liEx8 = document.querySelector(`#ex8`)
liEx8.textContent =`${p1} is ${e3}% ${p2}.`

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

function areaOfCircle(n1){
    return n1 **2 * p
}
let p = 3.14
let e4 = areaOfCircle (n1)
let liEx9 = document.querySelector(`#ex9`)
liEx9.textContent =`The area for a circle with radius ${n1} is ${e4}.`

// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).

function runAll(n3){
    
}
let n3 = 5
let a1 = halfNumber(n3)
let a2 = squareNumber(a1)
let a3 = areaOfCircle(a2)
let a4 = percentOf(a3,a2)

let liEx10 = document.querySelector(`#ex10`)
liEx10.textContent =`Excercise no.5 answers: The number is ${n3} [1]${a1} [2]${a2} [3]${a3} [4]${a2}%`