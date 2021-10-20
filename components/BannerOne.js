import React,{ Component } from 'react';
import Link from "next/link";

export default class BannerOne extends React.Component {
    constructor(){
        super()
    }
    componentDidMount() {
        if ($('.video-popup').length) {
            $('.video-popup').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: true,

                fixedContentPos: false
            });
        }
    }

    render(){
        return (
            <section className="banner-one">
                <img src="/assets/images/shapes/banner-bg-shape-1-1.png" alt="" className="banner-one__moc"/>
                    <div className="container">
                        <div className="banner-one__video wow fadeInUp" data-wow-animation-duration="1500ms">
                            <img src="/assets/images/resources/video-1-1.jpg" width="639" height="639" alt=""/>
                            <a href="https://www.youtube.com/watch?v=0niXJOcjL5U&list=PLoBU8po_SBvf1BZwGO8cxjllWKKShkioP&index=1&t=8s"
                                   className="video-popup banner-one__video-btn"><i className="fa fa-play"></i></a>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-one__content">
                                    <h3>Easy Care Health <br/>
                                    Service Pvt. Ltd.</h3>
                                    <p>What Our Customers Have To Say About Us</p>
                                    <Link href="/about">
                                        <a className="thm-btn banner-one__btn">Discover More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

        )
    }
}
