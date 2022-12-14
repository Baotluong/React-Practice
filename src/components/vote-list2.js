import { useState } from "react";

const productsInit=[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
];

const VoteList = () => {
    const [products, setProducts] = useState(productsInit);
    
    const onVoteChange = (isIncrement, product) => {
        const updatedProducts = products.map(updatedProd => {
            if (updatedProd.name === product.name) {
                if (isIncrement) {
                    updatedProd.votes++;
                } else {
                    updatedProd.votes--;
                }
            }
            return updatedProd;
        }).sort((a, b) => b.votes - a.votes);
        setProducts(updatedProducts);
    }
    
    return (
        <div>
            <ul>
                { products.map(product => <ProductItem product={product} onVoteChange={onVoteChange} />) }
            </ul>
        </div>
    ) 
}


const ProductItem = ({ product, onVoteChange }) => {
    return (
        <li>
            <p>{`${product.name} Votes: ${product.votes}`}</p>
            <button onClick={() => onVoteChange(true, product)}>+</button>
            <button onClick={() => onVoteChange(false, product)}>-</button>
        </li>
    );
}

export default VoteList;