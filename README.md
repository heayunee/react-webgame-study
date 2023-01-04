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

## 03. 숫자야구
### require 와 import 차이
  - require : es2015 문법
  - import : es6 문법
### 리액트 반복문
  - map(value, index) 함수 사용
  - `key` 를 필수로 작성해야하는데, 고유 값이지만 index로 넣는 것은 안티패턴임. 
### 주석과 메서드 바인딩
  - 주석 : `{/* JSX 주석 */}`
  - array.push 사용 x -> 구조분해할당 방식으로 적용필요
#### [shouldComponentUpdate(nextProps, nextState)]
  - props 또는 state 를 변경했을 때, 리렌더링을 시작할지 여부를 지정, true 또는 false 를 반환해야 한다.
  - 리액트 성능 향상을 위한 메서드로, 렌더링이 발생하기 직전에 호출되며, 컴포넌트가 리렌더링을 해야할지 말지를 결정함.
  - true일 경우 > 다음 라이프사이클 메서드를 계속 실행 / false일 경우 > 리렌더링을 하지 않음.
#### [MEMO]
- 자식 컴포넌트 : state, props, 부모 컴포넌트가 리렌더링 됐을 때
- 부모 컴포넌트가 리렌더링 됐을 때, 자식 컴포넌트가 리렌더링 되는걸 막아줌.
  - 컴포넌트 관련 참고 : https://ko.reactjs.org/docs/react-component.html#shouldcomponentupdate
  - 라이프 사이클 참고 : https://velog.io/@youngminss/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0-%EB%A9%94%EC%84%9C%EB%93%9C
