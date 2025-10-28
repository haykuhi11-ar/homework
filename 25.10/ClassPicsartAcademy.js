class Academy {
  constructor() {
    this.classroom = new Classroom(101);
    this.library = new Library();
    this.kitchen = new Kitchen(); 
  }
  showInfo() {
    console.log("Academy has:");
    console.log("-Classroom:", this.classroom.students.join(", "));
    console.log("-Library books:", 
        this.library.books.map(book => `${book.title} by ${book.author}`).join(", "));
    console.log("-Kitchen staff:", this.kitchen.staff.join(", "));
  }
}
class Classroom {
    constructor(room_number){
        this.room_number = room_number;
        this.students = [];
    }
    addStudent(name) {
        this.students.push(name);
    }
    listStudents() {
        console.log(`Room ${this.room_number} has students: ${this.students.join(", ")}`);
    }
}
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(title, author) {
        this.books.push(new Book(title, author));
}
    listBooks() {
        console.log("Library has books:");
        this.books.forEach(books => {
            console.log(`${books.title} by ${books.author}`);
        });
    }
}
class Kitchen {
    constructor() {
        this.staff = [];
    }
    addWorker(name) {
        this.staff.push(name);
    }
    listWorkers() {
        console.log("Kitchen with workers:", this.staff.join(", "));
    }
}
const academy = new Academy();
academy.classroom.addStudent("Annet");
academy.classroom.addStudent("James");
academy.library.addBook("YDKJS Types & Grammar", "K.Simpson");
academy.kitchen.addWorker("Chef Bob");
academy.showInfo();
academy.library.listBooks();
