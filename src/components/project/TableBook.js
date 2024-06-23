import React from 'react';
import Slider from 'react-slick';
import '../../css/Project.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TableBook_1 from "../../assets/projects/tablebook/TableBook_1.png"
import TableBook_2 from "../../assets/projects/tablebook/TableBook_2.png"
const images = [
    TableBook_1,
    TableBook_2,
];

const TableBook = ({ onClose }) => {

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
                <h2>Table Book : 3D 이미지를 활용한 식당 예약 웹 앱</h2>
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
                                Table Book은 사용자가 직접 좌석을 확인하고 선택하여 예약할 수 있는 식당 예약 웹 애플리케이션입니다. 일반적인 2D 이미지가 아닌 역동적인 3D 이미지를 활용하여 사용자가 선택한 좌석의 위치를 자세히 확인할 수 있습니다. 사용자는 회원가입 후 로그인을 통해 원하는 지역과 음식 카테고리를 선택하고, 식당을 예약할 수 있습니다. 사장님은 가게를 등록하고 예약을 관리할 수 있습니다.
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">구현 사항</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">3D 좌석 선택</td>
                                            <td className="project-content">사용자가 3D 이미지를 통해 좌석을 확인하고 예약할 수 있도록 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">식당 리뷰 및 메뉴 확인</td>
                                            <td className="project-content">식당 리뷰와 메뉴를 확인할 수 있는 기능 제공</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">예약 관리</td>
                                            <td className="project-content">예약 내역을 확인하고 관리할 수 있는 기능 제공</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">사장님 기능</td>
                                            <td className="project-content">가게 등록 및 예약 관리 기능 제공</td>
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
                                            <td className="project-subtitle">FullStack 및 3D 모델링 담당</td>
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
                                            <td className="project-subtitle">React</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Spring Boot</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Three.js</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Docker</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Jenkins</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">SketchUp</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Unreal Engine</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Ant Design</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">GitHub</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">SonarQube</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Gerrit</td>
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
                                            <td className="project-subtitle">React</td>
                                            <td className="project-content">컴포넌트 기반의 빠르고 효율적인 UI 구현을 가능하게 하며, 변경된 데이터만 렌더링하여 성능을 최적화합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Spring Boot</td>
                                            <td className="project-content">자바 기반의 강력한 백엔드 프레임워크로, 엔터프라이즈급 애플리케이션 개발에 용이합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Three.js</td>
                                            <td className="project-content">3D 그래픽을 웹에서 구현하기 위한 JavaScript 라이브러리입니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">SketchUp</td>
                                            <td className="project-content">직관적인 3D 모델링 도구로, 건물 도면 제작에 용이합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Unreal Engine</td>
                                            <td className="project-content">고품질의 애니메이션 및 이벤트를 추가할 수 있는 게임 엔진입니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Docker</td>
                                            <td className="project-content">컨테이너 기술을 통해 일관된 실행 환경을 제공하며, 배포를 단순화합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">SonarQube</td>
                                            <td className="project-content">코드 품질 분석을 통해 버그와 취약성을 모니터링합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Jenkins</td>
                                            <td className="project-content">CI/CD 파이프라인을 구축하여 지속적인 통합과 배포를 자동화합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">GitHub</td>
                                            <td className="project-content">소스 코드 관리 및 버전 컨트롤을 위한 플랫폼입니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Ant Design</td>
                                            <td className="project-content">고품질의 React UI 컴포넌트를 제공하는 디자인 시스템입니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">역할</td>
                            <td className="project-content">
                                프로젝트의 풀스택 개발자 및 3D 모델링 담당자로서, 서버 측 로직과 데이터베이스 통합, 3D 모델링 및 애니메이션을 통해 식당 예약 시스템의 핵심 기능을 구현하였습니다. 주요 역할은 다음과 같습니다
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">React 기반의 프론트엔드 개발</td>
                                            <td className="project-content">React를 사용하여 사용자 인터페이스를 개발하고, Three.js를 활용하여 3D 모델을 웹 페이지에 표시했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">3D 모델링 및 애니메이션</td>
                                            <td className="project-content">SketchUp을 사용하여 건물 도면을 모델링하고, Unreal Engine을 통해 애니메이션 및 이벤트를 추가했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Spring Boot 기반의 REST API 개발</td>
                                            <td className="project-content">Spring Boot를 사용하여 백엔드 API를 개발하고, 클라이언트 요청을 처리하는 컨트롤러를 구현했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">MySQL 데이터베이스 통합 및 관리</td>
                                            <td className="project-content">MySQL 데이터베이스와의 연동을 통해 사용자, 식당, 예약 데이터 등을 저장하고 조회하는 기능을 구현했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">데이터베이스 통합 및 처리</td>
                                            <td className="project-content">MySQL 데이터베이스와의 연동을 통해 포트홀 데이터를 저장하고 조회하는 기능을 구현했습니다.</td>
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
                                            <td className="project-subtitle">이메일, 비밀번호, 소셜 로그인 기능을 통한 사용자 관리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">회원가입 후 자동 로그인 및 프로필 설정 기능 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">3D 모델을 활용한 좌석 선택 기능 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">식당 리뷰 및 메뉴 확인 기능 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">예약 관리 기능 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">사장님 기능: 가게 등록 및 예약 관리 기능 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">AWS S3 연동</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">AWS S3에 파일 업로드 및 파일 URL 저장</td>
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
                                            <td className="project-subtitle">SonarQube를 통한 코드 품질 분석</td>
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
                                            <td className="project-subtitle">3D 모델링 및 애니메이션 도입</td>
                                            <td className="project-content">스케치업과 언리얼 엔진을 활용한 3D 모델링 및 애니메이션 기술을 도입하여, 웹 애플리케이션의 시각적 완성도와 사용자 경험을 크게 향상시켰습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Spring Boot와 React의 효율적 통합</td>
                                            <td className="project-content">백엔드(Spring Boot)와 프론트엔드(React)를 효율적으로 통합하여 빠르고 안정적인 서비스를 제공했습니다. 이로 인해 서버 응답 시간이 단축되었습니다.</td>
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
                                            <td className="project-subtitle">3D 모델링 및 애니메이션 퀄리티 문제 해결</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">문제 발생</td>
                                            <td className="project-content">스케치업을 이용하여 3D 모델링을 한 후, 애니메이션과 이벤트를 추가하기 위해 언리얼 엔진으로 모델을 옮겼을 때 문제가 발생했습니다. 스케치업은 약간 만화 같은 3D 모델링 스타일을 제공하는 반면, 언리얼 엔진은 현실성을 높여주는 렌더링을 지원합니다. 이로 인해 모델이 언리얼 엔진으로 옮겨졌을 때, 예상했던 대로의 스타일과 퀄리티가 나오지 않았고, 퀄리티가 현저히 낮아지는 문제가 발생했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">해결 방법</td>
                                            <td className="project-content">이 문제를 해결하기 위해 몇 가지 접근 방식을 시도했습니다. 먼저, 스케치업에서 언리얼 엔진으로 모델을 옮길 때 발생하는 스타일 차이를 줄이기 위해 스케치업 모델의 텍스처와 재질을 최대한 언리얼 엔진에 맞게 조정했습니다. 또한, 언리얼 엔진에서의 조명 설정과 쉐이더를 최적화하여 스케치업 스타일의 특성을 유지하면서도 언리얼 엔진의 고품질 렌더링 기능을 활용할 수 있도록 조정했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">구체적인 해결 과정</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">모델 최적화</td>
                                            <td className="project-content">스케치업에서 언리얼 엔진으로 모델을 옮길 때, 텍스처와 재질을 언리얼 엔진에 맞게 조정했습니다. 이는 텍스처 파일의 해상도를 조절하고, 재질 속성을 언리얼 엔진의 PBR(Material) 시스템에 맞추는 작업을 포함합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">조명 설정</td>
                                            <td className="project-content">언리얼 엔진에서 조명 설정을 최적화하여 모델의 외관을 개선했습니다. 이를 통해 모델의 세부 사항과 색상이 더 명확하게 드러나도록 했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">쉐이더 조정</td>
                                            <td className="project-content">언리얼 엔진의 고급 쉐이더 기능을 사용하여 모델의 텍스처와 재질을 더욱 현실감 있게 표현하도록 조정했습니다. 이는 스케치업의 만화 스타일을 유지하면서도 언리얼 엔진의 렌더링 능력을 최대한 활용할 수 있도록 했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">결과</td>
                                            <td className="project-content">이 해결책을 통해 3D 모델의 퀄리티 문제를 성공적으로 해결할 수 있었습니다. 스케치업의 만화 같은 스타일을 유지하면서도 언리얼 엔진의 고품질 렌더링 기능을 활용하여 모델의 외관을 개선했습니다. 이를 통해 사용자들에게 더욱 만족스러운 시각적 경험을 제공할 수 있었으며, 프로젝트의 전반적인 퀄리티를 높일 수 있었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">실시간 3D 모델 로딩 문제 해결</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">문제 발생</td>
                                            <td className="project-content">초기 단계에서 3D 모델의 로딩 시간이 길어 사용자 경험이 저하되는 문제가 발생했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">해결 방법</td>
                                            <td className="project-content">3D 모델의 최적화를 통해 파일 크기를 줄이고, 로딩 시간을 단축했습니다. Three.js의 Lazy Loading 기법을 사용하여 필요한 부분만 로딩하는 방식을 도입했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">결과</td>
                                            <td className="project-content">로딩 시간이 50% 단축되었고, 사용자 경험이 크게 개선되었습니다.</td>
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
                                            <td className="project-subtitle">3D 모델링과 렌더링 기술의 차이 이해</td>
                                            <td className="project-content">스케치업과 언리얼 엔진의 차이를 이해하는 과정에서 다양한 3D 모델링 툴의 특성과 장단점을 파악할 수 있었습니다. 스케치업은 직관적이고 빠르게 모델링을 할 수 있는 장점이 있지만, 언리얼 엔진처럼 고품질의 현실감 있는 렌더링을 지원하지 않는다는 점을 배웠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">모델 최적화 및 재질 조정 기술 습득</td>
                                            <td className="project-content">스케치업에서 언리얼 엔진으로 모델을 옮길 때 발생하는 문제를 해결하기 위해 모델의 텍스처와 재질을 최적화하는 기술을 습득했습니다. 이를 통해 모델의 디테일과 품질을 유지하면서도 다른 플랫폼 간의 호환성을 높일 수 있었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">문제 해결 능력 강화</td>
                                            <td className="project-content">프로젝트 진행 중 발생한 문제를 분석하고 해결하기 위해 다양한 접근 방식을 시도하면서 문제 해결 능력을 강화할 수 있었습니다. 특히, 3D 모델링과 렌더링 과정에서 발생할 수 있는 문제를 예측하고 해결하는 방법을 터득했습니다.</td>
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
                                            <td className="project-subtitle">초기 모델링 툴 선택의 부족한 검토</td>
                                            <td className="project-content">프로젝트 초기 단계에서 3D 모델링 툴을 선택할 때, 스케치업의 제한된 렌더링 퀄리티를 충분히 고려하지 못한 점이 아쉬웠습니다. 이로 인해 언리얼 엔진으로 옮길 때 모델의 퀄리티 저하 문제가 발생했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">리소스 및 시간 부족</td>
                                            <td className="project-content">고품질의 3D 모델을 제작하고 최적화하는 데 필요한 리소스와 시간이 부족했습니다. 이로 인해 모델의 세부적인 디테일을 구현하는 데 한계가 있었으며, 프로젝트 일정이 지연되는 문제가 발생했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">팀 내 전문성 부족</td>
                                            <td className="project-content">팀원들이 3D 모델링과 언리얼 엔진을 사용하는 경험이 부족하여 초기에는 많은 시행착오를 겪었습니다. 이로 인해 프로젝트의 전반적인 진행 속도가 느려졌고, 품질 향상에 필요한 기술적 역량이 부족했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">보완 방법</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">모델링 툴의 사전 검토 강화</td>
                                            <td className="project-content">프로젝트 초기 단계에서 다양한 모델링 툴과 렌더링 엔진을 사전 검토하고, 각 툴의 특성과 한계를 충분히 이해한 후 적합한 툴을 선택하도록 하겠습니다. 이를 통해 나중에 발생할 수 있는 문제를 예방할 수 있습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">리소스 및 일정 관리 강화</td>
                                            <td className="project-content">프로젝트 계획 단계에서 충분한 리소스와 시간을 확보하고, 리소스 배분과 일정 관리를 철저히 하겠습니다. 이를 통해 모델링과 렌더링 작업의 품질을 높이고, 프로젝트 일정 내에 작업을 완료할 수 있도록 하겠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">최신 기술 도입과 학습</td>
                                            <td className="project-content">최신 3D 모델링 및 렌더링 기술을 지속적으로 학습하고, 프로젝트에 도입하여 품질을 향상시키겠습니다. 이를 통해 프로젝트의 전반적인 완성도를 높이고, 사용자에게 더 나은 경험을 제공할 수 있습니다.</td>
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
                                            <td className="project-subtitle">3D 모델링 및 렌더링 기술의 중요성</td>
                                            <td className="project-content">이번 프로젝트를 통해 3D 모델링과 렌더링 기술의 중요성을 깊이 이해하게 되었습니다. 특히, 스케치업과 언리얼 엔진의 차이점을 체감하면서 각 툴의 강점과 약점을 명확히 알 수 있었습니다. 이를 통해 앞으로의 프로젝트에서는 더 적합한 툴을 선택할 수 있는 기준을 마련하게 되었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">효율적인 문제 해결 능력</td>
                                            <td className="project-content">모델링 툴 변경으로 인한 퀄리티 저하 문제를 해결하기 위해 다양한 방법을 시도하면서 문제 해결 능력이 크게 향상되었습니다. 특히, 예기치 못한 문제에 직면했을 때 유연하게 대처하고, 최선의 해결책을 찾는 경험을 통해 문제 해결 능력을 배양할 수 있었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">시간 관리 및 일정 준수의 필요성</td>
                                            <td className="project-content">프로젝트 진행 중 시간 관리와 일정 준수의 중요성을 절감했습니다. 초기 계획 단계에서 충분한 시간을 확보하지 못한 것이 후반부에 영향을 미쳤고, 이를 통해 앞으로의 프로젝트에서는 보다 철저한 시간 관리와 일정 계획이 필요하다는 것을 깨달았습니다.</td>
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
                                                <a href="https://github.com/mine702/capstone" target="_blank">https://github.com/mine702/capstone</a>
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

export default TableBook;