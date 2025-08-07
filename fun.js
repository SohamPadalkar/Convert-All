const funNavBtns = [
  { btn: document.getElementById('dog-years-btn'), card: document.getElementById('dog-years-card') },
  { btn: document.getElementById('mars-weight-btn'), card: document.getElementById('mars-weight-card') },
  { btn: document.getElementById('cat-years-btn'), card: document.getElementById('cat-years-card') }
];
funNavBtns.forEach(({ btn, card }, idx) => {
  if (btn && card) {
    btn.addEventListener('click', () => {
      funNavBtns.forEach(({ card: c }) => c.style.display = 'none');
      card.style.display = 'block';
      funNavBtns.forEach(({ btn: b }) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  }
});
// Optionally show Dog Years card by default:
if (funNavBtns[0].btn && funNavBtns[0].card) {
  funNavBtns[0].card.style.display = 'block';
  funNavBtns[0].btn.classList.add('active');
}



function convertDogYears() {
  const age = parseFloat(document.getElementById('human-age-input').value) || 0;
  // Classic formula: first 2 years = 10.5 each, after that 4 per year
  let dogYears = 0;
  if (age <= 2) dogYears = age * 10.5;
  else dogYears = 21 + (age - 2) * 4;
  document.getElementById('dog-years-output').textContent = dogYears.toFixed(1);
}
function convertMarsWeight() {
  const earth = parseFloat(document.getElementById('earth-weight-input').value) || 0;
  const mars = earth * 0.379; // Mars gravity ≈ 0.379 of Earth
  document.getElementById('mars-weight-output').textContent = mars.toFixed(2);
}
function convertCatYears() {
  const age = parseFloat(document.getElementById('human-age-cat-input').value) || 0;
  // Popular formula: first 2 years = 12.5 each, after that 4 per year
  let catYears = 0;
  if (age <= 2) catYears = age * 12.5;
  else catYears = 25 + (age - 2) * 4;
  document.getElementById('cat-years-output').textContent = catYears.toFixed(1);
}
