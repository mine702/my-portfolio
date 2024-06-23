import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import '../css/Learn.css';
import Querydsl from '../assets/certificate/Querydsl.jpg';
import Docker from '../assets/certificate/Docker.jpg';
import Http from '../assets/certificate/Http.jpg';
import JAVA_ORM_JPA_Basic from '../assets/certificate/JAVA_ORM_JPA_Basic.jpg';
import Practical_Testing from '../assets/certificate/Practical_Testing.jpg';
import Spring_BasicPart from '../assets/certificate/Spring_BasicPart.jpg';
import Spring_Data_JPA from '../assets/certificate/Spring_Data_JPA.jpg';
import Spring_DB_1 from '../assets/certificate/Spring_DB_1.jpg';
import Spring_DB_2 from '../assets/certificate/Spring_DB_2.jpg';
import Spring_mvc_1 from '../assets/certificate/Spring_mvc_1.jpg';
import Spring_mvc_2 from '../assets/certificate/Spring_mvc_2.jpg';
import SpringBoot_JPA_application_1 from '../assets/certificate/SpringBoot_JPA_application_1.jpg';
import SpringBoot_JPA_application_2 from '../assets/certificate/SpringBoot_JPA_application_2.jpg';
import YOLO from '../assets/certificate/YOLO.jpg';

const Learn = () => {
    const [modalImage, setModalImage] = useState(null);
    const [scrollPositions, setScrollPositions] = useState({ backend: 0, infra: 0, others: 0 });

    const openModal = (image) => {
        console.log(image)
        setModalImage(image);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    const scrollDown = (category) => {
        const listElement = document.getElementById(`${category}-list`);
        const newPosition = scrollPositions[category] + 100;
        setScrollPositions({ ...scrollPositions, [category]: newPosition });
        listElement.scrollTo({
            top: newPosition,
            behavior: 'smooth',
        });
    };

    const scrollUp = (category) => {
        const listElement = document.getElementById(`${category}-list`);
        const newPosition = scrollPositions[category] - 100;
        setScrollPositions({ ...scrollPositions, [category]: newPosition });
        listElement.scrollTo({
            top: newPosition,
            behavior: 'smooth',
        });
    };

    
    const courses = {
        backend: [
            { name: '스프링 핵심 원리 - 기본편', image: Spring_BasicPart },
            { name: '스프링 MVC 1편', image: Spring_mvc_1 },
            { name: '스프링 MVC 2편', image: Spring_mvc_2 },
            { name: '스프링 DB 1편', image: Spring_DB_1 },
            { name: '스프링 DB 2편', image: Spring_DB_2 },
            { name: '자바 ORM 표준 JPA', image: JAVA_ORM_JPA_Basic },
            { name: '실전! 스프링 부트와 JPA 1', image: SpringBoot_JPA_application_1 },
            { name: '실전! 스프링 부트와 JPA 2', image: SpringBoot_JPA_application_2 },
            { name: '실전! 스프링 데이터 JPA', image: Spring_Data_JPA },
            { name: '실전! Querydsl', image: Querydsl }
        ],
        infra: [
            { name: '따라하며 배우는 도커', image: Docker }
        ],
        others: [
            { name: '최신 딥러닝 기술과 객체인식', image: YOLO },
            { name: '실용적인 테스트 가이드', image: Practical_Testing },
            { name: 'HTTP웹 기본 지식', image: Http },
        ]
    };
    const renderCourses = (category) => (
        <div className="course-category-container">
            <div className="scroll-button up" onClick={() => scrollUp(category)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M11 11.8V15q0 .425.288.713T12 16t.713-.288T13 15v-3.2l.9.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-2.6-2.6q-.3-.3-.7-.3t-.7.3l-2.6 2.6q-.275.275-.275.7t.275.7t.7.275t.7-.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />
                </svg>
            </div>
            <div className="course-category">
                <h3>{category}</h3>
                <div className="course-list" id={`${category}-list`}>
                    {courses[category].map((course, index) => (
                        <div key={index} className="course-card" onClick={() => openModal(course.image)}>
                            {course.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="scroll-button down" onClick={() => scrollDown(category)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m11 12.2l-.9-.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l2.6 2.6q.3.3.7.3t.7-.3l2.6-2.6q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275l-.9.9V9q0-.425-.288-.712T12 8t-.712.288T11 9zm1 9.8q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />
                </svg>
            </div>
        </div>
    );

    return (
        <Element name="learn" className="section">
            <h1>Learn</h1>
            <div className="learn-container">
                {renderCourses('backend')}
                {renderCourses('infra')}
                {renderCourses('others')}
            </div>

            {modalImage && (
                <div className="modal" onClick={closeModal}>
                    <img src={modalImage} alt="Certificate" className="modal-image" />
                </div>
            )}
        </Element>
    );
};

export default Learn;
