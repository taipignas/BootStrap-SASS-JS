import React from 'react';
import Product from '../product/Product';

function Products() {
    return (
        <div>
            <h3>Produktai</h3>
            <div className="row">
                <Product
                    title='Arbuzai'
                    description='raudoni prinoke be seklu'
                    price='0.89'
                />
                <Product
                    title='Bananai'
                    description='saldus labai skanu kekemis'
                    price='1.89'
                />
                <Product
                    title='Melionai'
                    description='pailgi geltoni saldus dideli'
                    price='3.89'
                />
            </div>
        </div>
    );
}

export default Products;