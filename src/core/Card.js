import React, { useState } from 'react';
import './Card.css';
import ShowImage from './ShowImages';

const Card = ({ product }) => {
    const [count, setCount] = useState(product.count);
    return (
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={product} url="product" />
                <h2>{product.name}</h2>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <button className="btn btn-success">Ver Mas</button>
            </div>
        </div>
    )
}

export default Card;