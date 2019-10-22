import React, { Component } from 'react';
import Product from '../product/Product';
import productData from '../../data/productData';

class Products extends Component {
    constructor(){
        super()
        this.state = {
            products:productData,
            naujienos:null
        }
    }
    componentDidMount() {
        fetch('https://www.lrytas.lt/static/json/top_readview_2.json')
        .then(response => response.json())
        .then(data => this.setState({naujienos:data}));
    }
    render() {
        console.log(this.state.naujienos);
        const productComponents = this.state.products.map(product =>
            <Product
                key={product.id}
                title={product.title}
                desc={product.desc}
                img={product.img}
                link={product.link}
                stock={product.stock} />
        );
        return (
            <div>
                <h3 className='py-3 text-center'>Produktai</h3>
                <div className="row">
                    {productComponents}
                </div>
            </div>
        );
    }
}

// function Products() {
//     const productComponents = productData.map(product =>
//         <Product
//             key={product.id}
//             title={product.title}
//             desc={product.desc}
//             img={product.img}
//             link={product.link}
//             stock={product.stock} />
//     )
//     return (
//         <div>
//             <h3 className='py-3'>Produktai</h3>
//             <div className="row">
//                 {productComponents}
//             </div>
//         </div>
//     );
// }

{/* <div className="row">
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
            </div> */}

export default Products;