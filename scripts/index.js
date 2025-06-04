
'use strict'

function ready() {
    let domInNumber = document.querySelector('.js-in-number');

    domInNumber.addEventListener('focus', (e) => {
        let cur = e.target;
        let close = cur.closest('.lab-in');
        let span = close.querySelector('span');

        if (e.target.value.length == 0) {
            span.style.display = "none";
        }
    });

    domInNumber.addEventListener('blur', (e) => {
        let cur = e.target;
        let close = cur.closest('.lab-in');
        let span = close.querySelector('span');

        if (e.target.value.length == 0) {
            span.style.display = "block";
        }
    });

    domInNumber.addEventListener('input', function (e) {
        let current = e.currentTarget;
        let val = current.value.replace(/[^0-9\.]/g, '');

        if (+val <= 200) {
            current.value = val;
        } else {
            current.value = val.slice(0, -1);
        }
    });

    let domBtnMin = document.querySelector('.js-btn-min');
    let domBtnAdd = document.querySelector('.js-btn-add');

    domBtnMin.addEventListener('click', function () {
        if (domInNumber.value != 0) {
            domInNumber.value = +domInNumber.value - 1;
        } else {
            domLab.style.display = "block";
        }
    });

    let domLab = document.querySelector('.js-lab-in span');

    domBtnAdd.addEventListener('click', function () {
        if (domInNumber.value != 200) {
            domInNumber.value = +domInNumber.value + 1;
            domLab.style.display = "none";
        }
    });
}

document / addEventListener("DOMContentLoaded", ready)
document.querySelector('.js-btn-max').addEventListener('click', function () {
    const input = document.getElementById('mint_amount');
    input.value = 200;
});
const maxPerTransaction = 200;

document.querySelector('.js-btn-max').addEventListener('click', function () {
    document.getElementById('mint_amount').value = maxPerTransaction;
});