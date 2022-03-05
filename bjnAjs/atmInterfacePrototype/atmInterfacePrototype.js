let mainDiv = document.getElementById("mainDiv");
let header = document.getElementsByTagName("header")[0];
let welcomeMsg = document.getElementById("welcomeMsg");
let clientName = document.getElementById("clientName");
let dateNow = document.getElementById("date");
let langDiv = document.getElementById("langDiv");
let childrenOfLangDiv = langDiv.children;
let engBtn = childrenOfLangDiv[1];
let mkBtn = childrenOfLangDiv[2];
let espBtn = childrenOfLangDiv[3];
let sdcDiv = document.getElementById("sdcDiv");
let childrenOfSdc = sdcDiv.children;
let requestCode = childrenOfSdc[0];
let sixDigitCode = requestCode.nextElementSibling;
let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let last = document.getElementById("last");
let errorMsg = document.getElementById("sdcError");
let selectDiv = document.getElementById("selectDiv");
let chooseOptionMsg = selectDiv.firstElementChild;
let options = document.querySelectorAll(".options");
let checkBalance = options[0];
let makeDeposit = options[1];
let makeWithdrawal = options[2];
let exit = options[3];
let errorEng = document.getElementById("errorEng");
let errorMk = document.getElementById("errorMk");
let errorEsp = document.getElementById("errorEsp");
let balanceDiv = document.getElementById("balanceDiv");
let balanceAnswEng = document.getElementById("balanceEng");
let balanceAnswMk = document.getElementById("balanceMk");
let balanceAnswEsp = document.getElementById("balanceEsp");
let depositDiv = document.getElementById("depositDiv");
let depositLabel = document.getElementById("depositLabel");
let depositAmount = document.getElementById("depositAmount");
let depositBtn = document.getElementById("depositBtn");
let depositAnswerDiv = document.getElementById("depositAnswerDiv");
let engDeposit = document.getElementById("engDeposit");
let mkDeposit = document.getElementById("mkDeposit");
let espDeposit = document.getElementById("espDeposit");
let withdrawalDiv = document.getElementById("withdrawalDiv");
let withdrawLabel = document.getElementById("withdrawLabel");
let withdrawAmount = document.getElementById("withdrawAmount");
let withdrawBtn = document.getElementById("withdrawBtn");
let engWithdraw = document.getElementById("engWithdraw");
let mkWithdraw = document.getElementById("mkWithdraw");
let espWithdraw = document.getElementById("espWithdraw");
let backToOpts = document.getElementById("backToOpts");
let timeNow = () => dateNow.innerText = new Date();
let clientData = "./clientData.json";
let helpVar = null;


function fetchClients(clientsApi){
    let promise = fetch(clientsApi);
    promise.then(function (response) {
        return response.json()
    })
    .then(function (result){
        let thisData = getClientData(sixDigitCode.value, result);
        let thisClient = dummyClient(thisData.name, thisData.balance);
        if(helpVar===1){authenticatePasscode(thisData.sixDigitCode, second, first, second, thisClient.name, thisClient.balance);}
        else if(helpVar===2){authenticatePasscode(thisData.sixDigitCode, third, second, third, thisClient.name);}
        else if(helpVar===3){authenticatePasscode(thisData.sixDigitCode, last, third, last, thisClient.name);}
        else if(helpVar===4){lastAttempt(thisData.sixDigitCode, thisClient.name);};
        if(helpVar===5){returnAnswerDeposit(engDeposit, mkDeposit, espDeposit, thisClient);};
        if(helpVar===6){thisClient.makeWithdrawal(withdrawAmount.value);}
        returnAnswerBalance(balanceAnswEng, balanceAnswMk, balanceAnswEsp, thisClient.balance);        
    })
    .catch(function (error){
        console.log(error)
    });
};

function getClientData(passCode, data){
    let client = {};
    for (let i = 0; i < data.clients.length; i++) {
        if (passCode === data.clients[i].sixDigitCode) {
            client = data.clients[i];
        };
    };
    return client;
};

function Client(name, balance){
    this.name = name,
    this.balance = balance,

        this.makeDeposit = function (deposit){
            let parsedDeposit = parseInt(deposit);
            this.balance += parsedDeposit;
            return {parsedDeposit};
        },

        this.makeWithdrawal = function (withdraw){
            let parsedWithdrawal = parseInt(withdraw);
            if (parsedWithdrawal <= this.balance) {
                returnAnswerWithdrawSucces(engWithdraw, mkWithdraw, espWithdraw, parsedWithdrawal);
                this.balance -= parsedWithdrawal;
            } else if (parsedWithdrawal > this.balance) {
                returnAnswerWithdrawFail(engWithdraw, mkWithdraw, espWithdraw)
            };
        };
};

