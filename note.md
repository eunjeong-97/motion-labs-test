# 기록할 내용

> 목차

- [기록할 내용](#기록할-내용)
  - [0. TypeScript 기반의 ReactJS 초기세팅](#0-typescript-기반의-reactjs-초기세팅)
  - [1. JavaScript array data type 처리](#1-javascript-array-data-type-처리)
    - [1-1. `map` vs `forEach`](#1-1-map-vs-foreach)
    - [1-2. `filter`](#1-2-filter)
      - [내 코드에서의 활용](#내-코드에서의-활용)
    - [1-3. 두 개의 배열을 하나의 배열로 합치기](#1-3-두-개의-배열을-하나의-배열로-합치기)
      - [내 코드에서의 활용](#내-코드에서의-활용-1)
  - [2. TypeScript 자주 사용되는 Type](#2-typescript-자주-사용되는-type)
      - [내 코드에서의 활용](#내-코드에서의-활용-2)
  - [3. 라이브러리 없이 차트 만들기](#3-라이브러리-없이-차트-만들기)
  - [4. JavaScript 스크롤 위치](#4-javascript-스크롤-위치)
  - [5. ReactJS에서의 환경변수 설정](#5-reactjs에서의-환경변수-설정)
  - [6. 기타 메모](#6-기타-메모)

## 0. TypeScript 기반의 ReactJS 초기세팅

1. 설치
  - npx를 통해 설치할 수도 있다고는 하지만,
   - 나는 그럴 때마다 tsc 명령어가 작동되지 않는 에러가 발생해서 yarn을 통해 설치했다.

```
$ yarn create react-app 프로젝트명(폴더명) --template typescript
```

2. `.tsconfig.json` 파일 생성 및 설정
   - module: commonjs와 esnext 중 선택할 수 있는데, `import문`을 활용하기 위해 `esnext`를 선택했다.
   - target: 특수한 기능을 활용하기 위해서는 es6으로 컴파일해야하지만 이번 프로젝트에서는 그렇지 않아 `es5`으로 컴파일되도록 지정했다.
   - include : ts파일의 경로로 `["src/**/*"]` 로 지정했다 (=src폴더 내부 전체에 ts 생성가능)
   - exclude : node_modules은 컴파일 대상에서 제외시켰다
   - `.tsconfig.json` 파일을 참고하면 좋겠다.

3. npm init 을 통해 `package.json` 파일을 생성했다.
   - `package.json` 파일을 직접 생성해서 작성할 수도 있긴 하지만, 오타가 발생할 수 있어서 직접 입력하지는 않았다.

4. [eslint & prettier 설정](https://github.com/eunjeong-97/commerce_webapp/blob/main/study_log/project_start.md)

## 1. JavaScript array data type 처리

### 1-1. `map` vs `forEach`

- 공통점 : 배열 순회 후 내부 인자의 원소의 값을 가공하여 로직을 완성하는 메소드
- forEach
  - 기존 배열을 가공하여 평균, 합산 등을 구할 때 사용된다
  - `얕은 복사(swallow Copy)` 수행되어 기존 배열이 수정된다.
- map
  - 새롭게 가공후 수정된 배열을 리턴 받을 때

### 1-2. `filter`

- 콜백 함수에 지정된 조건에 맞는 요소를 새롭게 반환한다.
- 콜백함수의 인자는 순서대로 `값(value)`, `인덱스(index)`, `원 배열(array)` 이다.


#### 내 코드에서의 활용

array형태의 dataList에서 각각의 요소를 컴포넌트의 props로 전달하기 위해 활용했다.

```tsx
// Passenger.tsx
const [dataList, setDataList] = useState<PassengerItemType[]>([])

dataList.map((dataItem, index) => {
  return <CardContainer data={dataItem} key={index} />
})
```

뿐만 아니라 TypeScript에서 props로 데이터를 전달해주기 위해서는 데이터를 전달받으려는 자식 컴포넌트에서 type을 별도로 지정해줘야 Type Error가 발생하지 않았다.

```tsx
// CardContainer.tsx
type CardPropType = {
  data: PassengerItemType
}

const CardContainer: React.FC<CardPropType> = function ({ data }) {
    // 내부 코드 생략
}
```

> [출처](https://velog.io/@yunsungyang-omc/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EC%B2%98%EB%A6%AC-%EC%A0%95%EB%A6%AC-map-forEach)
> [React.FC](https://react.vlpt.us/using-typescript/02-ts-react-basic.html)

### 1-3. 두 개의 배열을 하나의 배열로 합치기

무한스크롤을 구현하기 위해 기존 array타입의 state에 새로운 배열을 더해주려고 했다.

기존 ReactJS에서는 나머지 매개변수 연산자를 통해 state를 변경해줬지만, TypeScript에서는 아래와 같이 작성하면 `A spread argument must either have a tuple type or be passed to a rest parameter React` 라는 에러가 발생했다.

```js
// ReactJS.jsx
setState([...state, ...newArray])
```

> 이러한 에러를 해결하기 위해

1. 배열을 더해준다
  - 빈 배열 `new Array` 을 새로 만들고, 
  - 해당 배열에 `dataList`를 push하고 
  - `새로 받은 dataList`를 또 다시 push를 해줬다

```tsx
const newArray = [];
newArray.push(dataList);
newArray.push(response.data.data);
```

2. 배열의 깊이 `depth` 구조 변경 : `Array.prototype.flat()`
  - `new Array` 은 `[[기존 dataList], [새로운 dataList]]` 의 형태를 띄우고 있는데 
  - 내가 원하는 데이터의 형태는 `[{},{},{},{},{}, ...]` 이기 때문에 
  - [`Array.prototype.flat()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) 메서드를 활용해 새로운 배열 구조를 바꿔줬다.

```tsx
newArray.flat()
```

3. setState 처리
  - 그리고 이렇게 변경된 `new Array`로 state 변경을 해준다

```tsx
setDataList(newArray.flat())
```

#### 내 코드에서의 활용

스크롤이 맨 아래에 도달했을 때 이렇게 새로 `dataList`를 받아오는 것이기 때문에 → `useEffect()`의 의존성 배열은 `isScrollBottom` 이 되어야 한다

```tsx
// Passenger.tsx
useEffect(() => {
  if (isScrollBottom) {
    axios.get(passenger).then((response) => {
      const newArray = [];
      newArray.push(dataList);
      newArray.push(response.data.data);
      setDataList(newArray.flat());
    });
  }
}, [isScrollBottom]);

```

## 2. TypeScript 자주 사용되는 Type

TypeScript 자주 사용되는 Type은 별도의 `ts 파일` 로 만들어 관리한다. 

#### 내 코드에서의 활용

axios 통신을 통해 받은 `response`를 자식 컴포넌트로 전달할 때 반복적으로 사용되는 `propType`을 별도의 `propType.tsx` 파일을 통해 관리하고 사용했다. 

> [출처](http://daplus.net/typescript-%EB%B3%84%EB%8F%84%EC%9D%98-%ED%8C%8C%EC%9D%BC%EC%97%90%EC%84%9C-typescript-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%A5%BC-%EC%84%A0%EC%96%B8%ED%95%98%EA%B3%A0-%EA%B0%80%EC%A0%B8/)

## 3. 라이브러리 없이 차트 만들기

`Chart.js`, `D3` 와 같은 라이브러리를 통해 편하게 만들 수 있겠지만, 라이브러리 없이 만들기 위해서는 **`SVG`** 를 활용하면 된다.

- `<svg>` : width, height를 css의 스타일링으로 속성을 부여할 수 있어 `styled-components` 내부에 적용했다.
- `<line>` &  `<circle>` : ~~css를 통한 스타일링이 아니라~~ 인라인형식으로 x, y좌표를 직접적으로 속성을 부여해야 했다

```tsx
// Svg.tsx
{
  dataList.map((dataItem, index) => {
    const left = 80 + 93 * index;
    const nextLeft = 80 + 93 * (index + 1);
    const top = 160 - dataItem.cycle;
    const nextTop = 160 - cycleArray[index + 1];
    return (
      <Line
        key={index}
        x1={left + 13}
        x2={nextLeft + 11}
        y1={top}
        y2={!isNaN(nextTop) ? nextTop : 0}
      />
    );
  });
}

{
  dataList.map((dataItem, index) => {
    const left = 80 + 93 * index;
    return <Circle key={index} cx={left + 11} cy={160 - dataItem.cycle} />;
  });
}

const SvgBox = styled.svg`
  width: 100%;
  height: 160px;
`;
```

svg를 처음으로 다루는 거라 지래 겁먹었지만 막상 해보니 x좌표 y좌표를 `규칙성있게` 적절하게 부여하면 차트를 잘 만들 수 있었다.

> [출처](https://dev.to/edbentley/build-your-react-charts-without-a-library-35o8)

## 4. JavaScript 스크롤 위치 

웹페이지, 또는 요소의 높이값 정보를 얻는 속성은 대표적으로 `clientHeight`와 `offsetHeight`, `scrollHeight`가 있다.

- `clientHeight` : 요소의 내부 높이입니다. 
  - 패딩 값은 포함되며, 스크롤바, 테두리, 마진은 제외된다.
`offsetHeight` : 요소의 높이입니다. 
  - 패딩, 스크롤 바, 테두리(Border)가 포함되며, 마진은 제외된다.
- `scrollHeight` : 요소에 들어있는 컨텐츠의 전체 높이
  - 패딩과 테두리가 포함되며, 마진은 제외된다.

> [출처](https://blogpack.tistory.com/706)

## 5. ReactJS에서의 환경변수 설정

`dotenv` 패키지를 통해 환경변수를 설정할 수 있다.

1. `dotenv` 패키지 설치

```
$ npm i dotenv
```

2. `.env` 파일 설정

- root폴더에 `.env` 파일을 만들고 아래와 같이 `변수` 및 string 형태의 `값` 을 설정한다.
- 변수 이름 맨 앞에는 `REACT_APP_`을 추가로 기입해줘야 잘 작동되는 것 같다.

```
REACT_APP_HELLO=hello
REACT_APP_WORLD=world
```

3. `tsx` 파일에서 활용하기

- TypeScript에서는 type을 먼저 지정해줘야 하기 때문에 `string` 타입으로 지정하고
- `process.env.변수명 as string` 으로 꺼내서 쓸 수 있다.
- 여기서 `as string` 이라고 하는 이유 : process.env.REACT_APP_REPORT 이 undefined일 수도 있기 때문에 확정지어서 사용했다.
- `import dotenv from 'dotenv'` 라고 import 하지 않아도 되었다!

```tsx
const report: string = process.env.REACT_APP_REPORT as string
```

## 6. 기타 메모

- [TypeScript기반 ReactJS 에서의 Error](https://velog.io/@dosilv/TypeScript-React%EC%97%90%EC%84%9C-TypeScript-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0#-no-overload-matches-this-call)
- [ReactJS 스크롤 위치얻기](https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs)
- [ReactJS에서 뷰포트 / 창 높이 가져 오기](http://daplus.net/javascript-reactjs%EC%97%90%EC%84%9C-%EB%B7%B0%ED%8F%AC%ED%8A%B8-%EC%B0%BD-%EB%86%92%EC%9D%B4-%EA%B0%80%EC%A0%B8-%EC%98%A4%EA%B8%B0/)
