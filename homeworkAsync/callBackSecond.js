let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let gender = document.getElementById("gender");
let dayInput = document.getElementById("dateOfBirth");
let monthInput = document.getElementById("monthOfBirth");
let yearInput = document.getElementById("yearOfBirth");
let hobbies = document.getElementById("hobbies");
let returnDiv = document.getElementById("returnDiv");
let btn = document.querySelector("button");
let date = new Date;

for(let i=1; i<=31; i++){
    if (i<=12){
        monthInput.innerHTML += `<option>${[i]}</option>`;
    };
    dayInput.innerHTML += `<option>${[i]}</option>`;
};

for(let i=2022; i>=1903; i--){
    yearInput.innerHTML += `<option>${[i]}</option>`;
};

let printThisPerson = (person, callback) => {
    return callback(person);
};

function Person(first, last, age, gender, hobbies){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
    this.hobbies = hobbies;

    this.printPerson = function(){
        returnDiv.innerHTML = `<h4>User created</h4> <p>Fullname:${first} ${last}</p> 
        <p>Age: ${age}</p> <p>Gender: ${gender}</p> <p>Hobbies and interests: ${hobbies}</p>`
    }
};

let getAge = (di, mi, yi) => {
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let age = 0;

    if (mi>month){
        age = year-yi-1;
    } if (mi==month && di>day){
        age = year-yi-1;
    } if (mi<month){
        age = year-yi;
    } if (mi==month && di<=day){
        age = year-yi;
    }
    return age; // Заради вежбање логика, знам дека има многу поедноставни начини да се добие возраста xD
};

btn.addEventListener("click", ()=> {
    let thisPerson = new Person(firstName.value, lastName.value, getAge(dayInput.value, monthInput.value, yearInput.value), gender.value, hobbies.value);
    printThisPerson(thisPerson, thisPerson.printPerson)
    firstName.value = "";
    lastName.value = "";
    dayInput.value = "none";
    monthInput.value = "none";
    yearInput.value = "none";
    gender.value = "none";
    hobbies.value = "";
});