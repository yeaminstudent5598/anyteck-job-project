import React from 'react';
import Banner from './Banner';
import FinanceSection from './FinanceSection';
import HumanInnovation from './HumanInovation';
import HomeCards from './HomeCards';
import TechnologySection from './TecnologySection';
import Trust from './Trust';
import CTAComponent from './CTAComponent';

const Home = () => {
    return (
        <div>
            <Banner/>
            <FinanceSection/>
            <HumanInnovation/>
            <HomeCards/>
            {/* <TechnologySection/> */}
            <Trust/>
            <CTAComponent/>
        </div>
    );
};

export default Home;