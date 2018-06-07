import React from 'react';
import {shallow, mount} from 'enzyme';
import assert from 'assert';
import Products from './Products';
import moxios from 'moxios';

describe('Products', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('should render', () => {
        const result = shallow(<Products/>);

        assert.equal(result.find('.Products').length, 1);
    });

    it('should fetch products', (done) => {
        const result = mount(<Products/>);

        moxios.wait(() => {
            let request = moxios.requests.mostRecent();

            request
                .respondWith({
                    status: 200,
                    response: [
                        {
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
                        },
                        {
                            'title': 'Collage Canvas',
                            'description': 'Can\'t choose just one pic? Put your favourite photos on one canvas - a collage.',
                            'image': {
                                'path': '/images/product.jpg',
                                'alt': 'Collage Canvas'
                            },
                            'price': 2500,
                            'currency': 'Â£',
                            'priceLabel': 'From',
                            'productLabel': '',
                            'cta': 'Shop Now',
                            'ctaLink': '/random/link/to/no/where'
                        }
                    ]
                })
                .then(() => {
                    assert.equal(result.find('.Products').length, 1);
                    assert.equal(result.state('products').length, 2);
                    done();
                });
        });
    });
});