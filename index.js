var songInfo = document.getElementById("songInfo")
var prevBtn = document.getElementById("prev")
var nextBtn = document.getElementById("next")
var playPauseBtn = document.getElementById("playPause")
var playPauseIcon = document.getElementById("icon")

currentIndex = 0
var isPlaying = false;
const audio = new Audio(songData[currentIndex].url);

function loadSong(songItem) {
    audio.src = songItem.url;
    songInfo.innerHTML =
        "<div class='cover'>" +
        "<img src='" + songItem.image + "' class='coverPicture'>" +
        "</div>" +
        "<div class='info'>" +
        "<h1 class='title'>" + songItem.title + "</h1>" +
        "<p class='sub'>" + songItem.album + " - " + songItem.year + "</p>" +
        "</div>"
}

function nextSong() {
    currentIndex++
    if (currentIndex > songData.length - 1) {
        currentIndex = 0
    }
    loadSong(songData[currentIndex])
    if (isPlaying) audio.play();
}

function prevSong() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = songData.length
    }
    loadSong(songData[currentIndex])
    if (isPlaying) audio.play();
}

function playPause() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        audio.play()
        playPauseIcon.classList.remove("fg-play-fill")
        playPauseIcon.classList.add("fg-pause-fill")
    } else {
        audio.pause()
        playPauseIcon.classList.add("fg-play-fill")
        playPauseIcon.classList.remove("fg-pause-fill")
    }
}

nextBtn.addEventListener("click", nextSong)
prevBtn.addEventListener("click", prevSong)
playPauseBtn.addEventListener("click", playPause)

loadSong(songData[currentIndex])