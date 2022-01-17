const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click', function () {
    confirm("Pues yo no :v");
})

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `traslate(-${randomX}%,-${randomY}%)`);
})

noBtn.addEventListener('click', function () {
    alert("No pues...");
    if (alert) {
        alert("Dinosaurio no?");
    }
})
