import React from 'react';

const HeroImg = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full pointer-events-none">
                {/* Image Wrapper */}
                <figure
                    className="h-[115%] w-[115%] object-cover"
                    style={{
                        transform: 'translate3d(-12%, 0.0444444%, 0px)',
                        transition: 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                >
                    <img
                        src=""
                        alt="Background"
                        className="h-full w-full object-cover"
                        
                    />
                </figure>

                {/* Optional Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
        </div>
    );
};

export default HeroImg;
