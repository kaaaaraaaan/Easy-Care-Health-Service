import React,{ Component } from 'react';

export default class Team extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="team-one">
                <div className="container">
                    <div className="team-one__sep"></div>
                    <div className="block-title text-center">
                        <h3>Doctors</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="000ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-1.jpg" alt=""/>
                                </div>
                                <h3>Dr. Anju Deo</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="100ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-2.jpg" alt=""/>
                                </div>
                                <h3>Dr. Pushkar Deo</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="200ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-3.jpg" alt=""/>
                                </div>
                                <h3>Dr. Sunil Regmi</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="300ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-4.jpg" alt=""/>
                                </div>
                                <h3>Dr. Rajeshwar Yadav</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="000ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-5.jpg" alt=""/>
                                </div>
                                <h3>Dr. Sunita Karki</h3>
                                <p>छाला तथा यौन रोग बिशेषज्ञ</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="100ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-6.jpg" alt=""/>
                                </div>
                                <h3>Dr. Rabin Shrestha</h3>
                                <p>हाड तथा नशा रोग बिशेषज्ञ</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="100ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-7.jpg" alt=""/>
                                </div>
                                <h3>Dr. Farendra Shah</h3>
                                <p>Paediatrician</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}