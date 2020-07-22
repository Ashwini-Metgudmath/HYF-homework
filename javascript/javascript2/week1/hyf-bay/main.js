console.log('Script loaded');

console.log(getAvailableProducts());
/* Render test products */
const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet', 'Watch', 'LED lights', 'Flowers', 'Books', 'Desserts'];
const availableProducts = getAvailableProducts();

function renderProducts(availableProducts){
    ul = document.querySelector('#testProducts');
    
    availableProducts.forEach(element => {
        //console.log(`element: ${element.name}`);
        li = document.createElement('li');
        const shipTo = element.shipsTo.reduce((accumulator, currentValue)=> `<ul><li>${accumulator}</li><li>${currentValue}</li></ul>`);
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