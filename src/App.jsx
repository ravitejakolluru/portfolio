import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight, BriefcaseBusiness, Check, ChevronRight, Code2, Database,
  Download, ExternalLink, Github, GraduationCap, Mail, MapPin, Menu,
  MonitorSmartphone, Network, Send, Server, Sparkles, X, Linkedin, Cpu
} from "lucide-react";
import { useRef } from "react";

const profile = {
  name: "Kolluru Venkata Raviteja",
  shortName: "Raviteja",
  email: "vrt.kolluru@gmail.com",
  phone: "8919023748",
  location: "Tenali, Andhra Pradesh",
  github: "https://github.com/ravitejakolluru",
  linkedin: "https://www.linkedin.com/in/kolluru-venkata-raviteja-71b527342/",
  resume: "/Raviteja_Kolluru_Resume.pdf"
};

const skills = [
  ["Programming", ["Java", "Python"], Code2],
  ["Web", ["HTML", "CSS", "Bootstrap", "JavaScript"], MonitorSmartphone],
  ["Core", ["Data Structures & Algorithms", "Object-Oriented Programming", "Machine Learning"], Cpu],
  ["Database", ["MySQL", "MongoDB"], Database],
  ["Tools", ["GitHub", "VS Code", "Eclipse"], Code2],
  ["AI / Development", ["React.js", "Next.js", "Node.js", "Express.js", "OpenAI API", "Gemini API"], Sparkles]
];

const projects = [
  {
    number: "01",
    title: "ExamGenius AI",
    subtitle: "Personalized Entrance Exam Coach",
    description: "An AI-powered exam preparation platform that analyzes mock-test performance and generates personalized study plans.",
    tech: ["HTML", "CSS", "Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB Atlas", "OpenAI API", "Gemini API"],
    features: ["PDF, Excel & CSV analysis", "Weak-topic identification", "Performance pattern analysis", "Personalized study plans"],
    featured: true
  },
  {
    number: "02",
    title: "Tweet Disaster Classification",
    subtitle: "Machine Learning NLP System",
    description: "A machine-learning NLP system that classifies tweets as disaster-related or non-disaster-related.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLP"],
    features: ["Text preprocessing", "Feature extraction", "Classification", "Precision, recall & F1-score"]
  },
  {
    number: "03",
    title: "AI Video Surveillance",
    subtitle: "Intelligent Activity Detection",
    description: "An AI-based video surveillance system designed to analyze video footage and detect suspicious activities.",
    tech: ["Python", "OpenCV", "Machine Learning", "Flask", "HTML", "CSS", "JavaScript", "SMTP"],
    features: ["Real-time video processing", "Activity detection", "OpenCV analysis", "Flask-based application"]
  }
];

const experience = {
  role: "App Development Intern",
  company: "Adithisri Radiation Services LLP",
  place: "Tirupati, India",
  date: "08/2026 – Present",
  bullets: [
    "Practical exposure to real-world application development",
    "JavaScript and SQL database development",
    "Query optimization",
    "Application deployment using Apache Tomcat",
    "Debugging and testing",
    "Technical documentation"
  ]
};

const certifications = [
  ["MongoDB Basics for Students", "MongoDB, Inc.", "2026", "Certification"],
  ["Introduction to Packet Tracer Exam", "Cisco Networking Academy", "16 Apr 2025", "Certification"],
  ["Advanced Relational Database and SQL", "Coursera Project Network", "30 Jun 2026", "Certification"],
  ["Database Creation and Modeling using MYSQL Workbench", "Coursera Project Network", "1 Jul 2026", "Certification"],
  ["Cybersecurity Analyst Job Simulation", "Forage", "17 Jan 2025", "Job Simulation"],
  ["STEP – English Proficiency", "STEP / The Hindu Group", "Score: 9 · 15 Nov 2024", "Test Certificate"],
  ["HackWithAI – Telangana's Largest 24-Hour Offline AI Hackathon 2026", "Certificate of Participation", "2026", "Hackathon Participation"],
  ["Internship Common Aptitude Test", "Certificate of Participation", "16 Apr 2026", "Participation Certificate"],
  ["TCS iON – Interview Skills", "Certificate of Achievement", "14 May 2025", "Achievement Certificate"]
];

