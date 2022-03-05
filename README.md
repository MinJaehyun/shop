### 기능 소개
    1. 상품 전체 조회 페이지 
    2. 상품 상세 페이지
    3. 카트에 담긴 상품 페이지
    4. 검색

### Deploy URL
    1. SSR: https://shop-mjh.herokuapp.com/

### SSR 방식을 선택하여 진행
    1. SSR: Heroku  - /.nuxt 
    2. SSG: Netlify - /dist

### 프론트
서비스 제작에 사용된 프론트 서버를 실행하기 위해서는 아래를 따라합니다.

    $ npm run dev 로 프론트 서버 실행

### 백엔드 API
서비스 제작에 사용할 백엔드 API를 구성하기 위해 아래 절차를 따라합니다.

    1. $ cd backend
    2. $ npm i 로 json-server 패키지 설치
    3. $ npm run dev 로 백엔드 서버 실행
