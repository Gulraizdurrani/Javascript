// console.log("one")
// console.log("two")

// setTimeout(() => {
//     console.log("Wellcome")
// }, 2000);

// console.log("three")


//callback
// const sum = (a, b) => {
//     console.log(a + b)
// }
// const calculator = (a, b, Sumcallback) => {
//     Sumcallback(a , b)
// }
// calculator(3, 4, sum)

// setTimeout(() => {
//     console.log("Wellcome  Here!")
// }, 3000);

//nested if else
// let age = 19
// if (age >= 18) {
//     if (age >= 60) {
//         console.log("Senior")
//     }
//     else {
//         console.log("Middle")
//     }
// } else {
//     console.log("Child")
// }


// nested if else
// for (let i = 0; i < 5; i++) {
//     let str = ""
//     for (let j = 0; j < 5; j++) {

//         str = str + j
//     }
//     console.log(i,str);
// }

// const getdata = (dataid) => {
//     setTimeout(() => {
//         console.log("data", dataid)
//     }, 3000);

// }
// call back hell
// const getdata = (dataid, getnextdata) => {
//     setTimeout(() => {
//         if (getnextdata) {
//             getnextdata();
//         }
//         console.log("data", dataid)
//     }, 3000);

// }

// getdata(1, () => {
//     getdata(2, () => {
//         getdata(3,()=>{
//             getdata(4)
//         })
//     })
// })


// promises

// let promise = new Promise((resolve, reject)  => {
//     console.log("I am a Promises")
//     // resolve(234)
//     reject("Some error occur")
// });

// function getdata(dataid, getnextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataid)
//             // resolve("Success")
//             reject("error")
//         }, 3000);
//         setTimeout(() => {
//             if (getnextdata) {
//                 getnextdata();
//             }
//             console.log("data", dataid)
//         }, 3000);
//     })

// }


// const getData = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promises");
//         resolve("Sucess");
//         // reject("Network error")
//     });
// }

// let promise = getData();
// promise.then((res) => {
//     console.log("Promise is fullfilled",res);
// });

// promise.catch((err) => {
//     console.log("Rejected " ,err);
// });

// function async() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data1")
//             resolve("Success")
//         }, 3000);
//     })
// }

// console.log("Fetching Data")
// let promise1 = async();
// promise1.then((res) => {
//     console.log(res);
// })

// function async1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data 1")
//             resolve("Success")
//         }, 3000);
//     })
// }
// function async2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data 2")
//             resolve("Success")
//         }, 3000);
//     })
// }

// console.log("Fetching Data 1")
// async1().then((res) => {
//     console.log("Fetching Data 2")
//     async2().then((res) => {

//     })
// })


// using promises
// function getdata(dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid)
//             resolve("Success")
//         }, 2000);
//     })

// }

// getdata(1).then((res) => {
//     console.log(res)

//     getdata(2).then((res) => {
//         console.log(res)
//     });
// })

// or promise chain
// console.log("Data 1 .......")
// getdata(1).then((res) => {
//     console.log("Data 2 ......")
//     return getdata(2).then((res) => {
//         console.log("Data 3 ......")
//         return getdata(3).then((res) => [
//             console.log(res)
//         ])
//     });
// })


//async 

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data")
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api (); //1st
//     await api (); //2nd
// }

function getdata(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataid)
            resolve("Success")
        }, 2000);
    })

}

// async function Getdata() {
//     console.log("Get Data 1 ............")
//     await getdata(1)
//     console.log("Get Data 2 ............")
//     await getdata(2)
//     console.log("Get Data 3 ............")
//     await getdata(3)
//     console.log("Get Data 4 ............")
//     await getdata(4)
//     console.log("Get Data 5 ............")
//     await getdata(5)
// }

//  iffe 
(async function () {
    console.log("Get Data 1 ............")
    await getdata(1)
    console.log("Get Data 2 ............")
    await getdata(2)
    console.log("Get Data 3 ............")
    await getdata(3)
    console.log("Get Data 4 ............")
    await getdata(4)
    console.log("Get Data 5 ............")
    await getdata(5)
}) ();