(function() { 
  const targetId = 'rendering-border'; 
  const rendering = "5 - Astronomy"; 
  function getZoomLevel() {
    const test = document.createElement('div');
    test.style.width = '100px';
    test.style.position = 'absolute';
    test.style.left = '-9999px';
    document.body.appendChild(test);
    const zoom = (test.offsetWidth / 100);
    document.body.removeChild(test);
    return zoom;
  }
  function updateDisplay() { 
    const el = document.getElementById(targetId); 
    if (!el) return; 
    const zoom = getZoomLevel();
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
