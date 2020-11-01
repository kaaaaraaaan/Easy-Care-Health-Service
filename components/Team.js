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
                                <h3>डा. अन्जु डिओ</h3>
                                <h4>(बरीष्ठ स्त्री तथा प्रसुती रोग बिशेषज्ञ)</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="100ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-2.jpg" alt=""/>
                                </div>
                                <h3>Dr. Pushkar Deo</h3>
                                <h4>(एम्. डि. रेडियोलोजिस्ट्) </h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="200ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-3.jpg" alt=""/>
                                </div>
                                <h3>Dr. Sunil Regmi</h3>
                                <h4>(नेफ्रोलोजिस्ट् तथा सर्जन)</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="300ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-4.jpg" alt=""/>
                                </div>
                                <h3>Dr. Rajeshwar Yadav</h3>
                                <h4>(फिजिसियन् )</h4>
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
                                <h3>Dr. Sunita Karki<br />

                                </h3>
                                <h4>(छाला तथा यौन रोग बिशेषज्ञ)</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="100ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-6.jpg" alt=""/>
                                </div>
                                <h3>Dr. Rabin Shrestha</h3>
                                <h4>(हाड तथा नशा रोग बिशेषज्ञ)</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-one__single wow fadeInUp" data-wow-animation-duration="1500ms"
                                 data-wow-animation-delay="100ms">
                                <div className="team-one__image">
                                    <img src="/assets/images/team/team-1-7.jpg" alt=""/>
                                </div>
                                <h3>Dr. Farendra Shah</h3>
                                <h4>(नभजात् सिसु तथा बालरोग बिशेषज्ञ)</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}