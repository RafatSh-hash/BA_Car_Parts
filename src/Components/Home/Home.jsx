/* eslint-disable no-unused-vars */
import React from 'react';

import Services from './Services/Services';

import Hotdeals from './Hotdeals/Hotdeals';
import NewsLetter from './NewsLetter/NewsLetter';
import Parts from './Parts/Parts';


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