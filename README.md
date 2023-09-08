# **Week 3**

동료학습을 통해서 팀에서 생각한 Todolist(선발과제)의 Best Pratice를 만들고 제출해주세요

> 💡 Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.
>
> 과제 수행 과정에서 Best Practice란 팀원들이 각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 Best Practice로 삼는것입니다.
>
> 이때 특정한 팀원의 과제 전체를 Best Practice로 선정하는 것이 아닌, 과제의 각 부분이나 중점을 둬야할 부분을 단위를 나눈뒤, 각 단위마다의 Best Practice를 토론하고, 단위별로 Best Practice를 모아서 팀의 최종 결과물을 만들어내는 방식으로 진행해주세요

<br>

# 과제 목표

검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현

<h2>팀원 소개</h2>

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/wlsgus93"><img src="https://avatars.githubusercontent.com/u/35252854?v=4" width="100px;" alt=""/><br /><sub><b>김진현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/plou102"><img src="https://avatars.githubusercontent.com/u/107393773?v=4" width="100px;" alt=""/><br /><sub><b>박정민</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Donghyun-git"><img src="https://avatars.githubusercontent.com/u/78803763?v=4" width="100px;" alt=""/><br /><sub><b>안동현</b></sub></a><br /></td>
           <td align="center"><a href="https://github.com/datoybi"><img src="https://avatars.githubusercontent.com/u/41810621?v=4" width="100px;" alt=""/><br /><sub><b>윤다솜</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/kiseokDev"><img src="https://avatars.githubusercontent.com/u/107299502?v=4" width="100px;" alt=""/><br /><sub><b>이기석</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/haron-lee"><img src="https://avatars.githubusercontent.com/u/88657261?v=4" width="100px;" alt=""/><br /><sub><b>이도하</b></sub></a><br /></td>
     </tr>
     </tr>
  </tbody>
</table>
</div>

<br>

# 목차

