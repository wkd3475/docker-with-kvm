# 프로그래밍 언어별 성능 비교 && docker, kvm을 사용했을 경우 성능 테스트

Performance Comparison by Programming Language && (base vs docker vs kvm + docker)

논문
**장용현**, 이재학, 유헌창, "KVM 가상머신에서 도커를 사용하는 시스템의 호스트 메모리 부하에 따른 task 처리 성능 분석", 한국정보처리학회 춘계학술발표대회 논문집, Vol.27, Issue 1, 2020, pp.20-23.

목차

[1. 목표](#목표)

[2. 프로그래밍 언어 종류 및 특징](#프로그래밍-언어-종류-및-특징)

[3. TODO-LIST](#todo-list)

[4. 실험 설계](#실험-설계)

------------------------------------
## 목표
1. 각 언어별로 api 서버를 구축하고 성능을 비교한다.
2. host에 kvm으로만 서버를 구성한 것과 kvm과 docker container를 함께 이용해 구성한 것의 성능 차이를 분석한다.
3. kvm과 docker를 같이 사용할 때 생기는 문제점 또는 성능 향상을 할 수 있는 부분이 있는지 찾아본다.

----------------------------------
## 프로그래밍 언어 종류 및 특징
특징 정리는 추후에 할 예정
1. node.js - express  
2. golang  
3. python - flask  
4. java - spring boot  

----------------------------------
## TODO LIST
+ 실험 환경 구성
- [x] kvm 설치(ubuntu18.04)

- [x] api 서버 만들기
    - [x] node.js(express) api 서버 만들기
    - [x] golang api 서버 만들기
    - [x] python(flask) api 서버 만들기
    - [x] java(spring boot) api 서버 만들기

- [x] 테스트용 클라이언트 만들기

- [x] Dockerfile 만들기
    - [x] node.js(express)
    - [x] golang
    - [x] python(flask)
    - [x] java(spring boot)

- [ ] 데이터 추출하기
    - [x] Execution time 추출
    - [ ] CPU usage 추출(mpstat 사용 예정)
    - [ ] Disk I/O 추출
    - [ ] Network Throughput 추출(iperf 사용 예정)

- [ ] api 기능 추가하기
    - [x] I/O 처리가 포함된 api
    - [x] JSON 요청 처리 api
    - [ ] 나중에 할 일



## 실험 설계

### 1. Base vs Docker vs KVM + Docker, execution time 비교하기

(각 언어, 프레임워크 별로 성능을 평가하는 것은 학술대회가 종료된 이후에 진행할 예정)

각 환경에서 동일한 서버를 각각 4개씩 실행하고 동시에 각 서버에 요청을 보내서 각 서버에서 Execution time을 비교하는데, 각 환경에 대한 성능 비교와, 동일한 환경에서 각 서버에서의 Execution time을 비교하여 서버 사이에서 간섭 현상이 발생하는지 확인한다.



- 실험 환경

cpu : Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz, 4 cores
ram : 8GB

1. 각 서버의 포트를 3000, 3001, 3002, 3003으로 설정하여 실행을 시켜둔다.
2. 다른 client 컴퓨터에서 각 서버에 request를 동시에 보내고, 각각에 대해 execution time을 저장해둔다. (여기서 execution time은 전송을 시작한 시점부터 답변을 받는 시간까지를 의미)

request : 측정은 각 서버에 대해 1000번씩 진행하고 평균을 냄, request로는 단순 연산을 진행하는 api/cpu와 json을 이용한 api/jsonio를 사용하여 비교

