let movies = [
    {
        name: "The Dark Knight",
        year: 2008,
        rating: 9.0
    },
    {
        name: "Inception",
        year: 2010,
        rating: 8.8
    },
    {
        name: "The Hobbit",
        year: 2013,
        rating: 8.3
    },
    {
        name:"Dune",
        year:2021,
        rating:7.2
    },
    {
        name: "Fifty shades of gray",
        year: 2015,
        rating: 4.1
    },
    {
        name: "The Matrix",
        year: 1999,
        rating: 7.5
    },
    {
        name: "Casino",
        year: 1995,
        rating: 8.2
    }
];

let sortByYearASC = document.getElementById("sortByYearASC");
let sortByYearDSC = document.getElementById("sortByYearDSC");
let sortByRatingDSC = document.getElementById("sortByRatingDSC");
let sortByRatingASC = document.getElementById("sortByRatingASC");

function sortFunc(arr, param, ascOrDsc){
    let swapped = true;
    if (ascOrDsc==="ascend"){
        do {
            swapped = false;
            for (let i=0; i<arr.length-1; i++){
                if(arr[i][param]>arr[i+1][param]){
                    let temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    swapped = true;
                }
            }
            
        } while (swapped);
    };
    if (ascOrDsc==="descend"){
        do {
            swapped = false;
            for (let i=0; i<arr.length-1; i++){
                if(arr[i][param]<arr[i+1][param]){
                    let temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    swapped = true;
                }
            }
            
        } while (swapped);
    };
};


sortFunc(movies, "year", "ascend");

for (let i=0;i<movies.length;i++){
    sortByYearASC.innerHTML += `<tr>
    <td>${movies[i].name}</td>
    <td>${movies[i].year}</td>
    <td>${movies[i].rating}</td> </tr>`
};

sortFunc(movies, "year", "descend");

for (let i=0;i<movies.length;i++){
    sortByYearDSC.innerHTML += `<tr>
    <td>${movies[i].name}</td>
    <td>${movies[i].year}</td>
    <td>${movies[i].rating}</td> </tr>`
};

sortFunc(movies, "rating", "descend");

for (let i=0;i<movies.length;i++){
    sortByRatingDSC.innerHTML += `<tr>
    <td>${movies[i].name}</td>
    <td>${movies[i].year}</td>
    <td>${movies[i].rating}</td> </tr>`
};

sortFunc(movies, "rating", "ascend");

for (let i=0;i<movies.length;i++){
    sortByRatingASC.innerHTML += `<tr>
    <td>${movies[i].name}</td>
    <td>${movies[i].year}</td>
    <td>${movies[i].rating}</td> </tr>`
};




