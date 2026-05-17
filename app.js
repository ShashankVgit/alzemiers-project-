// ======================================
// NeuroCare AI - Main Application Script
// ======================================

console.log("NeuroCare AI System Started");

// ======================================
// Welcome Voice Assistant
// ======================================

window.addEventListener("load", function ()
{
    const welcomeMessage =
    "Welcome to NeuroCare AI. Your intelligent healthcare assistant is now active.";

    speakMessage(welcomeMessage);
});

// ======================================
// Text To Speech Function
// ======================================

function speakMessage(message)
{
    const speech =
    new SpeechSynthesisUtterance(message);

    speech.lang = "en-US";

    speech.volume = 1;

    speech.rate = 1;

    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

// ======================================
// Healthcare Notification System
// ======================================

function showNotification(message)
{
    const notification =
    document.createElement("div");

    notification.classList.add("notification-box");

    notification.innerHTML = message;

    document.body.appendChild(notification);

    // Remove after 4 seconds

    setTimeout(() =>
    {
        notification.remove();

    }, 4000);
}

// ======================================
// Daily AI Health Tips
// ======================================

const healthTips =
[
    "Drink enough water daily.",
    "Complete your memory exercises.",
    "Take medicines on time.",
    "Sleep well for better brain health.",
    "Daily walking improves cognitive health.",
    "Social interaction helps memory stability."
];

// ======================================
// Generate Random Health Tip
// ======================================

function showHealthTip()
{
    const randomIndex =
    Math.floor(Math.random() * healthTips.length);

    const tip =
    healthTips[randomIndex];

    showNotification("AI Health Tip: " + tip);
}

// Show tip every 20 seconds

setInterval(showHealthTip, 20000);

// ======================================
// Greeting Based On Time
// ======================================

function getGreeting()
{
    const hour =
    new Date().getHours();

    if(hour < 12)
    {
        return "Good Morning";
    }

    else if(hour < 18)
    {
        return "Good Afternoon";
    }

    else
    {
        return "Good Evening";
    }
}

// ======================================
// Dashboard Greeting
// ======================================

function displayGreeting()
{
    const greetingText =
    document.getElementById("greetingText");

    if(greetingText)
    {
        greetingText.innerHTML =
        getGreeting() +
        ", Welcome to NeuroCare AI";
    }
}

displayGreeting();

// ======================================
// Emergency Alert Simulation
// ======================================

function triggerEmergencyAlert()
{
    showNotification(
        "Emergency Alert Sent To Caregiver"
    );

    speakMessage(
        "Emergency alert has been activated successfully."
    );
}

// ======================================
// Dark Mode Toggle
// ======================================

function toggleDarkMode()
{
    document.body.classList.toggle("dark-mode");
}

// ======================================
// AI Cognitive Score Generator
// ======================================

function generateCognitiveScore()
{
    const score =
    Math.floor(Math.random() * 40) + 60;

    return score;
}

// ======================================
// Display Cognitive Score
// ======================================

function displayScore()
{
    const scoreBox =
    document.getElementById("scoreBox");

    if(scoreBox)
    {
        scoreBox.innerHTML =
        "Today's Cognitive Score: " +
        generateCognitiveScore() +
        "%";
    }
}

displayScore();

// ======================================
// Medicine Reminder Popup
// ======================================

function medicineReminder()
{
    showNotification(
        "Reminder: Please take your medicine."
    );

    speakMessage(
        "Reminder. Please take your medicine now."
    );
}

// Reminder every 60 seconds (Demo)

setInterval(medicineReminder, 60000);

// ======================================
// AI Motivation Message
// ======================================

function motivationalMessage()
{
    const messages =
    [
        "You are doing great today.",
        "Stay positive and healthy.",
        "Your brain health matters.",
        "Keep smiling and stay active."
    ];

    const random =
    Math.floor(Math.random() * messages.length);

    showNotification(messages[random]);
}

// Motivation every 40 seconds

setInterval(motivationalMessage, 40000);

// ======================================
// Notification Styling
// ======================================

const style =
document.createElement("style");

style.innerHTML =
`
.notification-box
{
    position: fixed;
    top: 20px;
    right: 20px;
    background: #2563eb;
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 9999;
    animation: slideIn 0.5s ease;
}

@keyframes slideIn
{
    from
    {
        opacity: 0;
        transform: translateX(100%);
    }

    to
    {
        opacity: 1;
        transform: translateX(0);
    }
}

.dark-mode
{
    background: #0f172a;
    color: white;
}
`;

document.head.appendChild(style);

// ======================================
// End Of File
// ======================================