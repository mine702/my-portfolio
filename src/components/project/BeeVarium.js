import React from 'react';
import Slider from 'react-slick';
import '../../css/Project.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PotlessFirstClass from "../../assets/projects/potless/PotlessFirstClass.jpg"
import PotlessMain from "../../assets/projects/potless/PotlessMain.png"

const images = [
    PotlessMain,
    PotlessFirstClass,
];

const Beevarium = ({ onClose }) => {

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
                <h2>Beevarium : 실시간 번역과 필터링 기능을 제공하는 스트리밍 플랫폼</h2>
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
                                Beevarium은 실시간 번역과 필터링 기능을 제공하는 스트리밍 플랫폼입니다. 사용자는 전 세계 어디에서나 실시간으로 소통하며 다양한 콘텐츠를 경험할 수 있습니다. Beevarium을 통해 언어 장벽 없이 다양한 문화와 정보를 공유하고, 새로운 스트리밍 경험을 즐길 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">구현 사항</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">실시간 스트리밍 서비스</td>
                                            <td className="project-content">WebRTC와 OpenVidu를 사용하여 실시간 스트리밍을 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">다국어 실시간 번역 기능</td>
                                            <td className="project-content">다양한 언어로 실시간 번역된 자막 제공</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">사용자 간의 실시간 채팅 및 상호작용</td>
                                            <td className="project-content">실시간 채팅 기능과 사용자 간의 상호작용 제공</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">유해언어 필터링 및 관리 기능</td>
                                            <td className="project-content">AI를 이용한 유해언어 필터링 시스템 구축</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">사용자 프로필 및 스트리밍 설정 관리</td>
                                            <td className="project-content">사용자가 자신의 프로필을 설정하고 스트리밍 환경을 관리할 수 있는 기능 제공</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">관심 스트리머 팔로우 및 후원 기능</td>
                                            <td className="project-content">스트리머 팔로우 및 후원 기능을 통해 사용자의 참여도를 높임</td>
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
                                            <td className="project-subtitle">Backend 개발 및 인프라 구축</td>
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
                                            <td className="project-subtitle">Vue.js</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Spring Boot</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">MySQL</td>
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
                                            <td className="project-subtitle">OpenVidu</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">42dot</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">LLM</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">RUDP</td>
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
                                            <td className="project-subtitle">Vue.js</td>
                                            <td className="project-content">반응형 인터페이스와 빠른 렌더링을 제공합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Spring Boot</td>
                                            <td className="project-content">자바 기반의 강력한 백엔드 프레임워크로, 엔터프라이즈급 애플리케이션 개발에 용이합니다.</td>
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
                                        <tr>
                                            <td className="project-subtitle">Redis</td>
                                            <td className="project-content">고속 캐싱 시스템으로 실시간 데이터 처리에 적합합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Nginx</td>
                                            <td className="project-content">고성능 웹 서버 및 리버스 프록시 서버로, 로드 밸런싱과 캐싱 기능이 뛰어납니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Openvidu</td>
                                            <td className="project-content">WebRTC 기반의 실시간 비디오 스트리밍을 지원합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">42dot LLM</td>
                                            <td className="project-content">대규모 언어 모델로 자연어 처리 및 번역 기능을 강화합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">rUDP</td>
                                            <td className="project-content">실시간 데이터 전송을 위한 효율적인 프로토콜입니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">역할</td>
                            <td className="project-content">
                                프로젝트의 백엔드 개발자 밑 팀장으로서, 서버 측 로직과 데이터베이스 통합을 통해 실시간 번역 및 필터링 기능을 갖춘 스트리밍 플랫폼의 핵심 기능을 구현하였습니다. 주요 역할은 다음과 같습니다
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">Spring Boot 기반의 REST API 개발</td>
                                            <td className="project-content">Spring Boot를 사용하여 백엔드 API를 개발하고, 클라이언트 요청을 처리하는 컨트롤러를 구현했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">MySQL 데이터베이스 통합 및 관리</td>
                                            <td className="project-content">MySQL 데이터베이스와의 연동을 통해 사용자, 스트리밍, 채팅 데이터 등을 저장하고 조회하는 기능을 구현했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Redis를 통한 캐싱 시스템 구축</td>
                                            <td className="project-content">Redis를 사용하여 실시간 데이터의 캐싱 및 빠른 조회 기능을 구현했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Docker 및 Docker-Compose 설정</td>
                                            <td className="project-content">Docker와 Docker-Compose를 사용하여 애플리케이션의 컨테이너화를 진행하고, 여러 서비스들을 효율적으로 관리했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">CI/CD 파이프라인 설정 (Jenkins)</td>
                                            <td className="project-content">Jenkins를 사용하여 CI/CD 파이프라인을 설정하고, 코드의 지속적인 통합과 배포를 자동화했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">실시간 스트리밍 및 데이터 통신</td>
                                            <td className="project-content">OpenVidu와 WebSocket을 사용하여 실시간 채팅과 스트리밍 데이터를 처리했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">AWS S3 연동</td>
                                            <td className="project-content">Amazon S3를 사용하여 사용자 업로드 파일과 스트리밍 관련 데이터를 저장하고 관리했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Nginx 설정 및 로드 밸런싱</td>
                                            <td className="project-content">Nginx를 사용하여 로드 밸런싱을 설정하고 서버의 성능을 최적화했습니다..</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">사용자 인증 및 권한 관리</td>
                                            <td className="project-content">JWT를 사용하여 사용자 인증 및 권한 관리를 구현했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">오류 처리 및 검증</td>
                                            <td className="project-content">각종 예외 상황에 대비한 예외 처리 로직을 구현하여 안정적인 API 운영을 지원했습니다.</td>
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
                                            <td className="project-subtitle">이메일, 비밀번호, 소셜 로그인 기능을 통한 사용자 관리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">회원가입 후 자동 로그인 및 프로필 설정 기능 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">보유 포인트 조회 및 팔로우 채널 조회 기능 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">실시간 스트리밍 기능 구현 및 송출 화면 처리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">스트리머 방송 정보 관리 및 다시보기 영상 저장 기능 개발</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">카테고리별 검색 및 키워드 검색 기능 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">실시간 채팅 기능 및 채팅 메시지 관리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">도네이션 기능 및 후원 메시지 관리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">사용자 포인트 조회 및 트랜잭션 처리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">실시간 스트리밍 모니터링 및 유해 방송 경고 기능</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">경고 및 영구 정지 유저 관리 기능</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Jenkins를 사용한 지속적인 통합 및 배포 자동화</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Docker 및 Docker-Compose를 사용한 컨테이너화 및 서비스 관리</td>
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
                                        <tr>
                                            <td className="project-subtitle">TTS 를 활용 도네이션시 음성 기능</td>
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
                                            <td className="project-subtitle">실시간 번역 정확도 향상</td>
                                            <td className="project-content">AI 기반 실시간 번역 기능의 정확도를 85%에서 95%로 개선하여, 다양한 언어 사용자가 더욱 원활하게 소통할 수 있게 되었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">사용자 참여도 증가</td>
                                            <td className="project-content">새로운 추천 알고리즘과 사용자 인터페이스 개선으로 인해 일일 평균 시청 시간이 25% 증가하였습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">스트리밍 품질 개선</td>
                                            <td className="project-content">OpenVidu와 WebRTC를 최적화하여 스트리밍 지연 시간을 평균 2초 이내로 줄여 사용자 경험을 대폭 개선했습니다.</td>
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
                                            <td className="project-subtitle">실시간 자막 번역 문제 해결</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">문제 발생</td>
                                            <td className="project-content">Beevarium에서 실시간 스트리밍 중 AI 기반 자막 번역 기능을 도입했으나, 번역된 자막이 약 1초 정도의 지연 시간으로 인해 실제 방송과의 동기화 문제가 발생했습니다. 이는 실시간 스트리밍의 특성상 자막이 1-2초 정도의 버퍼링 후에 나타나는 문제로 이어졌습니다. 사용자들은 자막의 지연으로 인해 스트리밍 경험이 저하되는 불편함을 겪었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">해결 방법</td>
                                            <td className="project-content">이 문제를 해결하기 위해 Beevarium 팀은 준실시간(near-real-time) 자막 송출 방식을 도입했습니다. 자막 기능을 켜면, 스트리밍 방송 자체에 10초 정도의 딜레이를 추가하여 자막 번역 및 필터링 작업을 준실시간으로 처리할 수 있도록 시스템을 개선했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">구체적인 해결 과정</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">딜레이 적용</td>
                                            <td className="project-content">자막 기능이 활성화되면, 스트리밍 방송에 10초의 지연 시간을 추가하여 방송 송출이 이루어지도록 설정했습니다. 이를 통해 자막 번역과 필터링 작업에 충분한 시간을 확보했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">자막 번역 및 필터링 최적화</td>
                                            <td className="project-content"> OpenVidu의 자막 기능을 활용하여 스트리머의 음성을 텍스트로 변환한 후, 번역 AI를 통해 자막을 여러 언어로 번역하고, 필터링 AI를 통해 비속어나 유해 언어를 실시간으로 검출 및 수정했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">준실시간 송출</td>
                                            <td className="project-content">번역 및 필터링된 자막을 10초 지연된 스트리밍 화면과 동기화하여 송출함으로써 시청자들이 자연스럽게 자막과 함께 스트리밍을 시청할 수 있도록 했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">결과</td>
                                            <td className="project-content">이 해결책을 통해 Beevarium은 실시간 자막 번역 기능을 안정적으로 제공할 수 있게 되었습니다. 자막의 지연 문제를 해결함으로써 사용자 경험을 크게 향상시켰으며, 특히 다국어 사용자의 만족도가 크게 증가했습니다.</td>
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
                                            <td className="project-subtitle">실시간 스트리밍 기술의 깊은 이해</td>
                                            <td className="project-content">Beevarium 프로젝트를 통해 WebRTC와 OpenVidu 같은 실시간 스트리밍 기술에 대해 깊이 있게 학습할 수 있었습니다. 특히, 실시간 스트리밍의 지연 시간 문제를 해결하기 위해 다양한 최적화 기법을 적용하면서 실시간 데이터 처리의 복잡성을 체감할 수 있었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">준실시간 자막 번역 및 필터링 구현</td>
                                            <td className="project-content">실시간 자막 번역과 필터링 기능을 구현하는 과정에서 준실시간 처리를 위한 여러 가지 기술적 접근 방식을 학습했습니다. AI 번역과 필터링의 딜레이를 줄이기 위해 스트리밍에 딜레이를 추가하는 방법을 도입함으로써, 사용자 경험을 저해하지 않으면서도 자막의 정확성을 유지할 수 있는 방법을 배웠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">협업의 중요성</td>
                                            <td className="project-content">프로젝트를 진행하면서 다양한 팀원들과의 협업이 중요하다는 것을 다시 한 번 느꼈습니다. Jira와 Confluence 같은 협업 도구를 적극 활용하여 프로젝트 관리와 커뮤니케이션을 효율적으로 진행할 수 있었습니다. 특히, 프론트엔드와 백엔드 팀 간의 긴밀한 소통이 프로젝트의 성공에 큰 기여를 했습니다.</td>
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
                                            <td className="project-subtitle">초기 기술 선택의 어려움</td>
                                            <td className="project-content">프로젝트 초기 단계에서 적절한 기술 스택을 선택하는 데 어려움이 있었습니다. 특히, 실시간 스트리밍과 번역 기능을 동시에 제공하는 솔루션을 찾는 과정에서 여러 차례 시행착오를 겪었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">테스트 자동화의 부족</td>
                                            <td className="project-content">테스트 자동화의 중요성을 충분히 인식하지 못하여, 프로젝트 후반부에서 발생한 버그를 수정하는 데 많은 시간이 소요되었습니다. 특히, 실시간 기능에 대한 테스트가 부족하여 예상치 못한 문제들이 발생했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">실시간 번역 딜레이 문제</td>
                                            <td className="project-content">실시간 번역 기능에서 발생한 1~2초의 지연 문제는 사용자의 경험을 저해했습니다. 이를 해결하기 위해 스트리밍에 10초 딜레이를 추가했으나, 완전한 실시간 경험을 제공하지 못한 점이 아쉬웠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">보완 방법</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">초기 기술 검토 강화</td>
                                            <td className="project-content">프로젝트 시작 단계에서 충분한 기술 검토와 프로토타이핑을 통해 적절한 기술 스택을 선택할 수 있도록 하겠습니다. 다양한 기술 옵션을 비교 분석하여 최적의 솔루션을 선택하는 과정을 강화하겠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">테스트 자동화 도입</td>
                                            <td className="project-content">프로젝트 초기부터 JUnit, Selenium 등의 테스트 자동화 도구를 도입하고, CI/CD 파이프라인에 통합하여 코드 품질을 지속적으로 검증하겠습니다. 이를 통해 프로젝트 후반부의 버그를 사전에 예방하고 유지보수성을 높이겠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">실시간 번역 최적화</td>
                                            <td className="project-content">실시간 번역 기능의 지연 문제를 해결하기 위해 AI 모델과 번역 API의 최적화를 진행하겠습니다. 또한, 사용자 피드백을 반영하여 딜레이 최소화를 위한 기술적 접근 방식을 지속적으로 연구하겠습니다.</td>
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
                                            <td className="project-subtitle">실시간 스트리밍 기술의 중요성</td>
                                            <td className="project-content">Beevarium 프로젝트를 통해 실시간 스트리밍 기술의 복잡성과 중요성을 깊이 이해할 수 있었습니다. WebRTC와 OpenVidu를 사용하여 실시간으로 스트리밍을 제공하는 과정에서 발생한 다양한 기술적 문제를 해결하면서, 안정적이고 효율적인 스트리밍 서비스를 구축하는 방법을 배웠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">효과적인 팀 협업</td>
                                            <td className="project-content">프로젝트를 진행하면서 팀 내에서의 효과적인 소통과 협업의 중요성을 깨달았습니다. 다양한 백엔드, 프론트엔드, 인프라 담당자들이 함께 협력하여 목표를 달성하는 과정에서, 정기적인 회의와 협업 도구의 활용이 얼마나 중요한지 실감했습니다. 특히, 초기의 소통 부족으로 인한 문제들을 해결하면서, 앞으로의 프로젝트에서는 더욱 원활한 커뮤니케이션을 유지해야겠다는 교훈을 얻었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">테스트 자동화의 필요성</td>
                                            <td className="project-content">테스트 자동화의 중요성을 몸소 체험했습니다. 프로젝트 후반부에 발생한 여러 버그들을 해결하는 데 많은 시간이 소요되었고, 이를 통해 테스트 자동화 도구를 활용한 지속적인 코드 검증의 필요성을 절감했습니다. 앞으로의 프로젝트에서는 초기 단계부터 테스트 자동화를 도입하여 코드 품질을 높이겠습니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">프로젝트 링크</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">GIT HUB</td>
                                            <td className="project-content">
                                                <a href="https://github.com/mine702/Beevarium" target="_blank">https://github.com/mine702/Beevarium</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">NOTION</td>
                                            <td className="project-content">
                                                <a href="https://saber-circle-3a4.notion.site/B203-bdf8ed3893b94fcba7fbe3b2e1cb3cd7" target="_blank">https://saber-circle-3a4.notion.site/B203-bdf8ed3893b94fcba7fbe3b2e1cb3cd7</a>
                                            </td>
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

export default Beevarium;
