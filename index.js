const form = document.getElementById('quiz-form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const correctAnswers = ['Hi', 'Recursion', 'element.dataset.count'];

  const selectedAnswers = [];
  document.querySelectorAll('.answer:checked').forEach(function (input) {
    selectedAnswers.push(input.value);  
  });

  const allAnswers = document.querySelectorAll('.answer');

  allAnswers.forEach(function (input) {
    const parentLabel = input.closest('label');
    if (correctAnswers.includes(input.value)) {
      if (selectedAnswers.includes(input.value)) {
        parentLabel.style.color = '#4caf50'; 
      } else {
        parentLabel.style.color = '#000';       }
    } else {
      if (selectedAnswers.includes(input.value)) {
        parentLabel.style.color = '#e57373'; 
      } else {
        parentLabel.style.color = '#000';       }
    }
    const alertBox = document.getElementById('alert');
    const isAllCorrect = selectedAnswers.every(function (answer, index) {
      return answer === correctAnswers[index];
    });

    if (isAllCorrect) {
      alertBox.style.display = 'alert-title';
    }  
  });
});
