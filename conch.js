(function() {
    const targetId = 'rendering-border';
    const rendering = "5 - Astronomy";
    
    window.addEventListener('load', function() {
        const el = document.getElementById(targetId);
        if (el) {
            el.innerText = rendering;
            el.style.display = "block";
        }
    });
})();
