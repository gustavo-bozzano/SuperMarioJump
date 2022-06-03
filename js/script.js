// TODO: Score e main menu

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const marioDeath = document.getElementById('marioDeath');

const jump = function () {
    mario.classList.add('jump');

    setTimeout(function reset() {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    const pipePos = pipe.offsetLeft;
    const marioPos = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePos <= 120 && pipePos > 0 && marioPos < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePos}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPos}px`;

        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        marioDeath.play(0);
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);