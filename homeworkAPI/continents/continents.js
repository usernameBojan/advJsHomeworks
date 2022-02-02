let getInfo = document.getElementById("getInfo");
let table = document.querySelector("table");

let continentsURL = "https://thronesapi.com/api/v2/Continents";

function fetchContinents(apiUrl){
    let promise = fetch(apiUrl);

    promise.then(function(response){
        return response.text()
    })
    .then(function(result){
        let parsedResult = JSON.parse(result)
        printContinents(parsedResult, table)
    })
    .catch(function(error){
        console.log(error)
    });
};

getInfo.addEventListener("click", function(){
    fetchContinents(continentsURL);
});

function printContinents(continentsArr, el){
    for (let i=0; i<continentsArr.length; i++){
        el.innerHTML += `<tbody><tr><td>${continentsArr[i].id+1}</td><td>${continentsArr[i].name}</td></tr></tbody>`;
    }
    el.style.display = "block";  
};
