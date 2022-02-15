let studentsUrl = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";
let allBtns = document.querySelectorAll("button");
let btnsDiv = document.getElementById("btnsDiv");
let avgHigher3Div = document.getElementById("avgHigher3Div"); 
let avgHigher3tB = document.getElementById("avgHigher3tB");
let femaleAvg5Div = document.getElementById("femaleAvg5Div");
let femaleAvg5tB = document.getElementById("femaleAvg5tB");
let maleSkopje18Div = document.getElementById("maleSkopje18Div");
let maleSkopje18tB = document.getElementById("maleSkopje18tB");
let avgFemale24Div = document.getElementById("avgFemale24Div");
let avgFemale24tB = document.getElementById("avgFemale24tB");
let maleNameBDiv = document.getElementById("maleNameBDiv");
let maleNameBtB = document.getElementById("maleNameBtB");
let hideBtn = document.getElementById("hideBtn");

function hideDataFunc(){
    avgHigher3Div.style.display = "none";
    femaleAvg5Div.style.display = "none";
    maleSkopje18Div.style.display = "none";
    avgFemale24Div.style.display = "none";
    maleNameBDiv.style.display = "none";
};

function getStudentData(apiUrl){
    let promise = fetch(apiUrl);

    promise.then(function(response){
        return response.json();
    })
    .then(function(result){
        console.log(result);
        printData(result);
    })
    .catch(function(error){
        console.log(error);
    });
};

window.addEventListener("load", () => {
    getStudentData(studentsUrl);
    hideDataFunc();
    hideBtn.style.display = "none";
});

function printData(text){
    let filterByGrade = text.filter((el) => {
        if (el.averageGrade > 3) {
            return el;
        }
    });
    filterByGrade.forEach((student) => {
        avgHigher3tB.innerHTML += `<tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.city}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.averageGrade}</td>
        </tr>`
    });

    let filterGender_N_avgGrade = text.filter((el) => {
        if (el.gender === "Female" && el.averageGrade === 5){
            return el;
        }
    });
    filterGender_N_avgGrade.forEach((student) => {
        femaleAvg5tB.innerHTML += `<tr>
        <td>${student.firstName}</td>
        <td>${student.gender}</td>
        <td>${student.averageGrade}</td>
        </tr>`
    });

    let filterMaleSkopje = text.filter((el) => {
        if (el.city === "Skopje" && el.age > 18 && el.gender === "Male"){
            return el;
        }
    });
    filterMaleSkopje.forEach((student) => {
        maleSkopje18tB.innerHTML += `<tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.city}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        </tr>`
    });

    let filterAvgFem24 = text.filter((el) => {
        if (el.gender==="Female" && el.age>24){
            return el;
        }
    });
    filterAvgFem24.forEach((student) => {
        avgFemale24tB.innerHTML += `<tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.averageGrade}</td>
        </tr>`
    });

    let filterMaleB = text.filter((el) => {
        if (el.firstName[0]==="B" && el.gender === "Male" && el.averageGrade > 2){
            return el;
        }
    });
    filterMaleB.forEach((student) => {
        maleNameBtB.innerHTML += `<tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.city}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.averageGrade}</td>
        </tr>`
    });
};

allBtns[0].addEventListener("click", () => {
    avgHigher3Div.style.display = "block";
    btnsDiv.style.display = "none";
    hideBtn.style.display = "block";
});

allBtns[1].addEventListener("click", () => {
    femaleAvg5Div.style.display = "block";
    btnsDiv.style.display = "none";
    hideBtn.style.display = "block";
});

allBtns[2].addEventListener("click", () => {
    maleSkopje18Div.style.display = "block";
    btnsDiv.style.display = "none";
    hideBtn.style.display = "block";
});

allBtns[3].addEventListener("click", () => {
    avgFemale24Div.style.display = "block";
    btnsDiv.style.display = "none";
    hideBtn.style.display = "block";
});

allBtns[4].addEventListener("click", () => {
    maleNameBDiv.style.display = "block";
    btnsDiv.style.display = "none";
    hideBtn.style.display = "block";
});

hideBtn.addEventListener("click", () => {
    hideDataFunc();
    btnsDiv.style.display = "block";
    hideBtn.style.display = "none";
});

