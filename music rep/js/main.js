// Song data
const songlist = [
    {
        title: "Acustic Breeze",
        File: "acousticbreeze.mp3",
        cover: "1.jpeg"
    },
    {
        title: "A New Beginning",
        File: "anewbeginning.mp3",
        cover: "2.jpeg"
    },
    {
        title: "Creative Minds",
        File: "creativeminds.mp3",
        cover: "3.jpeg"
    },
]

//Cancion actual
let actualSong = null

//Cancion Actual
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
progressContainer.addEventListener("click", setProgress)

//Escuchar el elemento Audio
audio.addEventListener("timeupdate", updateProgress)

//Escuchar Clicks en los controles
play.addEventListener("click", () => {
    if (audio.onpause) {.g 
        playSong()        
    } else {
        pauseSong()        
    }
})

next.addEventListener("click", () => nextSong())
prev.addEventListener("click", () => prevSong())

//Cargar canciones y mostrar listados
function loadSongs() {
    songlist.forEach((song, index) => {
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a")
        // Hidratar a
        link.textContent = song.title
        link.href = "#"
        // Escuchar clicks
        link.addEventListener("click", () => loadSongs(index))
        // Añadir a li
        li.appendChild(link)
        
    })
}