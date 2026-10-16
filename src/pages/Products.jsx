import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeading, ProductCard, CtaBand } from "../components.jsx";
import { products } from "../data.jsx";

export function ProductsPage() {
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const [active, setActive] = React.useState("All");
  const shown = active === "All" ? products : products.filter(p => p.category === active);
  return (
    <main>
      <PageHero
        eyebrow="OUR PRODUCTS"
        crumbs={[{ label: "Products" }]}
        title={<>Hardware you can<br /><span>rely on.</span></>}
        text="Networking, security, surveillance, access control and communication products from trusted brands — selected for your needs and delivered ready to deploy."
      />
      <section className="section-pad">
        <div className="container">
          <SectionHeading eyebrow="PRODUCT RANGE" title="Everything your infrastructure needs" text="We don't just sell boxes. Every product is matched to your requirement, configured by our engineers and backed by after-sales support." />
          <div className="filter-bar" role="tablist">
            {categories.map(c => <button key={c} className={c === active ? "chip active" : "chip"} onClick={() => setActive(c)}>{c}</button>)}
          </div>
          <div className="service-grid service-grid-large">{shown.map(p => <ProductCard key={p.slug} product={p} />)}</div>
        </div>
      </section>
      <CtaBand title="Need help choosing the right product?" text="Share your requirement and we’ll recommend a solution and quote." button="Request a Quote" />
    </main>
  );
}

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  if (!product) return <main className="not-found container"><h1>Product not found</h1><Link className="btn btn-primary" to="/products">Browse products</Link></main>;
  const Icon = product.Icon;
  const related = products.filter(p => p.slug !== slug).slice(0, 3);
  return (
    <main>
      <PageHero eyebrow={product.category.toUpperCase()} crumbs={[{ label: "Products", to: "/products" }, { label: product.title }]} title={product.title} text={product.short} />
      <section className="section-pad">
        <div className="container detail-grid">
          <div className="detail-image"><img src={product.image} alt={product.title} /><div className="detail-icon"><Icon size={26} /></div></div>
          <div className="detail-copy">
            <span className="eyebrow">PRODUCT OVERVIEW</span>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>Key features</h3>
            <ul className="check-list">{product.features.map(f => <li key={f}><CheckCircle2 size={18} />{f}</li>)}</ul>
            <h3>Ideal for</h3>
            <div className="tag-row">{product.useCases.map(u => <span className="tag" key={u}>{u}</span>)}</div>
            <Link className="btn btn-primary" to={`/contact?topic=${encodeURIComponent(product.title)}`}>Request a Quote <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
      <section className="related-services section-pad">
        <div className="container">
          <SectionHeading eyebrow="MORE PRODUCTS" title="You may also need" />
          <div className="related-grid">{related.map(p => <ProductCard key={p.slug} product={p} />)}</div>
        </div>
      </section>
    </main>
  );
}
