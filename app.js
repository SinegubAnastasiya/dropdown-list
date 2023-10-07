const inp = document.querySelector('input');
const select = document.querySelector('.select');
const occupation = document.querySelector('.occupation');
const arrow = document.querySelector('.img');
let flag = false;

select.addEventListener('click', () => {
    if (!flag) {
        occupation.style = 'visibility: visible';
        arrow.style = 'background-image: url(./arrow.svg)';
        flag = true;
    } else {
        occupation.style = 'visibility: hidden';
        arrow.style = 'background-image: url(./arrowdown.svg)';
        flag = false;
    }
})