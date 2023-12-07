

// add function after exit game to refresh main menu 
// add console.log in every function


// Initialize game variables
let money = 500
let attempts = 5;
let targetAge = 87;

// Update money display
function updateMoneyDisplay() {
  document.getElementById('money').innerText = money;
  console.log("Current money:", money);
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
        console.log('Age has been guess')
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
      console.log('0 attempts')

    }
  } else {
    document.getElementById('result').innerText = "Out of attempts. Game over.";
    document.getElementById('play-again-btn').style.display = 'block';
    document.getElementById('exit-btn').style.display = 'block';
    window.alert('====== All attemps has been used ======')
  }
}

// Buy a hint

function buyHint(hintNumber) {
  console.log(`buyHint(${hintNumber}) function was called!`);
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
      document.getElementById('buyhint').innerText = hintDescription;
      money -= hintPrice;
      // updateMoneyDisplay(); // Assuming you have this function
      return;
    }
  }
};

//   document.getElementById('result').innerText = "Insufficient funds to buy a hint.";
// }
  
// Reset attempts <== dapat mag reset kapag nag play-again
function resetAttempts() {
  attempts = 5;
  updateAttemptsDisplay();
  console.log('reset')
}

// Play again <== now working!!!
function playAgain() {
  const MAX_MONEY_LIMIT = 999999;
  console.log("max money")
  money += 500000; // Add the reward from the previous game to the starting money // implemented and working 
  attempts = 5;
  targetAge = Math.floor(Math.random() * 100);
  document.getElementById('play-again-btn').innerText = ""; // id "play-again-btn" is not called last time
  updateMoneyDisplay();
  updateAttemptsDisplay();
  document.getElementById('result').innerText = "";
  document.getElementById('play-again-btn').style.display = 'none';
  document.getElementById('exit-btn').style.display = 'none';
  document.getElementById('guess').value = "";
  document.getElementById('guess').disabled = false;
  console.log("this is working ")

  // Check if money exceeds the limit
  if (money > MAX_MONEY_LIMIT) {
    money = MAX_MONEY_LIMIT;
  }
  console.log("Money limit called")
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

  document.getElementById('result').innerText = "Game started! Good luck";
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
  console.log("exitgame ")
}

// show attempt 0
function attempt_left() {
  const popup = document.getElementById('attempt-left');
  popup.style.display = 'block';
  setTimeout(() => {
  }, 3000);
}
// Show achievement popup
function showAchievementPopup() {
  const popup = document.getElementById('achievement-popup');
  popup.style.display = 'block';
  console.log(" !")
  // Hide the popup after a few seconds (e.g., 3 seconds)
  setTimeout(() => {
    popup.style.display = 'none';
  }, 3000);
}


// SaveProgress for testing
function saveProgress() {
  let text;
  let person = prompt("Please enter your username:", " ");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! username has been saved";
  }
  document.getElementById("save-button").innerHTML = text;
}
console.log("The function is being called")

// Call necessary functions
updateMoneyDisplay();

updateAttemptsDisplay();
