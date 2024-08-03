// Function to update the digital clock
function updateClock() {
    var currentTime = new Date(); // Get current time
    var hr = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    
    // Format hours, minutes, and seconds to ensure two digits
    hr = (hr < 10 ? '0' : '') + hr;
    min = (min < 10 ? '0' : '') + min;
    sec = (sec < 10 ? '0' : '') + sec;
    
    var time = document.getElementById('time');
    var timeformat = document.getElementById('timeformate');
    
    // Set the innerHTML of the elements to display the formatted time
    time.innerHTML = hr + ':' + min + ':' + sec;
    
    // Determine whether it's AM or PM
    var ampm = hr >= 12 ? 'PM' : 'AM';
    timeformat.innerHTML = ampm;
}

// Call the updateClock function once to initialize the clock
updateClock();

// Set interval to update the clock every second
setInterval(updateClock, 1000);
