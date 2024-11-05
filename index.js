const ad = document.querySelector(".song");
const playing = document.querySelector(".fa-play");
const pauses = document.querySelector(".fa-pause");
const forw = document.querySelector(".fa-forward-step");
const ttl = document.querySelector(".title");
const art_img = document.querySelector("#artist");
const art_name = document.querySelector("#name");
const playSong = document.querySelector(".playsong");

const artist_name = ["Manyika", "Canohn", "Munyinda", "Sam Piano"];
const artist_title = ["He Hedith My Soul", "Cino Calo", "All That Flame"];

playSong.addEventListener('click', effect)

function effect(){

    if(ad.duration == ad.currentTime){
        x += 1;
        console.log(x)
    }

    if((!playing.classList.contains('none'))){
        ad.play();
        // setInterval(prog,1000);
        // setInterval(line,1000);
        // Progres.addEventListener('click', (e) => {
        //     var widthbar2 = (e.offsetX/e.target.clientwidth)*ad.duration;
        //     ad.currentTime =  widthbar2;
        // });
    } 
    else{
        ad.pause();
    }
        ttl.classList.toggle('run');
        playing.classList.toggle('none');
        pauses.classList.toggle('none');
        art_img.classList.toggle('round');
        dur();
}

function removeEffect(){
    ad.pause();
    ad.currentTime = 0.01;
    ttl.classList.remove('run');
    playing.classList.remove('none');
    pauses.classList.add('none');
    art_img.classList.remove('round');
}

function forward(){
    dur();
    x += 1;
    removeEffect();
    songs(x);
    if(x >= artist_name.length - 1){
        x = -1
    }
}

function songs(x){

    art_name.innerHTML = artist_name[x];
    ttl.innerHTML = artist_title[x];
    art_img.src = `./Canohn${x}.jpg`;
    ad.src = `./B${x}.mp3`;

}

songs(0);