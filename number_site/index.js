

// game values
let min = 1, max = 10, winningNum = getRandomNum(min, max), guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// assign the min and max value
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
      window.location.reload();
    };
});

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    
    //validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //check for a win or loss
    if (guess === winningNum) {
        //show game over message
        gameOver(true, `${winningNum} is correct, you win!`);
    } else {
        // game continues - answer wrong
        guessesLeft -= 1;
        //check for how many guesses are left
        if (guessesLeft === 0) {
            //game over message
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        } else {
            //continue guessing

            //change the input border color
            guessInput.style.borderColor = 'red';

            //clear the input
            guessInput.value = '';

            //tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

// game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    console.log(won);
    console.log(msg);

    //disable the guess input
    guessInput.disabled = true;
    //change the border color
    guessInput.style.borderColor = color;
    //set the text color
    message.style.color = color;
    //set message
    setMessage(msg);

    //play again button
    guessBtn.value = 'play again';
    guessBtn.className += 'play-again';
    console.log(msg);
}

//random number implementation
function getRandomNum(min, max) {
    return Math.floor(Math.random() * ( max + min + 1) + min);
}

// set message implementation
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}