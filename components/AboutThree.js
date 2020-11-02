import React,{ Component } from 'react';

export default class AboutThree extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="about-three">
                <div className="container">
                    <div className="block-title text-center">
                        <h3>Protect Yourself</h3>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about-three__image">
                                <img src="/assets/images/resources/about-2-1.png" alt="" />
                            </div>
                            <div className="about-three__title">
                                <h3>We’re Always Here to Protect You</h3>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="about-three__image">
                                <img src="/assets/images/resources/about-2-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center about-three__text">
                        <p className="pos_fixed">
                        ✅ पाइल्सको उपचार गराएर पनि ठिक भएको छैन भने अब ढुक्क हुनु होस,<br />
                        ✅ दिसा गर्दा दिसाघरबाट मासु बाहिर निस्कने र दिसा गरे पछी मासु आफै भित्र जाने वा हातले धकेलेर मात्र भित्र जाने <br />
                        ✅ दिसाघरबाट रगत, पिप, पानी बग्ने <br />
                        ✅ मलद्वार चिलाउने, पोल्ने, दुख्ने <br />
                        ✅ मलद्वार वरिपरि मासुका डल्ला वा फोका पलाएको <br />
                        ✅ बिना अप्रेसन र बिना धागो बाँधीकन निको पारिने <br />
                        ✅ अप्रेसन वा क्षारसुत्र बिग्रीएर भएका घाउहरु समेत निको हुने<br />
                        ✅ औषधीबाट नै पाईल्सको जरै फाली उपचार गरिने<br />
                        ✅ भर्ना भएर बस्नु नपर्ने<br />
                        ✅ ठिक नभए पैसा फिर्ता<br />
                        ✅ कुनै पनि साइड इफेक्ट नहुने<br />
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
