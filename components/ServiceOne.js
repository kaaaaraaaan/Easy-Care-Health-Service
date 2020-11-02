import React,{ Component } from 'react';

export default class ServiceOne extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="service-one">
                <div className="container">
                    <div className="block-title text-center">
                        <h3>Why Choose Easy Care Health Service?</h3>
                    </div>

                    <div className="row no-gutters">
                        <div className="col-lg-4 wow fadeInLeft" data-wow-animation-duration="1500ms">
                            <div className="service-one__single">
                                <div className="service-one__inner">
                                    <div className="service-one__image">
                                        <img src="/assets/images/shapes/service-i-1.png" alt=""/>
                                    </div>
                                    <div className="service-one__content">
                                        <h3><a href="#">More experience </a></h3>
                                        <p> Every year, more than a thousand people come to Easy Care Health Service for care. Our highly specialized experts are deeply experienced in treating rare and complex conditions. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInRight" data-wow-animation-duration="1500ms">
                            <div className="service-one__single">
                                <div className="service-one__inner">
                                    <div className="service-one__image">
                                        <img src="/assets/images/shapes/service-i-2.png" alt=""/>
                                    </div>

                                    <div className="service-one__content">
                                        <h3><a href="#">Seamless care </a></h3>
                                        <p> Every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need. What might take months elsewhere can often be done in days here. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInRight" data-wow-animation-duration="1500ms">
                            <div className="service-one__single">
                                <div className="service-one__inner">
                                    <div className="service-one__image">
                                        <img src="/assets/images/shapes/service-i-3.png" alt=""/>
                                    </div>

                                    <div className="service-one__content">
                                        <h3><a href="#">Unparalleled expertise </a></h3>
                                        <p> Easy Care Health Service experts are some of the best in Nepal. <br /><br />Easy Care Health Service is consistently ranked among the top clinics in the nation. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}