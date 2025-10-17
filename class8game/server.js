let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn-reset");
let newbtn = document.querySelector("#new_btn");
let msg = document.querySelector("#msg");
let newcontainer = document.querySelector(".msg_container");

let turn0 = true;
const winnerpatern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner()
    });
});

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }

}
const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}
const resetgame = () => {
    turn0 = true;
    enablebox();
    newcontainer.classList.add("hide");
}
const showWiner = (winer) => {
    msg.innerText = `Congratulation Winer is ${winer}`;
    newcontainer.classList.remove("hide");
    disablebox();
}
const checkwinner = () => {
    for (let pattern of winnerpatern) {
        // console.log(pattern[0], pattern[1], pattern[2])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // )

        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                console.log("winner", posval1)
                showWiner(posval1)
            }
        }

    }
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
