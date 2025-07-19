let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container');
let userScorePara = document.querySelector('#user-score')
let computerScorePara = document.querySelector('#computer-score');
let resetBtn = document.querySelector('#reset-btn');


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})

const generateComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log('Game was draw.');
    msg.innerText = `Game was draw 😐`;
    msg.style.backgroundColor = '#242423';
}

const showwinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log('You win');
        msg.innerText = `You win ! 😀 Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = 'green';
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log('You lose');
        msg.innerText = `You lose ☹️ ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const playGame = (userChoice) => {
    console.log('user choice is', userChoice);
    const computerChoice = generateComputerChoice();
    console.log('computer choice is', computerChoice);


    if (computerChoice === userChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = computerChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = computerChoice === 'rock' ? true : false;
        } else {
            userWin = computerChoice === 'rock' ? false : true;
        }
        showwinner(userWin, userChoice, computerChoice);
    }
}

const resetGame = () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = 0;
    computerScorePara.innerText = 0;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#242423";
}

resetBtn.addEventListener('click', resetGame);