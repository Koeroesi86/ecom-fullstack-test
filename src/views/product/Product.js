import React from 'react';
import PropTypes from 'prop-types';
import './Product.scss';

function formatNumber(num) {
    return (Number(num)/100).toFixed(2);
}

export default function Product({product}) {
    const{
        title,
        description,
        image,
        price,
        currency,
        priceLabel,
        productLabel,
        cta,
        ctaLink
    } = product;
    return (
    <div className="Product">
        <div className="Product-card">
            <div className="Product-hero">
                <img
                    className="Product-hero-image"
                    src={image.path}
                    alt={image.alt}
                />
                {productLabel.length > 0 && (
                    <div className="Product-hero-label">{productLabel}</div>
                )}
            </div>
            <div className="Product-title">{title}</div>
            <div className="Product-description">{description}</div>
            <div className="Product-price">
                <span className="Product-price-label">{priceLabel}</span>
                <span className="Product-price-amount">{currency}{formatNumber(price)}</span>
            </div>
            <a
                className="Product-cta"
                href={ctaLink}
            >{cta}</a>
        </div>
    </div>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.shape({
            path: PropTypes.string,
            alt: PropTypes.string
        }),
        price: PropTypes.number,
        currency: PropTypes.string,
        priceLabel: PropTypes.string,
        productLabel: PropTypes.string,
        cta: PropTypes.string,
        ctaLink: PropTypes.string
    })
};