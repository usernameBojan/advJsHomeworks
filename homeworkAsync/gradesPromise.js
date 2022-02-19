let allSelects = document.querySelectorAll("select");
let btn = document.querySelector("button");
let resultDiv = document.getElementById("resultDiv")

for (let i=0; i<allSelects.length; i++){
    for (let j=6; j<=10; j++){
        allSelects[i].innerHTML += `<option>${[j]}</option>`;
    };
};

function determineGradesFunc(gradesArr){
    let gradesAcc = gradesArr.reduce((accumulated, grade) => accumulated += grade);
    let gradesAvg = gradesAcc/10;
    return new Promise((resolve, reject) => {
        if (gradesAvg >= 7.5) {
            resolve(`<h4 style="color: green">Student has passed with average grade of ${gradesAvg}</h4>`);
            } else if (gradesAvg < 7.5) {
            reject(`<h4>Student did not pass, his average grade was ${gradesAvg}</h4>`);
            }
        });
};

btn.addEventListener("click",()=>{
    let gradesArray = [];
    for (let i=0; i<allSelects.length; i++){
            gradesArray.push(allSelects[i].value);
            allSelects[i].value = "none";
    };
    let parsedArray = gradesArray.map(Number);

    determineGradesFunc(parsedArray)
    .then((success) => {resultDiv.innerHTML = success;})
    .catch((error) => {resultDiv.innerHTML = error;})
});