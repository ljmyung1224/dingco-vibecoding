import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="주요 메뉴">
        <a className="brand" href="#top">JM<span>.</span></a>
        <div className="nav-links">
          <a href="#work">작업물</a>
          <a href="#about">소개</a>
          <a href="#contact">연락하기</a>
          <Link href="/archive">Archive</Link>
        </div>
        <a className="availability" href="#contact"><i /> Available for a new build</a>
      </nav>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software student · Ajou University · 2026</p>
          <h1>사람의 흐름을<br /><em>코드로</em> 설계합니다.</h1>
          <p className="hero-intro">안녕하세요, 이정명입니다. 복잡한 문제를 또렷한 경험으로 바꾸는 소프트웨어를 만들고 있습니다.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">작업물 보기 <span>↗</span></a>
            <a className="text-link" href="#contact">함께 이야기하기 <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="이정명의 관심사를 나타내는 그래픽">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core">JM</div>
          <span className="art-tag tag-top">BUILD WITH CARE</span>
          <span className="art-tag tag-bottom">SEOUL / KOREA</span>
          <span className="art-plus plus-one">+</span>
          <span className="art-plus plus-two">+</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><span>DESIGNING USEFUL THINGS</span><b>✳</b><span>LEARNING IN PUBLIC</span><b>✳</b><span>BUILDING FOR HUMANS</span><b>✳</b></div>

      <section className="work section-wrap" id="work">
        <div className="section-heading"><p className="eyebrow">01 / Selected work</p><h2>작은 디테일이<br /><em>큰 차이</em>를 만듭니다.</h2></div>
        <div className="project-grid">
          <article className="project project-lime"><div className="project-visual visual-dashboard"><div className="mini-top"><span /> <span /> <span /></div><div className="mini-bars"><i /><i /><i /><i /></div><div className="mini-line" /></div><div className="project-meta"><span>01 — 2025</span><h3>Flowstate</h3><p>집중을 위한 작업 관리 도구</p></div></article>
          <article className="project project-orange"><div className="project-visual visual-type"><span>오늘의<br /><em>기록</em></span><small>WRITE IT DOWN</small></div><div className="project-meta"><span>02 — 2024</span><h3>On the record</h3><p>생각을 수집하고 연결하는 인터페이스</p></div></article>
          <article className="project project-ink"><div className="project-visual visual-orbit"><div /><span>∞</span></div><div className="project-meta"><span>03 — 2024</span><h3>Open source</h3><p>함께 배우는 작은 실험들</p></div></article>
        </div>
      </section>

      <section className="about section-wrap" id="about"><p className="eyebrow">02 / A little about me</p><div className="about-content"><h2>배우고, 만들고,<br /><em>나누는</em> 개발자.</h2><div><p>아주대학교 소프트웨어학과에서 공부하며 웹 기술과 제품의 접점을 탐구합니다. 좋은 코드는 기능을 넘어 사람의 시간을 존중해야 한다고 믿습니다.</p><div className="skill-list"><span>FRONTEND</span><span>PRODUCT THINKING</span><span>INTERACTION</span></div></div></div></section>

      <section className="contact section-wrap" id="contact"><p className="eyebrow">03 / Start a conversation</p><h2>좋은 것을 함께<br /><em>만들어볼까요?</em></h2><a className="contact-mail" href="mailto:ljmyung1224@ajou.ac.kr">ljmyung1224@ajou.ac.kr <span>↗</span></a></section>

      <footer className="site-footer"><span>© 2026 LEE JUNG-MYUNG</span><span>MADE WITH CURIOSITY</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
