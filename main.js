var all_students = new Map();

var student = {
    id: 1001,
    name: "John Doe",
    email:"yis@gmail.com",
    password: "123456",
    phone: "1234567890",
    age: 20,
    grade:null,
};


all_students.set(student.email, student);
const setStudent = function( name, email, password, phone, age) {
    student.name = name;
    student.email = email;
    student.password = password;
    student.phone = phone;
    student.age = age;
    student.id = Math.floor(Math.random() * 9000) + 1000; // Generate a random ID between 1000 and 10,000
    student.grade = null; // Set the grade to null initially
    all_students.set(student.email, student);
}



var mainOption = document.getElementById("mainHome");



var view_course_student = document.getElementById("viewCourse_st");
var view_grade_student = document.getElementById("viewGrade_st");
var view_profile_student = document.getElementById("viewProfile_st");
var take_quiz_student = document.getElementById("takeQuiz_st");

document.getElementById("teacher").addEventListener("click", function() {
    mainOption.style.display = "none";
    
}
);





// This is a simple JavaScript code that creates a basic HTML page with a button and an input field.
