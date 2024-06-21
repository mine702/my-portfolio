import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import githubLogo from '../assets/github-logo.png'; // 이미지 경로 불러오기

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav>
                    <ul className="nav-links">
                        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500}>About me</Link></li>
                        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                        <li><Link to="learn" smooth={true} duration={500}>Learn</Link></li>
                        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                    </ul>
                    <div className="github-button">
                        <a href="https://github.com/mine702" target="_blank" rel="noopener noreferrer">
                            <button>
                            <img src={githubLogo} alt="GitHub Logo" />
                                My GitHub
                            </button>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
