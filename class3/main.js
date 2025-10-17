//console.log("Loop  String classes")
/*
for(let count=1; count<=100; count++){
    console.log("Wellcome")
}
console.log("Loop has end")
*/
/*
let sum = 0;
for(let i=1; i<=8; i++){
    sum  = sum + i;
}
console.log("Sum = ",sum)
*/

// while condition

/*
let i = 1;
while(i<=5){
    console.log("Wellcome")
    i++;
}
    */

// do while loop
/*
let i =1;
do{
    console.log("i = ", i)
    i++;
}while(i<=5)
*/

// for off loop
/*
let text = "Gulraiz"
let length = 0;
for(let val of text ){
    console.log("I = ",val)
    length++;
}
console.log("The size =",length)*/

// for in loop
/*
let student = {
    name:"Gulraiz",
    cgpa:3.6,
    Address:"Haln",
    isStudent : true
}

for(let key in student){
    console.log("Key = ", key , "values = " , student[key])
}
    */

/*
for(let num=0; num<=100; num++){
    if(num%2==0){ //if(num%2!=) for odd number
        console.log("Num = ",num )
    }
}
    */
/*
let guessnum = 56;
let user = prompt("Guess the number:")
while(user != guessnum){
    user = prompt("You entered wrong number.Try again")
}
console.log("Congragulation you hava success")*/

//string
/*
let name = "Gulraiz"
console.log(name.length)
*/

/*
details = {
    "Name":"Gulraiz",
    "Age" : 22
}
names = `My ${details.Name} and ${details.Age} old ${1+3+5}`
console.log(names)
//console.log(details)
*/

//let name = "Gulraiz\nDurrani\t Hallan Shamali"
//console.log(name.length)
//console.log(name)
//name = name.toUpperCase()
//name = name.toLowerCase()
/*
let names = "          College           "
names = names.trim()
console.log(names)
*/
/*
name = "Gulraiz "
console.log(name.replace("G" , "g"))
*/
//fathername = "Munir" , "Munir"
//console.log(fathername.replaceAll("Munir","Khan"))

//names = name.concat(fathername)
//console.log(names)
//console.log(name.slice(1,4))
//console.log(name.slice(4,))
/*
name = "Gulraiz"
console.log(name[1])
*/

let fullname = prompt("Enter Full name without spaces :")

let username = "@" + fullname + fullname.length;
console.log(username)


