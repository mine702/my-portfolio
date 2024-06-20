import React from 'react';
import { Element } from 'react-scroll';
import GitHubCalendar from 'react-github-calendar';
import { Typewriter } from 'react-simple-typewriter';
import './Section.css';

const Home = () => {
    return (
        <Element name="home" className="section">
            <h1>식사는 간편히, 코딩은 완벽히</h1>
            <div className="content-container">
                <p>
                    <Typewriter
                        words={['💡 서버, API, 데이터베이스를 다루는 BE 개발자로서, 안정적이고 효율적인 서버 사이드 애플리케이션을 구축하기 위해 노력합니다.']}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                <p>
                    <Typewriter
                        words={['💡 복잡한 백엔드 문제를 해결하고, 효율적인 시스템 아키텍처 설계에 대한 고민을 즐깁니다.']}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                <p>
                    <Typewriter
                        words={['💡 사용자의 요구를 정확히 파악하고, 비즈니스 요구에 맞는 효율적인 백엔드 솔루션을 제공할 수 있는 개발자가 되고자 합니다.']}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
                <p>
                    <Typewriter
                        words={['💡 지속적으로 새로운 백엔드 기술을 배우고, 협업을 통해 더 나은 서비스를 만들어 나가고 싶습니다.']}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
            </div>
            <div className="github-graph">
                <GitHubCalendar
                    username="mine702"
                    color="#0969da" // 간단하게 가장 어두운 색만 지정
                    style={{
                        margin: 20,
                        display: 'block',
                        maxWidth: '100%',
                        height: 'auto',
                        overflow: 'visible',
                    }} />
            </div>
        </Element>
    );
};

export default Home;
