import React from 'react';
import { Element } from 'react-scroll';
import '../css/About.css';

const About = () => {
    return (
        <Element name="about" className="section">
            <div className="about-section">
                <h1>About Me</h1>
                <h2>🌱 안녕하세요, 백엔드 개발자 김민건입니다.</h2>

                <div className='about-content'>
                    <p>복잡한 문제를 해결하고, 효율적인 시스템 아키텍처 설계를 고민하는 것을 즐깁니다.</p>
                    <p>새로운 기술을 익히는 것을 좋아하여 블록체인, 메타버스, AI, IoT 등 다양한 기술을 학습하고 프로젝트를 진행해왔습니다.</p>
                    <p>사용자 경험을 중요시하여, 삼성 소프트웨어 아카데미에서 진행한 프로젝트를 위해 지역 구청과 15번의 미팅을 통해 프로젝트를 완성하였고, 전국 1등 수상 경험이 있습니다.</p>
                </div>

                <div className="education">
                    <h2>👍 인적 사항</h2>
                    <p>생년 월일 : 1999.07.02</p>
                    <p>주소지 : 대전 동춘당로 114번길 47</p>
                </div>

                <div className="education">
                    <h2>🎓 교육 과정</h2>
                    <p>우송대학교 스마트 IT 졸업.</p>
                    <p>비트 교육 센터에서 고급과정을 수료.</p>
                    <p>삼성 청년 소프트웨어 아카데미 ( SSAFY ) 과정 수료.</p>
                </div>

                
            </div>
        </Element>
    );
};

export default About;
