class Timestampable {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    touch() {
        this.updatedAt = new Date();
    }
}
class User extends Timestampable {
    constructor(name) {
       super();
        this.name = name;
    }
}
class Post extends Timestampable {
    constructor(title) {
       super();
        this.title = title;
    }
}
class Comment extends Timestampable {
    constructor(comment) {
       super();
        this.comment = comment;
    }
}

const u = new User("Annet");
console.log("Created:",u.createdAt);
u.name = "Bob";
u.touch();
console.log("Updated:",u.updatedAt);

const post = new Post("My first post");
console.log('Created:', post.createdAt);
post.title = "Update title";
post.touch();
console.log('Updated:', post.updatedAt);

const com = new Comment("Hello");
console.log('Created:', com.createdAt);
com.comment = "Halo, Halo";
com.touch();
console.log("Updated:", com.updatedAt);