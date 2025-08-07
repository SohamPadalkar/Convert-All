// Navigation: Only show one card at a time
    const navCards = [
      { btn: document.getElementById('l-gal-btn'), card: document.getElementById('l-gal-card') },
      { btn: document.getElementById('l-m3-btn'), card: document.getElementById('l-m3-card') },
      { btn: document.getElementById('ci-ml-btn'), card: document.getElementById('ci-ml-card') },
      { btn: document.getElementById('pt-l-btn'), card: document.getElementById('pt-l-card') },
      { btn: document.getElementById('oz-ml-btn'), card: document.getElementById('oz-ml-card') }
    ];
    navCards.forEach(({btn, card}) => {
      if (btn && card) {
        btn.addEventListener('click', () => {
          navCards.forEach(({card: c, btn: b}) => {c.style.display='none'; b.classList.remove('active');});
          card.style.display = 'block';
          btn.classList.add('active');
        });
      }
    });
    // Show first card by default
    if (navCards[0].btn && navCards[0].card) {
      navCards[0].card.style.display = 'block';
      navCards[0].btn.classList.add('active');
    }

    // Conversion functions
    function convertLToGal() {
      const l = parseFloat(document.getElementById('l-gal-input').value) || 0;
      const gal = l * 0.264172; // 1 L = 0.264172 US gal[7]
      document.getElementById('l-gal-output').textContent = gal.toFixed(4);
    }
    function convertLToM3() {
      const l = parseFloat(document.getElementById('l-m3-input').value) || 0;
      const m3 = l * 0.001; // 1 L = 0.001 m³[7]
      document.getElementById('l-m3-output').textContent = m3.toFixed(4);
    }
    function convertCiToMl() {
      const ci = parseFloat(document.getElementById('ci-ml-input').value) || 0;
      const ml = ci * 16.387064; // 1 in³ = 16.387064 ml[7]
      document.getElementById('ci-ml-output').textContent = ml.toFixed(2);
    }
    function convertPtToL() {
      const pt = parseFloat(document.getElementById('pt-l-input').value) || 0;
      const l = pt * 0.473176; // 1 US pint = 0.473176 L[7]
      document.getElementById('pt-l-output').textContent = l.toFixed(4);
    }
    function convertOzToMl() {
      const oz = parseFloat(document.getElementById('oz-ml-input').value) || 0;
      const ml = oz * 29.57353; // 1 US fluid ounce = 29.57353 ml[7]
      document.getElementById('oz-ml-output').textContent = ml.toFixed(2);
    }