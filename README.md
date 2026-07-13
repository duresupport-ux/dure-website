# 두레 웹사이트 v1

두레의 제작 단계용 정적 웹 프로젝트입니다.

## 페이지

- `/` 메인 랜딩
- `/family-store/` 가족가게 소개
- `/neighbor-store/` 이웃가게 소개
- `/family-application/` 가족가게 신청 안내
- `/stores/andamiro/` 안다미로 상세

## 구조

- `assets/css/tokens.css` 디자인 토큰
- `assets/css/base.css` 공통 기반
- `assets/css/components.css` 공통 컴포넌트
- `assets/css/pages/` 페이지별 스타일
- `assets/images/` 분리된 이미지
- `assets/video/` 분리된 영상
- `assets/js/common.js` 공통 JavaScript

## 로컬 확인

`index.html`을 직접 열어도 대부분 확인할 수 있습니다.  
정확한 폴더 경로 테스트는 로컬 서버 사용을 권장합니다.

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.

## GitHub

이 폴더의 **내용물 전체**를 `dure-website` 저장소 루트에 업로드합니다.


## 공통 Header / Footer

- `assets/js/components.js`에서 전 페이지의 헤더와 푸터를 관리합니다.
- 각 HTML에는 `<dure-header>`와 `<dure-footer>`만 남습니다.
- 상세 구조는 `docs/COMPONENT_ARCHITECTURE.md`를 확인합니다.


## Layout Component System

- `assets/css/layout.css`
- 미리보기: `layout-system.html`
- 문서: `docs/LAYOUT_COMPONENT_SYSTEM.md`

Container, Section, Grid, Split, Hero, CTA를 공통 레이아웃으로 사용할 수 있습니다.


## v7 Full Layout Refactor

전체 5개 페이지가 DURE Design System + Layout Component System으로 전환되었습니다.
검증 결과는 `docs/V7_FULL_LAYOUT_REPORT.json`에서 확인할 수 있습니다.


## v8 SEO & Performance

- 페이지별 SEO 메타데이터와 JSON-LD
- sitemap.xml / robots.txt
- Open Graph 이미지와 favicon
- 이미지 WebP 변환 및 크기 속성
- lazy loading과 우선순위 최적화

현재 기준 도메인은 GitHub Pages이며, dure.io 연결 후 `docs/SITE_CONFIG.md` 기준으로 변경합니다.


## v8.5 Design Polish

- Design Tokens 2.0
- 전체 사이트 디자인 정교화
- Form System
- State Components
- UI Kit (`ui-kit.html`)
- Design Guidelines 2.0
- Icon / Illustration Guide


## v9.1 Content Polish & CRO
- 전체 5개 페이지 카피와 설득 구조 재설계
- 이미지 단독 섹션 제거
- 혜택, 이용 흐름, 사례, CTA 중심으로 재구성
- 허위 성과 수치 없이 실제 운영 조건만 사용
