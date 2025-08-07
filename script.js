// Conversion Functions

function convertFtToCm() {
  const feet = parseFloat(document.getElementById('feet-input').value) || 0;
  const inches = parseFloat(document.getElementById('inch-input').value) || 0;
  const totalInches = (feet * 12) + inches;
  const cm = totalInches * 2.54;
  document.getElementById('cm-output').textContent = cm.toFixed(2);
}

function convertYardToFt() {
  const yard = parseFloat(document.getElementById('yard-input').value) || 0;
  const ft = yard * 3;
  document.getElementById('ft-output').textContent = ft.toFixed(2);
}

function convertMiToKm() {
  const mile = parseFloat(document.getElementById('mi-input').value) || 0;
  const km = mile * 1.609344;
  document.getElementById('km-output').textContent = km.toFixed(2);
}

function convertKmToNmi() {
  const km = parseFloat(document.getElementById('km-input').value) || 0;
  const nmi = km * 0.5399568;
  document.getElementById('nmi-output').textContent = nmi.toFixed(2);
}

function convertKgToLb() {
  const kg = parseFloat(document.getElementById('kg-input').value) || 0;
  const lb = kg * 2.20462262;
  document.getElementById("lb-output").textContent = lb.toFixed(2);
}

function convertGToOz() {
  const g = parseFloat(document.getElementById("g-input").value) || 0;
  const oz = g * 0.03527396;
  document.getElementById("oz-output").textContent = oz.toFixed(2); 
}

function convertLbToOz() {
  const lb = parseFloat(document.getElementById("lb-input").value) || 0;
  const oz = lb * 16;
  document.getElementById("lb-oz-output").textContent = oz.toFixed(2); 
}

function convertStToLb() {
  const st = parseFloat(document.getElementById("st-input").value) || 0;
  const lb = st * 14;
  document.getElementById("st-lb-output").textContent = lb.toFixed(2);
}

function convertTToKg() {
  const t = parseFloat(document.getElementById("t-input").value) || 0;
  const kg = t * 1000;
  document.getElementById("t-kg-output").textContent = kg.toFixed(2);
}

// Navigation/Panel Logic

const panels = [
  { btn: document.getElementById("ft-cm-btn"),    card: document.getElementById("ft-cm-card") },
  { btn: document.getElementById("yard-ft-btn"),  card: document.getElementById("yard-ft-card") },
  { btn: document.getElementById("mi-km-btn"),    card: document.getElementById("mi-km-card") },
  { btn: document.getElementById("km-nmi-btn"),   card: document.getElementById("km-nmi-card") },
  { btn: document.getElementById("kg-pound-btn"), card: document.getElementById("kg-pound-card") },
  { btn: document.getElementById("g-oz-btn"),     card: document.getElementById("g-oz-card") },
  { btn: document.getElementById("lb-oz-btn"),    card: document.getElementById("lb-oz-card") },
  { btn: document.getElementById("st-lb-btn"),    card: document.getElementById("st-lb-card") },
  { btn: document.getElementById("t-kg-btn"),     card: document.getElementById("t-kg-card") }
];

function hideAllCards() {
  panels.forEach(({card}) => { if(card) card.style.display = 'none'; });
  panels.forEach(({btn}) => { if(btn) btn.classList.remove('active'); });
}

panels.forEach(({btn, card}) => {
  if (btn && card) {
    btn.addEventListener('click', () => {
      hideAllCards();
      card.style.display = 'block';
      btn.classList.add('active');
    });
  }
});

// Show first card by default (optional: only if you want a default open)
for (let i = 0; i < panels.length; i++) {
  if (panels[i].btn && panels[i].card) {
    panels[i].card.style.display = 'block';
    panels[i].btn.classList.add('active');
    break;
  }
}
