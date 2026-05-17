// ======================================
// NeuroCare AI Memory Analysis System
// ======================================

console.log("Memory Analysis System Activated");

// ======================================
// Memory Questions
// ======================================

const memoryQuestions =
[
    {
        question:
        "What day comes after Monday?",
        answer:
        "tuesday"
    },

    {
        question:
        "Which animal barks?",
        answer:
        "dog"
    },

    {
        question:
        "What is 5 + 3 ?",
        answer:
        "8"
    },

    {
        question:
        "Remember this word: APPLE",
        answer:
        "apple"
    }
];

// ======================================
// User Score
// ======================================

let cognitiveScore = 0;

// ======================================
// Text To Speech
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
// Start Memory Test
// ======================================

function startMemoryTest()
{
    alert(
        "AI Cognitive Memory Test Started"
    );

    speakMessage(
        "Memory test started successfully."
    );
}

// ======================================
// Evaluate Memory Answers
// ======================================

function evaluateMemoryTest(
    answer1,
    answer2,
    answer3,
    answer4
)
{
    cognitiveScore = 0;

    // Answer 1

    if(
        answer1.toLowerCase() ===
        memoryQuestions[0].answer
    )
    {
        cognitiveScore++;
    }

    // Answer 2

    if(
        answer2.toLowerCase() ===
        memoryQuestions[1].answer
    )
    {
        cognitiveScore++;
    }

    // Answer 3

    if(
        answer3 ===
        memoryQuestions[2].answer
    )
    {
        cognitiveScore++;
    }

    // Answer 4

    if(
        answer4.toLowerCase() ===
        memoryQuestions[3].answer
    )
    {
        cognitiveScore++;
    }

    return cognitiveScore;
}

// ======================================
// AI Cognitive Analysis
// ======================================

function generateAnalysis(score)
{
    let result = "";

    if(score >= 4)
    {
        result =
        `
            Excellent cognitive performance detected.
            Memory stability is very good.
        `;
    }

    else if(score >= 2)
    {
        result =
        `
            Moderate cognitive performance detected.
            Daily memory practice is recommended.
        `;
    }

    else
    {
        result =
        `
            Low memory performance detected.
            Caregiver monitoring and cognitive
            exercises are highly recommended.
        `;
    }

    return result;
}

// ======================================
// Display Result
// ======================================

function displayMemoryResult(score)
{
    const resultBox =
    document.getElementById("resultBox");

    if(resultBox)
    {
        const analysis =
        generateAnalysis(score);

        resultBox.innerHTML =
        `
            <h2>
                Cognitive Score: ${score}/4
            </h2>

            <p>
                ${analysis}
            </p>
        `;

        speakMessage(analysis);
    }
}

// ======================================
// Daily Brain Exercise Tips
// ======================================

const brainExercises =
[
    "Complete memory games daily.",
    "Read books for 20 minutes.",
    "Practice recalling names and events.",
    "Engage in social conversations.",
    "Perform simple mathematical exercises."
];

// ======================================
// Random Brain Exercise
// ======================================

function showBrainExercise()
{
    const random =
    Math.floor(
        Math.random() *
        brainExercises.length
    );

    const tip =
    brainExercises[random];

    console.log(
        "Brain Exercise Tip:",
        tip
    );

    speakMessage(tip);
}

// ======================================
// Brain Exercise Every 45 Seconds
// ======================================

setInterval(() =>
{
    showBrainExercise();

}, 45000);

// ======================================
// Cognitive Progress Generator
// ======================================

function generateProgress()
{
    return Math.floor(
        Math.random() * 30
    ) + 70;
}

// ======================================
// Display Progress
// ======================================

function displayProgress()
{
    const progressBox =
    document.getElementById("progressBox");

    if(progressBox)
    {
        progressBox.innerHTML =
        `
            Weekly Cognitive Progress:
            ${generateProgress()}%
        `;
    }
}

displayProgress();

// ======================================
// AI Motivation Messages
// ======================================

const motivationMessages =
[
    "You are improving every day.",
    "Brain exercises support healthy memory.",
    "Stay positive and mentally active.",
    "Your cognitive health matters."
];

// ======================================
// Random Motivation
// ======================================

function motivationalSupport()
{
    const random =
    Math.floor(
        Math.random() *
        motivationMessages.length
    );

    const message =
    motivationMessages[random];

    console.log(message);

    speakMessage(message);
}

// ======================================
// Motivation Every 1 Minute
// ======================================

setInterval(() =>
{
    motivationalSupport();

}, 60000);

// ======================================
// End Of File
// ======================================