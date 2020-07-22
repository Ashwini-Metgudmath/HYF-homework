console.log('Script loaded');

console.log(getAvailableProducts());
/* Render test products */
const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet', 'Watch', 'LED lights', 'Flowers', 'Books', 'Desserts'];
const availableProducts = getAvailableProducts();

function renderProducts(availableProducts){
    ul = document.querySelector('#testProducts');
    
    availableProducts.forEach(element => {
        li = document.createElement('li');
        const shipTo = element.shipsTo.reduce((accumulator, currentvalue) => `<ul><li>${accumulator}</li><li>${currentvalue}</li></ul>`);
        li.innerHTML = `
        <ul>
            <li>${element.name}</li>
            <li>${element.price}</li>
            <li>${element.rating}</li>
            <li>${shipTo}</li>
        </ul>`;
        ul.appendChild(li);
    });
   
}
renderProducts(availableProducts);

input = document.querySelector('div.search > input');
productList = document.getElementById('testProducts');
//console.log(input.value);
input.addEventListener('keyup', filterData);
function filterData(){
   productList.textContent = '';
    const filteredData = availableProducts.filter(element => element.name.toLowerCase().includes(input.value));
    //console.log(filteredData);
    renderProducts(filteredData);
}
   
    

