import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Handshake, ShieldCheck, Lightbulb, Clock } from "lucide-react";
import { PageHero, SectionHeading, CtaBand } from "../components.jsx";
import { process, faqs, IMAGES } from "../data.jsx";

const values = [
  { Icon: Handshake, title: "Integrity", text: "Honest advice, transparent proposals and promises we can keep." },
  { Icon: ShieldCheck, title: "Reliability", text: "Work that is tested, documented and built to last." },
  { Icon: Lightbulb, title: "Practicality", text: "Right-sized solutions — never more technology than you need." },
  { Icon: Clock, title: "Responsiveness", text: "Clear communication and quick help when something needs attention." }
];

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="ABOUT US"
        crumbs={[{ label: "About Us" }]}
        title={<>People and technology,<br /><span>working as one.</span></>}
        text="Praxis Networks helps organizations build the connected, secure and dependable technology environments their teams rely on every day."
      />

      <section className="section-pad">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img src={IMAGES.about} alt="Praxis Networks engineer at work" />
            <div className="about-stamp"><strong>End-to-end</strong><span>supply, install &amp; support</span></div>
          </div>
          <div className="about-copy">
            <SectionHeading eyebrow="OUR STORY" title="Practical technology, delivered with care." />
            <p>The word <em>praxis</em> means putting knowledge into practice — and that is how we work. Praxis Networks is based in Chennai and supports organizations that need dependable network infrastructure, cybersecurity, surveillance, access control and communication systems.</p>
            <p>We believe good technology should be quietly reliable. That begins with listening, continues with careful design and professional installation, and is sustained by responsive support. Whether you are fitting out a new office or upgrading an existing campus, we act as one accountable partner from the first conversation to the last cable label.</p>
            <p>By bringing networking, security and communications under one roof, we help you avoid the finger-pointing that comes with juggling many vendors — and give you a single team that understands how it all fits together.</p>
          </div>
        </div>
      </section>

      <section className="services-preview section-pad">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card"><span className="value-icon"><Target size={20} /></span><h3>Our mission</h3><p>To give every organization — large or small — a dependable, secure and future-ready technology foundation, delivered with professionalism and care.</p></div>
            <div className="mission-card"><span className="value-icon"><Eye size={20} /></span><h3>Our vision</h3><p>To be the technology partner businesses trust first: known for clean work, honest advice and support that is there when it counts.</p></div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading center eyebrow="OUR VALUES" title="What guides our work" text="These principles shape every proposal we write and every installation we complete." />
          <div className="why-grid">
            {values.map(({ Icon, title, text }) => <div className="why-card" key={title}><span className="value-icon"><Icon size={20} /></span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="services-preview section-pad">
        <div className="container">
          <SectionHeading center eyebrow="HOW WE WORK" title="A clear process from first call to ongoing support" text="No surprises — just a straightforward approach that keeps you informed at every stage." />
          <div className="process-grid">
            {process.map((p, i) => <div className="step" key={p.title}><span className="step-no">{String(i + 1).padStart(2, "0")}</span><h3>{p.title}</h3><p>{p.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container faq-wrap">
          <SectionHeading eyebrow="FAQ" title="Questions we often hear" />
          <div className="faq-list">
            {faqs.map(f => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
          </div>
          <Link className="text-link" to="/contact">Still have a question? Get in touch <ArrowRight size={17} /></Link>
        </div>
      </section>

      <CtaBand title="Let’s build something dependable." text="Talk to our team about your next project." button="Contact Us" />
    </main>
  );
}
