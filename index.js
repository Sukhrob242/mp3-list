const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progressContainer = document.getElementById('progress_box');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs =['Private','Ниточка','Пелена'];

let songIndex = 0;

function loadingSong (song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

loadingSong(songs[songIndex]);

function playSong(){
    musicContainer.classList.add(`play`)
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove ('fa-pause')

    audio.pause();
}

function prevSong(){
    songIndex--;
    if(songIndex < 0 ){
        songIndex = songs.length - 1 ;

    }
    loadingSong(songs[songIndex]);
    playSong();
}

function nextSong(){
    songIndex++;
    if(songIndex > song.length - 1 ){
        songIndex = 0 ;

    }
    loadingSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement ;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

}

function setProgress(e) {
    const width = this.clienWidth;
    const clickX = e.offsetX 
    const duration = audio.duration 
    audio.currentTime = (clickX / width) * duration ;
}

// for playing music 

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play'); 
    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
})

// for prevus btn 

prevBtn.addEventListener('click',prevSong)

nextBtn.addEventListener('click',nextSong) 

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong) ; 