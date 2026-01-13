(function() {
    const targetId = 'rendering-border';
    const rendering = "5 - Astronomy";
    function updateDisplay() {
        const zoom = window.devicePixelRatio;
        const el = document.getElementById(targetId);
        if (!el) return;
        if (Math.abs(zoom - 0.5) < 0.05) {
            el.innerText = rendering;
            el.style.display = "block";
        } else {
            el.style.display = "none";
            el.innerText = "";
        }
    }
    window.addEventListener('resize', updateDisplay);
    window.addEventListener('load', updateDisplay);
})();
