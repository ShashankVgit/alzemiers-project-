// ======================================
// NeuroCare AI Voice Assistant System
// ======================================

console.log("Voice Assistant Activated");

// ======================================
// Speech Synthesis Function
// ======================================

function speakText(message)
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
// Start Voice Assistant
// ======================================

function startVoiceAssistant()
{
    const welcomeMessage =
    `
        Hello.
        I am NeuroCare AI voice assistant.
        How may I help you today?
    `;

    speakText(welcomeMessage);

    startVoiceRecognition();
}

// ======================================
// Speech Recognition
// ======================================

function startVoiceRecognition()
{
    if(
        'webkitSpeechRecognition'
        in window
    )
    {
        const recognition =
        new webkitSpeechRecognition();

        recognition.lang = "en-US";

        recognition.continuous = false;

        recognition.interimResults = false;

        recognition.start();

        // ======================================
        // Voice Result
        // ======================================

        recognition.onresult =
        function(event)
        {
            const command =
            event.results[0][0].transcript
            .toLowerCase();

            console.log(
                "Voice Command:",
                command
            );

            processVoiceCommand(command);
        };

        // ======================================
        // Error Handling
        // ======================================

        recognition.onerror =
        function()
        {
            speakText(
                "Voice recognition error occurred."
            );
        };
    }

    else
    {
        alert(
            "Voice recognition not supported in this browser."
        );
    }
}

// ======================================
// Process Voice Commands
// ======================================

function processVoiceCommand(command)
{
    // Medicine Reminder

    if(
        command.includes("medicine")
    )
    {
        speakText(
            "Your next medicine is scheduled at 8 PM."
        );
    }

    // Emergency

    else if(
        command.includes("emergency") ||
        command.includes("help")
    )
    {
        speakText(
            "Emergency support activated."
        );

        alert(
            "Emergency Alert Sent!"
        );
    }

    // Memory Support

    else if(
        command.includes("memory")
    )
    {
        speakText(
            "Daily memory exercises improve brain health."
        );
    }

    // Time

    else if(
        command.includes("time")
    )
    {
        const currentTime =
        new Date().toLocaleTimeString();

        speakText(
            "Current time is " +
            currentTime
        );
    }

    // Date

    else if(
        command.includes("date")
    )
    {
        const currentDate =
        new Date().toDateString();

        speakText(
            "Today's date is " +
            currentDate
        );
    }

    // Greeting

    else if(
        command.includes("hello") ||
        command.includes("hi")
    )
    {
        speakText(
            "Hello. Hope you are doing well today."
        );
    }

    // Doctor

    else if(
        command.includes("doctor")
    )
    {
        speakText(
            "Your doctor appointment is scheduled tomorrow."
        );
    }

    // Mood

    else if(
        command.includes("sad") ||
        command.includes("stress")
    )
    {
        speakText(
            "Please stay calm and relaxed. Everything will be okay."
        );
    }

    // Exit

    else if(
        command.includes("stop")
    )
    {
        speakText(
            "Voice assistant stopped."
        );

        window.speechSynthesis.cancel();
    }

    // Default

    else
    {
        speakText(
            "I am analyzing your request."
        );
    }
}

// ======================================
// Voice Reminder System
// ======================================

function voiceMedicineReminder()
{
    const reminder =
    `
        Reminder.
        Please take your scheduled medicine.
    `;

    speakText(reminder);
}

// ======================================
// Voice Reminder Every 2 Minutes
// ======================================

setInterval(() =>
{
    voiceMedicineReminder();

}, 120000);

// ======================================
// AI Motivation Voice Messages
// ======================================

const voiceMotivations =
[
    "Stay positive and healthy.",
    "You are doing great today.",
    "Daily exercise improves brain health.",
    "Remember to stay hydrated."
];

// ======================================
// Random Voice Motivation
// ======================================

function randomVoiceMotivation()
{
    const random =
    Math.floor(
        Math.random() *
        voiceMotivations.length
    );

    speakText(
        voiceMotivations[random]
    );
}

// ======================================
// Motivation Every 3 Minutes
// ======================================

setInterval(() =>
{
    randomVoiceMotivation();

}, 180000);

// ======================================
// AI Welcome Message
// ======================================

window.addEventListener(
    "load",
    function()
    {
        const message =
        `
            Welcome to NeuroCare AI.
            Voice healthcare support activated.
        `;

        speakText(message);
    }
);

// ======================================
// End Of File
// ======================================