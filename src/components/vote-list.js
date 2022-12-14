import { useState } from "react";

const VoteList = () => {
    const productsInit=[
        { name: "Oranges", votes: 0 },
        { name: "Bananas", votes: 0 }
    ];

    const [products, setProducts] = useState(productsInit);
    
    const OnVote = (productToBeUpdated) => {
        const updatedProducts = products
            .map(prod => prod.name === productToBeUpdated.name ? productToBeUpdated : prod)
            .sort((a, b) => b.votes - a.votes);
        setProducts(updatedProducts);
    }

    return (
        <>
            <ul>
                { products.map(product => <ProductItem product={product} OnVote={OnVote} />)}
            </ul>
        </>
    );
}

const ProductItem = (props) => {
    return (
        <li>
            <p>{`${props.product.name} Votes: ${props.product.votes}`}</p>
            <button onClick={() => props.OnVote({ ...props.product, votes: product.votes + 1 })}>+</button>
            <button onClick={() => props.OnVote({ ...props.product, votes: product.votes - 1 })}>-</button>
        </li>
    );
}

export default VoteList;
