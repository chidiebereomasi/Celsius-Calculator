const loadForm = document.getElementById('load-form');

loadForm.addEventListener('submit', function(e) {
  // Hide Results
    document.getElementById('results').style.display = 'none';

  // Hide Loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResult, 2000);

 e.preventDefault();
});

// Calculate Result
function calculateResult() {
  
  // UI VARS
  const celsius = document.getElementById('celsius');
  const answer = document.getElementById('answer');

  // Compute Celsius Value

  let fahreheit;
  const celsiusNumber = parseFloat(celsius.value);
  const celsiusConverter = 1.8;
  fahreheit = (celsiusNumber * celsiusConverter) + 32;

  // To Check If a Number is a isFinite Number
  if(isFinite(fahreheit)) {
    answer.value = fahreheit.toFixed(2);
    // Show Results
    document.getElementById('results').style.display = 'block';

    // Hide Loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your number');
  }
}

// Show Error
function showError(msg) {
  // Hide Results
    document.getElementById('results').style.display = 'none';

    // Hide Loader
    document.getElementById('loading').style.display = 'none';

  // Create Div
  const errorDiv = document.createElement('div');

  // Create Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');


  // Add Class
  errorDiv.className = 'alert alert-danger';

  // Create Textnode and appent to Div
  errorDiv.appendChild(document.createTextNode(msg));

  // Insert Error before heading
  card.insertBefore(errorDiv, heading);

  // Clear Error after 3 secs
  setTimeout(clearError, 3000);
}

// Clear Error Timer
function clearError() {
  document.querySelector('.alert').remove();
}