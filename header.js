const allTitleCells = document.querySelectorAll('.cell-title');
const allTitleCellWrappers = document.querySelectorAll('.cell-wrapper-title');
const title = ["W", "O", "R", "D", "L", "E"]

//block that gives each column its own staggered floating animation
allTitleCellWrappers.forEach((element, id) => {
    element.classList.add('floating');
    element.style.animationDelay = ((id % 6) * 200) + 'ms';
});

for (let i = 0; i < 6; i++) {
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
        }, (i*200))
        setTimeout(() => {
            allTitleCells[i].classList.add('correct');
        }, ((i*200)+500))
    }
}, (duration + 400))