"use client";
import { useState } from "react";
import Image from "next/image";
import Break from "@/components/ui/Break";
import SubmitButton from "../ui/SubmitButton";
import { socialsData } from "@/content/contact";
import "./Contact.css";

export default function Contact() {
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [submitPressed, setIsSubmitPressed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailRegex = /.+@.+\..+/;
    const formData = new FormData(e.currentTarget);

    const userName = formData.get("name")?.toString().trim() || "";
    const userEmail = formData.get("email")?.toString().trim() || "";
    const userMessage = formData.get("message")?.toString() || "";

    setIsSubmitPressed(true);

    setIsNameValid(false);
    setIsEmailValid(false);

    const nameValid = userName.length > 0;
    const emailValid = emailRegex.test(userEmail);

    setIsNameValid(nameValid);
    setIsEmailValid(emailValid);

    if (!nameValid || !emailValid) return;

    console.log({ userName, userEmail, userMessage });
  }

  return (
    <div className="bottom-section">
      <div className="bottom-wrapper">
        <section id="contact">
          <div className="contact-text">
            <h3 className="heading-xl">Contact</h3>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="form-container" noValidate>
            <div className="input-container">
              <input id="name" name="name" type="text" placeholder="name" />
              <span
                className={`underline ${
                  submitPressed ? (isNameValid ? "correct" : "incorrect") : ""
                }`}
              ></span>
              {submitPressed && !isNameValid && (
                <>
                  <span className="invalid">Sorry, invalid format here</span>
                  <span className="invalid-sign">ⓘ</span>
                </>
              )}
            </div>

            <div className="input-container">
              <input id="email" name="email" type="email" placeholder="email" />
              <span
                className={`underline ${
                  submitPressed ? (isEmailValid ? "correct" : "incorrect") : ""
                }`}
              ></span>
              {submitPressed && !isEmailValid && (
                <>
                  <span className="invalid">Sorry, invalid format here</span>
                  <span className="invalid-sign">ⓘ</span>
                </>
              )}
            </div>

            <div className="input-container">
              <textarea
                name="message"
                id="message"
                placeholder="message"
              ></textarea>
              <span className="underline"></span>
            </div>

            <SubmitButton name="sned message" />
          </form>
        </section>
        <Break hideLarge={false} />
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
    </div>
  );
}
