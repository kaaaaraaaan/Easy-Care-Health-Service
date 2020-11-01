import React,{ Component } from 'react';

export default class ContactMap extends React.Component {
    constructor(){
        super()
    }

    render(){
        return (
            <div className="container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.3936475420246!2d87.27693741464574!3d26.57174058327558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef727261979e21%3A0x5627c02cacc8e697!2sEasy%20Care%20Health%20Service%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1604154161911!5m2!1sen!2snp"
                className="google-map__contact" allowFullScreen></iframe>
            </div>
        )
    }
}