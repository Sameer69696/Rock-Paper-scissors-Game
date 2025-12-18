const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScore();

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Scissors'){
        if (computerMove === 'Rock')  {
            result ='You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You Win.';
        } else if (computerMove === 'Scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock')  {
            result ='You Win.';
        } else if (computerMove === 'Paper') {
            result = 'Tie.';
        } else if (computerMove === 'Scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock')  {
            result ='Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else if (computerMove === 'Scissors') {
            result = 'You Win.';
        }
    }

    if(result === 'You Win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = `You picked
    <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Computer picked`;

    }

function updateScore() {
    document.querySelector('.js-score')
    .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;

}

function pickComputerMove() {
    const randomNum = Math.random();

    let computerMove = '';

    if (randomNum>= 0 && randomNum <1 / 3 ) {
        computerMove = 'Rock';
    } else if (randomNum >= 1/3  && randomNum <2 / 3) {
        computerMove = 'Paper';
    } else if (randomNum >= 2/3  && randomNum < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
}
