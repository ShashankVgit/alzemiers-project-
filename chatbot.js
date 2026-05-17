// ======================================
// NeuroCare AI Chatbot System
// ======================================

console.log("AI Chatbot Activated");

// ======================================
// Send Message Function
// ======================================

function sendMessage()
{
    const input =
    document.getElementById("userInput");

    const chatBox =
    document.getElementById("chatBox");

    const userText =
    input.value.trim();

    // Empty Check

    if(userText === "")
    {
        return;
    }

    // ======================================
    // User Message
    // ======================================

    const userMessage =
    document.createElement("div");

    userMessage.classList.add("user-message");

    userMessage.innerHTML = userText;

    chatBox.appendChild(userMessage);

    // ======================================
    // AI Response Processing
    // ======================================

    let response =
    generateAIResponse(userText);

    // ======================================
    // Bot Message
    // ======================================

    setTimeout(() =>
    {
        const botMessage =
        document.createElement("div");

        botMessage.classList.add("bot-message");

        botMessage.innerHTML = response;

        chatBox.appendChild(botMessage);

        // Auto Scroll

        chatBox.scrollTop =
        chatBox.scrollHeight;

        // Voice Output

        speakResponse(response);

    }, 1000);

    // Clear Input

    input.value = "";
}

// ======================================
// AI Response Generator
// ======================================

function generateAIResponse(text)
{
    const message =
    text.toLowerCase();

    // Medicine

    if(
        message.includes("medicine") ||
        message.includes("tablet")
    )
    {
        return `
            Please take your medicines on time.
            Your next medicine is scheduled at 8 PM.
        `;
    }

    // Memory

    else if(
        message.includes("memory") ||
        message.includes("forget")
    )
    {
        return `
            Daily memory exercises,
            healthy sleep,
            and social interaction
            help improve cognitive stability.
        `;
    }

    // Emergency

    else if(
        message.includes("emergency") ||
        message.includes("help") ||
        message.includes("danger")
    )
    {
        return `
            Emergency support activated.
            Please stay calm.
            Your caregiver has been notified.
        `;
    }

    // Mood

    else if(
        message.includes("sad") ||
        message.includes("stress") ||
        message.includes("anxiety")
    )
    {
        return `
            Please stay relaxed.
            Deep breathing and calming music
            may help reduce stress.
        `;
    }

    // Greeting

    else if(
        message.includes("hello") ||
        message.includes("hi")
    )
    {
        return `
            Hello.
            I am NeuroCare AI.
            How may I assist you today?
        `;
    }

    // Doctor

    else if(
        message.includes("doctor")
    )
    {
        return `
            Your doctor consultation
            is scheduled for tomorrow at 10 AM.
        `;
    }

    // Food

    else if(
        message.includes("food") ||
        message.includes("diet")
    )
    {
        return `
            A healthy diet with fruits,
            vegetables,
            and hydration
            supports brain health.
        `;
    }

    // Sleep

    else if(
        message.includes("sleep")
    )
    {
        return `
            Proper sleep is important
            for cognitive stability
            and memory improvement.
        `;
    }

    // Default

    else
    {
        return `
            I am analyzing your request.
            Please stay healthy and safe.
        `;
    }
}

// ======================================
// Voice Response
// ======================================

function speakResponse(message)
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
// Voice Input System
// ======================================

function startVoiceInput()
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

        recognition.onresult =
        function(event)
        {
            const transcript =
            event.results[0][0].transcript;

            document.getElementById(
                "userInput"
            ).value = transcript;
        };

        recognition.onerror =
        function()
        {
            alert(
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
// Enter Key Support
// ======================================

document.addEventListener(
    "DOMContentLoaded",
    function()
    {
        const input =
        document.getElementById("userInput");

        if(input)
        {
            input.addEventListener(
                "keypress",
                function(event)
                {
                    if(event.key === "Enter")
                    {
                        sendMessage();
                    }
                }
            );
        }
    }
);

// ======================================
// Welcome AI Message
// ======================================

window.addEventListener(
    "load",
    function()
    {
        const welcome =
        "Welcome to NeuroCare AI chatbot support.";

        speakResponse(welcome);
    }
);

// ======================================
// End Of File
// ======================================