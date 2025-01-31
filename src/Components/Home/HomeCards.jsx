import React from 'react';

const cards = [
    {
        imgSrc: "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg",
        title: "Full-suite solutions",
        description: "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions."
    },
    {
        imgSrc: "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png",
        title: "Simplify the complex",
        description: "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data."
    },
    {
        imgSrc: "https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg",
        title: "Cutting-edge tech",
        description: "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions."
    }
];

const HomeCards = () => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-2 mb-10 px-20 gap-[30px]">
            {cards.map((card, index) => (
                <div key={index} className="h-full p-10  space-y-[8px] bg-[#F8FCFF] rounded-[20px] p-sm md:p-md shadow-lg transition-transform duration-300 hover:scale-105">
                    <figure className="w-fit rounded-full">
                        <img src={card.imgSrc} alt={card.title} className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]" />
                    </figure>
                    <h4 className="font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">{card.title}</h4>
                    <p className="text-body-1">{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default HomeCards;
