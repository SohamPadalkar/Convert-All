const navCards = [
    { btn: document.getElementById('tsp-tbsp-btn'), card: document.getElementById('tsp-tbsp-card')},
    { btn: document.getElementById('tbsp-oz-btn'), card: document.getElementById('tbsp-oz-card')},
    { btn: document.getElementById('tbsp-ml-btn'), card: document.getElementById('tbsp-ml-card')},
    { btn: document.getElementById('cup-ml-btn'), card: document.getElementById('cup-ml-card')},
    { btn: document.getElementById('cup-g-btn'), card: document.getElementById('cup-g-card')}
]

navCards.forEach(({btn,card}) => {
    if (btn && card) {
        btn.addEventListener('click', () => {
            navCards.forEach(({card: c, btn: b}) => {c.style.display='none'; b.classList.remove('active');});
            card.style.display = 'block';
            btn.classList.add('active');
        });
    }
});

if (navCards[0].btn && navCards[0].card) {
    navCards[0].card.style.display = 'block';
    navCards[0].btn.classList.add('active');
}

function convertTspToTbsp() {
    const tsp = parseFloat(document.getElementById('tsp-tbsp-input').value) || 0;
    const tbsp = tsp * 0.33333333;
    document.getElementById('tsp-tbsp-output').textContent = tbsp.toFixed(3);
}
function convertTbspToOz() {
    const tbsp = parseFloat(document.getElementById('tbsp-oz-input').value) || 0;
    const oz = tbsp * 0.5;
    document.getElementById('tbsp-oz-output').textContent = oz.toFixed(2);
}
function convertTbspToMl() {
    const tbsp = parseFloat(document.getElementById('tbsp-ml-input').value) || 0;
    const ml = tbsp * 14.7867648;
    document.getElementById('tbsp-ml-output').textContent = ml.toFixed(2);
}
function convertCupToMl() {
    const cup = parseFloat(document.getElementById('cup-ml-input').value) || 0;
    const ml = cup * 236.588236;
    document.getElementById('cup-ml-output').textContent = ml.toFixed(2);
}
function convertCupToG() {
    const cup = parseFloat(document.getElementById('cup-g-input').value) || 0;
    const g = cup * 240;
    document.getElementById('cup-g-output').textContent = g.toFixed(2);
}