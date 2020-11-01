import React,{ Component } from 'react';
import Link from 'next/link';

export default class NavOne extends React.Component {
    constructor(){
        super()
    }

    componentDidMount() {


    }

    render(){
        return (

            <header className="site-header-one">
                <nav className="main-nav__one stricky">
                    <div className="container-fluid">
                            <a href="/">
                                <img width="110" src="/assets/images/logo-1-1.png" alt="" />
                            </a>
                            <a href="#" className="side-menu__toggler"><i className="fa fa-bars"></i></a>
                        <div className="main-nav__main-navigation">
                            <ul className=" main-nav__navigation-box">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <Link href="/about"><a>About</a></Link>
                                </li>
                                <li>
                                    <Link href="/faq"><a>FAQs</a></Link>
                                </li>                   
                                <li>
                                    <Link href="/contact"><a>Contact</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="main-nav__cta">
                            <div className="main-nav__cta-icon">
                                <i className="vimns-icon-phone"></i>
                            </div>
                            <div className="main-nav__cta-content">
                                <h3><a href="tel:666-888-0000">666 888 0000</a></h3>
                                <p>Helpline</p>
                            </div>
                        </div>
                        <div className="main-nav__right">
                            <Link href="/prevention">
                                <a className="main-nav__btn">COVID-19 Prevention</a>
                            </Link>
                        </div>
                    </div>
                </nav>

            </header>
        )
    }
}