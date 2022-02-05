function submitAnswer() {
    // alert("Hello World!");
    var score = 0;
    var currentAnswer = document.quiz-form.question-one.value;
    if (currentAnswer==1){score+=20};
    console.log(score);
  }