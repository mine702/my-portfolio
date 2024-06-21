import React from 'react';
import { Element } from 'react-scroll';
import './Section.css';
import '../css/Contact.css';

const Contact = () => {
    return (
        <Element name="contact" className="section">
            <div className="contact-section">
                <div className="contact-container">
                    <h1>Contact</h1>
                    <div className="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
                        <span>mine702@naver.com</span>
                    </div>
                    <div className="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10.5 20h3q.2 0 .35-.15t.15-.35t-.15-.35t-.35-.15h-3q-.2 0-.35.15t-.15.35t.15.35t.35.15M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5v3h10v-3zm0-2h10V6H7zM7 4h10V3H7zm0 14v3zM7 4V3z"/></svg>
                        <span>+82 10-8208-3136</span>
                    </div>
                    <div className="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5.679 18.123C3.093 16.566 1.5 14.112 1.5 11.405C1.501 6.701 6.249 3 12.001 3s10.5 3.701 10.5 8.405c0 4.704-4.748 8.405-10.5 8.405c-.442 0-.881-.022-1.318-.065l-3.765 2.458c-.615.326-.957.425-1.485.066c-.62-.424-.596-.892-.382-1.56zM3.5 11.405c0 2.132 1.418 4.123 3.781 5.32l.706.359l-.186.77l-.401 1.648l2.8-1.83l.365.046c.474.061.953.092 1.435.092c4.741 0 8.5-2.93 8.5-6.405S16.742 5 12.001 5s-8.5 2.93-8.5 6.405m14.407-.346l1.514 2.155a.472.472 0 1 1-.773.543l-1.428-2.033l-.427.413V13.5a.472.472 0 1 1-.944 0v-1.439a.472.472 0 0 1 0-.222V9.282a.472.472 0 0 1 .944 0v1.542l1.928-1.866a.472.472 0 0 1 .656.678zm-2.958 1.925a.472.472 0 1 1 0 .944h-1.932a.472.472 0 0 1-.471-.472V9.297a.472.472 0 1 1 .943 0v3.687zm-5.857-1.091h1.334l-.638-1.708zm2.523.487l.345.925a.472.472 0 1 1-.884.33l-.298-.799h-2.07l-.332.813a.472.472 0 1 1-.874-.357l1.662-4.075a.696.696 0 0 1 .653-.447a.69.69 0 0 1 .627.474l1.046 2.8a.469.469 0 0 1 .127.32zM8.294 9.302c0 .26-.21.472-.471.472h-1.14v3.736a.472.472 0 0 1-.945 0V9.774h-1.16a.472.472 0 1 1 0-.944h3.245c.26 0 .471.211.471.472"/></svg>
                        <span>mine0702</span>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Contact;
