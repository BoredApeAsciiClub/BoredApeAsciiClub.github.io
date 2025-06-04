// UI logic for amount buttons
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('mint_amount');
  const btnMinus = document.getElementById('btn-minus');
  const btnPlus = document.getElementById('btn-plus');
  const btnMax = document.getElementById('btn-max');
  const maxMint = 200;
  const minMint = 1;

  btnMinus.onclick = () => {
    let val = parseInt(input.value) || minMint;
    if (val > minMint) input.value = val - 1;
  };
  btnPlus.onclick = () => {
    let val = parseInt(input.value) || minMint;
    if (val < maxMint) input.value = val + 1;
  };
  btnMax.onclick = () => {
    input.value = maxMint;
  };
  input.oninput = () => {
    let val = parseInt(input.value) || "";
    if (val > maxMint) input.value = maxMint;
    if (val < minMint && val !== "") input.value = minMint;
  };
});