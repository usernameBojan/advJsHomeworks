function digitsCounter(number){
    if (number<0){
        return `${number.length-1} Digits`; 
    } else if (number>0) {return `${number.length} Digits`};
}; // Ваква ми е функцијата заради минусот у негативните броеви и него го брои ка диџит

function evenOddFunc(number){
    if (number%2===0){
        return "Even";
    } else {return "Odd"};
};

function positiveNegativeFunc(number){
    if (number>0){
        return "Positive";
    } else if (number<0) {return "Negative"};
};

function checkAll(thisNumber){
    return `${digitsCounter(thisNumber.toString())}, ${evenOddFunc(thisNumber)}, ${positiveNegativeFunc(thisNumber)}`;
};

let thisNum = 334;
let thisOtherNum = -9009;

console.log(checkAll(thisNum));
console.log(checkAll(thisOtherNum));