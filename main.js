
const allCells = document.querySelectorAll('.cell');

let row = 0;
let cell = 0;
let solved = false;

document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const index = row * 5 + cell;

    if (/^[A-Z]$/.test(key)) {
        if (cell < 5) {
            allCells[index].textContent = key;
            cell++;
        }
    }

    else if (key === 'BACKSPACE') {
        if (cell > 0) {
            cell--;
            allCells[index - 1].textContent = '';

        }
    }

    else if (key === 'ENTER') {
        if (cell === 5) {
            cell = 0;
            if (wordCheker() == true) row++;
        }

        //informs the user what the word was if game is lost
        if (row === 6 && solved === false) {
            alert("The word was " + chosen_word + "!");
        }
    }

    if (allCells[index].textContent !== '') {
        allCells[index].classList.add('inserted');
    } else{
        allCells[index-1].classList.remove('inserted');
    }
})

function wordCheker() {
    let guess = '';
    for (let i = 0; i < 5; i++) {
        guess += allCells[row * 5 + i].textContent;
    }
    guess = guess.toLocaleLowerCase();

    //checks if the word is in the word bank
    if (!word_bank.includes(guess)) {
        alert("Word does not exist!");
        cell = 5;
        return;
    }

    //checks if the word is correct
    if (guess === chosen_word) {
        solved = true;
        alert("Correct!");
    }

    for (let i = 0; i < 5; i++) {

        //checks for letter in correct position (green)
        if (guess[i] === chosen_word[i]) {
            allCells[row * 5 + i].classList.add('correct');
        }

        //checks for misplaced letters (orange)
        if (chosen_word.includes(guess[i]) && guess[i] !== chosen_word[i]) {
            allCells[row * 5 + i].classList.add('hint');
        }

        //checks which letter is wrong
        if (!chosen_word.includes(guess[i]) && guess[i] !== chosen_word[i]) {
            allCells[row * 5 + i].classList.add('wrong');
        }
    }
    return true;
}