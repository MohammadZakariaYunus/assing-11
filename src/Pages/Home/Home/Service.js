import React from 'react';
import card1 from '../../../images/bg-1.jpg'
import card2 from '../../../images/bg-2.jpg'
import card3 from '../../../images/bg-3.jpg'
const Service = () => {
    return (
        <div className='mt-5 mb-3'>
            <h1 className='mb-5'>Our Services</h1>
            <div className="card-group m-3">
                <div className="card m-1">
                    <div className="card-body">
                        <h5 className="card-title fw-bolder fs-3 mb-5 mx-auto">HELLO THERE AND <br /> WELCOME</h5>
                        <p className="card-text text-justify">Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Our own warehouses, as well as our partner's warehouses are safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Our own warehouses, as well as our partner's warehouses are located at strategic locations to ensure that there is no additional cost.</p>
                    </div>
                </div>
                <div className="card m-1">
                    <img src={card1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder fs-3 mx-auto">Cargo</h5>
                        <p className="card-text">Team of cargo experts are always available to help you with any queries you might have, or if you want to consult in length your logistic requirements. We would study your requirements and provide you with a quote that would not only suit your </p>
                    </div>
                </div>
                <div className="card m-1">
                    <img src={card2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder fs-3 mx-auto">Logistic Service</h5>
                        <p className="card-text">We provide logistic services in the nation, whether it is freight transportation, supply chain solutions, warehousing and distribution, customer resource area services, customs, security and insurance, temperature controlled logistics, industry</p>
                    </div>
                </div>
                <div className="card m-1">
                    <img src={card3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder fs-3 mx-auto">Storage</h5>
                        <p className="card-text ">We take pride in catering to a broad range of clientele throughout the country with our warehousing services, which is comprehensive, reliable and flexible – qualities that are essential to help businesses in this market. Our experienced experts</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;