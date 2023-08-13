import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

const Home = () => {
    return (
        <div className='pt-5 p-5'>
            <LandingPage></LandingPage>
            
        </div>
    );
};

export default Home;