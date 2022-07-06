const benchimol = document.querySelector('.benchimol');
const meias = document.querySelector('.meias');
const gameover = document.querySelector('.game-over');

var scorejs = 0

//audios

const point = new Audio(); 
point.src = "./songs/point.mp3";

const ui = new Audio();
ui.src = "./songs/ui.mp3";

const pulo = new Audio();
pulo.src = "./songs/pulo.wav"

const cavalo = new Audio();
cavalo.src = "./songs/cavalo.mp3"

const hit = new Audio();
hit.src = "./songs/hit.wav"




window.onload = function start () {
    interval1 = setInterval(counter,2000);
}

function counter (){
    scorejs++
    ui.play();
    document.getElementById('score').innerText=scorejs;

    if (scorejs == 10) { 
        cavalo.play();
        ui.pause();
    }
}



const jump = () => {
    benchimol.classList.add('jump');

    setTimeout(() => {
        benchimol.classList.remove('jump');
    }, 700);
    pulo.play();

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
        clearInterval(interval1);
        gameover.style.display = 'block'; 
    }

}, 10);



document.addEventListener('keydown', jump);
document.addEventListener('click', jump)
