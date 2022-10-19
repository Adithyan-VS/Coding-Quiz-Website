const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


let questions = [
    // Question 1.    
    {
        question: 'Which of the following is not a token in C++?',
        choice1: 'Keywords',
        choice2: 'Manipulators',
        choice3: 'Strings',
        choice4: 'Operators',
        answer: 2,
    },
    // Question 2. 
    {
        question: 'How are templates declared in C++?',
        choice1: 'temp',
        choice2: 'tem',
        choice3: 'template<>',
        choice4: 'temp()',
        answer: 3,
    },
    // Question 3. 
    {
        question: 'What of the following user-defined header file extension is used in C++?',
        choice1: '.c',
        choice2: '.cpp',
        choice3: '.h',
        choice4: '.hf',
        answer: 3,
    },
    //Question 4.
    {
        question: "Which of the following is a correct identifier in C++?",
        choice1: 'VAR_132',
        choice2: '$var_name',
        choice3: '7VARNAME',
        choice4: '7Var_name',
        answer: 1,
    },
    //Question 5.
    {
        question: "Which of the following type is provided by C++ but not by C?",
        choice1: 'double',
        choice2: 'float',
        choice3: 'int',
        choice4: 'bool',
        answer: 4,
    },
    //Question 6.
    {
        question: "Which of the following correctly declares an array in C++?",
        choice1: 'arr{10};',
        choice2: 'array arr[10];',
        choice3: 'int arr;',
        choice4: 'int arr[10];',
        answer: 4,
    },
    //Question 7.
    {
        question: "Which of the following is used to terminate the function declaration in C++?",
        choice1: ';',
        choice2: ')',
        choice3: '<<',
        choice4: 'endl',
        answer: 1,
    },
    //Question 8.
    {
        question: "Find value of “i” \n#include<iostream.h>\nvoid main()\n{\n    int i=0; \n    i = 400*400/400;\n    cout << i;\n}",
        choice1: '0',
        choice2: '401',
        choice3: 'Arithmetic error',
        choice4: '400',
        answer: 4,
    },
    //Question 9.
    {
        question: "What is value of i, j? \n#include<iostream.h>\nvoid main()\n{\n    int i = 5; \n    int j = i++;\n    cout << i << “,” << j;\n}",
        choice1: 'i=5, j=6',
        choice2: 'i=6, j=5',
        choice3: 'i=5, j=5',
        choice4: 'i=6, j=6',
        answer: 2,
    },
    //Question 10.
    {
        question: "a = input()\ntype(a) \n\nFind the datatype of given python code",
        choice1: 'str',
        choice2: 'int',
        choice3: 'float',
        choice4: 'double',
        answer: 1,
    },
    //Question 11.
    {
        question: "Output of python code is? \na = “python\nb = “pythoN”\nprint(a > b)",
        choice1: 'True',
        choice2: 'False',
        choice3: 'Error',
        choice4: 'None of the above',
        answer: 1,
    },
    //Question 12.
    {
        question: "What is the output value of float a?\na = 35\nprint (“%f” %a) ",
        choice1: '34.00',
        choice2: '34.000000',
        choice3: '35.00',
        choice4: '35.000000',
        answer: 4,
    },
    //Question 13.
    {
        question: "The process of encoding the data is ____\n[Rearrange and find the answer]",
        choice1: 'IPCEDRYTON',
        choice2: 'NTYNECRPIO',
        choice3: 'CEDDOE',
        choice4: 'None of the above',
        answer: 2,
    },
    //Question 14.
    {
        question: "A security system that protects a network\n[Rearrange and find the answer]",
        choice1: 'BLIRFELA',
        choice2: 'EAALMWR',
        choice3: 'LARIFWLE',
        choice4: 'WFOSTARE',
        answer: 3,
    },
    //Question 15.
    {
        question: "Which of the following is not valid SQL type?",
        choice1: 'Float',
        choice2: 'Numeric',
        choice3: 'Decimal',
        choice4: 'Character',
        answer: 3,
    }
]

const SCORE_POINTS = 02
const MAX_QUESTIONS = 15

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
            /*0 added  path /CQuiz/end.html to host via xampp*/
        return window.location.assign('/CQuiz/end.html')
    }

    questionCounter++;

    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]

    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply == 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()

// To prevent going to previous page.

function preventBack() {
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function() { null };


// To prevent reload. 

window.onbeforeunload = function() {

    var text = "Are you sure you want to leave? Think of the kittens!";
    return (text);

}


// $('#question').hide(1000, function() {
//     console.log("hidden");
// })    



// This gives only the dialog box

// alert("Your progress will not be saved");

// var result = confirm("Are you sure you want to leave? Think of the kittens!");
// document.write(result);