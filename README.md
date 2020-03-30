# fast gateway를 사용한 gateway server 만들기
npm 모듈인 fast-gateway를 사용하여 gateway server를 만들고,
jsonwebtoken를 사용하여 토큰 인증을 한다.

# 설치방법
> npm install

> node app.js

# 사용방법
fast-gateway 깃주소
https://github.com/jkyberneees/fast-gateway

토큰생성
get http://127.0.0.1:8080/service1/token

유저확인
get http://127.0.0.1:8080/service1/users

로컬에서 테스트시 localhost로 하면 서비스서버와 연결이 안된다.