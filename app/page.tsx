import { SiteNav } from "@/components/site-nav";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main id="top">
      <div className="ambient ambient-home" aria-hidden="true" />
      <SiteNav />

      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal data-delay="80">Software student · Ajou University · 2026</p>
          <h1><span className="title-line" data-reveal data-delay="140"><span>사람의 시간을</span></span><br /><span className="title-line" data-reveal data-delay="220">코드로 <em>설계합니다.</em></span></h1>
          <p className="hero-intro" data-reveal data-delay="310">안녕하세요, 이정명입니다. 복잡한 문제를 단순하고 다정한 경험으로 바꾸는 소프트웨어를 만들고 있습니다.</p>
          <div className="hero-actions" data-reveal data-delay="390">
            <a className="button button-dark" href="#work">작업물 보기 <Arrow /></a>
            <a className="button button-light" href="#contact">함께 이야기하기 <Arrow /></a>
          </div>
        </div>
        <div className="hero-art" data-reveal="soft" data-delay="440" aria-label="이정명의 이니셜과 개발 작업을 표현한 추상 그래픽">
          <div className="art-glow" />
          <div className="art-window">
            <div className="window-bar"><i /><i /><i /><span>building something useful</span></div>
            <div className="window-code"><span>01</span><b>think</b><span>02</span><b>design</b><span>03</span><b>build</b></div>
          </div>
          <div className="art-avatar"><span>JM</span><small>SEOUL / KOREA</small></div>
          <span className="art-note note-one">DESIGN WITH CARE</span>
          <span className="art-note note-two">AVAILABLE · 2026</span>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-heading">
          <div data-reveal><p className="eyebrow">01 / Selected work</p><h2>작은 디테일이<br /><em>큰 차이</em>를 만듭니다.</h2></div>
          <p className="section-note" data-reveal data-delay="90">문제를 관찰하고, 구조를 설계하고,<br />직접 작동하는 경험으로 만듭니다.</p>
        </div>
        <div className="project-grid">
          <article className="project project-featured" data-reveal data-delay="80">
            <div className="project-visual visual-dashboard"><div className="mini-browser"><div className="mini-top"><span /><span /><span /></div><div className="mini-copy"><small>WEEKLY FOCUS</small><strong>Make space<br />for deep work.</strong></div><div className="mini-bars"><i /><i /><i /><i /></div></div></div>
            <div className="project-meta"><div><span>01 · 2025</span><h3>Flowstate</h3><p>집중을 위한 작업 관리 도구</p></div><Arrow /></div>
          </article>
          <article className="project project-note" data-reveal data-delay="140">
            <div className="project-visual visual-type"><small>WRITE IT DOWN</small><span>오늘의<br /><em>기록</em></span><i>✦</i></div>
            <div className="project-meta"><div><span>02 · 2024</span><h3>On the record</h3><p>생각을 수집하고 연결하는 인터페이스</p></div><Arrow /></div>
          </article>
          <article className="project project-orbit" data-reveal data-delay="220">
            <div className="project-visual visual-orbit"><div className="orbit-ring" /><span>↗</span><small>LEARN · SHARE · GROW</small></div>
            <div className="project-meta"><div><span>03 · 2024</span><h3>Open source</h3><p>함께 배우는 작은 실험들</p></div><Arrow /></div>
          </article>
        </div>
      </section>

      <section className="about section-wrap" id="about">
        <p className="eyebrow" data-reveal>02 / A little about me</p>
        <div className="about-content">
          <h2><span className="title-line" data-reveal data-delay="60">배우고, 만들고,</span><br /><span className="title-line" data-reveal data-delay="140"><em>나누는</em> 개발자.</span></h2>
          <div className="about-copy" data-reveal data-delay="190">
            <p>아주대학교 소프트웨어학과에서 공부하며 기술과 제품의 접점을 탐구합니다. 좋은 코드는 기능을 넘어 사람의 시간과 맥락을 존중해야 한다고 믿습니다.</p>
            <div className="skill-list"><span>Frontend</span><span>Product thinking</span><span>Interaction</span></div>
          </div>
        </div>
        <div className="principles">
          <div data-reveal data-delay="60"><span>01</span><strong>Observe</strong><p>먼저 사용자의 맥락과 진짜 문제를 살핍니다.</p></div>
          <div data-reveal data-delay="130"><span>02</span><strong>Shape</strong><p>복잡한 것을 이해하기 쉬운 구조로 정리합니다.</p></div>
          <div data-reveal data-delay="200"><span>03</span><strong>Build</strong><p>작은 디테일까지 직접 구현하고 검증합니다.</p></div>
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-card">
          <div data-reveal><p className="eyebrow">03 / Start a conversation</p><h2>좋은 것을 함께<br /><em>만들어볼까요?</em></h2></div>
          <div className="contact-side" data-reveal data-delay="110"><p><i /> 새로운 프로젝트와 즐거운 대화를 기다리고 있어요.</p><a className="button button-dark" href="mailto:ljmyung1224@ajou.ac.kr">메일 보내기 <Arrow /></a></div>
          <a className="contact-mail" data-reveal data-delay="180" href="mailto:ljmyung1224@ajou.ac.kr">ljmyung1224@ajou.ac.kr <Arrow /></a>
        </div>
      </section>

      <footer className="site-footer"><span>© 2026 LEE JUNG-MYUNG</span><span>MADE WITH CURIOSITY</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
