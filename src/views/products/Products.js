import React from 'react';
import axios from 'axios';
import {PRODUCTS_URL} from '../../config/constants';
import './Products.scss';
import Product from '../product/Product';

export default class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            loaded: false
        };
    }

    componentWillMount() {
        axios
            .get(PRODUCTS_URL)
            .then(response => {
                this.setState({
                    products: response.data,
                    loaded: true
                });
            })
            .catch(e => {});
    }

    render() {
        const {products, loaded} = this.state;
        return (
            <div className="Products">
                {loaded
                    ? (
                        <div className="Products-list">
                            {products.map((product, index) => (
                                <Product
                                    key={index}
                                    product={product}
                                />
                            ))}
                        </div>
                    )
                    : <div>Loading...</div>
                }
            </div>
        );
    }
}