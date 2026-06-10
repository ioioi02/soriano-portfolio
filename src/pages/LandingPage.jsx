import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom'

import my_logo from "../assets/my_logo.png";
import my_photo from "../assets/my_photo.png";
import gmail_logo from "../assets/gmail_logo.png";
import linkedin_logo from "../assets/linkedin_logo.png";
import github_logo from "../assets/github_logo.png";

import php_logo from "../assets/php_logo.png";
import laravel_logo from "../assets/laravel_logo.png";
import javascript_logo from "../assets/javascript_logo.png";
import html_logo from "../assets/html_logo.png";
import css_logo from "../assets/css_logo.png";
import mysql_logo from "../assets/mysql_logo.png";
import csharp_logo from "../assets/c-sharp_logo.png";
import python_logo from "../assets/python_logo.png";

import ars1 from "../assets/ars1.png";
import ars2 from "../assets/ars2.png";
import ars3 from "../assets/ars3.png";
import ars4 from "../assets/ars4.png";
import ars5 from "../assets/ars5.png";
import ars6 from "../assets/ars6.png";
import ars7 from "../assets/ars7.png";
import ars8 from "../assets/ars8.png";
import ars9 from "../assets/ars9.png";
import ars10 from "../assets/ars10.png";
import ars11 from "../assets/ars11.png";
import ars12 from "../assets/ars12.png";
import ars13 from "../assets/ars13.png";
import ars14 from "../assets/ars14.png";
import ars15 from "../assets/ars15.png";
import ars16 from "../assets/ars16.png";
import ars17 from "../assets/ars17.png";
import ars18 from "../assets/ars18.png";
import ars19 from "../assets/ars19.png";
import ars20 from "../assets/ars20.png";
import ars21 from "../assets/ars21.png";
import ars22 from "../assets/ars22.png";
import ars23 from "../assets/ars23.png";
import ars24 from "../assets/ars24.png";
import ars25 from "../assets/ars25.png";
import ars26 from "../assets/ars26.png";

import ss1 from "../assets/ss1.png";
import ss2 from "../assets/ss2.png";
import ss3 from "../assets/ss3.png";
import ss4 from "../assets/ss4.png";
import ss5 from "../assets/ss5.png";
import ss6 from "../assets/ss6.png";
import ss7 from "../assets/ss7.png";
import ss8 from "../assets/ss8.png";
import ss9 from "../assets/ss9.png";
import ss10 from "../assets/ss10.png";
import ss11 from "../assets/ss11.png";
import ss12 from "../assets/ss12.png";
import ss14 from "../assets/ss14.png";
import ss16 from "../assets/ss16.png";
import ss17 from "../assets/ss17.png";
import ss18 from "../assets/ss18.png";
import ss19 from "../assets/ss19.png";
import ss20 from "../assets/ss20.png";
import ss21 from "../assets/ss21.png";
import ss22 from "../assets/ss22.png";

function useScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        const elements = document.querySelectorAll(".reveal");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}

