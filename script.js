console.log('Welcome to Baraiya\'s music');

// Initial the variables
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let audioElement = new Audio('songs/1.mp3');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Manike Mage Hithe", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Alann Walker - Faded", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Daddy Yanke - Dura", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Enrique Iglesias", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Goa Beach", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Issak Taari", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "love Nwantiti", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Otnika", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Shape of You", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// Listen to events
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})  

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 8){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})