import React from 'react';
import { Tv } from 'lucide-react';

const products = [
    {
        id: 1,
        category: "Entertainment",
        name: "Netflix Premium",
        duration: "1 Year",
        oldPrice: 1200,
        price: 499,
        color: "#E50914",
        icon: "Tv",
        shopierLink: "https://shopier.com"
    }
];

const icons = { Tv };

const Test = () => {
    return (
        <div>Build Test: {products[0].name}</div>
    );
};

export default Test;
