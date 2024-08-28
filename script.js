function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    document.getElementById('result').innerHTML = `
        You chose <strong>${userChoice}</strong><br>
        Computer chose <strong>${computerChoice}</strong><br>
        <strong>${result}</strong>
    `;
    document.getElementById('reset-btn').style.display = 'inline-block';
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function resetGame() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('reset-btn').style.display = 'none';
}
