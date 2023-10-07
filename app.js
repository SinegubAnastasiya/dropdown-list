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

occupation.addEventListener('click', (event) => {
    inp.value = event.target.textContent;
    occupation.style = 'visibility: hidden';
    arrow.style = 'background-image: url(./arrowdown.svg)';
    flag = false;
})

select.addEventListener('dblclick', () => {
    inp.removeAttribute('disabled');
    inp.value = '';
})

inp.addEventListener('keydown', (event) => {
    try {
        if (event.key == 'Enter') {
            if (!inp.value) throw new Error('Input is empty')
            occupation.style = 'visibility: visible';
            const p = document.createElement('p');
            occupation.appendChild(p);
            p.textContent = inp.value;
        }
    } catch (error) {
        alert(error.message)
    }

})