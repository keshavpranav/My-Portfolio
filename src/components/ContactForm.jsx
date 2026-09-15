import { useState } from "react";
import { Send } from "lucide-react";
import siteConfig from "../data/siteConfig.js";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "your website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="cf-email">Email</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary contact-submit">
        <Send size={15} />
        Send message
      </button>

      <p className="contact-form-note">
        Opens your email client with this message pre-filled — there's no backend behind this
        form yet.
      </p>
    </form>
  );
}
