import React from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { PageHero } from "../components.jsx";
import { services, products } from "../data.jsx";
import { CONTACT } from "../config.js";

function ContactForm() {
  const [params] = useSearchParams();
  const topic = params.get("topic") || "";
  const [status, setStatus] = React.useState("idle"); // idle | sending | sent | error
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", topic, message: "" });
  React.useEffect(() => { if (topic) setForm(f => ({ ...f, topic })); }, [topic]);
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    if (CONTACT.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(CONTACT.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form)
        });
        setStatus(res.ok ? "sent" : "error");
      } catch { setStatus("error"); }
    } else if (CONTACT.email) {
      const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterest: ${form.topic}\n\n${form.message}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Website enquiry: " + (form.topic || "General"))}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
    } else {
      setStatus("sent");
    }
  };

  if (status === "sent") {
    return (
      <div className="contact-form">
        <div className="form-success">
          <CheckCircle2 size={28} />
          <strong>Thank you, {form.name}.</strong>
          <span>{CONTACT.formEndpoint || CONTACT.email ? "Your enquiry has been sent. Our team will get back to you shortly." : "Your form works, but no email or form endpoint is configured yet. Add one in src/config.js to receive enquiries."}</span>
          <button type="button" className="text-link" onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", topic: "", message: "" }); }}>Send another enquiry</button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <h3>Send an enquiry</h3>
      <p>Fill in the details below and we’ll get back to you to discuss your requirements.</p>
      <div className="form-row">
        <label>Your name<input name="name" value={form.name} onChange={update} placeholder="Full name" required /></label>
        <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" required /></label>
      </div>
      <div className="form-row">
        <label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+91 ..." /></label>
        <label>Interested in
          <select name="topic" value={form.topic} onChange={update}>
            <option value="">Select a service or product</option>
            <optgroup label="Services">{services.map(s => <option key={s.slug}>{s.title}</option>)}</optgroup>
            <optgroup label="Products">{products.map(p => <option key={p.slug}>{p.title}</option>)}</optgroup>
          </select>
        </label>
      </div>
      <label>How can we help?<textarea name="message" value={form.message} onChange={update} placeholder="Tell us briefly about your requirement..." rows="4" required /></label>
      {status === "error" && <div className="form-error"><AlertCircle size={16} /> Something went wrong. Please try again or contact us directly.</div>}
      <button className="btn btn-primary form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : <>Send Enquiry <ArrowRight size={17} /></>}</button>
      <small className="form-disclaimer">We respect your privacy and will only use your details to respond to your enquiry.</small>
    </form>
  );
}

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="CONTACT US"
        crumbs={[{ label: "Contact Us" }]}
        title={<>Let’s make your next<br /><span>connection a strong one.</span></>}
        text="Tell us about your project or requirement. A member of our team will respond to discuss suitable next steps."
      />
      <section className="contact-section section-pad">
        <div className="container contact-grid">
          <div className="contact-intro">
            <span className="eyebrow">CONTACT PRAXIS NETWORKS</span>
            <h2>We’d love to hear from you.</h2>
            <p>Whether you’re planning a new office network, upgrading security or need reliable IT support, share a few details and we’ll arrange a call or site visit.</p>
            <div className="contact-detail"><span><Phone size={19} /></span><div><small>Phone</small><strong>{CONTACT.phone || "[Add business phone number]"}</strong></div></div>
            <div className="contact-detail"><span><Mail size={19} /></span><div><small>Email</small><strong>{CONTACT.email || "[Add business email]"}</strong></div></div>
            <div className="contact-detail"><span><MapPin size={19} /></span><div><small>Office</small><strong>{CONTACT.address}</strong></div></div>
            <div className="contact-detail"><span><Clock size={19} /></span><div><small>Working hours</small><strong>{CONTACT.hours}</strong></div></div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
