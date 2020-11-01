import React,{ Component } from 'react';

export default class AboutTwo extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="about-two">
                <img src="/assets/images/resources/fact-moc-1-1.png" className="about-two__moc wow fadeInRight"
                     data-wow-animation-duration="1500ms" alt=""/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-two__content">
                                    <div className="block-title text-left">
                                        <h3>WE ARE AVAILABLE IN FOLLOWING BRANCHES</h3>
                                    </div>

                                    <div className="about-two__icon-wrap">
                                        <div className="about-two__icon-single">
                                            <div className="about-two__icon">
                                                <i className="vimns-icon-screw"></i>
                                            </div>
                                            <div className="about-two__icon-text">
                                                <h3>Kalimati <br/> Kathmandu</h3>
                                            </div>
                                        </div>
                                        <div className="about-two__icon-single">
                                            <div className="about-two__icon">
                                                <i className="vimns-icon-work"></i>
                                            </div>
                                            <div className="about-two__icon-text">
                                                <h3>Chata Chauk <br/> Dharan</h3>
                                            </div>
                                        </div>
                                        <div className="about-two__icon-single">
                                            <div className="about-two__icon">
                                                <i className="vimns-icon-screw"></i>
                                            </div>
                                            <div className="about-two__icon-text">
                                                <h3>Near Pranami Mandir <br/> Itahari</h3>
                                            </div>
                                        </div>
                                        <div className="about-two__icon-single">
                                            <div className="about-two__icon">
                                                <i className="vimns-icon-screw"></i>
                                            </div>
                                            <div className="about-two__icon-text">
                                                <h3>Front Of Bajaj ShowRoom <br/> Duhabi</h3>
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