
const allCells = document.querySelectorAll('.cell');
const allCellWrappers = document.querySelectorAll('.cell-wrapper');

let row = 0;
let cell = 0;
let solved = false;

//block that gives each column its own staggered floating animation
allCellWrappers.forEach((element, id) => {
    element.classList.add('floating');
    element.style.animationDelay = ((id % 5) * 200) + 'ms';
});

//block for reading keybinds
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const index = row * 5 + cell;

    //checks if letters A-Z are being pressed, if so fill the cells
    //and add respective animations, like a darker outline (inserted) and impact (hiccup)
    if (/^[A-Z]$/.test(key)) {
        if (cell < 5) {
            allCells[index].textContent = key;
            allCells[index].classList.add('inserted');
            allCells[index].classList.add('hiccup');
            cell++;
        }
    }

    else if (key === 'BACKSPACE') {
        if (cell > 0) {
            cell--;
            allCells[index - 1].textContent = '';
            allCells[index - 1].classList.remove('inserted');
            allCells[index - 1].classList.remove('hiccup');
        }
    }

    else if (key === 'ENTER') {
        if (cell === 5) {
            cell = 0;
            const result = processGuess();

            if (result === 'correct') {
                solved = true;
            } else if (result === 'incorrect') {
                row++;
            }

        }

        //informs the user what the word was if game is lost
        if (row === 6 && solved === false) {
            alert("The word was " + chosen_word + "!");
        }
    }
})

function buildGuess() {
    let guess = '';
    for (let i = 0; i < 5; i++) {
        guess += allCells[row * 5 + i].textContent;
    }
    guess = guess.toLocaleLowerCase();

    return guess;

}

function revealGuess() {
    for (let i = 0; i < 5; i++) {
        const currRow = row;
        allCells[row * 5 + i].style.animationDelay = (i * 400) + 'ms';
        allCells[row * 5 + i].classList.add('flip');
        let result;

        //checks for letter in correct position (green)
        if (guess[i] === chosen_word[i]) result = 'correct';

        //checks for misplaced letters (orange)
        else if (chosen_word.includes(guess[i]) && guess[i] !== chosen_word[i]) result = 'hint';

        //checks which letter is wrong
        else result = 'wrong';

        setTimeout(() => {
            allCells[currRow * 5 + i].classList.add(result);
        }, (i * 400) + 500)
    }
}

function processGuess() {

    guess = buildGuess();

    //checks if the word is in the word bank
    if (!word_bank.includes(guess)) {
        for (let i = 0; i < 5; i++) {
            allCells[row * 5 + i].classList.remove('incorrect');
            void allCells[row * 5 + i].offsetWidth;
            allCells[row * 5 + i].classList.add('incorrect');
        }
        cell = 5;
        return 'invalid';
    }


    //this runs after checking that the word is acceptabl. if so, remove the incorrect animation from the class so that the flip animation can work. remember one animation at a time always
    for (let i = 0; i < 5; i++) {
        allCells[row * 5 + i].classList.remove('incorrect');
    }

    revealGuess(guess);

    //checks if the word is correct
    if (guess === chosen_word) {
        solved = true;
        cell = allCells[allCells.length - 1];
        return 'correct'
    }


    return 'incorrect';
}