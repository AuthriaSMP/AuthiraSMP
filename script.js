// Copy Server IP Function
function copyIP() {
    const ip = "play.mineluxmc.com";
    navigator.clipboard.writeText(ip).then(() => {
        alert("Server IP copied to clipboard!");
    });
}

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
