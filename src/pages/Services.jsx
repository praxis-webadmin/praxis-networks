import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeading, ServiceCard, CtaBand } from "../components.jsx";
import { services, industries, process } from "../data.jsx";

export function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="OUR SERVICES"
        crumbs={[{ label: "Services" }]}
        title={<>Technology solutions,<br /><span>built around you.</span></>}
        text="Explore our networking, security, cabling, surveillance, access control and IT support services — planned, installed and supported by one team."
      />
      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="CAPABILITIES" title="Six services, one accountable partner" text="Each service can be taken on its own or combined into a complete, integrated solution. Select a card to see what is included." />
          <div className="service-grid service-grid-large">{services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}</div>
        </div>
      </section>

      <section className="services-preview section-pad">
        <div className="container">
          <SectionHeading center eyebrow="OUR PROCESS" title="From first conversation to ongoing support" />
          <div className="process-grid">
            {process.map((p, i) => <div className="step" key={p.title}><span className="step-no">{String(i + 1).padStart(2, "0")}</span><h3>{p.title}</h3><p>{p.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <SectionHeading center eyebrow="INDUSTRIES WE SERVE" title="Supporting businesses across sectors" text="From growing businesses to complex workplaces, we build the infrastructure that keeps teams connected and facilities supported." />
          <div className="industry-grid">
            {industries.map(item => <article className="industry-card" key={item.title}><span className="industry-no">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p><span className="industry-line"></span></article>)}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <main className="not-found container"><h1>Service not found</h1><Link className="btn btn-primary" to="/services">Browse services</Link></main>;
  const Icon = service.Icon;
  const related = services.filter(s => s.slug !== slug).slice(0, 3);
  return (
    <main>
      <PageHero eyebrow="SERVICE DETAILS" crumbs={[{ label: "Services", to: "/services" }, { label: service.title }]} title={service.title} text={service.short} />
      <section className="section-pad">
        <div className="container detail-grid">
          <div className="detail-image"><img src={service.image} alt={service.title} /><div className="detail-icon"><Icon size={26} /></div></div>
          <div className="detail-copy">
            <span className="eyebrow">HOW WE HELP</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p>{service.detail}</p>
            <h3>What this service can include</h3>
            <ul className="check-list">{service.bullets.map(b => <li key={b}><CheckCircle2 size={18} />{b}</li>)}</ul>
            <Link className="btn btn-primary" to={`/contact?topic=${encodeURIComponent(service.title)}`}>Enquire About This Service <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
      <section className="services-preview section-pad">
        <div className="container">
          <SectionHeading center eyebrow="THE BENEFITS" title="What you gain" />
          <div className="why-grid three">
            {service.benefits.map(b => <div className="why-card" key={b}><span className="value-icon"><CheckCircle2 size={20} /></span><p>{b}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="MORE FROM PRAXIS" title="Explore other services" />
          <div className="related-grid">{related.map((s, i) => <ServiceCard key={s.slug} service={s} index={services.indexOf(s)} />)}</div>
        </div>
      </section>
    </main>
  );
}
