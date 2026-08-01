const allButtonWrappers = document.querySelectorAll('.button-wrapper');

allButtonWrappers.forEach((element, id) => {
    element.classList.add('floating');
    element.style.animationDelay = ((id % 5) * 200) + 'ms';
});

const menu = document.querySelector('.menu-grid');
const game = document.querySelector('.game-grid');
const classic = document.querySelector('.classic');

classic.addEventListener('click', () => {
    menu.style.display = 'none'
    game.style.display = 'flex'
});