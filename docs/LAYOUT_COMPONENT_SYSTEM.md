# DURE Layout Component System v1.0

## 목적

페이지별로 임의의 여백과 그리드를 만들지 않고,
공통 레이아웃 컴포넌트를 조합해 모든 페이지의 리듬을 통일합니다.

## 핵심 컴포넌트

### Container

```html
<div class="dure-container">...</div>
<div class="dure-container dure-container--sm">...</div>
```

### Section

```html
<section class="dure-section">
  <div class="dure-container">...</div>
</section>
```

변형:

- `dure-section--compact`
- `dure-section--hero`
- `dure-section--soft`
- `dure-section--dark`
- `dure-section--bordered`

### Stack

```html
<div class="dure-stack dure-stack--6">...</div>
```

### Inline

```html
<div class="dure-inline dure-inline--between dure-inline--3">...</div>
```

### Grid

```html
<div class="dure-grid dure-grid--3">...</div>
<div class="dure-grid dure-grid--auto-md">...</div>
```

### Split

```html
<div class="dure-split">
  <div>텍스트</div>
  <div>이미지</div>
</div>
```

### Hero

```html
<section class="dure-section dure-section--hero">
  <div class="dure-container dure-hero">
    <div class="dure-hero__content">...</div>
    <aside class="dure-hero__aside">...</aside>
  </div>
</section>
```

### CTA

```html
<div class="dure-cta">
  <div>
    <span class="dure-cta__label">DURE</span>
    <h2 class="dure-cta__title">제목</h2>
    <p class="dure-cta__description">설명</p>
  </div>
  <div class="dure-cta__actions">...</div>
</div>
```

## 운영 원칙

1. 페이지의 전체 폭은 `.dure-container`로 제어합니다.
2. 섹션 상하 여백은 `.dure-section`을 우선 사용합니다.
3. 임의의 `margin-top: 37px` 대신 Stack과 토큰을 사용합니다.
4. 2열 레이아웃은 직접 CSS를 만들기 전에 `.dure-split`을 검토합니다.
5. 3개 이상의 카드 목록은 `.dure-grid`를 사용합니다.
6. CTA는 페이지마다 새로 만들지 않고 `.dure-cta`를 사용합니다.
