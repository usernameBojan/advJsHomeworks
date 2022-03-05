let searchBar = document.getElementById("searchBar");
let searchBtn = document.getElementById("searchBtn");
let searchCurrency = document.getElementById("searchCurrency");
let searchLang = document.getElementById("searchLang");
let countryCard = document.getElementById("countryCard");
let flag = document.getElementById("flag");
let countryName = document.getElementById("countryName");
let cardTextAll = document.querySelectorAll(".card-text");
let population = cardTextAll[0];
let capitalCity = cardTextAll[1];
let area = cardTextAll[2];
let englishBtn = document.getElementById("englishBtn");
let euroBtn = document.getElementById("euroBtn");
// let langList = document.getElementById("langList");
// let spokenLangBtn = document.getElementById("spokenLangBtn");
// let dropDown = document.getElementById("dropDown");
// let germanicLangBtn = document.getElementById("germanicLangBtn");
// let allGerm = document.getElementById("allGerm");
// let germLangs = document.getElementById("germLangs");
// let latLangBtn = document.getElementById("latLangBtn");
// let allLat = document.getElementById("allLat");
// let latLangs = document.getElementById("latLangs");
// let slavicLangBtn = document.getElementById("slavicLangBtn");
// let allSlav = document.getElementById("allSlav");
// let slavLangs = document.getElementById("slavLangs");

async function getData(searchValue, path){
    let countriesUrl = `https://restcountries.com/v2/${path}/${searchValue}`
    try {
    let response = await fetch(countriesUrl);
    let result = await response.json();
    console.log(result);
    console.log(getCountryData(result));
    populateCard(getCountryData(result));
    } catch(error){
        console.log(error);
    };
};



function getCountryData(data){
    let getData = data.map((el) => {
        return{
            name: el.name,
            population: el.population,
            capital: el.capital,
            area: el.area,
            flag: el.flag,
            lang: el.languages,
            currencies: el.currencies
        };
    });
    return getData;
};

function cardDiv(name, population, area, capital, flag){
    countryCard.innerHTML += `
    <div style="width: 24rem; border: 1px solid grey; margin: 10px 12px 10px 75px">
        <img class="card-img-top" src="${flag}" alt="Card image cap" id="flag">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Capital city: ${capital}</p>
          <p class="card-text">Area: ${area} km2</p>
          <p class="card-text">Population: ${population}</p>
        </div>
    </div> 
    `
};

function populateCard(result){
    for (data of result){
        cardDiv(data.name, data.population, data.area, data.capital, data.flag);
    };
};

searchBtn.addEventListener("click", () => {
    getData(searchBar.value, "name");
    countryCard.innerHTML = "";
    searchBar.value = "";
});

englishBtn.addEventListener("click", () => {
    getData("eng", "lang");
    countryCard.innerHTML = "";
});

euroBtn.addEventListener("click", () => {
    getData("eur", "currency");
    countryCard.innerHTML = "";
})

// let germanicLangs = ["English", "German", "Dutch", "Swedish", "Afrikaans", "Danish", "Norwegian", "Luxembourgish", "Icelandic", "Faroese"];
// let romanceLangs = ["Spanish", "Portuguese", "French", "Italian", "Romanian", "Romansh"];
// let slavicLangs = ["Russian", "Ukrainian", "Polish", "Serbian", "Czech", "Bulgarian", 
// "Croatian", "Belarusian", "Slovak", "Macedonian", "Slovene", "Bosnian", "Montenegrin"];

// let populateLists = ((germEl, latEl, slavEl) => {
//     for (lang of germanicLangs){
//         germEl.innerHTML += `<li><button class="btn btn-outline-primary col-8 germanic">${lang}</button><li>`;
//     };
//     for (lang of romanceLangs){
//         latEl.innerHTML += `<li><button class="btn btn-outline-primary col-8 latin">${lang}</button><li>`;
//     };
//     for (lang of slavicLangs){
//         slavEl.innerHTML += `<li><button class="btn btn-outline-primary col-8 slavic">${lang}</button><li>`;
//     };
// })(germLangs, latLangs, slavLangs);

// let gerLangBtns = document.querySelectorAll(".germanic");
// let latLangBtns = document.querySelectorAll(".latin");
// let slavLangBtns = document.querySelectorAll(".slavic");

// for(lang of gerLangBtns){
//     if (lang.innerText==="Dutch"){
//         lang.addEventListener("click", () => {
//             console.log("cool");
//         });
//     }
// }