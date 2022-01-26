console.log("-----------Exercise 1-----------");

function favouriteMovies(movieArr){
    let gatherString = "";
    let incrementor = 1;
    for (let i=0; i<movieArr.length; i++){
         if (typeof movieArr[i] === "string"){
            gatherString += (`${incrementor++}. ${movieArr[i]} \n`)
        }
    }
    return gatherString;
};

let favMovArr = [5, "Pulp Fiction", "Get Out", (10*6), "Once Upon A Time In Hollywood", false, "Shutter Island", 9999, null,"Inglorious Basterds"];
let movieList = favouriteMovies(favMovArr);

console.log(movieList);

console.log("-----------Exercise 2-----------");

function doMath(numArr, num){
    let newArr = [];
    if (isNaN(num)){
        return "Wrong input";
    } else {
    for (let i=0; i<numArr.length; i++){
        if (typeof numArr[i] === "number"){
            newArr.push(numArr[i]*num);
        } 
    }return newArr;
    }  
};

let arrOfNums = [(58>57), 1, 2, 3, 4, "dzoni", 5, undefined, 6, 7, true, 8];
let randomNumber = 10;

let calculate = doMath(arrOfNums, randomNumber);

console.log(calculate);

console.log("-----------Exercise 3-----------");

function doThisMath(numArr, numArr0){
    let sumOfFirstArr = 0;
    let sumOfSecArr = 0;
    let fullSum = 0;
    for (let i=0; i<numArr.length; i++){
        if (typeof numArr[i] === "number"){
            sumOfFirstArr += numArr[i];
        }
    };
    for (let i=0; i<numArr0.length; i++){
        if (typeof numArr0[i] === "number"){
            sumOfSecArr += numArr0[i];
        }
    };
    fullSum = sumOfFirstArr + sumOfSecArr;
    return fullSum;
}

let oneNumArr = [3, "sedum", 8, (9!=9), 11, "nedefinirano", false, 4];
let secNumArr = [5, "deset", 15, (20<25), 30, true];

let calculate0 = doThisMath(oneNumArr, secNumArr);

console.log(calculate0);