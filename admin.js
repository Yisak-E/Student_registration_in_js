var admin_dashboard = document.getElementById("admin_dashboard");
var admin_login_form = document.getElementById("admin_login_form");



//adding event listener to the button
document.getElementById("admin").addEventListener("click", function() {
    mainOption.style.display = "none";
    student_home.style.display = "none";
   student_dashboard.style.display = "none";
   admin_dashboard.style.display = "none";
        
});


document.getElementById("admin_log").addEventListener("click", () => {
    const regex = /.*3/;
    var admin_email = document.getElementById("log_admin_email").value;
    var admin_password = document.getElementById("log_admin_password").value;
    if(regex.test(admin_email) || regex.test(admin_password)) {
        admin_dashboard.style.display = "block";
        student_home.style.display = "none";
        student_dashboard.style.display = "none";
        mainOption.style.display = "none";
        admin_login_form.style.display = "none";
        console.log("Admin logged in successfully.");
    }
    else {
        console.log("Invalid admin credentials.");
    }
});
