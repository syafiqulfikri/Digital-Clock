function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    hour = hour % 12;
    hour = hour ? hour : 12; // If hour is 0, set it to 12

    // Pad with leading zeros if needed
    document.getElementById('hour').textContent = String(hour).padStart(2, '0');
    document.getElementById('minute').textContent = String(minute).padStart(2, '0');
    document.getElementById('second').textContent = String(second).padStart(2, '0');
    document.getElementById('ampm').textContent = ampm;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to set clock immediately
updateClock();
