document.addEventListener("DOMContentLoaded", function() {
    var lastUpdated = document.getElementById('last-updated');
    var now = new Date();
    var formattedDate = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    lastUpdated.textContent = "Last updated: " + formattedDate;
});

