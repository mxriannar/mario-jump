const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const start = document.querySelector('#start');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0  && marioPosition < 100) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/game-over.png';
        mario.style.width = '100px';
        mario.style.marginLeft = '15px';

        document.getElementById("start").innerHTML = "GAME OVER";

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);