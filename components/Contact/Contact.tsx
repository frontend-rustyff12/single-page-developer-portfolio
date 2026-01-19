import Image from "next/image";
import Break from "@/components/ui/Break";
import Button from "@/components/ui/Button";
import { socialsData } from "@/content/contact";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="bottom-section">
      <section id="contact">
        <div className="contact-text">
          <h3 className="contact-header">Contact</h3>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <form className="form-container">
          <input id="name" type="text" placeholder="name" />

          <input id="email" type="email" placeholder="name" />

          <textarea name="message" id="message"></textarea>
          <Button link="#" name="sned message" />
        </form>
        <Break hideLarge={false} />
      </section>
      <footer>
        <h4>adamkeys</h4>
        <nav className="footer-nav-container">
          <ul>
            {socialsData.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <Image
                    src={social.image}
                    width={20}
                    height={20}
                    alt=""
                    className="social-icon"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
}
