import React,{ Component } from 'react';
import Link from "next/link";

export default class Footer extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <a href="#" data-target="html" className="scroll-to-target scroll-to-top"><i
                                    className="fa fa-angle-up"></i></a>

                <div className="side-menu__block">
                    <div className="side-menu__block-overlay custom-cursor__overlay">
                        <div className="cursor"></div>
                        <div className="cursor-follower"></div>
                    </div>
                    <div className="side-menu__block-inner ">
                        <div className="side-menu__top justify-content-end">
                            <a href="#" className="side-menu__toggler side-menu__close-btn"><img
                                src="/assets/images/shapes/close-1-1.png" alt=""/></a>
                        </div>

                        <nav className="mobile-nav__container"></nav>
                        <div className="side-menu__sep"></div>
                        <div className="side-menu__content">
                            <p>के पाइल्स बवासिरको कारण विभिन्न ठाउँमा उपचार गरेर थाक्नु भएको छ ?
                            <br></br>☑ अब No Tension </p>
                            <p><a href="mailto:needhelp@bizkar.com">easycarepvtltd@gmail.com</a> <br/> <a
                                href="tel:888-999-0000">+9779807312345</a></p>
                            <div className="side-menu__social">
                                <a className="fab fa-facebook-f" href="#"></a>
                                <a className="fab fa-twitter" href="#"></a>
                                <a className="fab fa-instagram" href="#"></a>
                                <a className="fab fa-pinterest-p" href="#"></a>
                            </div>
                        </div>
                    </div>
                </div>

            <footer className="site-footer-one site-footer-one__home-one">

                <div className="site-footer-one__upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-widget footer-widget__about">
                                    <a href="index.html" className="footer-widget__logo">
                                        <img width="137" src="/assets/images/logo-1-1.png" alt=""/>
                                    </a>
                                    <p>के पाइल्स बवासिरको कारण विभिन्न ठाउँमा उपचार गरेर थाक्नु भएको छ ?
                                    <br></br>☑ अब No Tension
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="footer-widget footer-widget__links">
                                    <h3 className="footer-widget__title">Explore</h3>
                                    <div className="footer-widget__links-wrap">
                                        <ul className="list-unstyled footer-widget__links-list">
                                            <li><Link href="/about"><a>About</a></Link></li>
                                            <li><Link href="/prevention"><a>COVID-19 Tips</a></Link></li>
                                            <li><Link href="/contact"><a>Contact</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-widget footer-widget__contact">
                                    <h3 className="footer-widget__title">Contact</h3>
                                    <p><a href="tel:888-999-0000">+9779807312345</a></p>
                                    <p><a href="mailto:needhelp@vimns.com">easycarepvtltd@gmail.com</a></p>
                                </div>
                            </div>
                            <div className="col-lg-2 d-flex">
                                <div className="footer-widget my-auto">
                                    <div className="footer-widget__social">
                                        <a href="https://www.facebook.com/easycareduhabi" className="fab fa-facebook-square"></a>
                                        <a href="#" className="fab fa-twitter"></a>
                                        <a href="#" className="fab fa-instagram"></a>
                                        <a href="#" className="fab fa-pinterest-p"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            </div>

        )
    }
}