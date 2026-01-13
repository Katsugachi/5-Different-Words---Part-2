window.addEventListener('load', function() {
    const el = document.getElementById('rendering-border');
    if (el) {
        el.innerText = "5 - Astronomy";
        el.style.display = "block";
        console.log("Text set successfully!");
    } else {
        console.log("Element not found!");
    }
});
