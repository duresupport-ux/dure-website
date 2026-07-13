# Header / Footer 컴포넌트 구조

## 핵심 파일

`assets/js/components.js`

이 파일에서 모든 페이지의 공통 헤더와 푸터를 관리합니다.

## HTML 사용법

```html
<dure-header data-variant="home"></dure-header>
<dure-footer data-variant="default"></dure-footer>

<script src="./assets/js/components.js" defer></script>
```

## Header 변형

- `home`: 메인 페이지
- `family`: 가족가게 페이지
- `neighbor`: 이웃가게 페이지
- `application`: 가족가게 신청 페이지
- `andamiro`: 안다미로 상세 페이지

## Footer 변형

- `default`: 메인·가족가게 공통
- `neighbor`: 이웃가게
- `application`: 신청 페이지
- `andamiro`: 안다미로 상세

## 수정 방법

전체 사이트의 로고, 공통 버튼, 푸터 문구를 바꾸려면
`assets/js/components.js`만 수정합니다.

페이지별 섹션 이동 메뉴는 `pageConfigs`에서 수정합니다.

## GitHub Pages 경로 처리

컴포넌트는 `components.js` 파일의 위치를 기준으로 사이트 루트를 자동 계산합니다.
따라서 저장소가 `https://사용자명.github.io/dure-website/` 아래에 있어도
메인·가족가게·이웃가게 링크가 정상 작동합니다.
