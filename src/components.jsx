import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT } from "./config.js";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export function Logo({ footer = false }) {
  return (
    <Link to="/" className={footer ? "brand footer-brand" : "brand"} aria-label="Praxis Networks home">
      <span className="brand-mark">P<span>N</span></span>
      <span className="brand-copy"><strong>PRAXIS</strong><em>NETWORKS</em></span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);
  const { pathname } = useLocation();
  React.useEffect(close, [pathname]);
  return (
    <header className="site-header">
      <div className="nav-wrap container">
        <Logo />
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        <nav className={open ? "main-nav is-open" : "main-nav"}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact" className="nav-contact">Contact Us <ArrowRight size={15} /></NavLink>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-about">
          <Logo footer />
          <p>Enterprise Network Solutions &amp; Security Systems. Networking, cybersecurity, surveillance and communications for connected workplaces.</p>
          <div className="footer-note">Connect. Secure. Empower.</div>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <Link to="/services/enterprise-networking">Enterprise Networking</Link>
          <Link to="/services/firewall-security">Firewall Security</Link>
          <Link to="/services/ip-cctv">IP CCTV</Link>
          <Link to="/services/biometric-access">Access Control</Link>
        </div>
        <div className="footer-col">
          <h4>Get in touch</h4>
          <span><Phone size={13} /> {CONTACT.phone || "Phone available on request"}</span>
          <span><Mail size={13} /> {CONTACT.email || "Use our contact form"}</span>
          <span><MapPin size={13} /> {CONTACT.address}</span>
        </div>
      </div>
      <div className="container"><div className="copyright">© {new Date().getFullYear()} Praxis Networks. All rights reserved.</div></div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-heading ${center ? "is-center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          {crumbs.map(c => <React.Fragment key={c.label}><ChevronRight size={14} />{c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}</React.Fragment>)}
        </div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function ServiceCard({ service, index }) {
  const Icon = service.Icon;
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.title} loading="lazy" />
        <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="service-icon"><Icon size={22} /></span>
      </div>
      <div className="service-card-content">
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <span className="card-link">Explore service <ArrowRight size={16} /></span>
      </div>
    </Link>
  );
}

export function ProductCard({ product }) {
  const Icon = product.Icon;
  return (
    <Link to={`/products/${product.slug}`} className="service-card product-card">
      <div className="service-image">
        <img src={product.image} alt={product.title} loading="lazy" />
        <span className="service-number">{product.category.toUpperCase()}</span>
        <span className="service-icon"><Icon size={22} /></span>
      </div>
      <div className="service-card-content">
        <h3>{product.title}</h3>
        <p>{product.short}</p>
        <span className="card-link">View details <ArrowRight size={16} /></span>
      </div>
    </Link>
  );
}

export function CtaBand({ title = "Have a project in mind?", text = "Tell us what your business needs. We’ll help you explore the next step.", button = "Request a Consultation" }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div><span className="eyebrow">LET’S GET CONNECTED</span><h2>{title}</h2><p>{text}</p></div>
        <Link className="btn btn-white" to="/contact">{button} <ArrowRight size={17} /></Link>
      </div>
    </section>
  );
}
