//Question bank
var questionBank= [
    {
        question : 'When was the first Premier League played?',
        option : ['1991/92','1992/93','1995/96','1990/91'],
        answer : '1992/93'
    },
    {
        question : 'What is the best way to apply bold styling to text?',
        option : ['strong','Use CSS','bold','b'],
        answer : 'strong'
    },
    {
        question : 'Who is the next president of Nigeria?',
        option : ['Atiku','Sowore',
        'Peter Obi',
        'Garri cassava aiiin'],
        answer : 'Garri cassava aiiin'
    },
    {
        question : 'Due to the current increase in Breakfast served by women, How many times shouldyou fear women perday?',
        option : ['44 times','2hrs','Never fear women','Turn gay'],
        answer : 'Never fear women',
    },
    {
        question : 'Who will win this year"s world cup?',
        option : ['Brazil','France','Ghana','Spain'],
        answer : 'Ghana'
    }
   
]


var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
let timeValue =  15;
// var scoreboard = document.getElementById('scoreboard')

// //function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

// function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}


// function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block';
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

// Back to Quiz button event
function backToQuiz(){
    location.reload();
}


// function to check Answers
// function checkAnswer(){
//     var answerBank= document.getElementById('answerBank');
//     var answers= document.getElementById('answers');
//     answerBank.style.display= 'block';
//     scoreboard.style.display= 'none';
//     for(var a=0;a<questionBank.length;a++)
//     {
//         var list= document.createElement('li');
//         list.innerHTML= questionBank[a].answer;
//         answers.appendChild(list);
//     }
// }



// timer
// function startTimer(time){
//     counter = setInterval(timer, 1000);
//     function timer(){
//         timeCount.textContent = time; //changing the value of timeCount with time value
//         time--; //decrement the time value
//         if(time < 9){ //if timer is less than 9
//             let addZero = timeCount.textContent; 
//             timeCount.textContent = "0" + addZero; //add a 0 before time value
//         }
//         if(time < 0){ //if timer is less than 0
//             clearInterval(counter); //clear counter
//             timeText.textContent = "Time Off"; //change the time text to time off
            
//         }
//     }
// }

// function startTimerLine(time){
//     counterLine = setInterval(timer, 29);
//     function timer(){
//         time += 1; //upgrading time value with 1
//         time_line.style.width = time + "px"; //increasing width of time_line with px by time value
//         if(time > 549){ //if time value is greater than 549
//             clearInterval(counterLine); //clear counterLine
//         }
//     }
// }


displayQuestion();