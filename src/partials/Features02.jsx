import React from 'react';

import Illustration from '../images/features-illustration.svg';
import cyberpunkGif from '../gifs/cyberpunk1.gif';

function Features02() {
  return (
    <section className="relative">
      {/* Bg gradient */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      {/* Bg illustration */}
      <div className="absolute top-0 left-1/2 -z-10 ml-[390px]" aria-hidden="true">
        <img src={Illustration} className="max-w-none" width="608" height="305" alt="Illustration" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="py-12 md:py-20">
          {/* Section header */}
          {/*<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">Use sensitive data without sacrificing privacy</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est.</p>
            </div>
          </div>*/}
          {/* Section content */}
          <div className="w-full mx-auto md:max-w-none flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-18 space-y-8 space-y-reverse md:space-y-0">
            {/* Content */}
            <div className="md:w-8/12 lg:w-6/12 order-1 md:order-none px-6" data-aos="zoom-out" data-aos-delay="200">
              <div className="text-center md:text-left">
                <h3 className="h3 font-uncut-sans text-4xl mb-4">Transparent OLED screens</h3>
                <p className="text-xl text-gray-400 mb-6">
                  High resolution display with stunning visuals. Grab attention in a clear and engaging way.
                  Participate in the revolution of the way businesses advertise in public spaces.
                </p>
                <ul className="inline-flex flex-col text-lg text-gray-400 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Energy efficient</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Tactile display</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Custom size</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Image */}
            <div className="w-full mb:pr-6 h-full" data-aos="zoom-out">
              <img src={cyberpunkGif} alt="gift" />
              {/*<img className="mx-auto md:max-w-none" src={FeaturesImage} width="540" height="581" alt="Features"/>*/}
            </div>
          </div>
          <div className="mt-16 px-6">
            <h2 className="h3 font-uncut-sans mb-4">About Us</h2>
            <div className="">
              <p className="text-lg text-gray-400">
                Welcome to our company, where we are revolutionizing the world of advertising through our cutting-edge,
                futuristic screens. Our state-of-the-art technology allows for dynamic and interactive experiences that
                will captivate your audience and leave a lasting impression. Our screens come in a variety of sizes and
                can be customized to fit any space. From malls and airports to bus stops and storefronts, our screens
                are perfect for any location. Our team of experts will work closely with you to create a personalized
                and effective advertising campaign that will help your business stand out. Thank you for choosing us as
                your partner in advertising innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




export default Features02;
