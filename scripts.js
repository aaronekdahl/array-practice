// Todo: Build an array of strings that could be answers to magic 8 ball type questions.
var answers = ["Yes", "No", "Maybe", "I Don't Know", "Google It"];

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
