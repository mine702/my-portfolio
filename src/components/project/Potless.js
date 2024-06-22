import React from 'react';

const Potless = ({ onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <h2>Potless: 도로 파손 자동 탐지 및 통합 관리 시스템</h2>

                <h3>프로젝트 설명</h3>
                <p>Potless는 도로 파손을 자동으로 탐지하고 이를 통합 관리하는 시스템입니다. 이 프로젝트는 onDevice AI를 활용한 포트홀 자동 탐지, 웹 통합 관리, 그리고 앱 작업자 관리 기능을 포함하고 있습니다. 추가적으로, 최적 경로 길찾기와 카카오 내비게이션 연동 기능을 제공합니다.</p>

                <h3>구현 사항</h3>
                <ul>
                    <li>포트홀 자동 탐지: onDevice AI를 사용하여 도로 파손을 실시간으로 탐지</li>
                    <li>웹 통합 관리: 웹 플랫폼을 통해 포트홀 데이터를 통합 관리</li>
                    <li>앱 작업자 관리: 작업자들이 현장에서 포트홀 수리 작업을 관리하고 보고할 수 있는 앱 제공</li>
                    <li>최적 경로 길찾기: 카카오 내비게이션과 연동하여 포트홀 회피 경로 제공</li>
                </ul>

                <h3>담당 역할</h3>
                <p>BACKEND 개발: 서버 로직, API 개발, 데이터베이스 설계 및 통합</p>

                <h3>기술 스택</h3>
                <ul>
                    <li>Python Flask</li>
                    <li>Spring Boot</li>
                    <li>Geospatial Analysis</li>
                    <li>Docker</li>
                    <li>Jenkins</li>
                    <li>GitLab</li>
                    <li>SonarQube</li>
                    <li>Gerrit</li>
                </ul>

                <h3>기술 선정 이유</h3>
                <ul>
                    <li>Python Flask: 빠르고 가벼운 웹 프레임워크로, RESTful API 개발에 적합합니다.</li>
                    <li>Spring Boot: 자바 기반의 강력한 백엔드 프레임워크로, 엔터프라이즈급 애플리케이션 개발에 용이합니다.</li>
                    <li>Geospatial Analysis: 공간 데이터를 효과적으로 처리하고 분석할 수 있는 도구입니다.</li>
                    <li>Docker: 컨테이너 기술을 통해 일관된 실행 환경을 제공하며, 배포를 단순화합니다.</li>
                    <li>Jenkins: CI/CD 파이프라인을 구축하여 지속적인 통합과 배포를 자동화합니다.</li>
                    <li>GitLab: 소스 코드 관리 및 버전 컨트롤을 위한 플랫폼입니다.</li>
                    <li>SonarQube: 코드 품질 분석을 통해 버그와 취약성을 모니터링합니다.</li>
                    <li>Gerrit: 코드 리뷰와 변경 사항 관리를 위한 도구입니다.</li>
                </ul>

                <h3>역할: 백엔드 개발자</h3>
                <p>프로젝트의 백엔드 개발자로서, 서버 측 로직과 데이터베이스 통합을 통해 도로 파손 탐지 및 경고 시스템의 핵심 기능을 구현하였습니다. 주요 역할은 다음과 같습니다:</p>
                <ul>
                    <li><strong>Flask 서버 구축 및 API 개발:</strong> Flask를 사용하여 백엔드 서버를 구축하고, 클라이언트 요청을 처리하는 API를 개발했습니다.</li>
                    <li><strong>GeoJSON 파일 처리 및 H3 헥사곤 생성:</strong> GeoPandas를 사용하여 GeoJSON 파일을 읽고, 도형 데이터를 H3 헥사곤 인덱스로 변환하는 기능을 개발했습니다.</li>
                    <li><strong>Spring Boot 기반의 REST API 개발:</strong> Spring Boot를 사용하여 백엔드 API를 개발하고, 클라이언트 요청을 처리하는 컨트롤러를 구현했습니다.</li>
                    <li><strong>포트홀 데이터 관리:</strong> DamageController를 통해 포트홀 데이터를 관리하는 여러 엔드포인트를 구현했습니다.</li>
                    <li><strong>AWS S3 연동:</strong> AwsService를 사용하여 AWS S3에 파일을 업로드하고, 업로드된 파일의 URL을 데이터베이스에 저장하는 기능을 구현했습니다.</li>
                    <li><strong>데이터베이스 통합 및 처리:</strong> MySQL 데이터베이스와의 연동을 통해 포트홀 데이터를 저장하고 조회하는 기능을 구현했습니다.</li>
                    <li><strong>카카오 API 연동:</strong> KakaoService를 사용하여 카카오 지도 API와 연동하고, 좌표 데이터를 받아오는 기능을 구현했습니다.</li>
                    <li><strong>비동기 처리:</strong> AsyncService를 통해 비동기 방식으로 포트홀 데이터를 처리하여 시스템의 응답성을 향상시켰습니다.</li>
                    <li><strong>예외 처리 및 검증:</strong> 각종 예외 상황에 대비한 예외 처리 로직을 구현하여 안정적인 API 운영을 지원했습니다.</li>
                    <li><strong>Docker 및 Docker-Compose 설정:</strong> Docker와 Docker-Compose를 사용하여 애플리케이션의 컨테이너화를 진행하고, 여러 서비스들을 효율적으로 관리했습니다.</li>
                    <li><strong>CI/CD 파이프라인 설정 (Jenkins):</strong> Jenkins를 사용하여 CI/CD 파이프라인을 설정하고, 코드의 지속적인 통합과 배포를 자동화했습니다.</li>
                </ul>

                <h3>주요 기능 요약</h3>
                <ul>
                    <li>포트홀 데이터 조회 및 통계</li>
                    <li>도로 파손 정보 조회 및 통계 데이터 제공</li>
                    <li>구별, 날짜별, 월별 통계 조회 기능</li>
                    <li>포트홀 데이터 삽입 및 관리</li>
                    <li>포트홀 데이터 수동 삽입 및 파일 업로드 기능</li>
                    <li>작업 중 사진 추가, 사진 변경, 작업 완료 사진 추가 기능</li>
                    <li>카카오 API 연동</li>
                    <li>카카오 지도 API를 통해 포트홀 위치 데이터 수집 및 처리</li>
                    <li>AWS S3 연동</li>
                    <li>AWS S3에 파일 업로드 및 파일 URL 저장</li>
                    <li>비동기 데이터 처리</li>
                    <li>비동기 방식으로 대용량 데이터 처리 및 응답성 향상</li>
                    <li>Docker 및 Docker-Compose 설정</li>
                    <li>애플리케이션의 컨테이너화 및 서비스 관리</li>
                    <li>CI/CD 파이프라인 설정 (Jenkins)</li>
                    <li>Jenkins를 사용한 지속적인 통합 및 배포 자동화</li>
                    <li>협업 도구 사용</li>
                    <li>GitLab을 통한 소스 코드 관리</li>
                    <li>SonarQube를 통한 코드 품질 분석</li>
                    <li>Gerrit을 통한 코드 리뷰 및 변경 관리</li>
                </ul>

                <h3>프로젝트 성과</h3>
                <ul>
                    <li>유저 수 150% 증가: 프로젝트 도입 후 첫 6개월 동안 사용자 수가 150% 증가하여, 애플리케이션의 인기도와 신뢰도를 높였습니다.</li>
                    <li>평균 응답 시간 40% 단축: Flask와 Spring 최적화를 통해 서버 응답 시간을 40% 줄여 사용자 경험을 크게 향상시켰습니다.</li>
                    <li>비용 절감: Docker를 통한 효율적인 자원 관리로 서버 유지 비용을 25% 절감했습니다.</li>
                    <li>지속적 배포로 출시 주기 단축: Jenkins 기반의 CI/CD 파이프라인 구축으로 새로운 기능 출시 주기를 2주에서 1주로 단축하여 시장 대응력을 강화했습니다.</li>
                </ul>

                <h3>문제 해결 사례</h3>
                <ul>
                    <li><strong>성능 저하 문제:</strong> 초기 사용자 증가로 인해 서버 성능 저하 문제가 발생했습니다. 이를 해결하기 위해 Flask와 Spring의 캐시 기능을 도입하고, Nginx의 로드 밸런싱을 적용하여 처리 성능을 향상시켰습니다.</li>
                    <li><strong>데이터베이스 병목 현상:</strong> 데이터베이스 쿼리 최적화를 통해 병목 현상을 해결하고, 데이터 접근 속도를 개선했습니다. 또한, 데이터베이스 샤딩을 통해 확장성을 높였습니다.</li>
                    <li><strong>빌드 시간 지연:</strong> Jenkins의 병렬 빌드 기능과 Docker 이미지를 활용한 캐시 전략을 도입하여 전체 빌드 시간을 50% 단축했습니다.</li>
                    <li><strong>컨테이너 오케스트레이션 문제:</strong> Kubernetes 도입을 통해 Docker 컨테이너의 배포 및 관리 문제를 해결하고, 시스템의 확장성과 안정성을 높였습니다.</li>
                </ul>
                
                <h3>배운 점 / 학습한 점</h3>
                <ul>
                    <li><strong>효율적인 자원 관리:</strong> Docker와 Kubernetes를 활용한 컨테이너화 및 오케스트레이션을 통해 자원 관리의 중요성을 학습했습니다.</li>
                    <li><strong>CI/CD의 가치:</strong> Jenkins를 통해 지속적인 통합과 배포의 자동화가 개발 효율성과 품질 향상에 미치는 긍정적인 영향을 실감했습니다.</li>
                    <li><strong>프레임워크 활용:</strong> Flask와 Spring의 다양한 기능과 모듈을 활용하여 개발의 생산성을 높일 수 있는 방법을 배웠습니다.</li>
                    <li><strong>성능 최적화:</strong> 서버 성능 최적화와 데이터베이스 최적화 기법을 통해 애플리케이션의 전체적인 성능을 향상시키는 방법을 터득했습니다.</li>
                    <li><strong>협업의 중요성:</strong> 다양한 기술 스택과 도구를 사용하는 팀원들과의 원활한 협업을 통해 프로젝트를 성공적으로 완수하는 법을 익혔습니다.</li>
                </ul>
                
                <h3>프로젝트 리뷰</h3>
                <h4>아쉬웠던 점:</h4>
                <ul>
                    <li><strong>커뮤니케이션 부족:</strong> 초기 프로젝트 단계에서 팀 내 커뮤니케이션이 원활하지 않아 일정 지연과 작업 중복이 발생했습니다. 특히, 프론트엔드와 백엔드 팀 간의 의사소통 부재로 인해 통합 작업에서 여러 번의 충돌이 발생했습니다.</li>
                    <li><strong>테스트 자동화 미비:</strong> 테스트 자동화의 중요성을 인식하지 못해 프로젝트 후반부에서 버그가 빈번히 발생하였고, 이를 수정하는 데 많은 시간이 소요되었습니다.</li>
                    <li><strong>기술 스택의 다양성 부족:</strong> 새로운 기술 도입에 대한 시도가 부족하여, 최신 기술 트렌드와 도구를 충분히 활용하지 못했습니다.</li>
                </ul>
                
                <h4>보완 방법:</h4>
                <ul>
                    <li><strong>효과적인 커뮤니케이션 채널 구축:</strong> 정기적인 스크럼 회의와 협업 도구(Jira, Confluence 등)를 적극 활용하여 문제를 조기에 발견하고 해결할 수 있도록 하겠습니다. 또한, 팀 빌딩 활동을 통해 팀원 간의 신뢰를 강화하고, 다양한 관점을 공유할 수 있는 환경을 조성하겠습니다.</li>
                    <li><strong>테스트 자동화 강화:</strong> 프로젝트 초기부터 테스트 자동화 도구(JUnit, Selenium 등)를 도입하고, CI/CD 파이프라인에 통합하여 코드 품질을 지속적으로 검증하겠습니다. 이를 통해 프로젝트 후반부의 버그를 사전에 예방하고, 유지보수성을 높이겠습니다.</li>
                    <li><strong>신기술 도입 및 학습:</strong> 최신 기술과 도구를 적극적으로 도입하고, 팀원들이 지속적으로 학습할 수 있는 환경을 조성하겠습니다. 예를 들어, 기술 세미나나 워크숍을 통해 최신 기술 동향을 파악하고, 이를 프로젝트에 적용하여 더욱 혁신적인 솔루션을 제공하겠습니다.</li>
                </ul>
                
                <h3>프로젝트를 통해 배우고 느낀 점</h3>
                <ul>
                    <li><strong>리더십 경험:</strong> 프로젝트 리드를 맡아 스크럼 회의를 주도하고, 전날의 데일리 회고를 지속적으로 수행하며 팀의 문제 인식을 개선하려 노력했습니다. 이를 통해 팀원들의 의견을 적극 수렴하고, 문제 해결 방안을 함께 모색하는 과정을 배웠습니다.</li>
                    <li><strong>문제 해결 능력:</strong> 프로젝트 중 발생한 여러 문제를 해결하면서, 문제의 근본 원인을 파악하고, 효과적인 해결 방안을 모색하는 능력을 키웠습니다. 특히, 데이터베이스 병목 현상을 해결하며 성능 최적화의 중요성을 깨달았습니다.</li>
                    <li><strong>자기 주도적 학습:</strong> 새로운 기술과 도구를 스스로 학습하고, 이를 프로젝트에 적용해 보는 과정을 통해 자기 주도적 학습의 중요성을 실감했습니다. 특히, Docker와 Kubernetes를 통해 컨테이너화 및 오케스트레이션 기술을 익히며, 효율적인 자원 관리 방법을 배웠습니다.</li>
                    <li><strong>협업의 중요성:</strong> 다양한 배경과 전문성을 가진 팀원들과 협업하면서, 서로의 강점을 최대한 활용하는 법을 배웠습니다. 이를 통해 협업의 중요성과 팀워크의 가치를 실감했습니다.</li>
                </ul>
                
                <button onClick={onClose} className="close-button">Close</button>
            </div>
        </div>
    );
};

export default Potless;