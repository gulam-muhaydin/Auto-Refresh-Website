let refreshInterval; // Variable to hold the interval ID

// Function to start refreshing the URL
function startRefresh() {
    const targetUrl = document.getElementById('url-input').value;
    const intervalSeconds = document.getElementById('refresh-interval').value;
    
    // Get duration from user inputs
    const hours = parseInt(document.getElementById('hours-input').value) || 0;
    const minutes = parseInt(document.getElementById('minutes-input').value) || 0;
    const seconds = parseInt(document.getElementById('seconds-input').value) || 0;

    // Calculate total duration in milliseconds
    const totalDuration = (hours * 3600 + minutes * 60 + seconds) * 1000;

    // Validate the URL
    if (!targetUrl) {
        alert('Please enter a valid URL.');
        return;
    }

    // Display the current URL
    document.getElementById('url-display').textContent = targetUrl;

    // Set the iframe source to the target URL and show it
    const iframe = document.getElementById('website-frame');
    iframe.src = targetUrl;
    iframe.style.display = 'block';

    // Clear any existing intervals
    clearInterval(refreshInterval);

    // Function to refresh the iframe
    function refreshIframe() {
        iframe.src = targetUrl; // Refresh the iframe
    }

    // Set an interval to refresh the iframe based on user-selected seconds
    refreshInterval = setInterval(refreshIframe, intervalSeconds * 1000);

    // Stop refreshing after the total duration has passed
    setTimeout(() => {
        clearInterval(refreshInterval);
        alert('Auto-refresh has stopped after the selected duration.');
        iframe.style.display = 'none'; // Optionally hide the iframe
    }, totalDuration);
}

// Add event listener to the button
document.getElementById('start-button').addEventListener('click', startRefresh);
