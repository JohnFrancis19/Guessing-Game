// add function after exit game to refresh main menu 
// add console.log in every function


// Initialize game variables
let money = 500
let attempts = 5;
let targetAge = 87;

// Update money display
function updateMoneyDisplay() {
  document.getElementById('money').innerText = money;
}

// Update attempts display
function updateAttemptsDisplay() {
  document.getElementById('attempts').innerText = attempts;
}

// Handle invalid input
function handleInvalidInput() {
  console.log("handleInvalidInput() function was called");
  document.getElementById('result').innerText = "Invalid input. Please enter a valid guess (0-999).";
}

// Make a guess
function makeGuess() {
  if (attempts > 0 && !document.getElementById('guess').disabled) {
    const guess = parseInt(document.getElementById('guess').value);

    if (!isNaN(guess) && guess >= 0 && guess <= 999) {
      if (guess === targetAge) {
        document.getElementById('result').innerText = "Congratulations! You guessed the correct age.";
        document.getElementById('play-again-btn').style.display = 'block';
        document.getElementById('exit-btn').style.display = 'block';
        showAchievementPopup();  // Display the achievement popup for correct guess
      } else if (guess < targetAge) {
        document.getElementById('result').innerText = "Too low!";
      } else {
        document.getElementById('result').innerText = "Too high!";
      }
      attempts--;
      updateAttemptsDisplay();
    } else {
      handleInvalidInput();
    }

    if (attempts <= 0) {
      document.getElementById('play-again-btn').style.display = 'block';
      document.getElementById('exit-btn').style.display = 'block';
      document.getElementById('guess').disabled = true;
    }
  } else {
    document.getElementById('result').innerText = "Out of attempts. Game over.";
    document.getElementById('play-again-btn').style.display = 'block';
    document.getElementById('exit-btn').style.display = 'block';
  }
}

// Buy a hint
function buyHint(hintNumber) {
  console.log(`buyHint(${hintNumber}) function was called`);
  if (attempts > 0 && money > 0) {
    let hintPrice = 0;
    let hintDescription = '';

    switch (hintNumber) {
      case 1:
        hintPrice = 50;
        hintDescription = "Hint 1: The age is within 10 years of " + targetAge;
        break;
      case 2:
        hintPrice = 300;
        hintDescription = "Hint 2: The age is within 5 years of " + targetAge;
        break;
      case 3:
        hintPrice = 1000;
        hintDescription = "Hint 3: The age is within 1 year of " + targetAge;
        break;
      default:
        break;
    }

    if (money >= hintPrice) {
      document.getElementById('result').innerText = hintDescription;
      money -= hintPrice;
      updateMoneyDisplay();
      return;
    }
  }

  document.getElementById('result').innerText = "Insufficient funds to buy a hint.";
}

// Reset attempts
function resetAttempts() {
  attempts = 5;
  updateAttemptsDisplay();
}

// Play again
function playAgain() {
  money = 300;
  attempts = 5;
  targetAge = 67;
  document.getElementById('cheat-indicator').innerText = "";
  updateMoneyDisplay();
  updateAttemptsDisplay();
  document.getElementById('result').innerText = "";
  document.getElementById('play-again-btn').style.display = 'none';
  document.getElementById('exit-btn').style.display = 'none';
  document.getElementById('guess').value = "";
  document.getElementById('guess').disabled = false;
}

// Show customization options
function showCustomizationOptions() {
  console.log('showCustomizationOptions() called');
  const gameContainer = document.getElementById('game-container');
  gameContainer.style.backgroundColor = prompt('Enter background color (e.g., red, #00FF00):');
}

function showPlayOptions() {
  console.log('showPlayOptions() called');
  const titleScreen = document.getElementById('title-screen');
  const gameContainer = document.getElementById('game-container');
  const buttonsContainer = document.getElementById('buttons-container');

  // Hide the title-screen
  titleScreen.style.display = 'none';

  // Show the game container and buttons-container
  gameContainer.style.display = 'block';
  buttonsContainer.style.display = 'block';

  document.getElementById('result').innerText = "Game started!";
}



// Show exit prompt
function showExitPrompt() {
  console.log('showExitPrompt() called');
  const exitConfirmation = confirm("Are you sure you want to exit the game?\n\nDeveloped by [Collab Team]");
  if (exitConfirmation) {
    exitGame();
  }
}

// Exit game
function exitGame() {
  alert("Thank you for playing EraGlimpse: Age Unveiled!\nDeveloped by [JOHN FRANCIS SARO]");
}

// Show achievement popup
function showAchievementPopup() {
  const popup = document.getElementById('achievement-popup');
  popup.style.display = 'block';

  // Hide the popup after a few seconds (e.g., 3 seconds)
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
}

// Call necessary functions
updateMoneyDisplay();
updateAttemptsDisplay();
