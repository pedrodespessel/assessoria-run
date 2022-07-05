const benchimol = document.querySelector('.benchimol');
const meias = document.querySelector('.meias');
const gameover = document.querySelector('.game-over');

const jump = () => {
    benchimol.classList.add('jump');

    setTimeout(() => {
        benchimol.classList.remove('jump');
    }, 700);

}
const loop = setInterval(() => {

    const meiasPosition = meias.offsetLeft;
    const benchimolPosition = +window.getComputedStyle(benchimol).bottom.replace('px', '');

    console.log(meiasPosition)

    //se perder...
    if (meiasPosition <= 45 && meiasPosition > 0 && benchimolPosition < 60) {

        meias.style.animation = 'none';
        meias.style.left = `${meiasPosition}px`;

        benchimol.style.animation = 'none';
        benchimol.style.bottom = `${benchimolPosition}px`;

        gameover.style.display = 'block'; 
    }

}, 10);

document.addEventListener('keydown', jump);