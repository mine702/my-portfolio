import React from 'react';
import Slider from 'react-slick';
import '../../css/Project.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlockChain_1 from "../../assets/projects/blockchain/BlockChain_1.png"
import BlockChain_2 from "../../assets/projects/blockchain/BlockChain_2.png"
const images = [
    BlockChain_1,
    BlockChain_2,
];

const BlockChain = ({ onClose }) => {

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
                <h2>블록체인 기반 부동산 거래 플랫폼 DApp</h2>
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
                                부동산 거래 플랫폼은 블록체인 기술을 활용하여 투명하고 안전한 부동산 거래를 가능하게 하는 시스템입니다. 이 플랫폼은 NFT(Non-fungible Token)를 이용한 매물 등록, 스마트 컨트랙트를 통한 거래 보안, 실시간 채팅 기능을 제공하여 사용자 간의 직접 거래를 지원합니다. 중앙 서버에 의존하지 않고 분산된 네트워크에서 데이터를 관리하여 보안성과 신뢰성을 높였습니다.
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">구현 사항</td>
                            <td className="project-content">
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">고유 매물 등록</td>
                                            <td className="project-content">NFT를 이용해 디지털 자산의 소유주를 증명하는 가상의 토큰을 생성하여 고유한 매물을 등록</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">중개기관 없이 안전한 거래</td>
                                            <td className="project-content">블록체인 기술을 이용해 데이터의 위변조가 불가능해 중개기관 없이도 신뢰할 수 있는 거래</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">모든 거래내역 조회</td>
                                            <td className="project-content">P2P 네트워크를 통해 모든 사용자가 거래 내역을 공유 및 조회</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">실시간 채팅</td>
                                            <td className="project-content">Socket.io를 이용하여 구매자와 판매자가 실시간으로 소통 가능</td>
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
                                            <td className="project-subtitle">FullStack 및 블록체인 스마트 컨트랙트 개발</td>
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
                                            <td className="project-subtitle">Node.js</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Solidity</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">MongoDB</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">IPFS & Pinata</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Socket.io</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Truffle</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">MetaMask</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Ganache</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">axios</td>
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
                                            <td className="project-subtitle">Node.js</td>
                                            <td className="project-content">비동기 이벤트 드리븐 자바스크립트 런타임으로, 빠른 서버 환경 구축과 높은 확장성에 적합합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Solidity</td>
                                            <td className="project-content">스마트 컨트랙트 개발에 표준으로 사용되며, 이더리움 블록체인과의 호환성을 보장합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">MongoDB</td>
                                            <td className="project-content">유연한 스키마를 가진 NoSQL 데이터베이스로, 대규모 데이터를 효율적으로 관리할 수 있습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">IPFS & Pinata</td>
                                            <td className="project-content">분산 파일 시스템으로, 데이터의 무결성을 보장하며 파일을 안전하게 관리합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Socket.io</td>
                                            <td className="project-content">실시간 양방향 통신을 가능하게 하여, 실시간 채팅 기능을 구현하는 데 사용됩니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">MetaMask</td>
                                            <td className="project-content">사용자가 이더리움 지갑을 쉽게 관리할 수 있도록 지원하며, DApp과의 상호작용을 용이하게 합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Ganache</td>
                                            <td className="project-content">로컬에서 블록체인 네트워크를 쉽게 테스트할 수 있도록 지원하여, 스마트 컨트랙트 개발 및 디버깅에 용이합니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">axios</td>
                                            <td className="project-content">간편한 HTTP 요청 처리를 위해 사용되며, 비동기 통신을 쉽게 관리할 수 있습니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td className="project-title">역할</td>
                            <td className="project-content">
                                프로젝트의 풀스택 개발자 및 블록체인 스마트 컨트랙트 개발자로서, 서버 측 로직과 데이터베이스 통합을 통해 부동산 거래 플랫폼의 핵심 기능을 구현하였습니다. 주요 역할은 다음과 같습니다
                                <table className="inner-table">
                                    <tbody>
                                        <tr>
                                            <td className="project-subtitle">React 프론트엔드 개발</td>
                                            <td className="project-content">컴포넌트 기반의 React를 사용하여 사용자 인터페이스를 구현했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Node.js 백엔드 개발</td>
                                            <td className="project-content">Node.js를 사용하여 백엔드 API를 개발하고, 클라이언트 요청을 처리하는 서버를 구축했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">스마트 컨트랙트 개발</td>
                                            <td className="project-content">Solidity를 사용하여 스마트 컨트랙트를 작성하고, Ganache를 통해 테스트 환경을 구성했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">데이터베이스 통합 및 관리</td>
                                            <td className="project-content">MongoDB를 사용하여 사용자, 매물, 거래 데이터 등을 저장하고 조회하는 기능을 구현했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">파일 저장 및 관리</td>
                                            <td className="project-content">IPFS와 Pinata를 사용하여 파일을 저장하고 관리했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">실시간 채팅 구현</td>
                                            <td className="project-content">Socket.io를 이용하여 실시간 채팅 기능을 구현했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">NFT 발급 및 관리</td>
                                            <td className="project-content">NFT를 발급하여 매물의 소유권을 증명하고 관리했습니다</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">비동기 처리</td>
                                            <td className="project-content">AsyncService를 통해 비동기 방식으로 포트홀 데이터를 처리하여 시스템의 응답성을 향상시켰습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">예외 처리 및 검증</td>
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
                                            <td className="project-subtitle">부동산 매물 등록, 조회, 거래 기능 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">NFT를 활용한 매물의 소유권 증명 및 관리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">MetaMask를 통한 이더리움 지갑 인증</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">사용자 로그인 및 회원가입 기능 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Solidity를 사용하여 매물 거래를 위한 스마트 컨트랙트 개발</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Ganache를 사용하여 스마트 컨트랙트의 로컬 테스트 및 디버깅</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Socket.io를 사용하여 구매자와 판매자 간의 실시간 채팅 기능 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">MongoDB를 사용하여 매물 정보 및 거래 기록 저장</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">IPFS와 Pinata를 사용하여 분산 파일 저장 시스템 구축</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">React를 사용하여 사용자 인터페이스 구현</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Node.js와 Express를 사용하여 서버 구축</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">비동기 방식으로 대용량 데이터 처리 및 응답성 향상</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">RESTful API를 통해 클라이언트와 서버 간의 데이터 통신 처리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">axios를 사용하여 클라이언트와 서버 간의 비동기 HTTP 요청 처리</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">Truffle을 사용하여 스마트 컨트랙트 테스트 및 배포</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">nodemon을 사용하여 개발 중 서버 자동 재시작 설정</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">GitHub을 통한 소스 코드 관리 및 협업</td>
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
                                            <td className="project-subtitle">거래의 투명성 및 신뢰성 향상</td>
                                            <td className="project-content">블록체인 기술을 도입하여 부동산 거래의 투명성과 신뢰성을 크게 향상시켰습니다. 모든 거래 내역이 블록체인에 기록되어 위변조가 불가능해졌으며, 사용자들은 안전하게 부동산 거래를 진행할 수 있었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">NFT를 통한 소유권 증명</td>
                                            <td className="project-content">부동산 매물의 소유권을 NFT로 발행하여, 디지털 자산으로 소유권을 증명하는 새로운 방식을 도입했습니다. 이를 통해 소유권 증명이 명확해지고, 거래 과정이 더욱 간편해졌습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">실시간 채팅 기능 도입</td>
                                            <td className="project-content">Socket.io를 활용한 실시간 채팅 기능을 구현하여, 구매자와 판매자 간의 원활한 의사소통을 지원했습니다. 이를 통해 거래 협상이 실시간으로 이루어져 사용자 만족도를 크게 높였습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">데이터 무결성 및 보안성 확보</td>
                                            <td className="project-content">IPFS와 Pinata를 활용하여 데이터를 분산 저장함으로써, 데이터의 무결성과 보안성을 확보했습니다. 이를 통해 해킹 및 데이터 유출에 대한 걱정 없이 안전하게 데이터를 관리할 수 있었습니다.</td>
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
                                            <td className="project-subtitle">블록체인 구현 기술 스택 부족</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">문제 발생</td>
                                            <td className="project-content">프로젝트 초기 단계에서 팀 내 블록체인 기술 스택에 대한 이해와 경험이 부족하여, 스마트 컨트랙트 구현 및 블록체인 통합 작업에 어려움을 겪었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">해결 방법</td>
                                            <td className="project-content">이 문제를 해결하기 위해 몇 가지 접근 방식을 시도했습니다. 기술 학습, 도구 사용, 분업화 입니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">구체적인 해결 과정</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">기술 학습</td>
                                            <td className="project-content">팀원들과 함께 블록체인 기술, 특히 이더리움과 스마트 컨트랙트에 대한 심도 있는 학습을 진행했습니다. 온라인 강의와 문서, 샘플 코드를 활용하여 실습을 병행했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">도구 사용</td>
                                            <td className="project-content">블록체인 개발을 용이하게 하기 위해 Ganache, Truffle, MetaMask 등의 도구를 적극 활용했습니다. Ganache를 사용하여 로컬 블록체인 환경을 구성하고, Truffle을 통해 스마트 컨트랙트의 배포와 관리를 자동화했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">분업화</td>
                                            <td className="project-content">각 팀원에게 역할을 분담하여 효율적인 개발을 진행했습니다. 스마트 컨트랙트 개발, 백엔드 통합, 프론트엔드 통합 등 각 분야별로 책임을 명확히 하여 협업을 강화했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">결과</td>
                                            <td className="project-content">팀의 블록체인 기술 이해도가 크게 향상되었고, 스마트 컨트랙트를 성공적으로 구현하여 프로젝트에 통합할 수 있었습니다. 이를 통해 매물 거래의 신뢰성과 안전성을 확보했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">NFT 발행 시 높은 가스 비용</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">문제 발생</td>
                                            <td className="project-content">NFT 발행 시 필요한 매물 정보의 크기가 커질수록 이더리움 네트워크에서 발생하는 가스 비용이 급증하는 문제를 겪었습니다. 이는 프로젝트의 비용 효율성을 저해하는 요소로 작용했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">해결 방법</td>
                                            <td className="project-content">이 문제를 해결하기 위해 몇 가지 접근 방식을 시도했습니다. IPFS 사용, 메타데이터 분리, 최적화된 스마트 컨트랙트 입니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">구체적인 해결 과정</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">IPFS 사용</td>
                                            <td className="project-content">매물 정보와 같은 대용량 데이터를 이더리움 블록체인에 직접 저장하는 대신, IPFS(InterPlanetary File System)와 Pinata를 사용하여 데이터를 분산 저장했습니다. 이를 통해 블록체인에 저장해야 하는 데이터의 크기를 최소화했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">메타데이터 분리</td>
                                            <td className="project-content">NFT에 포함되는 메타데이터를 분리하여, 필수적인 정보만을 스마트 컨트랙트에 포함시키고, 나머지 정보는 IPFS에 저장된 파일의 주소를 참조하도록 설계했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">최적화된 스마트 컨트랙트</td>
                                            <td className="project-content">스마트 컨트랙트 코드의 최적화를 통해 가스 비용을 최소화할 수 있도록 노력했습니다. 반복되는 코드나 불필요한 연산을 줄이고, 효율적인 데이터 구조를 사용했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">결과</td>
                                            <td className="project-content">IPFS와 Pinata를 활용하여 가스 비용을 크게 절감할 수 있었으며, NFT 발행 과정의 효율성을 높였습니다. 이를 통해 프로젝트의 경제성을 확보하고, 사용자들에게 합리적인 비용으로 서비스를 제공할 수 있었습니다.</td>
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
                                            <td className="project-subtitle">블록체인 기술에 대한 깊은 이해</td>
                                            <td className="project-content">프로젝트를 진행하면서 블록체인의 기본 원리와 이더리움 스마트 컨트랙트의 동작 방식에 대해 깊이 있게 학습할 수 있었습니다. 특히, 탈중앙화의 개념과 이를 실제로 구현하는 방법에 대해 실질적인 경험을 쌓을 수 있었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">NFT 및 분산 저장 기술</td>
                                            <td className="project-content">NFT의 발행 과정과 이를 관리하는 방법에 대해 학습했습니다. 또한, IPFS와 같은 분산 저장 기술을 사용하여 데이터를 효율적으로 관리하고 저장하는 방법을 익혔습니다. 이를 통해 데이터 무결성과 보안성을 동시에 확보하는 방법을 배웠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">문제 해결 능력</td>
                                            <td className="project-content">프로젝트 중 발생한 다양한 문제를 해결하면서 문제 해결 능력을 향상시킬 수 있었습니다. 특히, 예상치 못한 기술적 문제를 해결하기 위해 새로운 기술을 학습하고 적용하는 과정을 통해 실무 능력을 강화했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">스마트 컨트랙트 최적화</td>
                                            <td className="project-content">가스 비용을 최소화하기 위해 스마트 컨트랙트를 최적화하는 과정에서 효율적인 코딩 방법과 데이터 구조의 중요성을 배웠습니다. 이를 통해 비용 효율성을 극대화하는 방법을 익혔습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">효율적인 협업과 분업</td>
                                            <td className="project-content">팀원들과의 협업을 통해 프로젝트를 성공적으로 완수할 수 있었습니다. 역할 분담과 커뮤니케이션의 중요성을 깨달았으며, 효과적인 협업 도구를 활용하여 프로젝트를 관리하는 방법을 익혔습니다.</td>
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
                                            <td className="project-subtitle">초기 블록체인 구현 기술 부족</td>
                                            <td className="project-content">프로젝트 초기 단계에서 블록체인 기술에 대한 경험과 지식이 부족하여 구현에 어려움을 겪었습니다. 특히, 스마트 컨트랙트 개발과 관련된 문제를 해결하는 데 많은 시간이 소요되었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">실시간 통신의 복잡성</td>
                                            <td className="project-content">실시간 채팅 기능을 구현하면서 발생한 다양한 동기화 문제와 성능 저하 문제가 있었습니다. 특히, 많은 사용자가 동시에 접속할 때 서버 부하가 증가하는 문제를 해결하는 데 어려움이 있었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">데이터 무결성 및 보안 문제</td>
                                            <td className="project-content">분산 시스템의 특성상 데이터 무결성과 보안을 유지하는 것이 쉽지 않았습니다. 데이터의 무결성을 보장하고, 보안 문제를 최소화하기 위한 추가적인 검증 작업이 필요했습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">보완 방법</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">초기 기술 학습 강화</td>
                                            <td className="project-content">프로젝트 시작 전 관련 기술에 대해 충분한 학습과 연구를 진행하도록 하겠습니다. 이를 통해 초기 단계에서 발생하는 기술적 문제를 줄이고, 개발 효율성을 높일 수 있을 것입니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">서버 성능 최적화 및 확장성 강화</td>
                                            <td className="project-content">실시간 통신의 성능을 최적화하기 위해 서버 성능을 개선하고, 확장성을 강화하겠습니다. 로드 밸런싱 기술과 캐싱 전략을 도입하여 많은 사용자가 동시에 접속해도 안정적인 서비스를 제공할 수 있도록 하겠습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">데이터 무결성 및 보안 강화</td>
                                            <td className="project-content">데이터 무결성과 보안을 강화하기 위해 추가적인 검증 작업과 보안 대책을 마련하겠습니다. 예를 들어, 데이터 암호화와 정기적인 보안 점검을 통해 데이터의 무결성과 보안을 유지하겠습니다.</td>
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
                                            <td className="project-subtitle">블록체인 기술의 실용성</td>
                                            <td className="project-content">이번 프로젝트를 통해 블록체인 기술의 실용성과 가능성을 체감했습니다. 특히, 탈중앙화와 보안성, 투명성을 동시에 확보할 수 있는 블록체인 기술의 장점을 실감하게 되었습니다. 이를 통해 다양한 도메인에서 블록체인을 활용할 수 있는 가능성을 보게 되었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">스마트 컨트랙트의 중요성</td>
                                            <td className="project-content">스마트 컨트랙트를 활용하여 자동화된 거래 시스템을 구현하면서, 그 중요성과 활용 가능성에 대해 깊이 이해하게 되었습니다. 스마트 컨트랙트를 통해 거래 과정을 투명하고 안전하게 관리할 수 있다는 점이 큰 장점으로 다가왔습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">데이터 최적화와 비용 효율성</td>
                                            <td className="project-content">NFT 발행 시 발생하는 가스 비용 문제를 해결하기 위해 데이터를 최적화하고, IPFS와 같은 분산 파일 시스템을 활용하는 방법을 배웠습니다. 이를 통해 비용 효율성을 높이는 동시에 시스템의 성능을 최적화할 수 있었습니다.</td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">지속 가능한 개발</td>
                                            <td className="project-content">프로젝트의 유지보수성과 확장성을 고려한 개발의 중요성을 느꼈습니다. 초기 단계부터 지속 가능한 코드를 작성하고, 시스템의 확장성을 고려하여 설계하는 것이 장기적으로 얼마나 중요한지 배웠습니다.</td>
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
                                            <td className="project-subtitle">GIT HUB</td>
                                            <td className="project-content">
                                                <a href="https://github.com/mine702/react-BlockChain" target="_blank">https://github.com/mine702/react-BlockChain</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="project-subtitle">DOCS</td>
                                            <td className="project-content">
                                                <a href="https://docs.google.com/document/d/1qbwhR8onNIJEWUcgNt0sbtSwD7c91Ptk/edit?usp=sharing&ouid=114928047410206391670&rtpof=true&sd=true" target="_blank">https://docs.google.com</a>
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

export default BlockChain;
