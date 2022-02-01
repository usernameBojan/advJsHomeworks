let searchMovie = document.querySelector("input");
let checkBtn = searchMovie.nextElementSibling;
let allDivs = document.querySelectorAll("div");
let answerDiv = allDivs[1];
let greenHeader = document.getElementById("greenHeader");
let redHeader = document.getElementById("redHeader");

let arrOfMovies = ["pulp fiction", "se7en","get out", "the shining", "bal-can-can", "1408", "avatar"];

function checkMoiveAvailability(movieInput, moviesArr){
    for (let i = 0; i<moviesArr.length; i++) {
        if (movieInput!==moviesArr[i]){
            redHeader.style.display = "block";
            redHeader.innerText = "You can't rent this movie."
            greenHeader.style.display = "none";
            searchMovie.value = "";
            } else if (movieInput===moviesArr[i]){
            redHeader.style.display = "none";
            greenHeader.style.display = "block";
            greenHeader.innerText = "You can rent this movie.";
            searchMovie.value = "";
            break;
        }
    }    
};


checkBtn.addEventListener("click", function(){
    if (searchMovie.value === ""){
        alert ("Enter movie name.");
    } else {checkMoiveAvailability(searchMovie.value.toLowerCase(), arrOfMovies)}
})
