const name ='chingly'
const userAge = 20
const user = {
    name: name,
    age: userAge, 
    location : 'Thailand'
}

const {age,location:address} =user

// console.log(age);
// console.log(address);

const product = {
    label : 'Kiki',
    price : 5,
    stock : 100,
    salePrice : undefined,
    rating: 4.7
}

const transaction = (type, {label,price}) => {
    console.log(type,label,price);
}

transaction('order',product)