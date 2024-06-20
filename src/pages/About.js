import React from 'react';
import { Element } from 'react-scroll';
import './Section.css';

const About = () => {
    return (
        <Element name="about" className="section">
            <h1>About Me</h1>
            <p>This is the About section.</p>
        </Element>
    );
};

export default About;
