class student {
    constructor(id, name, age, work) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.work = work;
    };
};
let studentOne = new student(101, 'Sabbir', 23, 'Student & Freelanser');
let studentTWo = new student(102, 'Riody', 16, 'Student & Freelanser');
let studentThree = new student(103, 'Raja', 24, 'Student & Freelanser');
let studentFour = new student(104, 'Rana', 24, 'Student');
console.log(studentOne);
console.log(studentTWo);
console.log(studentThree);
console.log(studentFour);