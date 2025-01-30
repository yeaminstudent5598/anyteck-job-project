import React from 'react';

const HeroText = () => {
    return (
        <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-7xl font-bold mb-4">Embrace the future of finance</h1>
        <p className="text-lg mb-6">
            Reimagine financial services with AnyTech's open platform, distributed banking solution that powers transformation.
        </p>
        <a
            href="#"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium py-3 px-6 rounded-lg transition duration-200"
        >
            Reach Out to Us
        </a>
        </div>
    );
};

export default HeroText;