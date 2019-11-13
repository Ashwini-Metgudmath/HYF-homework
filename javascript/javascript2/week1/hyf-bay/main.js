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
        childUl = document.createElement('ul');
        Name = document.createElement('li');
        Name.innerHTML = element.name;
        childUl.appendChild(Name);
        price = document.createElement('li');
        price.innerHTML = element.price;
        childUl.appendChild(price);
        rating = document.createElement('li');
        rating.innerHTML = element.rating;
        childUl.appendChild(rating);
        ulCountries = document.createElement('ul');
        element.shipsTo.forEach(country => {
            childLiCountry = document.createElement('li');
            childLiCountry.innerHTML = country;
            ulCountries.appendChild(childLiCountry);
        });
        childUl.appendChild(ulCountries);
        li.appendChild(childUl);
        //console.log(li);
        ul.appendChild(li);
    });
   
}


renderProducts(availableProducts);