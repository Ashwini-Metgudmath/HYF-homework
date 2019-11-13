/* DONT MODIFY ANY OF THIS CODE!!!*/

window.getAvailableProducts = function() {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function getRandomItem(availableProductNames) {
        return availableProductNames[getRandomInt(0, availableProductNames.length - 1)];
    }
    
    function getRandomProductname() {
        const preWords = ['Used', 'Fantastic', '"Used"', 'Broken', 'Beautiful', 'Wet', 'Green', 'Sloppy', 'Dirty'];
        const productNames = ['Carrot', 'Drone', 'Giftcard', 'Puppy', 'Car', 'Shirt', 'Milk', 'Chalk', 'Fish fingers', 'Socks', 'Chocolate', 'Toothbrush', 'Computer', 'Nokia', 'Cologne'];
        
        let chosenProductName = getRandomItem(productNames);
        const shouldHavePreWord = getRandomInt(0, 10) > 6;
        
        if (shouldHavePreWord) {
            const preWord = preWords[getRandomInt(0, preWords.length - 1)];
            chosenProductName = `${preWord} ${chosenProductName}`;
        }

        return chosenProductName;
    }
    
    /* DONT MODIFY ANY OF THIS CODE!!!*/
    function getRandomCountries() {
        const availableCountries = ['Denmark', 'Sweden', 'Norway', 'Germany', 'Iceland', 'England'];
        const numberOfCountries = getRandomInt(1, 3);

        const randomCountries = [];
        while (randomCountries.length < numberOfCountries) {
            const randomIndex = getRandomInt(0, availableCountries.length - 1);
            const randomCountry = availableCountries[randomIndex];
            if(!randomCountries.includes(randomCountry)) {                
                randomCountries.push(randomCountry);
            }
        }

        return randomCountries;
    }
    
    const numberOfAvailableProducts = getRandomInt(0, 30);
    const availableProducts = Array.apply(null, Array(numberOfAvailableProducts))
        .map(() => {
            const name = getRandomProductname();
            return {
                id: `${name}${getRandomInt(0, 100000)}`,
                name,
                price: getRandomInt(0, 10000),
                rating: getRandomInt(1, 10),
                shipsTo: getRandomCountries(), 
            };
        });
    
    return availableProducts;
}

window.sendPricesToServer = function(prices, callback) {
    console.log(`Sending these prices: ${prices} to an analytics server`);

    setTimeout(() => {
        callback(`These prices were received ${prices}`);
    }, 3000)
}

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
        console.log(li);
        ul.appendChild(li);
    });
   
}


renderProducts(availableProducts);