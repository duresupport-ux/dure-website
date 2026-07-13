(() => {
  const scriptUrl = document.currentScript?.src || "";
  const siteRoot = scriptUrl ? new URL("../../", scriptUrl) : new URL("./", document.baseURI);

  const url = (path = "") => new URL(path, siteRoot).href;

  const pageConfigs = {
    home: {
      ariaLabel: "두레 홈",
      navLabel: "주요 메뉴",
      nav: [
        ["두레 소개", "#about"],
        ["가족가게", "#family"],
        ["이웃가게", "#neighbor"],
      ],
      actions: [
        ["이웃가게 홍보", url("neighbor-store/"), "secondary"],
        ["가족가게 신청", url("family-application/"), "primary"],
      ],
    },
    family: {
      ariaLabel: "두레 가족가게 홈",
      navLabel: "주요 메뉴",
      nav: [
        ["두레 소개", "#about"],
        ["가족가게", "#family"],
        ["이웃가게", "#neighbor"],
      ],
      actions: [
        ["이웃가게 홍보", url("neighbor-store/"), "secondary"],
        ["가족가게 신청", url("family-application/"), "primary"],
      ],
    },
    neighbor: {
      ariaLabel: "두레 이웃가게 홈",
      navLabel: "페이지 이동",
      nav: [
        ["이웃가게 소개", "#about"],
        ["가족가게", "#shops"],
        ["신청하기", "#apply"],
      ],
      actions: [
        ["이웃가게 신청", "#apply", "primary"],
      ],
    },
    andamiro: {
      ariaLabel: "두레 안다미로 스시 안내 처음으로",
      navLabel: "페이지 이동",
      nav: [
        ["매장 정보", "#store"],
        ["홍보 방식", "#promotion"],
        ["이웃가게", "#neighbors"],
      ],
      actions: [
        [
          "이웃가게 신청",
          "https://zzznly.notion.site/36b25bad8e4780ad955bcf541b3407ee?pvs=21",
          "primary",
          true,
        ],
      ],
    },
  };

  const brandMarkup = (ariaLabel, homeHref, modifier = "") => `
    <a class="brand${modifier ? ` ${modifier}` : ""}" href="${homeHref}" aria-label="${ariaLabel}">
      <span class="brand__mark" aria-hidden="true"></span>
      <span>두레</span>
    </a>
  `;

  const actionMarkup = ([label, href, type, external = false]) => {
    const classes = type === "primary" ? "button button--primary" : "button";
    const externalAttrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a class="${classes}" href="${href}"${externalAttrs}>${label}</a>`;
  };

  class DureHeader extends HTMLElement {
    connectedCallback() {
      const variant = this.dataset.variant || "home";

      if (variant === "application") {
        this.innerHTML = `
          <header class="topbar">
            <a class="brand" href="${url("")}" aria-label="두레 홈">
              <span class="brand-mark" aria-hidden="true"></span>
              <span class="brand-text">두레 <small>가족가게</small></span>
            </a>
            <a class="top-cta" href="#apply">신청하기 <span aria-hidden="true">→</span></a>
          </header>
        `;
        return;
      }

      const config = pageConfigs[variant] || pageConfigs.home;
      const nav = config.nav
        .map(([label, href]) => `<a href="${href}">${label}</a>`)
        .join("");
      const actions = config.actions.map(actionMarkup).join("");

      this.innerHTML = `
        <header class="header">
          <div class="header__inner">
            ${brandMarkup(config.ariaLabel, url(""))}
            <nav class="nav" aria-label="${config.navLabel}">
              ${nav}
            </nav>
            <div class="header__actions">
              ${actions}
            </div>
          </div>
        </header>
      `;
    }
  }

  class DureFooter extends HTMLElement {
    connectedCallback() {
      const variant = this.dataset.variant || "default";
      const year = new Date().getFullYear();

      if (variant === "application") {
        this.innerHTML = `
          <footer>© ${year} DURE. 우리 동네 안에서 함께 성장합니다.</footer>
        `;
        return;
      }

      if (variant === "neighbor") {
        this.innerHTML = `
          <footer class="footer">
            <div class="footer__inner">
              <span>두레 · 우리 동네 가게를 연결합니다.</span>
              <span>© ${year} DURE. All rights reserved.</span>
            </div>
          </footer>
        `;
        return;
      }

      if (variant === "andamiro") {
        this.innerHTML = `
          <footer class="footer">
            <div class="footer__inner">
              <span class="footer__brand">두레</span>
              <span>우리 동네의 손님을 연결하는 QR 기반 로컬 홍보 서비스</span>
            </div>
          </footer>
        `;
        return;
      }

      this.innerHTML = `
        <footer class="footer">
          <div class="footer__inner">
            <div class="footer__brand">두레</div>
            <div>우리 동네의 가게들이 함께 성장하는 새로운 연결</div>
          </div>
        </footer>
      `;
    }
  }

  if (!customElements.get("dure-header")) {
    customElements.define("dure-header", DureHeader);
  }

  if (!customElements.get("dure-footer")) {
    customElements.define("dure-footer", DureFooter);
  }
})();