export default function LandingPage() {
    useScrollReveal();

    const [showScrollTop, setShowScrollTop] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [
        {
            id: 1, 
            title: "Customer Service Application (Prototype)", 
            tag: "Internship", 
            description: "A desktop application designed for Racitelcom Inc. to improve customer subscription onboarding and ticketing system.", 
            fullDescription: "A desktop application designed for Racitelcom Inc. to improve customer subscription onboarding and the ticketing system.", 
            tech: ["C# (WinForms), .Net, MySQL, TCP/IP Networking"], 
            screenshots: [ars1, ars2, ars3, ars4, ars5, ars6, ars7, ars10, ars8, ars9, ars11, ars12, ars13, ars14, ars15, ars16, ars17, ars18, ars19, ars20, ars21, ars22, ars23, ars24, ars25, ars26], 
            video: null, 
            date: "June 2024 – July 2024", 
        }, 
        {
            id: 2, 
            title: "School Clinic System (STEALTH)", 
            tag: "Thesis", 
            description: "A web-based application designed for the PDM Health Services Office to improve clinic workflow and efficiency.", 
            fullDescription: "A web-based application designed for the PDM Health Services Office to improve clinic workflow and efficiency.", 
            tech: ["PHP (Laravel), Javascript, HTML, CSS, MySQL"], 
            screenshots: [ss1, ss2, ss3, ss4, ss5, ss20, ss6, ss7, ss8, ss9, ss10, ss11, ss12, ss21, ss22, ss14, ss16, ss17, ss18, ss19], 
            video: null, 
            date: "September 2025 – May 2026", 
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 550);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") setSelectedProject(null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedProject]);

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
            <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300">
                {/* Logo / Branding Block */}
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => scrollToSection("top")}>
                    <img 
                        src={my_logo} 
                        alt="My Logo" 
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Navigation Interactive Links */}
                <nav className="flex items-center gap-1 sm:gap-2">
                    <button 
                        className="px-3 py-2 text-sm font-medium text-text-dark/70 hover:text-text-dark hover:bg-black/5 rounded-md transition-all duration-200 cursor-pointer" 
                        onClick={() => scrollToSection("about")}
                    >
                        About
                    </button>
                    <button 
                        className="px-3 py-2 text-sm font-medium text-text-dark/70 hover:text-text-dark hover:bg-black/5 rounded-md transition-all duration-200 cursor-pointer" 
                        onClick={() => scrollToSection("project")}
                    >
                        Project
                    </button>

                    <div className="ml-5 flex items-center gap-2">
                        <a href="https://sorianojonasryan.pdm@gmail.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-black/5 transition-all duration-200">
                            <img src={gmail_logo} alt="Gmail" className="w-5 h-5 object-contain" />
                        </a>
                        <a href="https://linkedin.com/in/jonas-ryan-soriano-878b23312" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-black/5 transition-all duration-200">
                            <img src={linkedin_logo} alt="LinkedIn" className="w-5 h-5 object-contain" />
                        </a>
                        <a href="https://github.com/ioioi02" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-black/5 transition-all duration-200">
                            <img src={github_logo} alt="GitHub" className="w-5 h-5 object-contain" />
                        </a>
                    </div>
                </nav>
            </header>

            <main>
                <section id="top" className="xl:h-screen w-full bg-bg-light flex flex-col lg:flex-row items-center lg:items-end justify-end lg:justify-center gap-8 lg:gap-20 px-6 md:px-16 lg:px-24 pt-28 max-w-7xl mx-auto overflow-hidden relative">                    
                    {/* Visual Accent Layer 1: Subtle tech grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

                    {/* Visual Accent Layer 2: Soft glowing red ambient shadow behind your content */}
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none"></div>
                    
                    {/* Left Side: Bold Typography Introduction */}
                    <div className="flex flex-col items-start text-left max-w-xl lg:self-center pb-0 lg:pb-16">
                        <h1 className="text-5xl md:text-7xl font-black text-text-dark tracking-tight leading-none mb-2 reveal">
                            Hello,
                        </h1>
                        <h1 className="text-5xl md:text-7xl font-black text-text-dark tracking-tight leading-none mb-4 reveal">
                            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-accent-red">Jonas!</span>
                        </h1>
                        <h2 className="text-xl md:text-4xl font-bold text-text-muted tracking-wide leading-none mb-2 reveal">
                            Aspiring Developer
                        </h2>
                    </div>

                    {/* Right Side: Big Normal Photo */}
                    <div className="flex justify-center w-auto">
                        <img 
                            src={my_photo} 
                            alt="My Photo" 
                            className="w-72 md:w-96 h-auto object-contain object-bottom transition-transform duration-500 ease-in-out z-1"
                        />
                    </div>
                </section>

                <section id="about" className="relative xl:min-h-screen w-full bg-bg-dark text-text-light px-6 md:px-16 lg:px-24 py-28 border-t border-white/5 overflow-hidden">
                    {/* Visual Accent Layer 1: Subtle tech dot matrix field */}
                    <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

                    {/* Visual Accent Layer 2: Deep red glowing ambient aura sitting low on the canvas */}
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10 xl:min-h-[calc(100vh-224px)] w-full">
                        <div className="flex flex-col items-center mb-10">
                            <h1 className="text-4xl font-black tracking-tight mb-3 reveal">
                                ABOUT
                            </h1>
                            {/* Centered Small Red Accent Line */}
                            <div className="w-12 h-1 bg-brand-red rounded-full reveal"></div>
                        </div>

                        <div className="space-y-6 text-text-muted font-medium text-base md:text-lg leading-relaxed max-w-2xl mt-auto xl:mb-auto">
                            <p className="reveal">
                                I am a passionate <strong className="text-text-light font-bold">Aspiring Developer</strong> dedicated to solving problems 
                                and delivering effective solutions. I am Fresh Graduate and for our thesis project, I developed a school clinic system 
                                capable of Student Records Management, Symptom Reporting and Triage, 
                                Medicine Inventory Tracking, and Health Analytics and Reporting.
                            </p>
                            <p className="reveal">
                                I am capable of full stack development, and I am eager to expand my skills with a strong focus on backend development. 
                                I am highly adaptable and have a strong drive to learn new technologies. I am eager to join a team where I can build 
                                a secure, high-quality systems while growing alongside a collaborative team.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-bg-dark py-8 px-6 overflow-hidden relative border-t border-white/5">
                    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none"></div>

                    <div className="flex w-full overflow-hidden items-center">
                        <div className="flex gap-16 items-center shrink-0 min-w-full animate-marquee whitespace-nowrap pr-16">
                            {[
                                php_logo, laravel_logo, javascript_logo, html_logo, css_logo, mysql_logo, csharp_logo, python_logo,
                                php_logo, laravel_logo, javascript_logo, html_logo, css_logo, mysql_logo, csharp_logo, python_logo
                            ].map((logo, i) => (
                                <img
                                    key={`l1-${i}`}
                                    src={logo}
                                    alt="logo"
                                    className="h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer"
                                />
                            ))}
                        </div>
                        
                        <div className="flex gap-16 items-center shrink-0 min-w-full animate-marquee whitespace-nowrap pr-16" aria-hidden="true">
                            {[
                                php_logo, laravel_logo, javascript_logo, html_logo, css_logo, mysql_logo, csharp_logo, python_logo,
                                php_logo, laravel_logo, javascript_logo, html_logo, css_logo, mysql_logo, csharp_logo, python_logo
                            ].map((logo, i) => (
                                <img
                                    key={`l2-${i}`}
                                    src={logo}
                                    alt="logo"
                                    className="h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="project" className="relative xl:min-h-screen w-full bg-bg-light text-text-dark px-6 md:px-16 lg:px-24 py-28 border-t border-gray-200/40">
                    {/* Visual Accent Layer 1: Subtle tech grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

                    {/* Visual Accent Layer 2: Soft glowing red ambient shadow behind your content */}
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="max-w-5xl mx-auto flex flex-col items-center">
                        {/* Centered Section Title */}
                        <div className="flex flex-col items-center text-center mb-16">
                            <h1 className="text-4xl font-black tracking-tight mb-3 reveal">
                                PROJECTS
                            </h1>
                            <div className="w-12 h-1 bg-brand-red rounded-full reveal"></div>
                        </div>

                        {/* Clickable Modern Project Display Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full reveal">
                            {projects.map((project) => (
                                <button 
                                    key={project.id} 
                                    onClick={() => setSelectedProject(project)}
                                    className="group bg-white border border-gray-200 hover:border-brand-red/30 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden relative cursor-pointer"
                                >
                                    <div>
                                        <div className="w-full h-32 rounded-xl mb-4 overflow-hidden">
                                            <img 
                                                src={project.screenshots[0]} 
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        
                                        {/* Project Title */}
                                        <h2 className="text-lg font-bold text-text-dark group-hover:text-brand-red transition-colors duration-200">
                                            {project.title}
                                        </h2>
                                        
                                        <hr className="border-t-2 border-accent-red opacity-50 my-2 mx-1" />

                                        {/* Project Short Description */}
                                        <p className="text-text-muted font-medium text-xs leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    
                                    {/* Click Status Accent */}
                                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-xs font-mono font-bold text-brand-red bg-brand-red/5 px-3 py-1 rounded-md">
                                            {project.tag}
                                        </span>
                                        <span className="text-sm font-bold text-text-dark group-hover:text-accent-red flex items-center gap-1 transition-colors duration-200">
                                            View Details <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {selectedProject && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <div
                            className="bg-white rounded-2xl max-w-lg w-full shadow-2xl relative max-h-[90vh] flex flex-col overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Fixed Content */}
                            <div className="px-8 pt-8 flex-shrink-0">
                                <button
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-sm font-bold cursor-pointer"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    ✕
                                </button>

                                <span className="text-xs font-mono font-bold text-brand-red bg-brand-red/5 px-3 py-1 rounded-md">
                                    {selectedProject.tag}
                                </span>

                                <span className="text-xs font-mono text-gray-400 ml-3">
                                    {selectedProject.date || ""}
                                </span>
                                
                                <h2 className="text-2xl font-black text-text-dark mt-3 mb-2">
                                    {selectedProject.title}
                                </h2>

                                <div className="flex gap-2 flex-wrap mb-6">
                                    {selectedProject.tech.map((t) => (
                                        <span key={t} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="relative flex-1 overflow-hidden">
                                <div className="overflow-y-auto max-h-[60vh] px-8 pb-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                    <p className="text-text-muted text-sm leading-relaxed mb-4">
                                        {selectedProject.fullDescription}
                                    </p>

                                    {selectedProject.video && (
                                        <div className="w-full aspect-video rounded-xl overflow-hidden mb-4">
                                            <iframe
                                                src={selectedProject.video}
                                                title="Project Video"
                                                className="w-full h-full"
                                                allowFullScreen
                                            />
                                        </div>
                                    )}

                                    {selectedProject.screenshots?.length > 0 && (
                                        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-6">
                                            {selectedProject.screenshots.map((ss, i) => (
                                                <img 
                                                    key={i} 
                                                    src={ss} 
                                                    alt={`Screenshot ${i + 1}`} 
                                                    className="w-full h-28 rounded-xl object-cover cursor-pointer transition-all duration-300 transform hover:scale-130 hover:z-10 hover:shadow-2xl h-auto object-contain" 
                                                    onClick={() => setSelectedImage(ss)}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Fade + Scroll Indicator */}
                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none flex items-end justify-center pb-2">
                                    <span className="text-xs text-gray-400 font-medium animate-bounce">↓ scroll</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {selectedImage && (
                    <div
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-sm font-bold cursor-pointer"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>

                        <img
                            src={selectedImage}
                            alt="Fullscreen Screenshot"
                            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
                        />
                    </div>
                )}
            </main>

            <footer className="w-full bg-bg-dark text-text-muted text-xs md:text-sm text-center py-8 px-6 border-t border-brand-red/10 mt-auto">
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center font-medium">
                    {/* Perfectly Centered Copyright Text */}
                    <p className="tracking-wide hover:text-text-light transition-colors duration-200">
                        Copyright &copy; {new Date().getFullYear()} Jonas Ryan Soriano. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Scroll To Top Button */}
            {showScrollTop && (
                <button
                    onClick={() => scrollToSection("top")}
                    className="fixed bottom-6 right-6 z-49 w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg hover:bg-accent-red active:scale-95 transition-all duration-200 cursor-pointer"
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </>
    )
}
