(function() {
    const targetId = 'rendering-border';
    const rendering = "5 - Astronomy";
    
    function updateDisplay() {
        const el = document.getElementById(targetId);
        if (!el) return;
        
        const zoom = window.innerWidth / document.documentElement.clientWidth;
        
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
