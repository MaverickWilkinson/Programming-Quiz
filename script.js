
//getting the information and buttons from the html
var BeginButton = document.querySelector(".startbutton");
var MainContent = document.querySelector("main");
var Time = document.querySelector("#timeLeft");
var beginingPrompt = document.querySelector("#beginingPrompt")
var questionDisplay = document.querySelector("#questionDisplay");
//this is where variables will be created to be used in the quiz
var timeLeft = questions.length * 15;
var timer;
var questionIndex = 0;
var listButton;
var list;
var questionText;
var answerList;

var questions = [
    {
        title: "What is the HTML tag under which one can write the JavaScript code?",
        choices: ["<javascript>", "<scripted>", "<script>", "<js>"],
        answer: "<script>"
    },
    {
        title: "What is the correct syntax for referring to an external script called 'script.js'?",
        choices: ['<script src=”script.js”>', '<script href=”script.js”>', '<script ref=”script.js”>', '<script name=”script.js”>'],
        answer: '<script src=”script.js”>'
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ["function = myFunction()", "function:myFunction", "function myFunction()", "Int Main(args)"],
        answer: "function myFunction()"
    },
    {
        title: "How to write an IF statement in JavaScript?",
        choices: ["if (i==5)", "if i=5 then", "if i = 5", "if i == 5 then"],
        answer: "if (i==5)"
    },
    {
        title: "How do you call a function named 'myFunction'?",
        choices: ["call myFunction()", "call function myFunction()", "myFunction()", "void 'myFunction()' "],
        answer: "myFunction()"
    }
    // etc.
];


function startTime(timeLeft){
    var interval = setInterval()
}

function decrement(){
    timeLeft--
    Time.innerText = timeLeft;
    if (timeLeft <= 0)
    {
        timeLeft = 0;
        clearInterval(timer);
        //make gameover thing here
    }
}

function startQuiz(){
    //variable to track which question the user is answering
    timer = setInterval(decrement, 1000)
    beginingPrompt.style.display = "none";
    //creating elements to be put into the page
    questionText = document.createElement("h2");
    answerList = document.createElement("ol");
    result = document.createElement("p");
    //append them to the doc
    writeQuestions();
}

function writeQuestions(){
    questionText = document.createElement("p");
    answerList = document.createElement("ul");
        questionText.innerText = questions[questionIndex].title;
        for(i = 0; i < questions[questionIndex].choices.length; i++){
            list = document.createElement("li");
            listButton = document.createElement("button");
            listButton.id = "option" + i.toString();
            listButton.innerText = questions[questionIndex].choices[i];  
            list.append(listButton);
            answerList.append(list);
        }

    questionDisplay.append(questionText);
    questionDisplay.append(answerList);

    addListeners();
}
//new function for clearing the buttons
function clearButtons(){
    option0.remove();
    option1.remove();
    option2.remove();
    option3.remove();
    questionText.remove();
}
function addListeners(){
    option0.addEventListener("click", function(e){
        var buttonSelected = option0.innerText;
        if(buttonSelected != questions[questionIndex].answer){
            timeLeft = timeLeft - 15;
            if (timeLeft < 0){
                timeLeft = 0;
            }
        } else{
            questionIndex++
            clearButtons();
            writeQuestions();
        }
    })
    option1.addEventListener("click", function(e){
        var buttonSelected = option1.innerText;
        if(buttonSelected != questions[questionIndex].answer){
            timeLeft = timeLeft - 15;
            if (timeLeft < 0){
                timeLeft = 0;
            }
        } else{
            questionIndex++
            clearButtons();
            writeQuestions();
        }
    })
    option2.addEventListener("click", function(e){
        var buttonSelected = option2.innerText;
        if(buttonSelected != questions[questionIndex].answer){
            timeLeft = timeLeft - 15;
            if (timeLeft < 0){
                timeLeft = 0;
            }
        } else{
            questionIndex++
            clearButtons();
            writeQuestions();
        }
    })
    option3.addEventListener("click", function(e){
        var buttonSelected = option3.innerText;
        if(buttonSelected != questions[questionIndex].answer){
            timeLeft = timeLeft - 15;
            if (timeLeft < 0){
                timeLeft = 0;
            }
        } else{
            questionIndex++
            clearButtons();
            writeQuestions();
        }
    })
}

//eventlistener to start the quiz then the user presses the start button
BeginButton.addEventListener("click", function(e){
    startQuiz();
});

