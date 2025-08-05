
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


const ftcmBtn = document.getElementById("ft-cm-btn");
const ftcmCard = document.getElementById("ft-cm-card");

const yardftBtn = document.getElementById("yard-ft-btn");
const yardftCard = document.getElementById("yard-ft-card");

const mikmBtn = document.getElementById("mi-km-btn");
const mikmCard = document.getElementById("mi-km-card");

const kmnmiBtn = document.getElementById('km-nmi-btn');
const kmnmiCard = document.getElementById("km-nmi-card");

const kglbBtn = document.getElementById("kg-pound-btn");
const kglbCard = document.getElementById("kg-pound-card");

const gozBtn = document.getElementById("g-oz-btn");
const gozCard = document.getElementById("g-oz-card");

const lbozBtn = document.getElementById("lb-oz-btn");
const lbozCard = document.getElementById("lb-oz-card");

const stlbBtn = document.getElementById("st-lb-btn");
const stlbCard = document.getElementById("st-lb-card");

const tkgBtn = document.getElementById("t-kg-btn");
const tkgCard = document.getElementById("t-kg-card");

if (ftcmBtn && ftcmCard) {
  ftcmBtn.addEventListener('click', () => {
    ftcmCard.style.display = 'block';
  })
}

if (yardftBtn && yardftCard) {
  yardftBtn.addEventListener('click', () => {
  yardftCard.style.display = 'block';
  })
}

if (mikmBtn && mikmCard) {
  mikmBtn.addEventListener('click', () => {
  mikmCard.style.display = 'block';
  })
}

if (kmnmiBtn && kmnmiCard) {
  kmnmiBtn.addEventListener('click', () => {
  kmnmiCard.style.display = 'block';
  })
}

if (kglbBtn && kglbCard) {
  kglbBtn.addEventListener('click', () => {
  kglbCard.style.display = 'block';
  })
}


if (gozBtn && gozCard) {
  gozBtn.addEventListener('click', () => {
    gozCard.style.display = 'block';
  })
}

if (lbozBtn && lbozCard) {
  lbozBtn.addEventListener('click', () => {
    lbozCard.style.display = 'block';
  })
}

if (stlbBtn && stlbCard) {
  stlbBtn.addEventListener('click', () => {
    stlbCard.style.display = 'block';
  })
}

if (tkgBtn && tkgCard) {
  tkgBtn.addEventListener('click', () => {
    tkgCard.style.display = 'block';
  })
}