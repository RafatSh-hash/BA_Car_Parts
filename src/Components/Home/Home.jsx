/* eslint-disable no-unused-vars */
import React from 'react';

import Services from './Services/Services';
import Parts from './Parts';
import Hotdeals from './Hotdeals/Hotdeals';
import NewsLetter from './NewsLetter/NewsLetter';


const Home = () => {
    return (
        <div>
            <Services></Services>
            <Parts></Parts>
            <Hotdeals></Hotdeals>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;