
const allCells = document.querySelectorAll('.cell');

let row = 0;
let cell = 0;

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
    }
})

//checks if the word submitted is correct, incorrect, or applicable
function wordCheker() {
    let guess = '';
    for (let i = 0; i < 5; i++) {
        guess += allCells[row * 5 + i].textContent;
    }
    guess = guess.toLocaleLowerCase();

    if (!word_bank.includes(guess)) {
        alert("Word does not exist!");
        cell = 5;
        return;
    }

    if (guess === chosen_word) {
        setTimeout(() => alert("Correct!"), 10);
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