let nameInput = document.getElementById("nameInput");
let foodInput = document.getElementById("foodInput");
let drinkInput = document.getElementById("drinkInput");
let printBtn = document.querySelector("button");
let resultDiv = document.getElementById("resultDiv");

function printPerson(name, food, drink, callback){
    return callback(name, food, drink);
};

function personData(name, food, drink){
    return (`${name}'s favorite food is ${food} and favorite drink is ${drink}`);
};

printBtn.addEventListener("click", function(){
    if (nameInput.value==="" || foodInput.value==="" || drinkInput.value===""){
        resultDiv.innerHTML = `<p style="color: red">Please fill in all required fields</p>`;
    } else if (nameInput.value!=="" || foodInput.value!=="" || drinkInput.value!==""){
        resultDiv.innerHTML = "";
        resultDiv.innerHTML += `<p>${printPerson(nameInput.value, foodInput.value, drinkInput.value, personData)}</p>`;
        nameInput.value = "";
        foodInput.value = "";
        drinkInput.value = "";
    }
});