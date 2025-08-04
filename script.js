
function convertFtToCm() {
  const feet = parseFloat(document.getElementById('feet-input').value) || 0;
  const inches = parseFloat(document.getElementById('inch-input').value) || 0;
  const totalInches = (feet * 12) + inches;
  const cm = totalInches * 2.54;
  document.getElementById('cm-output').textContent = cm.toFixed(2);
}
const ftcmBtn = document.getElementById("ft-cm-btn");
const ftcmCard = document.getElementById("ft-cm-card");


ftcmBtn.addEventListener('click', () => {
    ftcmCard.style.display = 'block';
})
