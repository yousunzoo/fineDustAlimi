# 미세먼지 알리미
React와 공공 기관 API를 활용한 미세 먼지 알리미 애플리케이션

## ✨ 기능 구현
- `Redux Toolkit Query`를 활용하여 API로 데이터 받아오기
- 미세먼지 정보 표시 위한 카드 컴포넌트 제작
- 카드 컴포넌트 속, 미세먼지 수치에 따른 카드 색상 변화
- 카드 컴포넌트 속, 즐겨찾기 등록/해제 여부에 따른 즐겨찾기 버튼의 형태 변화
- 지역 변경을 위한 드롭다운 메뉴 컴포넌트 제작
- 기본지역 보기 / 전체 보기 / 즐겨찾기 보기 전환을 위한 탭 컴포넌트 제작
- 기본지역 보기 / 전체 보기 / 즐겨찾기 보기 페이지 각각 구현
- `context`를 활용해서 즐겨찾기 관리

<br /><br />
## 🔧 기술 스택
- 메인 : `React`, `Redux(@reduxjs/toolkit)`
- 라이브러리 : `React-Select`, `Styled-components`, `Chart.js`, `axios`, `react-icons`, `framer-motion`
- 배포 : `Vercel`
- DEMO : [미세먼지 알리미](https://finedust-alimi.netlify.app/)

<br /><br />

## 💻 페이지 소개

### 홈 화면
![home](https://user-images.githubusercontent.com/102499959/229285448-61aff0a7-ffd1-4b4b-bdb1-5494d43fa374.gif)
- 내 위치를 불러와 주변 측정소의 데이터와 현재 날씨를 보여줍니다.
- kakao map api, 에어코리아 측정소 정보 api를 사용했습니다.

### 특정 지역 보기
![search](https://user-images.githubusercontent.com/102499959/229285492-d2e375a4-850d-49b6-8e93-bc8904e7d562.gif)
- 시/도 미세먼지 데이터를 불러오는 중에는 로딩 컴포넌트를 띄워줍니다. 
- 해당 시/도에 맞는 측정소들이 select option에 적용됩니다.
- 특정 측정소명을 클릭하면 해당 데이터를 가진 카드를 보여줍니다.
- 즐겨찾기 버튼을 클릭해서 즐겨찾기에 담기/제거를 할 수 있습니다.
- 미세먼지 수치에 따라 카드 배경 색상이 변경됩니다.

### 전체 보기
![all](https://user-images.githubusercontent.com/102499959/229285562-918216c7-813b-48af-9f66-1cfdec94fecb.gif)
- 시/도 탭을 클릭하면 해당 시/도에 있는 측정소들이 모두 출력됩니다.
- 미세먼지 수치에 따라 카드 배경 색상이 변경됩니다.
- 카드를 클릭하면 해당 측정소의 정보가 담긴 모달을 띄워줍니다.
- 특정 지역 컴포넌트와 마찬가지로 즐겨찾기 담기/제거가 가능합니다.
- 즐겨찾기 버튼을 누르면 context에 해당 데이터가 저장됩니다.


### 즐겨찾기
![favorites](https://user-images.githubusercontent.com/102499959/229285717-ffc8c94f-d5ff-477b-8d40-b2632cb5b93d.gif)
- 즐겨찾기 페이지에서는 즐겨찾기 등록한 데이터들(localStorage 저장 데이터)을 뿌려줍니다.
- 즐겨찾기 해제 버튼을 누르면 localStorage에 해당 데이터가 사라지고 화면에서도 사라집니다.

