// Simulate sending a notification with a 20% failure rate
function sendNotification() {
    return new Promise((resolve, reject) => {
        const failureChance = Math.random();
        if (failureChance < 0.2) {
            reject('Notification Failed');
        } else {
            resolve('Notification Sent');
        }
    });
}

// Retry logic for up to 3 times
async function handleNotification() {
    let attempts = 0;
    const maxRetries = 3;
    let success = false;

    while (attempts < maxRetries && !success) {
        try {
            await sendNotification();
            success = true;
            alert('Notification Sent Successfully');
        } catch (error) {
            attempts++;
            if (attempts < maxRetries) {
                console.log(`Retrying... Attempt ${attempts}`);
            } else {
                showPopup();
            }
        }
    }
}

// Show the popup and alert sound on failure
function showPopup() {
    const popup = document.getElementById('popup');
    const alertSound = document.getElementById('alertSound');
    const retryBtn = document.getElementById('retryBtn');
    const closePopup = document.getElementById('closePopup');
    
    popup.style.display = 'flex';
    alertSound.play();

    retryBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        handleNotification();  // Retry logic
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
}

// Attach event listener to the "Send Notification" button
document.getElementById('sendNotificationBtn').addEventListener('click', () => {
    handleNotification();
});
