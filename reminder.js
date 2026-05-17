// ======================================
// NeuroCare AI Medicine Reminder System
// ======================================

console.log("Medicine Reminder System Activated");

// ======================================
// Medicine Data
// ======================================

const medicines =
[
    {
        name: "Donepezil",
        time: "08:00 AM",
        status: "Pending"
    },

    {
        name: "Vitamin Supplement",
        time: "02:00 PM",
        status: "Pending"
    },

    {
        name: "Memantine",
        time: "08:00 PM",
        status: "Pending"
    }
];

// ======================================
// Text To Speech
// ======================================

function speakReminder(message)
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
// Browser Notification Permission
// ======================================

function requestNotificationPermission()
{
    if("Notification" in window)
    {
        Notification.requestPermission();
    }
}

requestNotificationPermission();

// ======================================
// Show Browser Notification
// ======================================

function showBrowserNotification(title, body)
{
    if(Notification.permission === "granted")
    {
        new Notification(title,
        {
            body: body,
            icon:
            "https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
        });
    }
}

// ======================================
// Medicine Reminder Alert
// ======================================

function startMedicineReminder()
{
    medicines.forEach((medicine) =>
    {
        const reminderMessage =
        `
            Reminder:
            Please take ${medicine.name}
            scheduled at ${medicine.time}
        `;

        console.log(reminderMessage);

        // Voice Reminder

        speakReminder(reminderMessage);

        // Browser Notification

        showBrowserNotification(
            "NeuroCare AI Reminder",
            reminderMessage
        );
    });
}

// ======================================
// Auto Reminder Every 60 Seconds
// Demo Purpose
// ======================================

setInterval(() =>
{
    startMedicineReminder();

}, 60000);

// ======================================
// Manual Reminder Trigger
// ======================================

function triggerManualReminder()
{
    const message =
    "Please take your scheduled medicine now.";

    speakReminder(message);

    showBrowserNotification(
        "Medicine Reminder",
        message
    );

    alert(
        "Medicine Reminder Activated"
    );
}

// ======================================
// Mark Medicine As Taken
// ======================================

function markMedicineTaken(medicineName)
{
    medicines.forEach((medicine) =>
    {
        if(medicine.name === medicineName)
        {
            medicine.status = "Taken";
        }
    });

    console.log(
        medicineName +
        " marked as taken."
    );

    speakReminder(
        medicineName +
        " marked as taken successfully."
    );
}

// ======================================
// Missed Medicine Alert
// ======================================

function missedMedicineAlert()
{
    medicines.forEach((medicine) =>
    {
        if(medicine.status === "Pending")
        {
            const warning =
            `
                Warning.
                ${medicine.name}
                has not been taken yet.
            `;

            showBrowserNotification(
                "Missed Medicine Alert",
                warning
            );

            speakReminder(warning);
        }
    });
}

// ======================================
// Missed Medicine Check Every 2 Minutes
// ======================================

setInterval(() =>
{
    missedMedicineAlert();

}, 120000);

// ======================================
// Daily Medicine Summary
// ======================================

function dailyMedicineSummary()
{
    let takenCount = 0;

    medicines.forEach((medicine) =>
    {
        if(medicine.status === "Taken")
        {
            takenCount++;
        }
    });

    const summary =
    `
        Daily Medicine Summary:
        ${takenCount}
        out of
        ${medicines.length}
        medicines completed.
    `;

    console.log(summary);

    speakReminder(summary);
}

// ======================================
// Summary Every 5 Minutes
// ======================================

setInterval(() =>
{
    dailyMedicineSummary();

}, 300000);

// ======================================
// Emergency Medicine Reminder
// ======================================

function emergencyMedicineAlert()
{
    const emergencyMessage =
    `
        Important.
        Critical medicine dose pending.
        Please contact caregiver immediately.
    `;

    showBrowserNotification(
        "Emergency Medicine Alert",
        emergencyMessage
    );

    speakReminder(emergencyMessage);

    alert(
        "Emergency Medicine Alert Activated!"
    );
}

// ======================================
// End Of File
// ======================================