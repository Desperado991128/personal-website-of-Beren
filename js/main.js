document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded"); // Debugging log

    const images = document.querySelectorAll(".skills img, .grid img");
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const close = document.querySelector('.close');

    if (!lightbox || !lightboxImg || !captionText || !close) {
        console.error("One or more elements for the lightbox are missing.");
        return;
    }

    images.forEach(image => {
        image.addEventListener("click", function() {
            lightbox.style.display = "block";
            lightboxImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    close.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Last updated functionality
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        const date = new Date(document.lastModified);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        console.log(`Last updated date: ${date.toLocaleDateString('en-US', options)}`);
        lastUpdated.textContent = `Last updated: ${date.toLocaleDateString('en-US', options)}`;
    } else {
        console.error("The element with id 'last-updated' was not found.");
    }
});

