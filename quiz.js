var quiz_table_body = document.getElementById("quiz_table_body");
var question_counter = 0;
var quizs = [
    {
        'question': "What does HTML stand for?",
        'options': [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Markup Language"
        ]
    },
    {
        'question': "Which programming language is known as the backbone of web development?",
        'options': [
            "Python",
            "JavaScript",
            "C++",
            "Ruby"
        ]
    },
    {
        'question': "What is the purpose of CSS in web development?",
        'options': [
            "To structure the content",
            "To style the content",
            "To add interactivity",
            "To manage databases"
        ]
    },
    {
        'question': "Which of the following is a JavaScript framework?",
        'options': [
            "React",
            "Django",
            "Laravel",
            "Flask"
        ]
    },
    {
        'question': "What does SQL stand for?",
        'options': [
            "Structured Query Language",
            "Simple Query Language",
            "Standard Query Language",
            "Sequential Query Language"
        ]
    }
];


//list of answers
var list_of_answer = [1, 2, 2, 1, 1];

let submitAnswer = "";

const quiz_displayer = ()=>{
    quiz_table_body.innerHTML = "";//clear the conntent

    quizs.forEach(question =>{
        question_counter++;
        var questionItem = document.createElement('tr');
        questionItem.className = "quiz_items";
        questionItem.innerHTML = `
        <td colspan='4'>${question_counter}. ${question.question}</td>
        `
        var questionOption = document.createElement('tr');
        questionOption.className = "quiz_option";
        for(var i = 1; i <= 4; i++){
            questionOption.innerHTML +=
             `<td>
                <input 
                    type="radio" 
                    name="q${ question_counter}"
                    id="q${ question_counter}.O${i}"
                    value="${i}">
                    <label for="q${ question_counter}.O${i}">${question.options[i-1]}</label>
            </td>`;
        }
        quiz_table_body.appendChild(questionItem)
        quiz_table_body.appendChild(questionOption)
    })

    submitAnswer = document.createElement('tr');
    submitAnswer.className = "submit_answer";
    

    button_to_submit = document.createElement('button');
    button_to_submit.innerHTML = " <button id='submit_ans'>Submit Answer</button>"
    submitAnswer.innerHTML = `
    <td></td>
        <td colspan="2"></td>
         <td></td>
    `;
    submitAnswer.appendChild(button_to_submit);
    quiz_table_body.appendChild(submitAnswer);
    
}

const submitter = document.querySelector('#submit_ans');
if(submitter){
    submitter.addEventListener('click', ()=>{
        get_student_answer();
    })
}

//check answer function 
const get_student_answer = function(){
    var answer_list = []
    for(var i = 1; i <= list_of_answer.length; i++){
        var current_answer = "";
        for (var j = 1; j<= 4; j++ ) {
            var option = document.getElementById(`q${i}o${j}`);
            option.addEventListener("change", ()=>{
                current_answer = option.value;
                alert(current_answer);
            })
        }
        answer_list.push(current_answer);
        
    }
}