function dummyClient(name, balance){
    let dummyClient = new Client(name, balance);
    return dummyClient;
}

function chooseLanguage(selectedLanguage) {
    first.style.display = "inline";
    langDiv.style.display = "none";
    sdcDiv.style.display = "block";
    clientName.style.display = "none";
    if (selectedLanguage === "eng") {
        welcomeMsg.innerText = "Welcome to pseudobank ATM services"
        clientName.innerText = "Client: ";
        setInterval(timeNow, 1000);
        header.style.display = "block";
        requestCode.innerText = "Enter your six-digit code";
        errorEng.style.display = "block";
        chooseOptionMsg.innerText = "Choose an option";
        checkBalance.innerText = "Check balance";
        balanceAnswEng.style.display = "block";
        makeDeposit.innerText = "Make a deposit";
        makeWithdrawal.innerText = "Make a withdrawal";
        exit.innerText = "Exit";
        backToOpts.innerText = "<< Back to Options";
        depositLabel.innerText = "Enter the sum you wish to deposit:";
        withdrawLabel.innerText = "Enter the sum you wish to withdraw:";
        engDeposit.style.display = "block";
        engWithdraw.style.display = "block";
    } else if (selectedLanguage === "mk") {
        welcomeMsg.innerText = "Добредојдовте во системот за банкоматски услуги на псевдобанка";
        clientName.innerText = "Клиент: ";
        setInterval(timeNow, 1000);
        header.style.display = "block";
        requestCode.innerText = "Внесете го вашиот шестцифрен код за автентикација";
        errorMk.style.display = "block";
        chooseOptionMsg.innerText = "Изберете опција";
        checkBalance.innerText = "Проверка на состојба";
        balanceAnswMk.style.display = "block";
        makeDeposit.innerText = "Уплата на сметка";
        makeWithdrawal.innerText = "Подигнување на готовина";
        exit.innerText = "Излез";
        backToOpts.innerText = "<< Назад во Опции";
        depositLabel.innerText = "Внесете ја сумата која сакате да ја уплатите:";
        withdrawLabel.innerText = "Внесете ја сумата која сакате да ја подигнете:";
        mkDeposit.style.display = "block";
        mkWithdraw.style.display = "block";
    } else if (selectedLanguage === "esp") {
        welcomeMsg.innerText = "Bienvenido a la cajero automático servicios de la seudobanco";
        clientName.innerText = "Cliente: ";
        setInterval(timeNow, 1000);
        header.style.display = "block";
        requestCode.innerText = "Escribir sus código de autenticacion";
        errorEsp.style.display = "block";
        chooseOptionMsg.innerText = "Escoge una opción";
        checkBalance.innerText = "Ver saldo";
        balanceAnswEsp.style.display = "block";
        makeDeposit.innerText = "Hacer un depósito";
        makeWithdrawal.innerText = "Hacer un retracción";
        exit.innerText = "Salir";
        backToOpts.innerText = "<< Volver a las opciones";
        depositLabel.innerText = "Entrar la suma usted quieres depositar";
        withdrawLabel.innerText = "Entrar la suma usted quieres retirar:";
        espDeposit.style.display = "block";
        espWithdraw.style.display = "block";
    };
};

function errorMsgText(elEng, elMk, elEsp, value){
    if(value>=1){
        elEng.innerText = `Wrong six-digit code. Try again. You have ${value} attempts remaining.`;
        elMk.innerText = `Погрешен код за автентикација. Обидете се повторно. Ви преостануваат уште ${value} обиди.`;
        elEsp.innerText = `Incorrecto código de autenticacion. Intentar otra vez. Te quedan ${value} intentos.`;
        sixDigitCode.value = "";
    } else {
        elEng.innerHTML = `<b>Your card has been retained by the ATM due to privacy concerns. <br> 
        Please visit our nearest office to confirm your identity so you can have it back.</b>`;
        elMk.innerHTML = `<b>Вашата картичка е задржана од банкоматот поради можни нарушувања на приватноста. <br> 
        Ве молиме посетете ја нашата најблиска филјала за да го потврдите вашиот идентитет и да ја добиете назад.</b>`;
        elEsp.innerHTML = `<b>Su tarjeta ha sido retenida por el cajero automático debido a problemas de privacidad. <br> 
        Por favor visite nuestra oficina más cercana para confirmar su identidad y poder recuperarla.</b>`;
    };
};

function returnAnswerBalance(elEng, elMk, elEsp, balance) {
    let balanced = parseInt(balance);
    elEng.innerText = `Your current balance is ${balanced}`;
    elMk.innerText = `Вашата моментална состојба изнесува ${balanced}`;
    elEsp.innerText = `Sus saldo actual es ${balanced}`;
};

