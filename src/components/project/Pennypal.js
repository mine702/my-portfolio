import React from 'react';
import Slider from 'react-slick';
import '../../css/Project.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PennyPal from "../../assets/projects/pennypal/Pennypal.png"
import PennyPal1 from "../../assets/projects/pennypal/Pennypal1.png"

const images = [
    PennyPal,
    PennyPal1,
];

const Pennypal = ({ onClose }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <h2>Pennypal : 여러분의 소비 절약을 재미있게, 똑똑하게 도와주는 PennyPal입니다.</h2>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="slider-image-container">
                            <img src={image} alt={`slide-${index}`} className="slider-image" />
                        </div>
                    ))}
                </Slider>
                <table className="project-table">
                    <tbody>
                        <tr>
                            <td className="project-title">프로젝트 설명</td>
                            <td className="project-content">
                                PennyPal은 YOLO족 유행이 줄어들고 FIRE족 유행이 늘어나는 상황 속에서 소비 금액을 줄이는 습관을 형성하고, 지출을 효과적으로 관리할 수 있도록 돕는 서비스입니다. 이 프로젝트는 소비 내역 관리, 그룹 활동 및 경쟁, 카드 추천, 포인트 마켓 등의 기능을 제공합니다.</td>
                        </tr>
                        <tr>
                            <td className="project-title">구현 사항</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">나의 지출 관리</td>
                                            <td className="project-content">유저의 지출 내역을 자동으로 기록하고, 지출 내역을 시각화한 그래프를 통해 직관적으로 지출 현황을 볼 수 있습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">그룹 시스템</td>
                                            <td className="project-content">그룹 내 활동과 그룹 간 경쟁을 통해 개인의 소비 절약 습관을 장려하고, 그룹의 목표 달성을 위한 공동체 의식을 높일 수 있습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">카드 추천</td>
                                            <td className="project-content">사용자의 최대 지출 카테고리에 알맞는 혜택을 가진 신용 및 체크카드를 추천합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">미니 포인트 마켓</td>
                                            <td className="project-content">꾸준한 활동을 통해 모은 포인트를 소소한 생활용품·식료품 등으로 교환 가능한 마켓입니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">담당 역할</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">Backend 개발 및 인프라 담당</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">기술 스택</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">Python Flask</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Spring Boot</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">LSTM</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Docker</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Jenkins</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">GitLab</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">SonarQube</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Gerrit</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">MySQL</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">redis</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">기술 선정 이유</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">Python Flask</td>
                                            <td className="project-content">빠르고 가벼운 웹 프레임워크로, RESTful API 개발에 적합합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Spring Boot</td>
                                            <td className="project-content">자바 기반의 강력한 백엔드 프레임워크로, 엔터프라이즈급 애플리케이션 개발에 용이합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">LSTM</td>
                                            <td className="project-content">시계열 데이터 분석에 최적화된 딥러닝 모델로, 소비 패턴 분석에 효과적입니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Docker</td>
                                            <td className="project-content">컨테이너 기술을 통해 일관된 실행 환경을 제공하며, 배포를 단순화합니다..</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Jenkins</td>
                                            <td className="project-content">CI/CD 파이프라인을 구축하여 지속적인 통합과 배포를 자동화합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">GitLab</td>
                                            <td className="project-content">소스 코드 관리 및 버전 컨트롤을 위한 플랫폼입니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">SonarQube</td>
                                            <td className="project-content">코드 품질 분석을 통해 버그와 취약성을 모니터링합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Gerrit</td>
                                            <td className="project-content">코드 리뷰와 변경 사항 관리를 위한 도구입니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">역할</td>
                            <td className="project-content">
                                프로젝트의 백엔드 개발자로서, 서버 측 로직과 데이터베이스 통합을 통해 소비 절약 및 금융 상품 추천 시스템의 핵심 기능을 구현하였습니다. 주요 역할은 다음과 같습니다
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">Flask 서버 구축 및 API 개발</td>
                                            <td className="project-content">Flask를 사용하여 백엔드 서버를 구축하고, 클라이언트 요청을 처리하는 API를 개발했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Spring Boot 기반의 REST API 개발</td>
                                            <td className="project-content">Spring Boot를 사용하여 백엔드 API를 개발하고, 클라이언트 요청을 처리하는 컨트롤러를 구현했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">데이터베이스 통합 및 처리</td>
                                            <td className="project-content">MySQL 데이터베이스와의 연동을 통해 사용자 데이터를 저장하고 조회하는 기능을 구현했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">비동기 처리</td>
                                            <td className="project-content">AsyncService를 통해 비동기 방식으로 포트홀 데이터를 처리하여 시스템의 응답성을 향상시켰습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">예외 처리 및 검증</td>
                                            <td className="project-content">각종 예외 상황에 대비한 예외 처리 로직을 구현하여 안정적인 API 운영을 지원했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Docker 및 Docker-Compose 설정</td>
                                            <td className="project-content">Docker와 Docker-Compose를 사용하여 애플리케이션의 컨테이너화를 진행하고, 여러 서비스들을 효율적으로 관리했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">CI/CD 파이프라인 설정 (Jenkins)</td>
                                            <td className="project-content">Jenkins를 사용하여 CI/CD 파이프라인을 설정하고, 코드의 지속적인 통합과 배포를 자동화했습니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">역할 요약</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">지출 데이터 조회 및 통계</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">지출 데이터 삽입 및 관리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">구별, 날짜별, 월별 통계 조회 기능</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">마켓 구매 및 내역 확인</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">카드 정보 확인 및 검색</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">주식 정보 확인 및 구매</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">비동기 데이터 처리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">비동기 방식으로 대용량 데이터 처리 및 응답성 향상</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Docker 및 Docker-Compose 설정</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">애플리케이션의 컨테이너화 및 서비스 관리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">CI/CD 파이프라인 설정 (Jenkins)</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Jenkins를 사용한 지속적인 통합 및 배포 자동화</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">협업 도구 사용</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">GitLab을 통한 소스 코드 관리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">SonarQube를 통한 코드 품질 분석</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Gerrit을 통한 코드 리뷰 및 변경 관리</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">프로젝트 성과</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">사용자 만족도 90% 달성</td>
                                            <td className="project-content">사용자 설문조사 결과, PennyPal 서비스를 사용하는 사용자의 90%가 만족한다고 응답했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">비용 절감</td>
                                            <td className="project-content">Docker를 통한 효율적인 자원 관리로 서버 유지 비용을 25% 절감했습니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">문제 해결 사례</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">사용자 인증 문제</td>
                                            <td className="project-content">초기 사용자 인증 과정에서 발생한 보안 취약점을 발견했습니다. 이를 해결하기 위해 OAuth 2.0을 도입하여 인증 프로세스를 강화하고, 사용자 데이터를 안전하게 보호할 수 있었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">데이터 동기화 문제</td>
                                            <td className="project-content">여러 서버 간의 데이터 동기화 문제로 인해 일관성 문제가 발생했습니다. Redis를 활용한 캐싱과 메시지 큐 시스템(RabbitMQ)을 도입하여 데이터 동기화 문제를 해결하고, 시스템의 일관성과 성능을 크게 개선했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">메모리 누수 문제</td>
                                            <td className="project-content">장기간 운영 중 메모리 누수가 발생하여 서버 성능이 저하되는 문제가 있었습니다. 이를 해결하기 위해 프로파일링 도구(JVisualVM)를 사용하여 메모리 사용 패턴을 분석하고, 비효율적인 객체 관리 및 코드 최적화를 통해 메모리 누수 문제를 해결했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">배포 과정에서의 오류</td>
                                            <td className="project-content">수동 배포 과정에서 자주 오류가 발생하여 서비스 중단이 잦았습니다. 이를 해결하기 위해 Jenkins 기반의 CI/CD 파이프라인을 구축하고, Docker를 활용하여 배포 과정을 자동화하고 안정성을 높였습니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">배운 점 / 학습한 점</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">효율적인 자원 관리</td>
                                            <td className="project-content">Docker와 Kubernetes를 활용한 컨테이너화 및 오케스트레이션을 통해 자원 관리의 중요성을 학습했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">CI/CD의 가치</td>
                                            <td className="project-content">Jenkins를 통해 지속적인 통합과 배포의 자동화가 개발 효율성과 품질 향상에 미치는 긍정적인 영향을 실감했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">프레임워크 활용</td>
                                            <td className="project-content">Flask와 Spring의 다양한 기능과 모듈을 활용하여 개발의 생산성을 높일 수 있는 방법을 배웠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">성능 최적화</td>
                                            <td className="project-content">서버 성능 최적화와 데이터베이스 최적화 기법을 통해 애플리케이션의 전체적인 성능을 향상시키는 방법을 터득했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">협업의 중요성</td>
                                            <td className="project-content">다양한 기술 스택과 도구를 사용하는 팀원들과의 원활한 협업을 통해 프로젝트를 성공적으로 완수하는 법을 익혔습니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">프로젝트 리뷰</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">아쉬웠던 점</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">기능 요구사항 변경 빈도</td>
                                            <td className="project-content">프로젝트 진행 중 클라이언트 측의 요구사항 변경이 잦아 계획에 혼란이 발생했고, 이를 반영하는 데 많은 시간이 소요되었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">성능 모니터링 부족</td>
                                            <td className="project-content">초기 단계에서 시스템 성능 모니터링 도구를 충분히 도입하지 않아, 트래픽 증가 시 성능 저하 문제를 사전에 감지하지 못했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">사용자 피드백 반영의 어려움</td>
                                            <td className="project-content">사용자로부터의 피드백을 신속하게 반영하는 프로세스가 부족하여, 기능 개선과 버그 수정이 지연되는 경우가 많았습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">보완 방법</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">명확한 요구사항 정의</td>
                                            <td className="project-content">프로젝트 초기에 명확한 요구사항을 정의하고, 클라이언트와 긴밀히 협력하여 변경 사항을 최소화할 수 있도록 하겠습니다. 또한, 변경 관리 프로세스를 확립하여 요구사항 변경 시 신속하게 대응하겠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">성능 모니터링 도구 도입</td>
                                            <td className="project-content">프로젝트 초기 단계부터 성능 모니터링 도구(New Relic, Prometheus 등)를 도입하여 시스템 성능을 지속적으로 모니터링하고, 성능 저하를 사전에 감지하여 대응하겠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">사용자 피드백 반영 프로세스 개선</td>
                                            <td className="project-content">사용자 피드백을 신속하게 반영할 수 있는 프로세스를 마련하고, 주기적인 사용자 인터뷰와 설문조사를 통해 사용자의 요구사항을 적극적으로 반영하겠습니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">프로젝트를 통해 배우고 느낀 점</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">요구사항 관리의 중요성</td>
                                            <td className="project-content">요구사항 변경이 프로젝트에 미치는 영향을 체감하며, 명확한 요구사항 정의와 변경 관리의 중요성을 깨달았습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">성능 모니터링의 필요성</td>
                                            <td className="project-content">시스템 성능을 지속적으로 모니터링하여 성능 저하를 사전에 감지하고 대응하는 것이 얼마나 중요한지를 배웠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">사용자 중심의 개발</td>
                                            <td className="project-content">사용자 피드백을 적극 반영하는 개발 프로세스가 사용자 만족도를 높이고, 서비스의 질을 향상시킬 수 있음을 깨달았습니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">GIT 프로젝트 링크</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">이 프로젝트는 SSAFY 에서 수행한 프로젝트 임으로 보안문제로 인해 개인 공유가 불가능 합니다 하지만 회사 입사시 제출 용으로는 제출 을 허락 받았으며 열람이 필요하신 분들은 연락 부탁드립니다</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
};

export default Pennypal;
