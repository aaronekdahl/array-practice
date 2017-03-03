function clicker(answerss) {
  console.log(answerss.indexOf(answerss));
}



var answers = ["Yes", "No", "Maybe", "I Don't Know", "Google It"];

function removeAnswer() {
  var remv = document.removalForm.remove.value;
  var index = answers.indexOf(remove);

  if(index >= 0) {
    answers.splice(index, 1);
  }
  console.log(fortunes);
  event.preventDefault;
}

function insertAnswer() {
  var answer = document.answerForm.answer.value;
  answers.push(answer);
  console.log(answers);
  event.preventDefault();
}

function eightBall() {

  var question =
  document.eightBallForm.question.value;

  var rando = Math.floor(Math.random() * answers.length);

  var answer = answers[rando];

  var output = "Oh you want to know " + question + "... Well, I think... " + answer;

  console.log(output);

  event.preventDefault();
}
