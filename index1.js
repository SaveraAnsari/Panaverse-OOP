#! /usr/bin/env node
class student {
    fullname;
    static schoolname = "Bab-ul-ilm Public Secondary School";
    schoolcodeno = 5555;
    constructor(fullname) {
        this.fullname = fullname;
    }
    getinfo() {
        console.log(`fullname ${this.fullname}  school : ${student.schoolname}`);
    }
    static sayhello() {
        console.log("Hi, How are you?");
    }
}
let st = new student("Savera Ansari");
st.getinfo();
student.sayhello();
export {};
