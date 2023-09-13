/* eslint-disable no-unused-vars */
import React from 'react';

import Services from './Services/Services';
import Parts from './Parts';
import Hotdeals from './Hotdeals/Hotdeals';


const Home = () => {
    return (
        <div>
            <Services></Services>
            <Parts></Parts>
            <Hotdeals></Hotdeals>
        </div>
    );
};

export default Home;