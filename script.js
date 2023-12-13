function submitQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const resultDisplay = document.getElementById('quiz-result');
    const selectedOption = quizForm.q1.value;

    if (selectedOption === 'correct') {
        resultDisplay.textContent = 'Correct! Responsive design ensures a good user experience on all devices.';
    } else {
        resultDisplay.textContent = 'Incorrect. Try again!';
    }
}
