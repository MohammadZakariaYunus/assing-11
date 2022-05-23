import React from 'react';
import './CoreValues.css'
import signature from '../../../images/signature.png'

const CoreValues = () => {
    return (
        <div className='core-bg'>
            <h1 className='pt-5'>OUR CORE VALUES</h1>
            <h5 className='text-info'>WRITTEN BY Wholesale Dealers CEO</h5>
            <p className='text-justify mt-5'>Core values are the fundamental beliefs of a person or organization. The core values are the guiding principles that t dictate behavior and action. Core values can help people to know what is right from wrong, they can help companies to determine if they are on the right path and fulfilling their business goals; and they create an unwavering and unchanging guide. There are many different types of core values and many different examples of core values depending upon the context.</p>
            <img className='mt-5' src={signature} alt="" />

        </div>
    );
};

export default CoreValues;