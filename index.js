


let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choie") // Corrected variable name

let msg = document.querySelector("#msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");


//console.log(msg);



const genCompchoice = () => {


    const options = ["one", "two", "three"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];


};

const showWinner = function (userwin, userChoice, compChoice) {

    if (userwin) {

        userScore++;
        userScorepara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }

    else {

        comScore++;
        console.log("you lose ");
        compScorepara.innerText = comScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};

let drawGame = function () {

    console.log("game was draw ");
    msg.innerText = "Game was Draw .play again.";
    msg.style.backgroundColor = "blue";
}


const playGAme = (userChoice) => {

    console.log("user choise ", userChoice);
    const compChoice = genCompchoice();
    console.log("this is computer choies ", compChoice);

    if (userChoice === compChoice) {
        //Draw choise 
        drawGame();
    }

    else {

        let userwin = true;

        if (userChoice === "one") {

            userwin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "two") {

            userwin = compChoice === "three" ? false : true;
        }

        else {

            userwin = compChoice === "one" ? false : true;
        }

        showWinner(userwin, userChoice, compChoice);


    }

};


choices.forEach(function (e) {

    console.log(e);

    e.addEventListener("click", function () {

        const userChoice = e.getAttribute("id");

        playGAme(userChoice);

    });

});


