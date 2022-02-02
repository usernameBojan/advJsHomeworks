let showCharsBtn = document.getElementById("showCharsBtn");
let resultsDiv = document.getElementById("resultsDiv");

let charactersUrl = "https://thronesapi.com/api/v2/Characters";

function fetchCharacters(apiUrl){
    let promise = fetch(apiUrl)
    promise.then(function(response){
        return response.text()
    })
    .then(function(result){
        let parsedResult = JSON.parse(result)
        console.log(parsedResult);
        printCharacters(parsedResult, resultsDiv)
    })
    .catch(function(error){
        console.log(error)
    });
};

showCharsBtn.addEventListener("click", function(){
    fetchCharacters(charactersUrl);
});

function printCharacters(charsArr, el){
    el.innerHTML = "";
    for (let i=0; i<charsArr.length; i++){
        el.innerHTML += `<br> Name: ${charsArr[i].firstName} <br>
    Surname: ${charsArr[i].lastName} <br>
    Full name: ${charsArr[i].fullName} <br>
    Title: ${charsArr[i].title} <br>
    Family: ${charsArr[i].family} <br>
    <img src="${charsArr[i].imageUrl}" alt="Game of Thrones character">`
    }
};