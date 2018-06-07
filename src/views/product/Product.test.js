import React from 'react';
import {shallow} from 'enzyme';
import assert from 'assert';
import Product from './Product';

describe('Product', () => {
    const product = {
        'title': 'Simple Canvas',
        'description': 'Lets your pictures speak for themselves.',
        'image': {
            'path': '/images/product.jpg',
            'alt': 'Simple Canvas'
        },
        'price': 1500,
        'currency': 'Â£',
        'priceLabel': 'From',
        'productLabel': 'bestseller',
        'cta': 'Shop Now',
        'ctaLink': '/random/link/to/no/where'
    };
    const productNolabel = {
        'title': 'Simple Canvas',
        'description': 'Lets your pictures speak for themselves.',
        'image': {
            'path': '/images/product.jpg',
            'alt': 'Simple Canvas'
        },
        'price': 1500,
        'currency': 'Â£',
        'priceLabel': 'From',
        'productLabel': '',
        'cta': 'Shop Now',
        'ctaLink': '/random/link/to/no/where'
    };

    it('should render', () => {
        const result = shallow(<Product product={product}/>);

        assert.equal(result.find('.Product').length, 1);
        assert.equal(result.find('.Product-hero').length, 1);
        assert.equal(result.find('.Product-hero-image').length, 1);
        assert.equal(result.find('.Product-hero-label').length, 1);
        assert.equal(result.find('.Product-description').length, 1);
        assert.equal(result.find('.Product-price').length, 1);
        assert.equal(result.find('.Product-price-label').length, 1);
        assert.equal(result.find('.Product-price-amount').length, 1);
        assert.equal(result.find('.Product-cta').length, 1);
    });

    it('should render without label', () => {
        const result = shallow(<Product product={productNolabel}/>);

        assert.equal(result.find('.Product').length, 1);
        assert.equal(result.find('.Product-hero-label').length, 0);
    });
});