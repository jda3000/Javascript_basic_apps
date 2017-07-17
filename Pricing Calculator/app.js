// grab everything that is needed

const priceInput  = document.querySelector('[name=price]');
const quantityInput = document.querySelector('[name=quantity]');
const totalOutput = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantityLabel');
const netOutput = document.querySelector('.net');
const vatOutput = document.querySelector('.vat');

// create functions

function calculateTotal() {
    let price = priceInput.value;
    let quantity = quantityInput.value;
    
    
    let net = price * quantity;
    let quantLabel = quantity;
    let vat = net * 0.2;
    let total = net + vat;
    
    
    totalOutput.innerText = '£' + total.toFixed(2) + ' Total';
    vatOutput.innerText = '£' + vat.toFixed(2) + ' VAT';
    netOutput.innerText = '£' + net.toFixed(2) + ' Net';
    
    
    quantityLabel.innerText = quantLabel;
    
    console.log(total);
}

// run function on load

calculateTotal();

// add event listeners

priceInput.addEventListener('input', calculateTotal);
quantityInput.addEventListener('input', calculateTotal);

console.log(priceInput.value);