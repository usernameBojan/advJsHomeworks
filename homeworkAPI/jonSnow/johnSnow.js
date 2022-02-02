let getInfo = document.getElementById("getInfo");
let resultsDiv = document.getElementById("resultsDiv");

let snowURL = "https://thronesapi.com/api/v2/Characters/2";

function fetchJonSnow(apiUrl){
    let promise = fetch(apiUrl);

    promise.then(function(response){
        return response.text()
    })
    .then(function(result){
        let parsedResult = JSON.parse(result)
        showSnow(parsedResult, resultsDiv)
    })
    .catch(function(error){
        console.log(error)
    });
};

getInfo.addEventListener("click", function(){
    fetchJonSnow(snowURL);
});

function showSnow(snowInfo, el){
    el.innerHTML = `Name: ${snowInfo.firstName} <br>
    Surname: ${snowInfo.lastName} <br>
    Full name: ${snowInfo.fullName} <br>
    Title: ${snowInfo.title} <br>
    Family: ${snowInfo.family} <br>
    <img src="${snowInfo.imageUrl}" alt="Jon Snow">`
};
