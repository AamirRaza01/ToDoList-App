const inputBox = document.getElementById("inputBox")
const listContainer = document.getElementById("listContainer")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    if(inputBox.value === ""){
        alert("You must write something to add a task!!!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
})

listContainer.addEventListener("click", function(dets){
    if(dets.target.tagName === "LI"){
        dets.target.classList.toggle("checked")
        saveData()
    }
    else if(dets.target.tagName === "SPAN"){
        dets.target.parentElement.remove()
        saveData()
    }

})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData()


// ########################## ########### #############################

const questions = [
    {
        question : "What is the capital of Turkey",
        answers : [
            {text :"Ankara" , state : true},
            {text :"Istanbul" , state :false },
            {text :"Konya" , state :false },
            {text :"Erzuzrum" , state :false }
        ]
    },
    {
        question : "WHich is the largest city in the world",
        answers : [
            {text :"New Delhi" , state :false },
            {text :"New York" , state :false },
            {text :"Tokyo" , state : true },
            {text :"London" , state :false }
        ]
    },
    {
        question : "Who is known as the father of Algorithms",
        answers : [
            {text :"Albert Einstien" , state :false },
            {text :"Al-Khwarizmi" , state :true },
            {text :"Cauchy" , state :false },
            {text :"Adam colins" , state :false }
        ]
    },
    {
        question : "Which city is known as the 'Fragrance capital of India'",
        answers : [
            {text :"Firozabad" , state :false },
            {text :"Allahabad" , state :false },
            {text :"Kannauj" , state :true },
            {text :"Thanjavur" , state :false }
        ]
    }
]

const questionElement = document.getElementById("question")
const answerElement = document.querySelector(".answers")
const nextButton = document.querySelector(".next")

let currentScore = 0
let currentQuestionIndex = 0;

function starQuiz(){
    currentScore = 0
    currentQuestionIndex = 0
    nextButton.innerHTML = "Next"
    showQuestions()
}

function showQuestions(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button")
        button.innerHTML = answers.text
        button.classList.add("btn")
        answerElement.appendChild(button)
    })
}

function resetState(){
    nextButton.style.display = "none"
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}
starQuiz()