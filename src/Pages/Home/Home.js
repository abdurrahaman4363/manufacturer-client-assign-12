import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import SeeEquipment from './SeeEquipment';
import Equipment from './Equipment';
import Footer from './Footer';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Equipment></Equipment>
            <SeeEquipment></SeeEquipment>
            <Footer></Footer>
        </div>
    );
};

export default Home;