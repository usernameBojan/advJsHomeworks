function Academy(name, subjects, students, start, end) {
    this.academyName = name;
    this.studentsInfo = students;
    this.subjectsData = subjects;
    this.startDate = start;
    this.endDate = end;

    this.stopRecursion = () => {
        for(let i=0; i<this.subjectsData.length; i++){
            if (this.subjectsData[i].academy === this){
                console.log("I got this!")
            }
        }
    }

    this.numOfClasses = (numOfElective) => {
        let mandatory = this.subjectsData.length * 10;
        let elective = 0;
        if (numOfElective > 0){
            mandatory = (this.subjectsData.length - numOfElective) * 10;
            elective = numOfElective * 5;
            return this.numberOfClasses = mandatory + elective;
        } else return this.numberOfClasses = mandatory;
    };
        
    this.printStudents = () => {
        console.log(students);
    };

    this.printSubjects = () => {
        console.log(subjects);
    };
};

function Subject(title, isItElective, academy, studentsArr) {
    this.subjectName = title;
    this.isElective = isItElective;
    this.academy = academy;
    this.arrOfStudents = studentsArr;
    this.numberOfClasses = 10;

    this.overrideClasses = (num) => {
        if (num >= 3) {
            this.numberOfClasses = num;
        } else { return `Number of classes must be higher than 3`; };

        return this.numberOfClasses;
    };
};

function Student(name, surname, age, completedSubjects, academy, currentSubject) {
    this.firstName = name;
    this.lastName = surname;
    this.studentAge = age;
    this.completedSubjects = completedSubjects;
    this.academyObj = academy;
    this.currentSubject = currentSubject;

    this.startAcademy = () => {

    };

    this.startSubject = () => {

    };
};

let startDateForAll = "01.11.2021";
let endDateForAll = "31.09.2022";
let webDevName = "Academy for Web Developemnt";
let webDsgnName = "Academy for Web Design";
let softwareTestingName = "Academy for Software Testing";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let sedcWebDev = new Academy(webDevName, [], [], startDateForAll, endDateForAll);
let javaScript = new Subject("JavaScript", true, sedcWebDev, []);
let ceTaraba = new Subject("c#", true, sedcWebDev, []);
let subjsArr = [];
subjsArr.push(javaScript, ceTaraba);
sedcWebDev.subjectsData = subjsArr;
console.log(sedcWebDev);
sedcWebDev.stopRecursion();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createAcademies(title, subjects, students, numOfElective) {
    let academy = new Academy(title, subjects, students, startDateForAll, endDateForAll);
    academy.numOfClasses(numOfElective);
    return academy;
};

function createSubjects(title, status, academy, students) {
    let subject = new Subject(title, status, academy, students);
    if (subject.isElective === true) {
        subject.overrideClasses(5);
    };
    return subject;
};

let findElectiveNum = (data) => {
    let num = data.filter((el) => {
        if (el.isElective === true){
            return el;
        };
    });
    return num.length;
};

let webDevCurriculum = [
    {
        title: "Java Script",
        status: false,
    },
    {
        title: "C#",
        status: false,
    },
    {
        title: "Debugging",
        status: false,
    },
    {
        title: "Angular JS",
        status: true,
    },
    {
        title: "RESTful Web Services",
        status: true,
}];

let webDsgnCurriculum = [
    {
        title: "Adobe XD",
        status: false,
    },
    {
        title: "Web Development With HTML5/CSS3",
        status: false,
    },
    {
        title: "WordPress",
        status: false,
    },
    {
        title: "UI/UX",
        status: true,
    },
    {
        title: "SEO",
        status: true,
}];

let softwareTesterCurriculum = [
    {
        title: "SQL",
        status: false,
    },
    {
        title: "TestNG",
        status: false,
    },
    {
        title: "JMeter",
        status: false,
    },
    {
        title: "Defect Reporting",
        status: true,
}];

let webDevSubjects = []
for (let data of webDevCurriculum) {
    let allSubjects = createSubjects(data.title, data.status, createAcademies(webDevName, webDevSubjects, [], findElectiveNum(webDevSubjects)), []);
    webDevSubjects.push(allSubjects);    
};
console.log(webDevSubjects);
let webDev = createAcademies(webDevName, webDevSubjects, [], findElectiveNum(webDevSubjects),);
console.log(webDev)
webDev.stopRecursion();
console.log(webDev.stopRecursion());

let webDsgnSubjects = [];
for (let data of webDsgnCurriculum){
    let allSubjects = createSubjects(data.title, data.status, createAcademies(webDsgnName, webDevSubjects, [], findElectiveNum(webDsgnSubjects)))
    webDsgnSubjects.push(allSubjects);
};
let webDsgn = createAcademies(webDsgnName, webDsgnSubjects, [], findElectiveNum(webDsgnSubjects));;
console.log(webDsgn);

let softwareTesting = createAcademies(softwareTestingName, [], []);

