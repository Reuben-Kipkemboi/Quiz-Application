// function submitAnswer() {
//     // alert("Hello World!");
//     var score = 0; //Declaring variable score i.e the original score.
//     var myAnswer1 = document.quiz-form.question1.value;  //tracks the current answer to question one.
//     var myAnswer2 = document.quiz-form.question2.value;
//     var myAnswer3 = document.quiz-form.question3.value;
//     var myAnswer4 = document.quiz-form.question4.value;
//     var myAnswer5 = document.quiz-form.question5.value;


//     if (myAnswer1===1){score += 20};   //If statement that adds the points from the current score + 20.
//     if (myAnswer2==="Class"){score += 20}; 
//     if (myAnswer3==="1995"){score += 20}; 
//     if (myAnswer4==="script"){score += 20}; 
//     if (myAnswer5==="For"){score += 20}; 
//     document.write(score);    //prints on the screen the output of the score. 
//   }


//  code 2 for javascript

var rightAnswers = {
  question1 : "1",
  question2 : "Class",
  question3 : "1995",
  question4 : "Script",
  question5 : "For"
};
// what happens when the user submits the data from the form, we should fetch the data.
let quizForm = document.getElementById("form");
//Originally the score is Zero before beginning the quiz.
let score = 0;

var userAnswers = new userData(form);
compareData(userAnswers);

// getting the user data and calculating the score.
function compareData(userAnswers) {
  var question1 = userAnswers.get("1");
  var question2 = userAnswers.get("Class");
   
if (question1 === rightAnswers[question1]) {
  score += 10;  // Increments the score by value of 10.
} else{
  score -= 10
}
}

function submitAnswer() {
  document.write(score );
}