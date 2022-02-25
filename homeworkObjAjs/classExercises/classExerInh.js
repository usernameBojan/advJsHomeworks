function Person(first, last, age){
    this.name = first;
    this.surname = last;
    this.age = age;

    this.getFullName = function(){
        console.log(this.name, this.surname);
    };
};

function Student(first, last, age, academyName, studentId){
    Object.setPrototypeOf(this, new Person(first, last, age));
    this.academyName = academyName;
    this.studentId = studentId;

    this.study = function(){
        console.log(`${this.name} is studying in ${this.academyName}`);
    };
};

let petko = new Student("Petko", "Brzotrchkovski", 15, "5+ Familija", 555);
let crnorizec = new Student("Crnorizec", "Hrabar", 44, "Ohridska Knizhevna Shkola", 1111);

console.log(petko);
console.log(crnorizec);

petko.getFullName();
crnorizec.study();

function DesignStudent(first, last, age, academyName, studentId, studentOfTheMonth){
    Object.setPrototypeOf(this, new Student(first, last, age, academyName, studentId));
    this.isStudentOfTheMonth = studentOfTheMonth;

    this.attendAdobeExam = function(){
        console.log(`${this.name} is doing an adobe exam`);
    };
};

function CodeStudent(first, last, age, academyName, studentId){
    Object.setPrototypeOf(this, new Student(first, last, age, academyName, studentId));
    this.hasIndividualProject = false;
    this.hasGroupProject = false;

    this.doProject = function(projectValue){
        if(projectValue==="individual"){
            this.hasIndividualProject = true;
            console.log(`${this.name} is working on individual project`);
        } else if(projectValue==="group"){
            this.hasGroupProject = true;
            console.log(`${this.name} is working on group project`);
        };   
    };
};

function NetworkStudent(first, last, age, academyName, studentId, academyPart){
    Object.setPrototypeOf(this, new Student(first, last, age, academyName, studentId));
    this.academyPart = academyPart;


    this.attendCiscoExam = function(){
        console.log(`${this.name} is doing an cisco exam`);
    };
};

let John = new DesignStudent("John", "Smith", 22, `${DesignStudent.name.substring(0, 6)} Academy`, 2222, true);
console.log(John);
John.attendAdobeExam();
John.study();

let Joe = new CodeStudent("Joe", "Bloggs", 33, `${CodeStudent.name.substring(0, 4)} Academy`, 3333);
console.log(Joe);
Joe.doProject("individual");
console.log(Joe);
Joe.study();

let Jan = new NetworkStudent("Jan", "Kowalski", 44, `${NetworkStudent.name.substring(0,7)} Academy`, 4444, 2);
console.log(Jan);
Jan.attendCiscoExam();
Jan.study();