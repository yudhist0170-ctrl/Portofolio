import { SiteNav } from "@/app/components/site-nav";
import { getPortfolioProjects } from "@/data/api";

export default async function ProjectsPage() {
  const { projects, usingFallback } = await getPortfolioProjects();

  return (
    <main className="site-shell">
      <SiteNav active="projects" />
      <section className="subpage">
        <div className="subpage-heading">
          <span className="section-kicker">03 / FIELD WORK</span>
          <h1>Selected <span>projects.</span></h1>
          <p>Mapping experiments, spatial data explorations, and web projects.</p>
        </div>

        {usingFallback && (
          <p role="status">
            API tidak tersedia; menampilkan data portfolio lokal.
          </p>
        )}

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <span className="section-kicker">
                PROJECT / {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-tools">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              {project.link && (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  OPEN PROJECT ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <span>© 2026 YUDHIST / GEOMATICS ENGINEERING</span>
        <span>MADE WITH CURIOSITY <b>✳</b></span>
      </footer>
    </main>
  );
}