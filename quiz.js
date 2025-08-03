function checkAnswer() {
  // 1. Identify the Correct Answer
  const correctAnswer = "4";

  // 2. Retrieve the User’s Answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // If no option is selected
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer.";
    return;
  }

  const userAnswer = selectedOption.value;

  // 3. Compare the User’s Answer with the Correct Answer
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "That's incorrect. Try again.";
    feedback.style.color = "red";
  }
}

// 4. Add an Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
