const allTitleCells = document.querySelectorAll('.cell-title');
const allTitleCellWrappers = document.querySelectorAll('.cell-wrapper-title');
const title = ["W", "O", "R", "D", "L", "E"];
const background = ['correct', 'wrong', 'hint'];

//block that gives each column its own staggered floating animation

for (let i = 0; i < 6; i++) {
}

for (let i = 0; i < 6; i++) {

    allTitleCellWrappers[i].classList.add('floating');
    allTitleCellWrappers[i].style.animationDelay = ((i) * 200) + 'ms';

    setTimeout(() => {
        allTitleCells[i].textContent = title[i];
        allTitleCells[i].classList.add('inserted');
        allTitleCells[i].classList.add('hiccup-title');

    }, (i * 200))
}

let duration = 5 * 200;

setTimeout(() => {
    for (let i = 0; i < 6; i++) {

        setTimeout(() => {
            allTitleCells[i].classList.add('flip');
        }, (i * 200))
        setTimeout(() => {
            allTitleCells[i].classList.add(background[Math.floor(Math.random() * background.length)]);
        }, ((i * 200) + 500))
    }
}, (duration + 400))