// DOM Elements
const value = document.querySelector("#value");
const incrementButton = document.querySelector("#incrementBtn");
const decrementButton = document.querySelector("#decrementBtn");
const resetButton = document.querySelector("#resetBtn");
const progressBar = document.querySelector("#progress-bar");
const targetCountInput = document.querySelector("#targetCount");
const clickSound = document.querySelector("#clickSound");
const targetSound = document.querySelector("#targetSound");

// Initialize counter
let count = 0;
let targetCount = parseInt(targetCountInput.value);

// Load saved count from localStorage if available
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('tasbihCount')) {
        count = parseInt(localStorage.getItem('tasbihCount'));
        value.textContent = count;
        updateProgressBar();
        updateCounterColor();
    }
});

// Update target count when input changes
targetCountInput.addEventListener('change', function() {
    targetCount = parseInt(this.value);
    updateProgressBar();
});

// Update progress bar based on current count and target
function updateProgressBar() {
    const percentage = Math.min((count / targetCount) * 100, 100);
    progressBar.style.width = `${percentage}%`;

    // Change progress bar color based on completion
    if (percentage >= 100) {
        progressBar.classList.remove('bg-green-500');
        progressBar.classList.add('bg-blue-500');
    } else {
        progressBar.classList.remove('bg-blue-500');
        progressBar.classList.add('bg-green-500');
    }
}

// Update counter color based on value
function updateCounterColor() {
    if (count === targetCount) {
        value.style.color = "blue";
    } else if (count > targetCount) {
        value.style.color = "purple";
    } else {
        value.style.color = "black";
    }
}

// Save count to localStorage
function saveCount() {
    localStorage.setItem('tasbihCount', count);
}

// Increment counter
incrementButton.addEventListener("click", function() {
    count++;
    value.textContent = count;

    // Play click sound
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log("Audio play failed:", e));

    // Play target reached sound if count equals target
    if (count === targetCount) {
        targetSound.currentTime = 0;
        targetSound.play().catch(e => console.log("Audio play failed:", e));
    }

    updateProgressBar();
    updateCounterColor();
    saveCount();
});

// Decrement counter
decrementButton.addEventListener("click", function() {
    if (count > 0) {
        count--;
        value.textContent = count;

        // Play click sound
        clickSound.currentTime = 0;
        clickSound.play().catch(e => console.log("Audio play failed:", e));

        updateProgressBar();
        updateCounterColor();
        saveCount();
    }
});

// Reset counter
resetButton.addEventListener("click", function() {
    count = 0;
    value.textContent = count;

    // Play click sound
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log("Audio play failed:", e));

    updateProgressBar();
    updateCounterColor();
    saveCount();
});
