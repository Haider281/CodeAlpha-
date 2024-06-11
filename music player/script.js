const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');

// Music list
const songs = [
    {
        name: 'song1',
        title: 'Song 1',
        artist: 'Artist 1',
        src: 'path/to/song1.mp3'
    },
    {
        name: 'song2',
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'path/to/song2.mp3'
    },
    {
        name: 'song3',
        title: 'Song 3',
        artist: 'Artist 3',
        src: 'path/to/song3.mp3'
    }
];

// Current song index
let songIndex = 0;

// Load song details into DOM
function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
}

// Initial load
loadSong(songs[songIndex]);

// Play song
function playSong() {
    audio.play();
    playBtn.innerText = 'Pause';
}

// Pause song
function pauseSong() {
    audio.pause();
    playBtn.innerText = 'Play';
}

// Previous song
function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

// Next song
function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = playBtn.innerText === 'Pause';
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);
