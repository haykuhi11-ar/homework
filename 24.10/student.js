class Student {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }
    addGrade(grade) {
         this.grades.push(grade);
    }
    average() {
        if (this.grades.length === 0)  return 0;
        let average = 0;
        for (let grade of this.grades) {
            average += grade;
        }
        return average /= this.grades.length;
    }
}
const student = new Student('Eva');
student.addGrade(79);
student.addGrade(93);
student.addGrade(79);
console.log('Average grade:', student.average());
