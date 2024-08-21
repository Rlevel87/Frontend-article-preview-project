

const arrow = document.getElementById('shareArrow');
const arrowHidden = document.getElementById('hiddenArrow');
const share = document.getElementById('shareView');


arrow.addEventListener('click', () => {
    share.style.display = 'flex';
});

arrowHidden.addEventListener('click', () => {
    
    share.style.display = 'none';
});

