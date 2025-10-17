// let btn = document.querySelector("#fun");
// btn.onclick = () =>{
//     console.log("Mouse Event Class here!")
//     let a = 34;
//     a++;
//     console.log(a)
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("You are inside a div!");
// };
// let div = document.querySelector("div");
// let fun = document.querySelector("#fun");
// fun.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clinetX, e.clinetY);
// };

// let div = document.querySelector("div");
// let fun = document.querySelector("#fun");

// fun.addEventListener("click", (e) => {
//   console.log("Button 1  was clicked!");
//   // console.log(e.type)
//   // console.log(e)
// });

// fun.addEventListener("click", (e) => {
//   console.log("Button 2  was clicked!");
// });

// fun.addEventListener("click", (e) => {
//   console.log("Button  3 was clicked!");
// });

// const handler3 = () => {
//   console.log("Button  4 was clicked!");
// };

// fun.addEventListener("click", handler3);

// fun.removeEventListener("click", handler3);

let btmmode = document.querySelector("#chang");
let body = document.querySelector("body");
let currmod = "light";

btnmode = document.addEventListener("click", () => {
  if (currmod === "light") {
    currmod = "Dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currmod = " light";
    body.classList.add("light");
    body.classList.remove("dark");
  }

  console.log(currmod);
});
