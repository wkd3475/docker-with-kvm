#프로그래밍 언어별 성능 비교
Performance Comparison by Programming Language
<br/><br/>
목차
<br/>
[1. 목표](#목표)
<br/>
[2. 프로그래밍 언어(프레임워크) 종류 및 특징](#프로그래밍-언어(프레임워크)-종류-및-특징)
<br/>
[3. TODO-LIST](#todo-list)

---
##목표
1. 각 언어별로 api 서버를 구축하고 성능을 비교한다.
2. host에 kvm으로만 서버를 구성한 것과 kvm과 docker container를 함께 이용해 구성한 것의 성능 차이를 분석한다.
3. kvm과 docker를 같이 사용할 때 생기는 문제점 또는 성능 향상을 할 수 있는 부분이 있는지 찾아본다.
----------------------------------
##프로그래밍 언어(프레임워크) 종류 및 특징
<TODO>특징 정리는 추후에 할 예정
0. node.js - express  
0. golang  
0. python - flask  
0. java - spring boot  

----------------------------------
##TODO LIST
+ 실험 환경 구성
-[x] kvm 설치 (ubuntu18.04)

-[x] api 서버 만들기
    -[x] node.js(express) api 서버 만들기
    -[x] golang api 서버 만들기
    -[x] python(flask) api 서버 만들기
    -[x] java(spring boot) api 서버 만들기

-[x] 테스트용 클라이언트 만들기

-[x] Dockerfile 만들기
    -[x] node.js(express)
    -[x] golang
    -[x] python(flask)
    -[x] java(spring boot)

-[ ] 데이터 추출하기
    -[ ] Execution time 추출
    -[ ] CPU usage 추출(mpstat 사용 예정)
    -[ ] Disk I/O 추출
    -[ ] Network Throughput 추출(iperf 사용 예정)

-[ ] api 기능 추가하기
    -[ ] I/O 처리가 포함된 api
    -[ ] [나중에 할 일]
    
+ 실험 설계
<br/>
[나중에 할 일]