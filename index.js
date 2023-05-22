const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];

let index = 0 ;
let total = quizData.length;
let right = 0;
let wrong = 0;

const quesbox  = document.getElementById("questionBox");
const inputOptions = document.querySelectorAll(".option");

const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    
    const data = quizData[index];
    console.log(data)

    quesbox.innerText = data.question;
     inputOptions[0].nextElementSibling.innerText = data.a;
     inputOptions[1].nextElementSibling.innerText = data.b;
     inputOptions[2].nextElementSibling.innerText = data.c;
     inputOptions[3].nextElementSibling.innerText = data.d;
    
  
}


document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            right++
        } else {
            wrong++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () =>{
    let answer;
    inputOptions.forEach(
        (input) =>{
            if(input.checked){
                answer= input.value
            }
        }
    )
    return answer;
}

const reset = () =>{
    inputOptions.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}

const quizEnd = () => {
    
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> Hii, you've scored ${right} / ${total} </h3>
        </div>
    `
}

loadQuestion(index);

