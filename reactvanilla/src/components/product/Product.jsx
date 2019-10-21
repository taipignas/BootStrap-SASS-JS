import React from 'react';

function Product(props) {
    return (
        <div className='col-4'>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default Product;