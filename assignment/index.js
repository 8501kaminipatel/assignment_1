// que-1
var age = 25 ;
 var name = 'jhon deo'

// que-2
var a ='welcome to javascript';
console.log( typeof a); //string

var b = 10;
console.log(typeof b); //number

 
// que-3

var temperature = 20;
console.log(typeof temperature); //number


// que-4

var x = 5 ;
var y = 3 ;

var a = x + y ;
var b = x - y ;
var c = x * y ;
var d = x / y ;

console.log(a); //8
console.log(b); //2
console.log(c); //15
console.log(d); // 1.666666666

// que-5

var x = 5 ;
var y = 3 ;

var ans = x % y ; 

console.log(ans); //2

// que-6

var x = "Hello";
var y = "World";

var ans = x +" "+ y ;
console.log(ans); //Hello World



// que-7 

var a = 900>1000
var c = 1100>1000
var b = 1000 == 1000
var d = 900 === 1000

console.log(a); //false
console.log(b); //true
console.log(c); //true
console.log(d); //false

// que-8

var a = true ;
var b = false ;

console.log(typeof a); //boolean
console.log(typeof b); //boolean

// que-9

var a = 4 ** 2
var b = 2 ** 3
var c = 10 ** 0.5

console.log(a); //16
console.log(b); //8
console.log(c); //3.1622776601683795

// que-10

var apple = 8 ;
var orange = 5 ;

var ans = apple == orange ;
var a = apple === orange ;
var b = apple>orange ;

console.log(ans); //false
console.log(a);  //false
console.log(b);  //true


// que-11

var Name = "John" ;   
var admin = Name ;    
alert(admin);  //John     

// que-12

var age = 22 ;
var Name = "kamini";
var student  = true ;

console.log("Age:",age);   //22
console.log("Name:", Name);  //kamini
console.log("Are you a student?:", student); //true


// que-13
var grade = 85 ;
grade = 90 ;
var Name = 'Aryan';

console.log("grade;" ,grade); //90
console.log("name;",Name)   //aryan


// que-14
let name = "Arpit";

alert(`helllo ${1}`); // hello 1

alert(`hello ${"name"}`); // hello name

alert(`hello ${name}`); // hello Arpit

// que-15

var Name = "kamini";

console.log(Name); //kamini

// que-16

let Age = 22 ;
console.log("original age;",Age); //22

Age = Age + 5 ;
console.log("updates age;",Age); //27

// que-17

let firstName = "kamini";
let lastName = "Patel";

let fullName = firstName + " " + lastName;

console.log("FullName;", fullName) //  FullName; Kamini Patel


// que-18

var num = 10 ;
num = num * 5 ;


console.log(num); //50

// que-19

let x1 = 8;
let y2 = 3;

console.log("x + y;", x1 + y2) //11
console.log("x - y;", x1 - y2) //5
console.log("x * y;", x1 * y2) //24
console.log("x / y;", x1 / y2) //2.6666666666665

// que-20
let temperature1 = 20;
console.log("Before reassignment:", temperature1); //Before reassignment:20

temperature2 = "twenty degrees";
console.log("After reassignment:", temperature2); //After reassignment:twenty degress

// que-21

var m = 2
var n = 4
var o = 6
var p = 8

console.log(((m + n) * o) / (p - m)); //6

// que-22

var name1 = prompt(("NAME"));
var age2 = prompt(("age"));

console.log( "Hello, My Name is " + name1 + ". I am " + age2 + " years old!")  //Hello, My Name is aryan. I am 25 years old!