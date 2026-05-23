import React from "react";
import { Link } from 'react-router-dom'

export default function LandingPage() {
    const scrollToSection = (id) => {
        if (id === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }

    return (
        <>
            <header className="navbar">
                <div className="nav-logo">

                </div>
                <nav className="nav-menu">
                    <button className="nav-link" onClick={() => scrollToSection("top")}>Home</button>
                    <button className="nav-link" onClick={() => scrollToSection("about")}>About</button>
                    <button className="nav-link" onClick={() => scrollToSection("project")}>Project</button>
                    <button className="nav-link" onClick={() => scrollToSection("contact")}>Contact</button>
                </nav>
            </header>

            <main>
                <section id="_" className="page-section home-section">
                    <div className="my-photo">

                    </div>
                    <div className="">
                        <h1>Hello,</h1>
                        <h1>I'm Jonas!</h1>
                        <h1>Software Developer</h1>
                        <button className="scroll-down-btn" onClick={() => scrollToSection("contact")}>&#8595;</button>
                    </div>
                </section>
                <section id="about" className="page-section about-section">
                    <h1>ABOUT</h1>
                    <div className="about-content">
                        <p>
                            I am a passionate <strong>Software Developer</strong> dedicated to solving problems 
                            and delivering effective solutions. For our thesis, I developed a school clinic system 
                            capable of Student Records Management, Symptom Reporting and Triage, 
                            Medicine Inventory Tracking, and Health Analytics and Reporting.
                        </p>
                        <p>
                            While I am capable of full-stack development, I am more focused on the backend side. 
                            Now, I am eager to enter the professional industry to improve my skills and contribute to the field.
                        </p>
                    </div>
                </section>
                <section id="project" className="page-section project-section">
                    <h1>PROJECT</h1>
                </section>
                <section id="contact" className="page-section contact-section">
                    <h1>CONTACT</h1>
                    <div className="contact-content">
                        <div className="contact-logo">
                            <a href="#" target="_blank" rel="noreferrer">Gmail</a>
                        </div>
                        <div className="contact-logo">
                            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                        <div className="contact-logo">
                            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <p>Copyright &copy; {new Date().getFullYear()} Jonas Ryan Soriano. All rights reserved.</p>
                <p className="footer-credit">Built with React & Tailwind</p>
            </footer>
        </>
    )
}
