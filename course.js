var list_of_courses = [
    {
        "course_id": 1,
        "course_name": "Introduction to Computer Science",
        "course_description": "An introduction to the fundamental concepts of computer science.",
        "course_duration": "3 months",
        "course_fee": 300,
        "course_instructor": "Dr. John Doe",
        "course_start_date": "2023-01-15",
        "course_end_date": "2023-04-15",
        "course_schedule": [
            {
                "day": "Monday",
                "time": "10:00 AM - 12:00 PM"
            },
            {
                "day": "Wednesday",
                "time": "10:00 AM - 12:00 PM"
            }
        ]
    },
    {
        "course_id": 2,
        "course_name": "Data Structures and Algorithms",
        "course_description": "A deep dive into data structures and algorithms.",
        "course_duration": "4 months",
        "course_fee": 400,
        "course_instructor": "Prof. Jane Smith",
        "course_start_date": "2023-02-01",
        "course_end_date": "2023-06-01",
        "course_schedule": [
            {
                "day": "Tuesday",
                "time": "1:00 PM - 3:00 PM"
            },
            {
                "day": "Thursday",
                "time": "1:00 PM - 3:00 PM"
            }
        ]
    },  
    {
        "course_id": 3,
        "course_name": "Web Development",
        "course_description": "Learn how to build dynamic websites using HTML, CSS, and JavaScript.",
        "course_duration": "5 months",
        "course_fee": 500,
        "course_instructor": "Dr. Emily Johnson",
        "course_start_date": "2023-03-01",
        "course_end_date": "2023-08-01",
        "course_schedule": [
            {
                "day": "Friday",
                "time": "2:00 PM - 4:00 PM"
            },
            {
                "day": "Saturday",
                "time": "10:00 AM - 12:00 PM"
            }
        ]
    }
    ,
    {
        "course_id": 4,
        "course_name": "Machine Learning",
        "course_description": "An introduction to machine learning concepts and algorithms.",
        "course_duration": "6 months",
        "course_fee": 600,
        "course_instructor": "Dr. Michael Brown",
        "course_start_date": "2023-04-01",
        "course_end_date": "2023-10-01",
        "course_schedule": [
            {
                "day": "Monday",
                "time": "1:00 PM - 3:00 PM"
            },
            {
                "day": "Wednesday",
                "time": "1:00 PM - 3:00 PM"
            }
        ]
    },
    {
        "course_id": 5,
        "course_name": "Database Management Systems",
        "course_description": "Learn about database design, SQL, and data management.",
        "course_duration": "4 months",
        "course_fee": 400,
        "course_instructor": "Prof. Sarah Wilson",
        "course_start_date": "2023-05-01",
        "course_end_date": "2023-09-01",
        "course_schedule": [
            {
                "day": "Tuesday",
                "time": "10:00 AM - 12:00 PM"
            },
            {
                "day": "Thursday",
                "time": "10:00 AM - 12:00 PM"
            }
        ]
    }
    ,
    {
        "course_id": 6,
        "course_name": "Cybersecurity",
        "course_description": "An overview of cybersecurity principles and practices.",
        "course_duration": "5 months",
        "course_fee": 500,
        "course_instructor": "Dr. David Lee",
        "course_start_date": "2023-06-01",
        "course_end_date": "2023-11-01",
        "course_schedule": [
            {
                "day": "Friday",
                "time": "1:00 PM - 3:00 PM"
            },
            {
                "day": "Saturday",
                "time": "2:00 PM - 4:00 PM"
            }
        ]
    }
];


const setCourse = function(course_id, course_name, course_description, course_duration, course_fee, course_instructor, course_start_date, course_end_date, course_schedule) {
    var course = {
        course_id: course_id,
        course_name: course_name,
        course_description: course_description,
        course_duration: course_duration,
        course_fee: course_fee,
        course_instructor: course_instructor,
        course_start_date: course_start_date,
        course_end_date: course_end_date,
        course_schedule: course_schedule
    };
    list_of_courses.push(course);
    console.log("Course added successfully!");
    console.log(list_of_courses);
}

const getCourse = function(course_id) {
    var course = list_of_courses.find(course => course.course_id === course_id);
    if (course) {
        console.log("Course found:", course);
    } else {
        console.log("Course not found!");
    }
}
const updateCourse = function(course_id, updatedCourse) {
    var index = list_of_courses.findIndex(course => course.course_id === course_id);
    if (index !== -1) {
        list_of_courses[index] = { ...list_of_courses[index], ...updatedCourse };
        console.log("Course updated successfully!");
    } else {
        console.log("Course not found!");
    }
}

const deleteCourse = function(course_id) {
    var index = list_of_courses.findIndex(course => course.course_id === course_id);
    if (index !== -1) {
        list_of_courses.splice(index, 1);
        console.log("Course deleted successfully!");
    } else {
        console.log("Course not found!");
    }
}




const displayCourses = function() {
    console.log("Displaying all courses:");
    var courseList = document.getElementById("course_list");
    courseList.innerHTML = ""; // Clear existing content
    var courseHeader = document.createElement("thead");
    courseHeader.className = "course_header";
    courseHeader.innerHTML = `
        <th>Course ID</th>
        <th>Course Name</th>
        <th>Description</th>
        <th>Instructor</th>
        <th>Duration</th>
        <th>Fee</th>
        <th>Action</th>
    `;
    courseList.appendChild(courseHeader);
    list_of_courses.forEach(course => {
        var courseItem = document.createElement("tr");
        courseItem.className = "course_items";
        courseItem.innerHTML = `
            <td>${course.course_id}</td>
            <td>${course.course_name}</td>
            <td>${course.course_description}</td>
            <td>${course.course_instructor}</td>
            <td>${course.course_duration}</td>
            <td>$${course.course_fee}</td>
            <td><button onclick="getCourse(${course.course_id})">Enroll</button></td>
        `;
        courseList.appendChild(courseItem);
    });
    console.log("Courses displayed successfully!");
}
