// Function to switch between steps
function nextStep(next) {
    document.querySelectorAll(".container").forEach(div => div.style.display = "none");
    document.getElementById(next).style.display = "block";
}

// Initially show only the home page
document.getElementById("homePage").style.display = "block";

// Function to generate study plan
function generatePlan() {
    const time = document.getElementById("studyTime").value;
    const areas = document.getElementById("weakAreas").value;
    document.getElementById("generatedPlan").innerHTML = `<p>Study for ${time} hours per day focusing on ${areas}.</p>`;
}

// Function to update progress tracker
function updateProgress() {
    let progress = Math.min(100, Math.random() * 100);
    document.getElementById("progressFill").style.width = progress + "%";
    document.getElementById("progressFill").innerText = Math.round(progress) + "%";
    let streak = Number(document.getElementById("streakCount").innerText);
    document.getElementById("streakCount").innerText = streak + 1;
}

// Function to generate AI study tip
function generateTip() {
    const tips = [
        "Use Pomodoro technique: Study 25 min, rest 5 min.",
        "Revise with flashcards to boost memory.",
        "Practice active recall instead of passive reading.",
        "Teach someone else to enhance your understanding."
    ];
    document.getElementById("studyTip").innerText = tips[Math.floor(Math.random() * tips.length)];
}

// Function to simulate AI chatbot response
function chatWithAI() {
    const responses = [
        "Sure! What topic do you need help with?",
        "Let's break it down. What exactly is confusing you?",
        "I suggest starting with basics before moving to advanced concepts.",
        "Try explaining the topic in your own words. I’ll correct any mistakes."
    ];
    document.getElementById("chatResponse").innerText = responses[Math.floor(Math.random() * responses.length)];
}
