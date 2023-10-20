const products = [
    { name: 'Laptop', price: 1000, category: 'Electronics', ratings: [5, 5, 4, 4, 5] },
    
    { name: 'Shirt', price: 20, category: 'Apparel', ratings: [4, 3, 5, 4, 4] },

    { name: 'Microwave', price: 150, category: 'Electronics', ratings: [4, 5, 4, 5] },

    { name: 'Shoes', price: 50, category: 'Apparel', ratings: [5, 5, 4, 4] },

    { name: 'Bag', price: 70, category: 'Apparel', ratings: [3, 4, 3, 4, 4] },

    { name: 'Headphones', price: 100, category: 'Electronics', ratings: [5, 5, 5, 4, 4] }
    
];

// Print each product's name to the console.
for(product of products){
    console.log(product.name);
}

// List all products that are under $100.
for(product of products){
    if(product.price < 100){
        console.log(product.name);
    }
}

// Create a new array containing the names of all products.
const productNames = [];
for(product of products){
    productNames.push(product.name);
}
console.log(productNames);

// Are there any products with a rating below 3?
const below = []
for(product of products){
    for(rating of product.ratings){
        if(rating < 3){
            below.push(product.name);
            break;
        }
    }
}
if(below.length > 0){
    console.log(below);
}
else{
    console.log("No products with a rating below 3");
}

// Are all the products below $1500?
const below1500 = [];
for(product of products){
    if(product.price > 1500){
        below1500.push(product.name);
    }
}
if(below1500.length > 0){
    console.log(below1500);
}
else{
    console.log("All products are below $1500");
}

// Retrieve the first product that belongs to the 'Electronics' category.
for(product of products){
    if(product.category === 'Electronics'){
        console.log(product.name);
        break;
    }
}

// Calculate the total cost of all products combined.
let total = 0;
for(product of products){
    total += product.price;
}
console.log(total);

// Create a new array containing the average rating of each product.
const averageRatings = [];
for(product of products){
    let sum = 0;
    for(rating of product.ratings){
        sum += rating;
    }
    averageRatings.push(sum / product.ratings.length);
}
console.log(averageRatings);
