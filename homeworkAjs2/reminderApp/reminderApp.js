let titleInput = document.getElementById("titleInput");
let priorityStatus = document.getElementById("priorityStatus");
let colorPicker = document.getElementById("colorPicker");
let addDescription = document.getElementById("addDescription");
let addReminderBtn = document.getElementById("addReminder");
let showRemindersDiv = document.getElementById("showRemindersDiv");
let showRemindersBtn = document.getElementById("showReminders");
let remindersDiv = document.getElementById("remindersDiv");
let tableElement = document.querySelector("table");
let hideBtn = document.getElementById("hideBtn");
let priorityColumn = document.getElementById("priorityColumn");
let titleColumn = document.getElementById("titleColumn");
let descriptionColumn = document.getElementById("descriptionColumn");

let reminderArr = [];

function Reminder(name, priority, description, color){
    this.name = name,
    this.priority = priority,
    this.color = color,
    this.description = description;
    
    this.createArr = function(){
       reminderArr.push(this.name, this.priority, this.description, this.color)
       return reminderArr;
    }
};

addReminderBtn.addEventListener("click", function(){
    let newReminder = new Reminder(titleInput.value, priorityStatus.value, addDescription.value, colorPicker.value);
    newReminder.createArr();
    titleInput.value = "";
    priorityStatus.value = "Normal ⭕";
    addDescription.value = "";
    colorPicker.value = "#ff0000";
});

function showReminderFunc(){
    titleColumn.innerHTML += `<td style= "color: ${reminderArr[3]}"}>${reminderArr[0]}</td>`;
    priorityColumn.innerHTML += `<td>${reminderArr[1]}</td>`;
    descriptionColumn.innerHTML += `<td>${reminderArr[2]}</td>`;
    for (let i = 4; i<reminderArr.length; i+=4){
        titleColumn.innerHTML += `<td style= "color: ${reminderArr[3+i]}"}>${reminderArr[0+i]}</td>`;
        priorityColumn.innerHTML += `<td>${reminderArr[1+i]}</td>`;
        descriptionColumn.innerHTML += `<td>${reminderArr[2+i]}</td>`;
    }
    remindersDiv.style.display = "block";
    showRemindersDiv.style.display = "none";  
}

showRemindersBtn.addEventListener("click", showReminderFunc);

hideBtn.addEventListener("click", function(){
    showRemindersDiv.style.display = "block";
    remindersDiv.style.display = "none";
    titleColumn.innerHTML = "<td>Title</td>";
    priorityColumn.innerHTML = "<td>Priority Status</td>";
    descriptionColumn.innerHTML = "<td>Description</td>";
});