const nav = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="section-title">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Counter({ value, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  const numeric = parseFloat(value);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 900;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(numeric % 1 ? (numeric * p).toFixed(2) : Math.round(numeric * p));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, numeric]);

  return <div ref={ref} className="stat-card"><strong>{count}{numeric === 8.5 ? "" : ""}</strong><span>{label}</span></div>;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      {loading && (
        <motion.div className="loader" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 0.45, duration: 0.45 }} onAnimationComplete={() => setLoading(false)}>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>RAVITEJA</motion.span>
        </motion.div>
      )}

      <header className="nav-wrap">
        <nav className="navbar container" aria-label="Main navigation">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Go to home">Raviteja<span>.</span></button>
          <div className={`nav-links ${menu ? "open" : ""}`}>
            {nav.map((item) => <button key={item} onClick={() => scrollTo(item)}>{item}</button>)}
          </div>
          <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .45 }}>
              <span className="hero-badge"><span className="status-dot" /> Computer Science & Data Science</span>
              <h1>Hi, I'm <span>Raviteja.</span><br /><strong>Software Engineer &<br />Data Science Enthusiast</strong></h1>
              <p className="hero-copy">Aspiring Software Engineer with a strong foundation in Java, SQL, web technologies, and machine learning. I enjoy building practical applications that solve real-world problems.</p>
              <div className="button-row">
                <button className="btn btn-primary" onClick={() => scrollTo("projects")}>View My Projects <ArrowUpRight size={18} /></button>
                <a className="btn btn-secondary" href={profile.resume} download>Download Resume <Download size={17} /></a>
              </div>
              <div className="social-row">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
                <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19} /></a>
              </div>
            </motion.div>

            <motion.div className="hero-panel" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .65 }}>
              <div className="code-window">
                <div className="window-bar"><span /><span /><span /><small>raviteja.js</small></div>
                <pre><code>{`const developer = {
  name: "Raviteja Kolluru",
  degree: "B.Tech CSE (Data Science)",
  focus: [
    "Software Engineering",
    "Full-Stack Development",
    "AI & Machine Learning"
  ],
  mindset: "Build. Learn. Improve."
};`}</code></pre>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id="about" eyebrow="01 / About" title="About Me">
          <div className="about-grid">
            <motion.div className="about-copy" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
              <p>I am a B.Tech Computer Science & Engineering (Data Science) student at Mohan Babu University, focused on building a strong foundation across software engineering, full-stack development, databases, machine learning, and AI.</p>
              <p>With a current CGPA of <strong>8.50</strong>, I enjoy turning ideas into practical applications and learning through hands-on project work. I am currently gaining real-world experience through an <strong>App Development Internship</strong>.</p>
              <div className="education-line"><GraduationCap size={20} /><span><strong>Mohan Babu University</strong><small>B.Tech CSE (Data Science) · 2023–2027</small></span></div>
            </motion.div>
            <div className="stats-grid">
              <Counter value="8.5" label="CGPA" />
              <Counter value="3" label="Featured Projects" />
              <Counter value="1" label="Current Internship" />
              <Counter value="2023" label="B.Tech Start Year" />
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="02 / Skills" title="Technical Skills">
          <div className="skill-grid">
            {skills.map(([title, items, Icon], i) => (
              <motion.div key={title} className="skill-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06, duration: .45 }}>
                <div className="skill-icon"><Icon size={19} /></div>
                <h3>{title}</h3>
                <div className="skill-list">{items.map(item => <span key={item}>{item}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="03 / Work" title="Featured Projects">
          <div className="project-stack">
            {projects.map((p, i) => (
              <motion.article key={p.number} className={`project-card ${p.featured ? "featured" : ""}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ delay: i * .08, duration: .55 }}>
                <div className="project-top"><span className="project-number">{p.number}</span>{p.featured && <span className="featured-tag">Featured</span>}</div>
                <div className="project-content">
                  <div>
                    <p className="project-kicker">{p.subtitle}</p>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="tag-row">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                  </div>
                  <div className="project-side">
                    <h4>Key features</h4>
                    <ul>{p.features.map(f => <li key={f}><Check size={15} /> {f}</li>)}</ul>
                    <div className="project-actions">
                      <button className="text-btn">View Project <ExternalLink size={15} /></button>
                      <button className="text-btn muted"><Github size={15} /> GitHub</button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="04 / Experience" title="Experience">
          <motion.div className="timeline" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="timeline-line" />
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="experience-card">
                <div className="experience-head"><div><span className="current-pill">Current</span><h3>{experience.role}</h3><p>{experience.company}</p></div><span className="date">{experience.date}</span></div>
                <div className="place"><MapPin size={15} /> {experience.place}</div>
                <ul>{experience.bullets.map(b => <li key={b}><ChevronRight size={15} /> {b}</li>)}</ul>
              </div>
            </div>
          </motion.div>
        </Section>

        <Section id="certifications" eyebrow="05 / Credentials" title="Certifications & Achievements">
          <div className="cert-grid">
            {certifications.map(([title, issuer, date, type], i) => (
              <motion.article className="cert-card" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04, duration: .4 }}>
                <div className="cert-icon"><BriefcaseBusiness size={17} /></div>
                <div className="cert-body"><span className="cert-type">{type}</span><h3>{title}</h3><p>{issuer}</p><small>{date}</small></div>
                <button className="cert-link" aria-label={`View certificate for ${title}`}><ExternalLink size={16} /></button>
              </motion.article>
            ))}
          </div>
        </Section>

        <section className="cta">
          <div className="container cta-inner">
            <div><p className="eyebrow">06 / Next step</p><h2>Let's build something meaningful.</h2><p>Interested in working together or discussing an opportunity?</p></div>
            <div className="button-row"><a className="btn btn-primary" href={profile.resume} download>Download Resume <Download size={17} /></a><button className="btn btn-secondary" onClick={() => scrollTo("contact")}>Contact Me <ArrowUpRight size={17} /></button></div>
          </div>
        </section>

        <Section id="contact" eyebrow="07 / Contact" title="Let's connect">
          <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-lead">Have an opportunity, project idea, or just want to connect? Send a message and let's start a conversation.</p>
              <a href={`mailto:${profile.email}`} className="contact-item"><span><Mail size={18} /></span><div><small>Email</small><strong>{profile.email}</strong></div></a>
              <a href={`tel:${profile.phone}`} className="contact-item"><span><Server size={18} /></span><div><small>Phone</small><strong>{profile.phone}</strong></div></a>
              <div className="contact-item"><span><MapPin size={18} /></span><div><small>Location</small><strong>{profile.location}</strong></div></div>
              <div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div>
            </div>
            <motion.form className="contact-form" onSubmit={submit} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .55 }}>
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Email<input type="email" name="email" required placeholder="you@example.com" /></label>
              <label>Message<textarea name="message" required rows="6" placeholder="Tell me a little about your opportunity..." /></label>
              <button className="btn btn-primary full" type="submit">Send Message <Send size={17} /></button>
              {sent && <div className="success"><Check size={16} /> Message captured successfully. Connect your preferred form backend when ready.</div>}
            </motion.form>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer-inner"><span>© 2026 Raviteja Kolluru.</span><span>Built with React & passion for technology.</span></div>
      </footer>
    </>
  );
}

export default App;