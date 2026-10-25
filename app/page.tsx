import Image from "next/image";
import { SiteNav } from "@/app/components/site-nav";
import { getPortfolioSkills } from "@/data/api";

const interests = ["GIS & CARTOGRAPHY", "SPATIAL DATA", "WEB DEVELOPMENT"];


export default async function Home() {
  const { skills, usingFallback } = await getPortfolioSkills();

  return (
    <main className="site-shell">
      <SiteNav active="home" />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-mark">✳</span> GEOMATICS ENGINEERING STUDENT <span className="eyebrow-year">/ 2026</span></p>
          <h1>Mapping the<br />world, <span>coordinate</span><br />by coordinate<span className="hero-period">.</span></h1>
          <p className="hero-intro">Hi, I&apos;m <strong>Yudhist</strong>, a Geomatics Engineering student who enjoys exploring how maps and spatial data can help us better understand the world. I’m learning to combine GIS, mapping, and web development to turn complex geographic information into clear, useful, and engaging experiences. Through each project, I aim to keep learning, experiment with new ideas, and make spatial information easier for everyone to explore.</p>
          <div className="hero-actions">
            <a className="pixel-button" href="/projects">EXPLORE PROJECTS <span>↗</span></a>
            <a className="quiet-link" href="/contact">LET&apos;S CONNECT <span>→</span></a>
          </div>
          <div className="interest-list">
            {interests.map((interest, index) => <span key={interest}><b>0{index + 1}</b>{interest}</span>)}
          </div>
        </div>

        <div className="hero-visuals">
          <div className="hero-photo-card">
            <Image
              className="hero-photo"
              src="/yudhist-fieldwork.jpeg"
              alt="Yudhist at a geomatics field activity"
              width={1200}
              height={1600}
              sizes="(max-width: 850px) 90vw, 470px"
            />
            <span className="hero-photo-label">FIELDWORK / GEOMATICS</span>
          </div>
          <div className="map-card" aria-label="Decorative pixel art topographic map">
          <div className="map-card-head"><span>TOPOGRAPHIC STUDY / 006</span><span className="map-status"><i /> SCHEMATIC</span></div>
          <div className="map-canvas">
            <svg className="topo-art" viewBox="0 0 520 420" role="img" aria-label="Illustrated contour map with a pixel survey marker">
              <defs>
                <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="currentColor" strokeOpacity=".18" strokeWidth="1" /></pattern>
                <pattern id="pixel-dots" width="8" height="8" patternUnits="userSpaceOnUse"><rect x="1" y="1" width="2" height="2" fill="currentColor" opacity=".18" /></pattern>
              </defs>
              <rect width="520" height="420" fill="url(#grid)" />
              <rect width="520" height="420" fill="url(#pixel-dots)" />
              <g className="contour-lines" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M-20 78C45 24 102 31 150 67s83 53 131 22 83-41 121-12 70 30 138-12" />
                <path d="M-20 106C42 53 100 58 145 92s86 56 139 30 84-43 120-14 73 39 140 1" />
                <path d="M-20 137C39 85 94 85 139 117s91 61 147 40 84-43 120-10 76 47 142 14" />
                <path d="M-20 171C38 121 91 115 135 146s94 67 151 52 87-40 122-5 76 49 140 25" />
                <path d="M-20 207C37 159 87 148 132 177s97 70 155 67 86-28 121 9 75 53 140 42" />
                <path d="M-20 246C34 199 83 183 128 208s99 68 158 82 87-12 122 26 76 54 140 54" />
                <path d="M-20 289C33 244 78 219 124 240s98 63 160 94 84 4 122 39 75 49 139 64" />
                <path d="M45-20c49 55 65 106 34 151s-22 82 25 119 64 75 39 129 1 84 30 108" />
                <path d="M91-20c43 54 55 104 24 148s-21 82 22 120 59 72 37 127 3 86 31 110" />
                <path d="M389-20c-54 51-74 100-47 144s18 83-31 122-69 75-45 130-2 89-29 111" />
                <path d="M438-20c-58 53-79 101-53 147s21 82-30 125-70 77-48 132 2 84-24 106" />
              </g>
              <path className="route-line" d="M70 335c62-42 79-112 142-99s56 73 116 51 70-97 139-121" />
              <g className="pixel-marker" transform="translate(329 187)">
                <path d="M-20-20h12v-8h16v8h12v12h8v16h-8v12h-12v8H-8v-8h-12v-12h-8V-8h8z" fill="currentColor" opacity=".18" />
                <path d="M-12-12h24v-8h8v8h8v24h-8v8h-24v-8h-8v-24h8z" fill="currentColor" />
                <rect x="-5" y="-5" width="10" height="10" fill="#0a1119" />
              </g>
              <g className="map-label"><rect x="355" y="170" width="125" height="44" /><text x="366" y="188">GRID MARKER</text><text x="366" y="202">PIXEL / 001</text></g>
            </svg>
            <div className="north-arrow"><span>N</span><b>▲</b></div>
            <span className="grid-label">GRID / DEMO</span>
            <span className="map-scale">NOT TO SCALE</span>
          </div>
          <div className="map-card-foot"><span><i /> CONTOUR LINES</span><span>SPATIAL DATA × DESIGN</span></div>
          <span className="map-index">FIELD<br />NOTE 06</span>
          </div>
        </div>
        <span className="hero-footnote">MAPS / DATA / DEVELOPMENT</span>
      </section>

      <section className="profile-section">
        <div className="profile-portrait">
          <Image
            className="profile-photo"
            src="/yudhist-profile-fieldwork.jpeg"
            alt="Yudhist, a Geomatics Engineering student"
            width={1200}
            height={1600}
            sizes="(max-width: 540px) 210px, (max-width: 850px) 150px, 190px"
          />
          <span className="portrait-label">YUDHIST / GEO-06</span>
        </div>
        <div><span className="section-kicker">01 / PROFILE</span><h2>Curious by nature.<br /><em>Precise by design.</em></h2></div>
        <p>As a Geomatics Engineering student, I&apos;m interested in how we measure places, organize spatial information, and share what we learn. I&apos;m growing my skills in GIS, mapping, and web development one project at a time.</p>
        <div className="student-stamp"><span>STATUS</span><strong>GEO<br />STUDENT</strong><span>IN PROGRESS</span></div>
      </section>

      <section className="skills-section">
        <div className="section-heading"><div><span className="section-kicker">02 / TOOLKIT</span><h2>Tools of the <em>trade.</em></h2></div><span className="section-note">SKILLS I&apos;M BUILDING WITH</span></div>

        {usingFallback && (
  <p role="status">
    API tidak tersedia; menampilkan skill lokal.
  </p>
)}

        <div className="skill-grid">{skills.map((skill, index) => <div className="skill-tile" key={skill}><span className="skill-index">{String(index + 1).padStart(2, "0")}</span><span>{skill}</span><b>✳</b></div>)}</div>
      </section>

      <footer className="site-footer"><span>© 2026 YUDHIST / GEOMATICS ENGINEERING</span><span>MADE WITH CURIOSITY <b>✳</b></span></footer>
    </main>
  );
}
