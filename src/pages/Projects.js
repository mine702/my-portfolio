import React from 'react';
import { Element } from 'react-scroll';
import './Section.css';
import '../css/Projects.css';

const projectData = [
    {
        title: '포트리스',
        duration: '2024 ~ 2024',
        description: 'Potless는 도로 파손을 자동으로 탐지하고 이를 통합 관리하는 시스템입니다. 이 프로젝트는 onDevice AI를 활용한 포트홀 자동 탐지, 웹 통합 관리, 그리고 앱 작업자 관리 기능을 포함하고 있습니다.',
        modal: 'Potless'
    },
    {
        title: 'pennypal',
        duration: '2024 ~ 2024',
        description: '지출을 줄이고 싶은 사용자들의 그룹을 형성하여 올바른 소비 습관을 갖는데 도움을 주는 서비스!',
        modal: 'Pennypal'
    },
    {
        title: 'Beevarium',
        duration: '2024 ~ 2024',
        description: 'Beevarium은 실시간 번역과 필터링 기능을 제공하는 스트리밍 플랫폼입니다. 사용자는 전 세계 어디에서나 실시간으로 소통하며 다양한 콘텐츠를 경험할 수 있습니다.',
        modal: 'Beevarium'
    },
    {
        title: 'Table Book',
        duration: '2023 ~ 2023',
        description: '사용자가 직접 좌석을 확인하고 선택하여 예약할 수 있는 시스템입니다.',
        modal: 'TableBook'
    },
    {
        title: '블록체인 기반 부동산 거래 플랫폼 DApp',
        duration: '2022 ~ 2022',
        description: '이더리움 블록체인을 활용하여 부동산 매물 등록 및 거래가 가능한 부동산 거래 플랫폼입니다.',
        modal: 'BlockChain'
    }
];

const Projects = ({ openModal }) => {
    return (
        <Element name="projects" className="section">
            <h1>Projects</h1>
            <div className="projects-wrapper">
                <div className="project-container">
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            onClick={() => openModal(project.modal)}
                        >
                            <h3>{project.title}</h3>
                            <p className="project-description">
                                {project.description.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                            <p className="project-duration">{project.duration}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    );
};

export default Projects;