function returnAnswerDeposit(elEng, elMk, elEsp, client) {
    let deposit = client.makeDeposit(depositAmount.value).parsedDeposit;
    elEng.innerText = `You have successfully deposited ${deposit}`;
    elMk.innerText = `Трансакцијата е успешна. На вашата сметка се уплатени ${deposit}`;
    elEsp.innerText = `La transacción resultó con éxito. Usted has depositado ${deposit}`;
};

function returnAnswerWithdrawSucces(elEng, elMk, elEsp, withdraw) {
    elEng.innerText = `You have successfully withdrew ${withdraw}`;
    elMk.innerText = `Трансакцијата е успешна. Вие подигнавте ${withdraw}`;
    elEsp.innerText = `La transacción resultó con éxito. Usted retraerse ${withdraw}`;
};

function returnAnswerWithdrawFail(elEng, elMk, elEsp) {
    elEng.innerText = "You don't have enough funds to make this transaction.";
    elMk.innerText = "Немате доволно средства да ја извриште оваа трансакција.";
    elEsp.innerText = "No tienes fondos suficientes para realizar esta transacción.";
};

function clearAnswers(elEng, elMk, elEsp, amountInput) {
    elEng.innerHTML = "";
    elMk.innerHTML = "";
    elEsp.innerHTML = "";
    amountInput.value = "";
};

engBtn.addEventListener("click", () => {
    chooseLanguage("eng");
});
mkBtn.addEventListener("click", () => {
    chooseLanguage("mk");
});
espBtn.addEventListener("click", () => {
    chooseLanguage("esp");
});

function sdcSuccess(name){
    sdcDiv.style.display = "none";
    clientName.style.display = "block";
    clientName.innerText += name;
    selectDiv.style.display = "block";
};

function sdcFail(attemptValue1, attemptValue2){
    attemptValue1.style.display = "none";
    attemptValue2.style.display = "inline";
};

function authenticatePasscode(passcode, errorValue, failValue1, failValue2, clientName, clientBalance){
    if(sixDigitCode.value === passcode){
        sdcSuccess(clientName);
        returnAnswerBalance(balanceAnswEng, balanceAnswMk, balanceAnswEsp, clientBalance)
    } else if(sixDigitCode!=passcode){
        errorMsgText(errorEng, errorMk, errorEsp, errorValue.value)
        sdcFail(failValue1, failValue2);
    };
}; 

first.addEventListener("click", () => {
    helpVar = 1;
    fetchClients(clientData)
});

second.addEventListener("click", () => {
    helpVar = 2;
    fetchClients(clientData)
});

third.addEventListener("click", () => {
    helpVar = 3;
    fetchClients(clientData)
});

function lastAttempt(passcode, clientName){
    if (sixDigitCode.value === passcode){
        sdcSuccess(clientName);
    } else if (sixDigitCode.value != passcode){
        errorMsgText(errorEng, errorMk, errorEsp, 0);
        third.style.display = "none";
        last.style.display = "none";
        requestCode.style.display = "none";
        sixDigitCode.style.display = "none";
        selectDiv.style.display = "block";
        chooseOptionMsg.style.display = "none";
        for (all of options){all.style.display = "none"};
        exit.style.display = "block";
    };
}
last.addEventListener("click", () => {
    helpVar = 4;
    fetchClients(clientData);
});

checkBalance.addEventListener("click", () => {
    selectDiv.style.display = "none";
    balanceDiv.style.display = "block";
    backToOpts.style.display = "block";
});

makeDeposit.addEventListener("click", () => {
    selectDiv.style.display = "none";
    depositDiv.style.display = "block";
    backToOpts.style.display = "block";
});

depositBtn.addEventListener("click", () => {
    helpVar = 5;
    fetchClients(clientData);
});

makeWithdrawal.addEventListener("click", () => {
    selectDiv.style.display = "none";
    withdrawalDiv.style.display = "block";
    backToOpts.style.display = "block";
});

withdrawBtn.addEventListener("click", () => {
    helpVar = 6;
    fetchClients(clientData);
});

backToOpts.addEventListener("click", () => {
    selectDiv.style.display = "block";
    balanceDiv.style.display = "none";
    backToOpts.style.display = "none";
    depositDiv.style.display = "none";
    withdrawalDiv.style.display = "none";
    clearAnswers(engDeposit, mkDeposit, espDeposit, depositAmount);
    clearAnswers(engWithdraw, mkWithdraw, espWithdraw, withdrawAmount);
});

exit.addEventListener("click", () => location.reload());



