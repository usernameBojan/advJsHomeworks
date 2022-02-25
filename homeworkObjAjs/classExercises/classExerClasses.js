class Person {
    constructor(first, last, age) {
        this.name = first;
        this.surname = last;
        this.age = age;
    };

    getFullName() {
        console.log(`Fullname: ${this.name} ${this.surname}`);
    };
};

class Student extends Person {
    constructor(first, last, age, academyName, studentId) {
        super(first, last, age)
        this.academyName = academyName;
        this.studentId = studentId;
    };

    study() {
        console.log(`${this.name} is studying in ${this.academyName}`);
    };

    academyOfStudent(student) {
        if (student.academyName === this.academyName) {
            return this.academyName;
        };
    }
};

let johnny = new Student("John", "Doe", 19, "SEDC", 99);
let jan = new Student("Jan", "Kowalski", 20, "SEDC", 999);

console.log(johnny);
johnny.getFullName();
console.log(jan);
jan.study();

class DesignStudent extends Student {
    constructor(first, last, age, academyName, studentId, isStudentOfTheMonth) {
        super(first, last, age, academyName, studentId)
        this.isStudentOfTheMonth = isStudentOfTheMonth;
    };

    attendAdobeExam() {
        console.log(`${this.name} is doing an adobe exam`);
    }
}

class CodeStudent extends Student {
    constructor(first, last, age, academyName, studentId) {
        super(first, last, age, academyName, studentId)
        this.hasIndividualProject = false;
        this.hasGroupProject = false;
    };

    doProject(projectValue) {
        if (projectValue === "individual") {
            this.hasIndividualProject = true;
            console.log(`${this.name} is working on individual project`);
        } else if (projectValue === "group") {
            this.hasGroupProject = true;
            console.log(`${this.name} is working on group project`);
        }
    }
}

class NetworkStudent extends Student {
    constructor(first, last, age, academyName, studentId, academyPart) {
        super(first, last, age, academyName, studentId);
        this.academyPart = academyPart;
    };

    attendCiscoExam() {
        console.log(`${this.name} is doing an cisco exam`);
    };
};

let Joan = new DesignStudent("Joan", "Ferrer", 22, `${DesignStudent.name.substring(0, 6)} Academy`, 2222, false);
console.log(Joan);
Joan.attendAdobeExam();
Joan.study();

let Johann = new CodeStudent("Johann", "Schmidt", 33, `${CodeStudent.name.substring(0, 4)} Academy`, 3333);
console.log(Johann);
Johann.doProject("group");
console.log(Johann);
Johann.study();

let Jovan = new NetworkStudent("Jovan", "Kovachev", 44, `${NetworkStudent.name.substring(0,7)} Academy`, 4444, 1);
console.log(Jovan);
Jovan.attendCiscoExam();
Jovan.study();

console.log(Joan.academyOfStudent(Joan));
console.log(Johann.academyOfStudent(Johann));
console.log(Jovan.academyOfStudent(Jovan));
