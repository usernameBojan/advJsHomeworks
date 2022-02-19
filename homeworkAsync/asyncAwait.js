let printHere = document.querySelectorAll("li");
let swUrl = "https://swapi.dev/api/films";

async function getData(apiUrl){
    try {
        let response = await fetch(apiUrl);
        let result = await response.json();
        // print(result);
        getApiData(result);
    } catch(error){
        console.log(error);
    }
};

window.addEventListener("load", () => {
    getData(swUrl);
});

let getApiData = (text) => {
    let getData = text.results.map((el)=>{
        return {
            title: el.title,
            director: el.director,
            producer: el.producer,
            release_date: el.release_date
        };
    });
    getData.forEach((el) => {
        printHere[0].innerText += ` ${el.title}, `;
        printHere[1].innerText += ` ${el.director}, `;
        printHere[2].innerText += ` ${el.producer}, `;
        printHere[3].innerText += ` ${el.release_date}, `;
    })
};