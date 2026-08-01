const allButtonWrappers = document.querySelectorAll('.button-wrapper');

allButtonWrappers.forEach((element, id) => {
    element.classList.add('floating');
    element.style.animationDelay = ((id % 5) * 200) + 'ms';
});

const menu = document.querySelector('.menu-grid');
const game = document.querySelector('.game-grid');

const classic_button = document.querySelector('.classic');
const ladder_button = document.querySelector('.ladder');


classic_button.addEventListener('click', () => {
    menu.style.display = 'none'
    game.style.display = 'flex'
    document.querySelector('.level-counter').style.display = 'none';
    document.querySelector('.highscore-counter').style.display = 'none';
});

ladder_button.addEventListener('click', () => {
    menu.style.display = 'none'
    game.style.display = 'flex'
    document.querySelector('.level-counter').style.display = 'flex';
    document.querySelector('.highscore-counter').style.display = 'flex';
});