var admin_home = document.getElementById("admin_home");
var student_dashboard = document.getElementById("student_dashboard");
var student_home_entry = document.getElementById("student_home_entry");
var student_home = document.getElementById("student_home");
var student_login = document.getElementById("student_login_form");
var student_register = document.getElementById("student_registration_form");
var role_form = document.getElementById("role_form");

const display_blocks = new Set([
    mainOption,
    admin_home,
    student_dashboard,
    student_home_entry,
    student_home,
    student_login,
    student_register,
    role_form,
]);

//some variable 
var option_id = 0;

//variable to store the student data
var new_student_name = document.getElementById("new_student_name");
var new_student_email = document.getElementById("new_student_email");
var new_student_password = document.getElementById("new_student_password");
var new_student_phone = document.getElementById("new_student_phone");
var new_student_age = document.getElementById("new_student_age");


//student button is clicked 
document.getElementById("student").addEventListener("click", function() {

    //hide some elements
    for (const block of display_blocks) {
        if(block !== student_home_entry && block !== student_home && block !== role_form) {
            block.style.display = "none";
        }
        else{
            block.style.display = "block";
        }
    }
   
    

    //student registration form is displayed
   document.getElementById("new_student").addEventListener("click", function() {
         //hide some elements
    for (const block of display_blocks) {
        if(block !==  student_register && block !== student_home && block !== role_form) {
            block.style.display = "none";
        }
        else{
            block.style.display = "block";
        }
    }
   
        student_register.style.display = "block";
        console.log("New Student Registration Form is displayed.");


        //sign up button is clicked
        document.getElementById("student_sign_up").addEventListener("click", function() {
            var name = new_student_name.value;
            var email = new_student_email.value;
            var password = new_student_password.value;
            var phone = new_student_phone.value;
            var age = new_student_age.value;
            var student = all_students.get(email);
            if (student) {
                console.log("Student already exists!");
                alert("Student already exists!");
            } else {
                alert("Student registered successfully!");
                setStudent(name, email, password, phone, age);
                student_register.style.display = "none";
                student_dashboard.style.display = "block";
                role_form.style.display = "none";
                dashboard_item_function();
                
            }

           
            
            
            });
            
            
   });

   //existing student login form is displayed
   document.getElementById("existing_student").addEventListener("click", function() {
        //hiding the registration form
        display_blocks.forEach(block => {
            if(block !== student_login && block !== student_home && block !== role_form) {
                block.style.display = "none";
            }
            else{
                block.style.display = "block";
            }
        });
        console.log("Existing Student Login Form is displayed.");
   });
   

  
}
);


document.getElementById("student_login").addEventListener("click", function() {
    student_loged_in();
    console.log("Student Login button clicked.");
});


const student_loged_in = function() {
    const regex = /.*3/;
    var sudent_email = document.getElementById("log_student_email").value;
    var student_password = document.getElementById("log_student_password").value;
    var student = all_students.get(sudent_email);
    if (student || student_password === "123") {
        if (/*student.password === student_password  || */ regex.test(student_password)) {
            console.log("Login successful!");
            display_blocks.forEach(block => {
                if(block !== student_dashboard && block !== student_home ) {
                    block.style.display = "none";
                }
                else{
                    block.style.display = "block";
                }
            });
            dashboard_item_function();

        } else {
           alert("Incorrect password!");
            console.log("Incorrect password!");
        }
    } else {
        console.log("Student not found!");
        //alert("Student not found!");
    }



};


//student dashboard items
const dashboard_item_function = function() {
    
    //student dashboard items
    var view_course_student = document.getElementById("viewCourse_st");
    var view_grade_student = document.getElementById("viewGrades_st");
    var view_profile_student = document.getElementById("viewprofile_st");
    var take_quiz_student = document.getElementById("takeQuiz_st");
    const dashboard_options = [view_course_student, view_grade_student, view_profile_student, take_quiz_student]


    //dashboard items
    var view_course_list = document.getElementById("course_list");
    var view_grade_list = document.getElementById("grades_list");
    var view_profile_list = document.getElementById("profile_list");
    var take_quiz_list = document.getElementById("quiz_list");

    const dashboard_items = [view_course_list, view_grade_list, view_profile_list, take_quiz_list];
    
    dashboard_options[0].addEventListener('click', ()=>{
        for( var item of dashboard_items){
           item.style.display = "none"
        }
        dashboard_items[0].style.display = "block";
        displayCourses();
    })

    dashboard_options[1].addEventListener('click', ()=>{
        for( var item of dashboard_items){
           item.style.display = "none"
        }
        dashboard_items[1].style.display = "block";
    })
    dashboard_options[2].addEventListener('click', ()=>{
        for( var item of dashboard_items){
           item.style.display = "none"
        }
        dashboard_items[2].style.display = "block";
    })
    dashboard_options[3].addEventListener('click', ()=>{
        for( var item of dashboard_items){
           item.style.display = "none"
        }
        dashboard_items[3].style.display = "block";
        quiz_displayer();
    })

}