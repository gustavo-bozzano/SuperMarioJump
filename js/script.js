// TODO: Fix som pulo, main menu e randomizar pipes (tubos)

// Audios
const marioDeath = document.getElementById('marioDeath');
const marioJump = document.getElementById('marioJump');

// Elementos
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Mario esta vivo????
let marioAlive = true;

// Score
let score = 0;
const scoreDisplay = document.querySelector('.score-display');

const jump = function () {
    if (marioAlive == true) {
        marioJump.play();
        console.log('pulou');
        mario.classList.add('jump');

        setTimeout(function reset() {
            mario.classList.remove('jump')
        }, 550);
    }
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

        marioDeath.play();
        clearInterval(loop);
        return marioAlive = false;
    }

    while (marioAlive = true) {
        score++;
        scoreDisplay.innerHTML = `SCORE ${(score / 10).toFixed(0)}`;
        break;
    }
}, 10);

document.addEventListener('keydown', jump);