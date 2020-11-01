import React,{ Component } from 'react';

export default class AboutOne extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="about-one">
                <img src="/assets/images/shapes/virus-shape-1-1.png" className="about-one__virus" alt=""/>
                    <div className="container">
                        <div className="inner-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="about-one__images wow fadeInLeft"
                                         data-wow-animation-duration="1500ms">
                                        <img src="assets/images/resources/about-1-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-one__content">
                                        <div className="about-one__icon-box">
                                            <div className="about-one__icon">
                                                <i className="fas fa-clinic-medical"></i>
                                            </div>
                                            <div className="about-one__icon-content">
                                                <p>The Number One Clinic For Piles</p>
                                            </div>
                                        </div>
                                        <p>Getting an accurate diagnosis can be one of the most impactful experiences that you can have — especially if you've been in search of that answer for a while. We can help you get there</p>

                                        <ul className="list-unstyled about-one__list">
                                            <li><i className="vimns-icon-tick"></i> Expertise In Treating Piles
                                            </li>
                                            <li><i className="vimns-icon-tick"></i> The Right Answers
                                            </li>
                                            <li><i className="vimns-icon-tick"></i> Help Write The Next Chapter In Our History Of Healings
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}