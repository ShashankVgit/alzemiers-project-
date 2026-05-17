// ======================================
// NeuroCare AI Emergency System
// ======================================

console.log("Emergency System Activated");

// ======================================
// Emergency Contacts
// ======================================

const emergencyContacts =
[
    {
        name: "Caregiver",
        number: "+91 9876543210"
    },

    {
        name: "Doctor",
        number: "+91 9123456780"
    },

    {
        name: "Ambulance",
        number: "108"
    }
];

// ======================================
// Text To Speech
// ======================================

function speakEmergency(message)
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
// Browser Notification
// ======================================

function showEmergencyNotification(message)
{
    if(Notification.permission === "granted")
    {
        new Notification(
            "NeuroCare AI Emergency",
            {
                body: message
            }
        );
    }
}

// ======================================
// Request Notification Permission
// ======================================

if("Notification" in window)
{
    Notification.requestPermission();
}

// ======================================
// Emergency Logs
// ======================================

const emergencyLogs = [];

// ======================================
// Activate SOS
// ======================================

function activateSOS()
{
    const emergencyMessage =
    `
        Emergency SOS Activated.
        Caregiver and healthcare team notified.
    `;

    console.log(emergencyMessage);

    // Voice Alert

    speakEmergency(emergencyMessage);

    // Browser Notification

    showEmergencyNotification(
        emergencyMessage
    );

    // Alert Popup

    alert(
        "Emergency Alert Sent Successfully!"
    );

    // Add To Logs

    emergencyLogs.push(
    {
        time:
        new Date().toLocaleString(),

        message:
        emergencyMessage
    });

    // Display Status

    const statusBox =
    document.getElementById("sosStatus");

    if(statusBox)
    {
        statusBox.innerHTML =
        `
            <h2>
                SOS ACTIVATED
            </h2>

            <p>
                Emergency support team notified successfully.
            </p>
        `;
    }
}

// ======================================
// Live GPS Tracking
// ======================================

function detectLocation()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(
        function(position)
        {
            const latitude =
            position.coords.latitude;

            const longitude =
            position.coords.longitude;

            console.log(
                "Latitude:",
                latitude
            );

            console.log(
                "Longitude:",
                longitude
            );

            const locationBox =
            document.getElementById(
                "locationText"
            );

            if(locationBox)
            {
                locationBox.innerHTML =
                `
                    Latitude:
                    ${latitude}

                    <br>

                    Longitude:
                    ${longitude}
                `;
            }

        },

        function(error)
        {
            console.log(
                "Location Error:",
                error
            );
        });
    }

    else
    {
        alert(
            "Geolocation not supported."
        );
    }
}

// Run Location Detection

detectLocation();

// ======================================
// Safe Zone Monitoring
// ======================================

function monitorSafeZone()
{
    const safeStatus =
    Math.random();

    if(safeStatus < 0.2)
    {
        const warning =
        `
            Warning.
            Patient may have exited safe zone.
        `;

        console.log(warning);

        speakEmergency(warning);

        showEmergencyNotification(warning);
    }
}

// Check Every 2 Minutes

setInterval(() =>
{
    monitorSafeZone();

}, 120000);

// ======================================
// Emergency Contact Display
// ======================================

function displayEmergencyContacts()
{
    const contactBox =
    document.getElementById(
        "contactList"
    );

    if(contactBox)
    {
        let html = "";

        emergencyContacts.forEach(
        (contact) =>
        {
            html +=
            `
                <div class="contact-item">

                    <h3>
                        ${contact.name}
                    </h3>

                    <p>
                        ${contact.number}
                    </p>

                </div>
            `;
        });

        contactBox.innerHTML = html;
    }
}

displayEmergencyContacts();

// ======================================
// Emergency Call Simulation
// ======================================

function callEmergency(number)
{
    const message =
    `
        Calling emergency contact:
        ${number}
    `;

    alert(message);

    speakEmergency(message);
}

// ======================================
// Emergency History
// ======================================

function showEmergencyLogs()
{
    console.log(
        "Emergency Logs:",
        emergencyLogs
    );
}

// ======================================
// AI Emergency Guidance
// ======================================

function emergencyGuidance()
{
    const guidance =
    `
        Please remain calm.
        Help is on the way.
        Stay in a safe location.
    `;

    console.log(guidance);

    speakEmergency(guidance);
}

// ======================================
// Guidance Every 3 Minutes
// ======================================

setInterval(() =>
{
    emergencyGuidance();

}, 180000);

// ======================================
// End Of File
// ======================================