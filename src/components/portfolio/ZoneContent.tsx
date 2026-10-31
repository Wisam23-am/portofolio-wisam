import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  GraduationCap,
  House,
  Mail,
  MapPin,
  CalendarDays,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import {
  achievements,
  education,
  organisations,
  personal,
  projects,
  skillGroups,
  work,
} from "@/content/portfolio";
import { zones, type ZoneId } from "@/content/zones";

export function ZoneIcon({ id, size = 20 }: { id: ZoneId; size?: number }) {
  const Icon = {
    personal: House,
    education: GraduationCap,
    organisation: Users,
    achievement: Trophy,
    skills: Wrench,
  }[id];
  return <Icon size={size} strokeWidth={1.7} aria-hidden="true" />;
}

export function ZoneContent({ id }: { id: ZoneId }) {
  if (id === "personal")
    return (
      <>
        <div className="profile-portrait">
          <Image
            src={personal.photo}
            alt={`Foto ${personal.name}`}
            width={853}
            height={1280}
            className="profile-photo"
            unoptimized
          />
        </div>
        <p className="eyebrow">SENANG BERTEMU DENGANMU</p>
        <h3 className="profile-name">{personal.name}</h3>
        <p className="role-text">{personal.role}</p>
        <p className="body-copy">{personal.bio}</p>
        <p className="location-line">
          <MapPin size={16} aria-hidden="true" />
          {personal.location}
        </p>
        <div className="content-actions">
          <a
            className="primary-button"
            href={personal.resume}
            download={personal.resumeFileName}
            aria-label="Unduh CV (DOCX)"
            title="Unduh CV dalam format DOCX"
          >
            <Download size={16} aria-hidden="true" />
            Unduh CV
          </a>
          <a className="secondary-button" href={`mailto:${personal.email}`}>
            <Mail size={16} aria-hidden="true" />
            Hubungi saya
          </a>
        </div>
        <div className="social-links">
          <a href={personal.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
            LinkedIn
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </>
    );
  if (id === "education")
    return (
      <>
        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item" key={item.title}>
              <span className="timeline-dot" />
              <p className="entry-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <p className="entry-location">{item.location}</p>
              {item.detail && <span className="gpa-badge">{item.detail}</span>}
            </article>
          ))}
        </div>
      </>
    );
  if (id === "organisation")
    return (
      <>
        <p className="section-intro">
          Pengalaman bertumbuh bersama orang lain.
        </p>
        <div className="entry-list">
          {organisations.map((item, i) => (
            <article className="experience-entry" key={item.title}>
              <span className="entry-number">0{i + 1}</span>
              <div>
                <p className="entry-period">{item.period}</p>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </>
    );
  if (id === "achievement")
    return (
      <>
        <p className="section-intro">
          Langkah kecil, pelajaran besar, dan pencapaian yang saya syukuri.
        </p>
        <div className="achievement-list">
          {achievements.map((item, index) => (
            <article className="achievement-entry" key={item.title}>
              <div className={`award-icon award-${index}`}>
                <Trophy size={25} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <p className="entry-period">
                  {item.category} <span>·</span> {item.year}
                </p>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </>
    );
  return (
    <>
      <p className="section-intro">
        Tools yang saya gunakan dan hal-hal yang saya kerjakan.
      </p>
      <h3 className="content-subheading">Di dalam toolkit saya</h3>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h4>{group.title}</h4>
            <div className="skill-chips">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h3 className="content-subheading">Pengalaman terkini</h3>
      <a
        className="work-entry"
        href="https://play.google.com/store/apps/details?id=ac.id.pens.it.labs.dayoff"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Lihat DayOff di Google Play"
      >
        <span className="work-symbol">
          <CalendarDays size={20} aria-hidden="true" />
        </span>
        <div>
          <p className="entry-period">{work.period}</p>
          <h4>{work.title}</h4>
          <p>{work.role}</p>
          <span className="project-link">
            Lihat di Google Play <ArrowUpRight size={13} aria-hidden="true" />
          </span>
        </div>
      </a>
      <h3 className="content-subheading">
        Ide yang jadi karya <span>04</span>
      </h3>
      <div className="project-list">
        {projects.map((project) => (
          <a
            className="portfolio-project"
            href={project.url}
            key={project.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-topline">
              <span>
                <i style={{ background: project.color }} />
                {project.category}
              </span>
              <span>
                {project.year}
                <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <span className="project-link">
              {project.linkLabel}
              <ArrowUpRight size={13} aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </>
  );
}

export function SimplePortfolio() {
  return (
    <div className="simple-portfolio">
      <div className="simple-intro">
        <p className="eyebrow">PORTOFOLIO AQILA WISAM</p>
        <h1>
          Sebuah perjalanan.
          <br />
          <span>Banyak kemungkinan.</span>
        </h1>
        <p>Pendidikan, pengalaman, dan karya saya dalam satu tempat.</p>
      </div>
      <div className="simple-sections">
        {zones.map((zone) => (
          <section
            id={zone.id}
            className="simple-section"
            key={zone.id}
            aria-labelledby={`simple-title-${zone.id}`}
          >
            <div className="simple-section-heading">
              <span style={{ color: zone.color }}>
                <ZoneIcon id={zone.id} size={24} />
              </span>
              <p className="eyebrow">
                {zone.number} / {zone.place}
              </p>
              <h2 id={`simple-title-${zone.id}`}>{zone.label}</h2>
            </div>
            <div className="simple-section-content">
              <ZoneContent id={zone.id} />
            </div>
          </section>
        ))}
      </div>
      <footer className="simple-footer">
        <span>© {new Date().getFullYear()} Wisam</span>
        <a href={`mailto:${personal.email}`}>
          Mari buat sesuatu bersama.
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
