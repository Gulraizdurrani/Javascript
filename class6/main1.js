// alert('Wellcome')
// window.console.log("aaa")
// window.alert("wellcome")
// console.dir(document)
// console.log(document.body)
// console.log(document)

// let elemnt = document.getElementById("aa")
// console.dir(elemnt)
// let elemnt = document.getElementsByClassName("classes")
// console.dir(elemnt)
// let elemnt = document.getElementsByTagName("div")
// console.dir(elemnt)
// let firselemnt = document.querySelector("p")
// console.dir(firselemnt)
// let allelemnt = document.querySelectorAll("div")
// console.dir(allelemnt)
// let allelemnt = document.querySelectorAll("#butt")
// console.dir(allelemnt)
//  let firselemnt = document.querySelector(".myclass")
// console.dir(firselemnt)
//  let firselemnt = document.querySelector("#butt")
// console.dir(firselemnt)
//  let div = document.querySelector("div");  // iinertext
// console.dir(div)

// div.innerText
// 'fruits\napple\nmango\npear\ngrapes'
// div.inn
// undefined
// div.innerHTML
// '\n      <h1>fruits</h1>\n      <ul>\n
// <li>apple</li>\n        <li>mango</li>\n        <li>pear</li>\n
//    <li>grapes</li>\n      </ul>\n  run in inspect

// heading.innerText = "Wellcome" run in inspect
//  let heading = document.querySelector("h1");
// console.dir(heading)

//  let heading = document.querySelector("h2");
// console.dir(heading)

// excersize
// let h1 = document.querySelector("h1");
// console.dir(h1.innerText)
// h1.innerText = h1.innerText + "From Apna College"

// 2nd
// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "New unique 1";
// divs[1].innerText = "New unique 2";
// divs[2].innerText = "New unique 3";

//2nd method
let divs = document.querySelectorAll(".box");
idx = 1

for (div of divs){
    div.innerText = `New unique value ${idx}`;
    idx++;
}
