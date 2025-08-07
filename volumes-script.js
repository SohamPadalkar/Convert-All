function convertLToGal() {
    const l = parseFloat(document.getElementById("l-gal-input").value) || 0;
    const gal = l * 0.26417205;
    document.getElementById("l-gal-output").textContent = gal.toFixed(2);
}

function convertLToCcm() {
    const l = parseFloat(document.getElementById("l-ccm-input").value) || 0;
    const ccm = l * 0.001;
    document.getElementById("l-ccm-output").textContent = ccm.toFixed(4);
}

function convertCciToMl() {
    const cci = parseFloat(document.getElementById("cci-ml-input").value) || 0;
    const ml = cci * 16.387064;
    document.getElementById("cci-ml-output").textContent = ml.toFixed(2);
}

function convertPtToL() {
    const pt = parseFloat(document.getElementById("pt-l-input").value) || 0;
    const l = pt * 0.47317647;
    document.getElementById("pt-l-output").textContent = l.toFixed(3);
}

function convertOzToMl() {
    const oz = parseFloat(document.getElementById("oz-ml-input").value) || 0;
    const ml = oz * 29.5735296;
    document.getElementById("oz-ml-output").textContent = ml.toFixed(2);
}

const lgalBtn = document.getElementById("l-gal-btn");
const lgalCard = document.getElementById("l-gal-card");

const lccmBtn = document.getElementById("l-ccm-btn");
const lccmCard = document.getElementById("l-ccm-card");

const ccimlBtn = document.getElementById("cci-ml-btn");
const ccimlCard = document.getElementById("cci-ml-card");

const ptlBtn = document.getElementById("pt-l-btn");
const ptlCard = document.getElementById("pt-l-card");

const ozmlBtn = document.getElementById("oz-ml-btn");
const ozmlCard = document.getElementById("oz-ml-card");

lgalBtn.addEventListener('click', () => {
    lgalCard.style.display = 'block';
})

lccmBtn.addEventListener('click', () => {
    lccmCard.style.display = 'block';
})

ccimlBtn.addEventListener('click', () => {
    ccimlCard.style.display = 'block';
})

ptlBtn.addEventListener('click', () => {
    ptlCard.style.display = 'block';
})

ozmlBtn.addEventListener('click', () => {
    ozmlCard.style.display = 'block';
})