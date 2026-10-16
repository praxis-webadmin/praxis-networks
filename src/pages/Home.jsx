import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Network, CheckCircle2, Layers, Users, Wrench, Award } from "lucide-react";
import { SectionHeading, ServiceCard, ProductCard, CtaBand } from "../components.jsx";
import { services, products, industries, IMAGES } from "../data.jsx";

const stats = [
  { n: "6", l: "Core service areas" },
  { n: "8", l: "Product categories" },
  { n: "1", l: "Accountable partner" },
  { n: "24/7", l: "Focus on uptime" }
];

const why = [
  { Icon: Layers, title: "Integrated approach", text: "Networking, security, surveillance and communications planned together, so every system works in harmony." },
  { Icon: Users, title: "Business-first thinking", text: "We start with how your people work, then recommend the technology that supports it — never the other way round." },
  { Icon: Wrench, title: "Hands-on delivery", text: "Experienced engineers handle installation and configuration, with tidy, documented, tested work." },
  { Icon: Award, title: "Trusted brands", text: "Solutions from respected vendors such as Aruba, Cisco, Fortinet, Matrix and eSSL, backed by local support." }
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow"><span></span> ENTERPRISE TECHNOLOGY PARTNER</div>
            <h1>Build a stronger<br /><span>digital foundation.</span></h1>
            <p className="hero-lead">Reliable networks. Smarter security. Connected workplaces.</p>
            <p className="hero-text">Praxis Networks supplies, installs and supports networking, cybersecurity, surveillance and communication systems — designed around the way your business works.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/services">Explore Our Services <ArrowRight size={17} /></Link>
              <Link className="btn btn-ghost" to="/contact">Talk to Our Team</Link>
            </div>
            <div className="hero-proof"><span><CheckCircle2 size={16} /> Business-focused solutions</span><span><CheckCircle2 size={16} /> Integrated technology</span></div>
          </div>
          <div className="hero-visual">
            <img src={IMAGES.hero} alt="Enterprise network server infrastructure" />
            <div className="visual-tag"><span className="status-dot"></span> CONNECTIVITY</div>
            <div className="visual-card"><div className="visual-card-icon"><ShieldCheck size={22} /></div><div><strong>Security by design</strong><small>Infrastructure built with care</small></div></div>
          </div>
        </div>
        <div className="hero-bottom container"><span>NETWORKING</span><i></i><span>SECURITY</span><i></i><span>INFRASTRUCTURE</span><i></i><span>SUPPORT</span></div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map(s => <div className="stat" key={s.l}><strong>{s.n}</strong><span>{s.l}</span></div>)}
        </div>
      </section>

      <section className="section-pad">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img src={IMAGES.about} alt="Technology professional working on IT infrastructure" />
            <div className="about-stamp"><strong>One</strong><span>trusted technology partner</span></div>
          </div>
          <div className="about-copy">
            <SectionHeading eyebrow="WELCOME TO PRAXIS NETWORKS" title="Technology that works for your business." />
            <p>Praxis Networks is an enterprise technology solutions provider specializing in network infrastructure, cybersecurity, communication systems and integrated security solutions.</p>
            <p>We help organizations build dependable IT environments through thoughtful planning, professional implementation and responsive technical assistance. Our approach starts with understanding your needs and recommending practical solutions that can grow with your business.</p>
            <div className="values-grid">
              <div><span className="value-icon"><Network size={19} /></span><strong>Connected</strong><small>Reliable infrastructure</small></div>
              <div><span className="value-icon"><ShieldCheck size={19} /></span><strong>Protected</strong><small>Security-conscious design</small></div>
            </div>
            <Link className="text-link" to="/about">Learn more about us <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="services-preview section-pad">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE DO" title="Solutions for a connected, secure workplace." text="From the cable in the wall to the firewall at the edge, we cover the full technology stack your business relies on. Select a service to learn more." />
          <div className="service-grid">{services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}</div>
          <div className="center-action"><Link className="btn btn-dark" to="/services">View All Services <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading center eyebrow="WHY PRAXIS" title="A partner you can build on." text="Choosing a technology partner is about confidence. Here is what you can expect when you work with us." />
          <div className="why-grid">
            {why.map(({ Icon, title, text }) => (
              <div className="why-card" key={title}><span className="value-icon"><Icon size={20} /></span><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-preview section-pad">
        <div className="container">
          <SectionHeading eyebrow="FEATURED PRODUCTS" title="Quality hardware, supplied and supported." text="A curated range of networking, security and communication products, delivered ready to deploy." />
          <div className="service-grid">{products.slice(0, 3).map(p => <ProductCard key={p.slug} product={p} />)}</div>
          <div className="center-action"><Link className="btn btn-dark" to="/products">Browse All Products <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading center eyebrow="INDUSTRIES" title="Supporting businesses across sectors" text="Every environment has different demands. We tailor technology to your operational needs." />
          <div className="industry-grid">
            {industries.map(item => (
              <article className="industry-card" key={item.title}><span className="industry-no">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p><span className="industry-line"></span></article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
