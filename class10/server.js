// const employee = {
//     calctax() {
//         console.log("Tax is 10%")
//     }
// };

// const calcsallery = {
//     sallery: 5000,
//     calctax() {
//         console.log("Tax is 20%")
//     }
// };
// const calcsallery1 = {
//     sallery: 5000,
// };
// const calcsallery2 = {
//     sallery: 5000,
// };
// const calcsallery3 = {
//     sallery: 5000,
// };
// const calcsallery4 = {
//     sallery: 5000,
// };


// calcsallery.__proto__ = employee;
// calcsallery1.__proto__ = employee;
// calcsallery2.__proto__ = employee;
// calcsallery3.__proto__ = employee;
// calcsallery4.__proto__ = employee;



//classes
// class Toyotacar {
//     constructor(brand, milage) {
//         console.log("Creating new objects");
//         this.brand = brand
//         this.milage = milage
//     }
//     start() {
//         console.log("Start")
//     }
//     stop() {
//         console.log("stop")
//     }
//     //using constructor instead
//     // brandname(brand) {
//     //     this.brand = brand
//     // }
// }

// let fortuner = new Toyotacar("fortuner" ,10); // use constructor
// console.log(fortuner)
// // fortuner.brandname("Lemarghani")
// let time = new Toyotacar("time",14); // use constructor
// console.log(time)
// // time.brandname("time")

//parent
// class person {
//     constructor() {
//         this.species = "Homo speiens";
//     }
//     eat() {
//         console.log("Eat")
//     }
//     sleep() {
//         console.log("Sleep")
//     }
//     work() {
//         console.log("Do no thing")
//     }
// }
// //child
// class engineer extends person {
//     // this function run
//     work() {
//         console.log("Working build !")
//     }
// }
// class doctor extends person {
//     work() {
//         console.log("Treatment patient !")
//     }
// }

// let gulraiz = new engineer();

//use super keyword

// class person {
//     constructor(name) {
//         // console.log("Enter parent constructor")
//         this.species = "Homo speiens";
//         this.name = name
//     }
//     eat() {
//         console.log("Eat")
//     }
// }
// class engineer extends person {
//     // to invoke parent class contructor

//     // constructor(branch) {
//     constructor(name) {
//         //  console.log("Enter child constructor")
//         super(name); // for name
//         // this.branch = branch; 
//         //  console.log("Exist child constructor")
//     }
//     work() {
//         super.eat()
//         console.log("Working build !")
//     }
// }



// // let engobj = new engineer("Toyota");
// let engobj = new engineer("Gulraiz");  // for name


// practise question

// let Data = "Secret information";

// class User {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
//     viewdata() {
//         console.log("Data is ", Data)
//     }
// }

// class Admin extends User {
//     constructor(name, email) {
//         super(name, email)
//     }
//     editdata() {
//         Data = "Data = "
//     }
// }

// let student1 = new User("Gulraiz", "Gulraiz@87gmail.com")
// let student2 = new User("shamraiz", "shamraiz@77gmail.com")

// let teacher = new User("dean", "shamraiz@77gmail.com")
// let admin1 = new Admin("admin", "shamraiz@77gmail.com")

//try catch error
let a = 34
let b = 67
console.log("a = ", a)
console.log("b = ", b)
console.log("a + b = ", a + b)
try {
    console.log("a + b = ", a + c)
} catch (err) {
    console.log(err)
}
console.log("a / b = ", a / b)
console.log("a * b = ", a * b)