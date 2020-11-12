
//getting the information and buttons from the html
var BeginButton = document.querySelector("startbutton");
var MainContent = document.querySelector("main");
var Time = document.querySelector("#timeLeft");

//this is where variables will be created to be used in the quiz


//tracks questions info
var questions = (
    {
        question:'What is the term used to described a labled piece of data in Javascript',
        options:['Element', 'variable', 'div'],
        answer: 'Element'
    }
)

function startQuiz(){
    //variable to track which question the user is answering
    var currentQuestion = 0;
    startTime();
    //creating elements to be put into the page
    questionText = document.createElement("h2");
    answerList = document.createElement("ol");
    result = document.createElement("p");
    //append them to the doc
    writeQuestions(currentQuestion);
}

function writeQuestions(currentQuestion){
    //clearing content so new question can be added
    MainContent.innerHTML = "";
    questionText.innerText = "";
    answerList.innerText = "";

}

//eventlistener to start the quiz then the user presses the start button
BeginButton.addEventListener("click", startQuiz);