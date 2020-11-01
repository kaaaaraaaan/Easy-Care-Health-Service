import React,{ Component } from 'react';

export default class FaqPage extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (

            <section className="faq-one faq-one__faq-page">
                <div className="container">
                    <div className="block-title text-center">
                        <p>Frequently Asked Questions </p>
                        <h3>Have any question?</h3>
                    </div>

                    <div className="row">
  
                        <div className="col-lg-12">
                            <div className="accrodion-grp" data-grp-name="faq-two-accrodion">
                                <div className="accrodion ">
                                    <div className="accrodion-title">
                                        <h4>कसरि उपचार गरिन्छ ?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>हामी पाइल्सको जरै भित्र औषधि राखेर जरै गलाएर हटाउने हो जसले गर्दा रोग फेरी बल्झिने सम्भावना न्युन हुन्छ </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion active">
                                    <div className="accrodion-title">
                                        <h4>खर्च कति लाग्छ ?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>क्लिनिकमा आएर चेकप गराए पछि थाहा हुन्छ के कति लाग्ने हो </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accrodion ">
                                    <div className="accrodion-title">
                                        <h4>सम्पर्क कहाँ गर्ने हो ?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>कालिमाटी काठमाडौँमा प्रत्येक बुधवार र बिहिवार, धरानमा प्रत्येक सोमवार इटहरीमा प्रत्येक आईतवार अनि दुहबीमा प्रत्येक मंगलवार, सुक्रवार र सनिवार  </p>
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