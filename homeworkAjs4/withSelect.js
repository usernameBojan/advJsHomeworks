let fontSizeSelector = document.getElementById("fontSize");
let colorPicker = document.getElementById("colorPicker");
let submitBtn = document.querySelector("button");
let title = document.querySelector("h1");

for (let i = 12; i<=88; i+=2){
    fontSizeSelector.innerHTML += `<option>${[i]}</option>`;
};

let changeColor = (el, color) => el.style.color = color;
let changeFontSize = (el, num) => el.style.fontSize = `${num}px`;
let clearInputs = (color, font) => {color.value = "#000000"; font.value = "";}

submitBtn.addEventListener("click", () => {
    changeColor(title, colorPicker.value); 
    changeFontSize(title, fontSizeSelector.value);
    clearInputs(colorPicker, fontSizeSelector);
});

