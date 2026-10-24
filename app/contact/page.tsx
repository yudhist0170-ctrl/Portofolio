import { SiteNav } from "@/app/components/site-nav";

export default function ContactPage() {
  return (
    <main className="site-shell">
      <SiteNav active="contact" />
      <section className="subpage">
        <div className="subpage-heading"><span className="section-kicker">04 / OPEN CHANNEL</span><h1>Let&apos;s <span>connect.</span></h1><p>Interested in maps, spatial data, or building for the web? Find me on GitHub.</p></div>
        <div className="contact-card"><span className="section-kicker">TRANSMISSION READY / ONLINE</span><h2>Send a signal.</h2><p>Follow my learning journey and see what I&apos;m working on.</p><a className="pixel-button" href="https://github.com/yudhist0170-ctrl" target="_blank" rel="noreferrer">GITHUB PROFILE <span>↗</span></a></div>
      </section>
      <footer className="site-footer"><span>© 2026 YUDHIST / GEOMATICS ENGINEERING</span><span>MADE WITH CURIOSITY <b>✳</b></span></footer>
    </main>
  );
}
