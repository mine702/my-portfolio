import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Contact Me</h1>
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
