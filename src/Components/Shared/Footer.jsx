import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#002045]">
                <div className="container mx-auto flex items-center justify-between py-11">
                    <a href="/en">
                        <picture className="flex items-center justify-start bg-cover">
                            <source 
                                srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp 200w" 
                                type="image/webp" 
                                sizes="127px, (min-width: 1024px) 217px" 
                            />
                            <source 
                                srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200 200w" 
                                sizes="127px, (min-width: 1024px) 217px" 
                            />
                            <img 
                                src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg" 
                                alt="AnyTech" 
                                className="w-[127px] sm:w-[217px] object-contain"
                            />
                        </picture>
                    </a>
                    <div className="hidden lg:flex items-center text-[#00E9EA]">
                        <p className="border-r border-blue-dark px-6 py-4 text-lg font-semibold">
                            Our Solutions
                        </p>
                        <ul className="flex space-x-6">
                            <li>
                                <a 
                                    href="/en/solutions/anycaas" 
                                    className="px-6 py-4 transition duration-300 hover:text-blue-400"
                                >
                                    AnyCaaS
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/en/solutions/anybaas" 
                                    className="px-6 py-4 transition duration-300 hover:text-blue-400"
                                >
                                    AnyBaaS
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/en/solutions/anypaas" 
                                    className="px-6 py-4 transition duration-300 hover:text-blue-400"
                                >
                                    AnyPaaS
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:hidden flex gap-6">
                        <a 
                            href="https://www.linkedin.com/company/anytxn" 
                            className="flex items-center text-blue-500 transition-opacity duration-300 hover:opacity-70"
                        >
                            <img 
                                src="https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg" 
                                alt="LinkedIn" 
                                className="w-6 h-6"
                            />
                        </a>
                        <a 
                            href="tel:+6590021890" 
                            className="flex items-center text-blue-500 transition-opacity duration-300 hover:opacity-70"
                        >
                            <img 
                                src="https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg" 
                                alt="Phone" 
                                className="w-6 h-6"
                            />
                        </a>
                    </div>
                </div>
                <div className='border-b border-blue-dark'></div>
                <div className="container px-4 flex flex-col items-center justify-between py-6 text-res-body-p2 text-blue-main lg:flex-row lg:text-body-p2">
  <p className='text-blue-600 font-bold'>
    <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
  </p>
  <div className="flex text-blue-600 font-bold items-center gap-4 lg:mt-0 mt-4">
    {/* Footer links */}
    <div>
      <a
        className="transition-colors duration-300 hover:text-blue-highlight"
        href="/en/privacy-policy"
      >
        Privacy Policy
      </a>
    </div>
    {/* Add more footer links here if needed */}
    
    <div>
      <a
        className="pl-[12px] transition-colors duration-300 hover:text-blue-highlight"
        href="/en/terms"
      >
        Terms of Service
      </a>
    </div>
    
  </div>
</div>

            </footer>
        </div>
    );
};

export default Footer;