- [**Week 2**](#week-2)
- [과제 목표](#과제-목표)
- [목차](#목차)
  - [🔗 배포 링크](#-배포-링크)
  - [⚙️ 실행 방법](#️-실행-방법)
  - [⌛ 진행 과정](#-진행-과정)
    - [과제 스케줄링 방식 및 회의](#과제-스케줄링-방식-및-회의)
    - [구현 기능 방법](#구현-기능-방법)
  - [브랜치 전략](#브랜치-전략)
  - [커밋 메시지 컨벤션](#커밋-메시지-컨벤션)
  - [🤝팀 규칙](#팀-규칙)
    - [formating 및 lint 전략](#formating-및-lint-전략)
    - [기타](#기타)
    - [협업툴](#협업툴)
  - [📂 폴더 구조](#-폴더-구조)
  - [🛠️ 기술 스택](#️-기술-스택)
- [👑 Best Practice](#-best-practice)
  - [진행 방식](#진행-방식)
  - [Assignment 1 ](#assignment-1-api-호출별로-로컬-캐싱-구현)
  - [Assignment 2 ](#assignment-2-입력마다-api-호출하지-않도록-api-호출-횟수를-줄이는-전략-수립-및-실행)
  - [Assignment 3 ](#assignment-3-키보드만으로-추천-검색어들로-이동-가능하도록-구현)
  - [Assignment 4 ](#assignment-4-검색어-없을-시-검색어-없음-표출)
  - [Assignment 5 ](#assignment-5검색어-추천-기능-구현)

<br>

## 🔗 배포 링크

https://www.naver.com/

![image](https://github.com/pre-onboarding-12th-Team12/pre-onboarding-12th-2-12/assets/107299502/83a1b323-0752-469b-abc8-ea119ab43b3c)

<br>

## ⚙️ 실행 방법

```
npm install
npm run start
```

- git clone후, 위의 명령어를 순서대로 실행하면 프로젝트를 이용하실 수 있습니다.

<br>

## ⌛ 진행 과정

### 과제 스케줄링 방식 및 회의

- day1 : 개인 과제 기능 구현
- day2 : 초기세팅 및 공통 세팅, 진행상황 공유 및 회의를 통해 Best Practice 도출
- day3 : Readme 작성, 리팩토링 및 배포

### 구현 기능 방법

- Best Practice 도출
- 각자 기능팀내 업무 분담

<br>

## 브랜치 전략

<img src="https://github.com/wlsgus93/pre-onboarding-12th-1-12/assets/35252854/31806487-9c20-4b5c-8bf0-f7b49d536af9" alt=""/>
<br>

- upstream에는 main(배포용), dev(개발용) 브랜치 존재
- 브랜치명: feature/구현기능
- ex: feature/todoForm
- 개인 원격 저장소 fork한뒤 작업한뒤 원본 저장소의 origin:dev으로 PR 날림
- 팀원 승인 받으면 origin:dev=> origin:main에 merge
- Pull request시에 reviewer 2명 이상 Approve시 merge 가능

<br>

## 커밋 메시지 컨벤션

| 타입             | 설명                                                      |
| ---------------- | --------------------------------------------------------- |
| Feat             | 새로운 기능 추가                                          |
| Fix              | 버그 수정                                                 |
| Env              | 개발 환경 관련                                            |
| Style            | 코드 자체의 변경이 없는 경우, formatting, semicolon 등    |
| Refactor         | 코드 리팩토링 (더 효율적인 코드로 변경 등)(기능은 동일)   |
| Design           | CSS 등 사용자 UI 디자인 변경                              |
| Comment          | 필요한 주석 추가 및 변경                                  |
| Docs             | 내부 문서 추가/수정                                       |
| Test             | 테스트 코드, 리팩토링 테스트 코드 추가                    |
| Chore            | 빌드, 패키지 매니저 수정, 그 외 기타 수정 (.gitignore 등) |
| Rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우       |
| Remove           | 파일 또는 폴더를 삭제하는 작업만한 경우                   |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                    |
| !HOTFIX          | 급하게 치명적인 버그를 고치는 경우                        |

<br>

## 🤝팀 규칙

### formating 및 lint 전략

```json
{
  //formating
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "bracketSpacing": true
}
```

```json
//Lint
"rules": {
  "no-var": "error", // var 금지
  "no-multiple-empty-lines": "error", // 여러 줄 공백 금지
  "eqeqeq": "error", // 일치 연산자 사용 필수
  "dot-notation": "error", // 가능하다면 dot notation 사용
  "no-unused-vars": "warn" // 사용하지 않는 변수 금지
},
```

### 기타

- 폴더: 소문자
- 함수 : arrowfunction
- 함수이름: camel
- 컴포넌트: pascal
- 훅,로직파일: camel
- 상수변수: 대문자

### 협업툴

<img src="https://img.shields.io/badge/Discord-5865F2?style=square&logo=Discord&logoColor=white"/>

<br>

## 📂 폴더 구조

```
project-root/
│
├── public/ # 정적 파일들
│ ├── index.html
│ └── manifest.json
│
├── src/ # 소스 코드
│ ├── api/           # api 함수들
│ ├── components/    # 재사용 가능한 컴포넌트들
│ ├── contexts       # context 관리 폴더
│ ├── hooks/         # custom hooks
│ ├── pages/         # 페이지 또는 뷰 컴포넌트
│ ├── router/        # 라우팅 관련 설정
│ ├── style/         # style 폴더
│ ├── types/         # type 관리 폴더
│ ├── utils/         # 공통 함수
│ ├── App.tsx        # App 컴포넌트
│ ├── index.tsx      # 진입점 파일
│ └── GlobalStyle.ts # 전역 스타일 설정파일
│
├── .gitignore
├── .eslintignore
├── .eslintrc
├── .prettierignore
├── .prettierrc.js
├── package.json
├── tsconfig.json
└── README.md


```

<br>

## 🛠️ 기술 스택

<img src="https://img.shields.io/badge/Typescript-blue?style=square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Axios-56347C?style=square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon Amplify-569A31?style=square&logo=Amazon S3&logoColor=white"/>

<br>

# 👑 Best Practice

### 진행 방식

- 각자 개발한 뒤 가장 Best Practice 라고 생각되는 걸 선정하여 리팩토링 하는 방식

<br>

### Assignment 1. API 호출별로 로컬 캐싱 구현

- 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
- 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술
- expire time을 구현할 경우 가산점

| <div style="width:100px">이름</div> | 의견                                                                                                                                                                                                                                                                                             |
| :---------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|               김진현                | 1. 검색어 캐싱체크<br/> 캐싱 not ⇒ 캐싱 및 api 호출 ⇒ 리스팅<br/> 캐싱 ok ⇒ 검색어에 대한 get(value) ⇒ 리스팅<br/> 2. 만료시간은 마운트 및 리렌더링시 검색어의 만료시간 체크 후 remove(key)                                                                                                      |
|               박정민                | 검색어 sessionStorage에 저장 ( value - 리스트 + 만료시간 )<br/>- 캐싱 not ⇒ 캐싱 및 api 호출 ⇒ 리스팅<br/>- 캐싱 ok ⇒ 검색어에 대한 get(value) ⇒ 리스팅<br/>expire time constans 폴더에서 관리<br/>- 검색어가 storage에 있다면 만료시간 체크 ⇒ removeItem(key) ⇒ api 호출 ⇒ 리스팅               |
|               윤다솜                | 캐싱 데이터(검색 데이터)를 state로 관리 (prop drilling이 많이 일어날 것 같으면context로 구현하기)<br/>• json 형태<br/>• 해당 키워드의 캐싱 데이터가 있으면 데이터를 가져오고, 없으면 api 호출<br/>• expire time은 캐시 데이터마다 현재 시간과 데이터가 추가된 시간을 비교하여 expire time을 체크 |
|               이기석                | 캐싱 데이터 ContextAPI로 구현                                                                                                                                                                                                                                                                    |
|               이도하                | 검색어(key), 검색데이터(value)로 sessionStorage에 저장<br/>- sessionStorage에 검색어가 있다면 storage에서 get해서 사용, 없다면 api 호출                                                                                                                                                          |

<br />

**👑 Best Practice**

- 전역변수로 cache 관리하면 새로고침하면 cache 가 초기화 되는 문제로 저장소는 SessionStorage를 사용, sessionStorage로 너무 많은 캐싱을 하면 문제가 될 수 있기에 expire time으로 핸들링
- 검색 데이터를 SessionStorage에 Key와 Value, 저장된 시점 시간 캐싱
- 만료 시간 체크 후 데이터 삭제 및 api 호출
- 캐싱 데이터가 존재하지 않다면, api를 호출후 데이터를 SessionStorage에 저장 (새로고침시 캐싱 데이터 유지하기 위해)
- 캐싱 데이터가 존재한다면, SessionStorage에 있는 데이터 가져오기

  <br>

### Assignment 2. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

- README에 전략에 대한 설명 기술

| <div style="width:100px">이름</div> | 의견                                                                                                                                                                                                                                                                |
| :---------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|               김진현                | 1. debounce이용하여 더 입력 없을 시 마지막 한번에만 api호출(캐싱안되어있을때) 캐싱 되어있을경우 api호출 안하고 session에서 값 가져오기<br/>2. 특수기호(. / \* ) 및 음절 아닌 초성 중성 종성{ex)ㅏ,ㅙ,ㄻ} 같은 것들 포함되면 오타로 생각하고 api 쓸데 없는 호출 안함 |
|               박정민                | debounce 이용 (lodash)<br/>시간을 1000으로 지정하여 1초마다 api 호출                                                                                                                                                                                                |
|               윤다솜                | debounce를 이용하여 무분별한 API호출 제어                                                                                                                                                                                                                           |
|               이기석                | debounce를 이용하여 500ms마다 호출                                                                                                                                                                                                                                  |
|               이도하                | lodash debounce 라이브러리 사용, 1초마다 api 호출                                                                                                                                                                                                                   |

<br />

**👑 Best Practice**

- lodash 라이브러리의 debounce 메서드를 사용하여, search input의 change event가 발생한 후 1초 뒤 api 호출
- 무분별한 api 호출을 막기위해 검색어 Value를 유효성 체크하고 유효성 체크를 통과하면 api호출


 <br>

### Assignment 3. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- 사용법 README에 기술

| <div style="width:100px">이름</div> | 의견                                                                                                                                                                |
| :---------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|               김진현                | 방향키(위 아래) 누를 시 tabindex 변경하여 구현                                                                                                                      |
|               박정민                | event.key를 이용하여 방향키 값 가져오기<br/>- 위 방향키를 누를 시 배열의 인덱스 번호 -1<br/>- 아래 방향키를 누를 시 배열의 인덱스 번호 + 1                          |
|               윤다솜                | event.key의 값으로 추천 검색어 li의 index 이동                                                                                                                      |
|               이기석                | event.key를 이용하여 방향키 값 가져오기                                                                                                                             |
|               이도하                | event.key의 case에 따라 index값 변경, 변경된 값은 selectedIndex에 저장<br/>해당 data item의 index와 같은지 비교 후 같다면 focus되고 enter를 누를 경우 검색으로 이동 |


<br />

**👑 Best Practice**

- event.key의 case에 따라 index값 변경, 변경된 값은 selectedIndex에 저장
  해당 data item의 index와 같은지 비교 후 같다면 focus되고 enter를 누를 경우 검색으로 이동
- 위, 아래 방향키로 이동 시 foucs된 item을 search input값에 value로 넣어 자동완성 기능 구현
- esc 키를 입력하거나 onBlur 이벤트 시, selectbox 닫기 기능 구현

<br>

### Assignment 4. 검색어 없을 시 ‘검색어 없음’ 표출

| <div style="width:100px">이름</div> | 의견                                                                     |
| :---------------------------------: | ------------------------------------------------------------------------ |
|               김진현                | 검색어 추천 리스트(state) .length ===0 일시 검색어 없음 표출             |
|               박정민                | 검색어 리스트의 길이가 0이라면 ‘검색어가 존재하지 않습니다’ 표출         |
|               윤다솜                | 검색어 데이터의 길이가 0이면 ‘검색어 없음’ 표출                          |
|               이기석                | 검색어 데이터의 길이가 0이고 검색어를 작성하지 않으면 ‘검색어 없음’ 표출 |
|               이도하                | 검색어 데이터의 길이가 0이라면 검색어 없음 표출                          |



<br />

**👑 Best Practice**

- 검색어 리스트 삼항 연산자를 사용하여 길이가 0이라면 ‘검색어 없음’ 표출, 길이가 0보다 크다면 데이터 map으로 렌더링

<br>

### Assignment 5.검색어 추천 기능 구현

| <div style="width:100px">이름</div> | 의견                                                                                                                                    |
| :---------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------- |
|               김진현                | 1. 캐싱 및 api 호출로 검색어 추천 목록 불러오기<br/>2. 검색어가 포함된 추천 목록 리스팅<br/>3. 리스팅된 텍스트 내 검색어 Bold처리       |
|               박정민                | 캐싱된 데이터가 있다면 케싱데이터 불러오기, 없다면 api 호출 ( localhost: 4000 )                                                         |
|               윤다솜                | git clone하여 해당 api 서버 켜고,<br/>api 호출 - 캐싱된 데이터가 있으면 캐싱데이터 사용, 캐싱 데이터가 없으면 api 호출하여 데이터 fetch |
|               이기석                | 캐싱된 데이터가 있다면 케싱데이터 불러오기, 없다면 api 호출 (로컬 서버)                                                                 |
|               이도하                | json-server 사용하여 api 통신 <br/>useCachedData hook 사용 <br/>- 캐싱된 데이터가 없으면 api 호출, 있다면 캐싱 데이터 불러오기          |

<br />

**👑 Best Practice**

- json-server와 aixos 활용하여 localhost:4000 api 통신
- 통신 시 쿼리 스트링( q, limit )을 사용하여 제한된 개수만큼 데이터 불러옴
  - 처음엔 불러온 데이터를 모두 보여주지 않고 배열을 `slice`하여 사용
  - 매번 데이터를 조작하는 비용발생을 줄일수 있지 않을까? 라는 질문
  - json 서버 공식문서를 확인하여 쿼리스트링 `\_limit`을 통해 제한된 데이터를 불러올 수 있음을 확인
  - `[localhost:4000/q=기&_limit=10](http://localhost:4000/q=기&_limit=10)` 방식으로 방대한 데이터를 제한된 데이터로 불러오기
- 캐싱된 데이터가 있으면 캐싱데이터 사용, 캐싱 데이터가 없으면 api 호출하여 데이터 fetch

  <br>
