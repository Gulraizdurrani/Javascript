let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorepara = document.querySelector("#user_score")
const comScorepara = document.querySelector("#com_score")

const gencomchoice = () => {
    const option = ["rock", "paper", "Scissor"]
    const randix = Math.floor(Math.random() * 3)
    return option[randix]



}
const Showineer = (userWin, userchoice, comchoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beat ${comchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        comScore++;
        comScorepara.innerText = comScore;
        msg.innerText = `You Loose! ${comchoice} beat Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawgame = () => {
    // console.log("Game Dawn!")
    msg.innerText = "Game drawn try again!"
    msg.style.backgroundcolor = "pink";
}
const playgame = (userchoice) => {
    // console.log("User Choice = ", userchoice);
    const comchoice = gencomchoice()
    console.log("Comp Choice = ", comchoice);
    if (userchoice === comchoice) {
        drawgame()
    }
    else {
        let userWin = true
        if (userchoice === "rock") {
            userWin = comchoice === "paper" ? false : true
        }
        else if (userchoice === "paper") {
            userWin = comchoice === "scissor" ? false : true
        }
        else {
            userWin = comchoice === "rock" ? false : true
        }
        Showineer(userWin, userchoice, comchoice)
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)
    });
});

