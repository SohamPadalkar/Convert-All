
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



ftcmBtn.addEventListener('click', () => {
    ftcmCard.style.display = 'block';
})

yardftBtn.addEventListener('click', () => {
  yardftCard.style.display = 'block';
})

mikmBtn.addEventListener('click', () => {
  mikmCard.style.display = 'block';
})

kmnmiBtn.addEventListener('click', () => {
  kmnmiCard.style.display = 'block';
})

kglbBtn.addEventListener('click', () => {
  kglbCard.style.display = 'block';
})