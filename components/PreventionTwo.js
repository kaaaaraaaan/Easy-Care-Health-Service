import React,{ Component } from 'react';

export default class PreventionTwo extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (
            <section className="prevention-one prevention-one__prevention-page">
                <div className="container">
                    <div className="block-title text-center">
                        <p>List of All Preventions </p>
                        <h3>Checkout Our Main Precaution</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="prevention-one__box">
                                <div className="prevention-one__box-top">
                                    <h3>Things You Should Do</h3>
                                </div>
                                <div className="prevention-one__box-bottom">
                                    <div className="prevention-one__single">
                                        <div className="prevention-one__icon">
                                            <div className="prevention-one__icon-inner">
                                                <img src="/assets/images/shapes/should-do-i-1-1.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="prevention-one__content">
                                            <h3>Wash Your Hands 20 Seconds </h3>
                                            <p>Bacteria and viruses can lurk on them, spreading infection from surface to surface and person to person..</p>
                                        </div>
                                    </div>
                                    <div className="prevention-one__single">
                                        <div className="prevention-one__icon">
                                            <div className="prevention-one__icon-inner">
                                                <img src="/assets/images/shapes/should-do-i-1-2.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="prevention-one__content">
                                            <h3>Wear a mask </h3>
                                            <p>The World Health Organization recommends that when wearing a mask, medical-grade masks should be worn by people age 60 and over or with health issues, and the general public should wear a triple-layer cloth covering. </p>
                                        </div>
                                    </div>
                                    <div className="prevention-one__single">
                                        <div className="prevention-one__icon">
                                            <div className="prevention-one__icon-inner">
                                                <img src="assets/images/shapes/should-do-i-1-3.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="prevention-one__content">
                                            <h3>Physically distance </h3>
                                            <p>Avoid crowded spaces. If you want to visit friends or family, you must still wear a mask – and keep six feet apart. </p>
                                        </div>
                                    </div>
                                    <div className="prevention-one__single">
                                        <div className="prevention-one__icon">
                                            <div className="prevention-one__icon-inner">
                                                <img src="assets/images/shapes/should-do-i-1-4.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="prevention-one__content">
                                            <h3>Plan ahead in case you or someone in your household gets sick </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="prevention-one__box">
                                <div className="prevention-one__box-top">
                                    <h3>Things You Shouldn't Do</h3>
                                </div>
                                <div className="prevention-one__box-bottom">
                                    <div className="prevention-one__single">
                                        <div className="prevention-one__icon">
                                            <div className="prevention-one__icon-inner">
                                                <img src="/assets/images/shapes/should-no-i-1-1.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="prevention-one__content">
                                            <h3>Do not touch your face </h3>
                                            <p>Medical advisories from the World Health Organisation (WHO) has reminded us time and again not to touch our face, nose and mouth too often.</p>
                                        </div>
                                    </div>
                                    <div className="prevention-one__single">
                                        <div className="prevention-one__icon">
                                            <div className="prevention-one__icon-inner">
                                                <img src="/assets/images/shapes/should-no-i-1-2.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="prevention-one__content">
                                            <h3>Do not travel unless necessary </h3>
                                            <p>The airports and airplanes are where you are most likely to catch an infection. It Is advisable not to travel unless absolutely necessary. </p>
                                        </div>
                                    </div>
                                    <div className="prevention-one__single">
                                        <div className="prevention-one__icon">
                                            <div className="prevention-one__icon-inner">
                                                <img src="/assets/images/shapes/should-no-i-1-3.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="prevention-one__content">
                                            <h3>Do not go to crowded places </h3>
                                            <p>Public transport, metros, gyms and any other crowded place should be avoided.</p>
                                        </div>
                                    </div>
                                    <div className="prevention-one__single">
                                        <div className="prevention-one__icon">
                                            <div className="prevention-one__icon-inner">
                                                <img src="/assets/images/shapes/should-no-i-1-4.png" alt=""/>
                                            </div>
                                        </div>
                                        <div className="prevention-one__content">
                                            <h3>Do not panic </h3>
                                            <p>Most of the times, panic leads to people taking wrong and ill-informed decisions. If you follow basic personal hygiene along with the other precautions, it is very less likely for you to catch the disease.</p>
                                        </div>
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