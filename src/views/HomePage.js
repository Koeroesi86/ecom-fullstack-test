import React from 'react';
import '../stylesheets/listingPage.scss';
import Products from './products/Products';

const HomePage = () => {
    return (
        <main>
            Listing page
            <Products/>
        </main>
    );
};

export default HomePage;