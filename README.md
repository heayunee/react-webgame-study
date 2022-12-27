# react-webgame-study
zerocho님 강의 `react-webgame` 클론 코딩 레포지토리입니다.

[참고] https://github.com/ZeroCho/react-webgame
***
## 01. 구구단
### **React를 왜 쓰는가**
- React 18 버전
- 한국에서 React가 대세가 되어있다. → 앞으로도 계속 대세가 될 기술이다.
- SPA (Single Page Application)
- Gmail ? web application
- Facebook - React를 만든 이유 ?
    - 기존 MVC 패턴으로 작업했을 때 : 페이지별 갱신이 안되는 문제가 발현

### ****강의 수강시 주의할 점****
* 프론트엔드 기본 소양 : HTML, CSS, JS 공부 필수
* JS
  - Scope
  - 실행 컨텍스트

### **함수 컴포넌트(함수형 아님)**

****React 함수 컴포넌트****
- State를 찾아보자. → 화면별로 한번 찾아보는 연습해보기

> ****State란?****
>- 사용자의 반응에 따라, 화면을 렌더링 하기 위해 사용되는 트리거 역할을 하는 변수 (React가 State를 감시)

### **React Hook**
- 리액트는 class가 아닌 hooks를 권장함. (함수형 컴포넌트)
- 같은 Hook을 여러번 호출할 수 있다.
- 컴포넌트 안에 hook을 지정해야 한다.
- 클래스 안에서 동작하지 않지만, 클래스처럼 사용이 가능하다.


#### [useState hooks]
- state가 변경될 때 useState hook을 사용함.
- useState : 비동기로 동작하여, 묶어서 렌더링함. 컴포넌트 안에 hooks을 지정해야한다.
- batch update : 렌더링을 나노단위 (16m/s)로 렌더링 하기 때문 → 렌더링 과정을 최소화 하기 위해 묶어서 렌더링함.

#### [useRef]
- DOM에 접근할 때 useRef hook을 사용함.
