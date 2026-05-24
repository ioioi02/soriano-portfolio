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
import python_logo from "../assets/python_logo.png";

export default function LandingPage() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 550);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                        <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-black/5 transition-all duration-200">
                            <img src={gmail_logo} alt="Gmail" className="w-5 h-5 object-contain" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-black/5 transition-all duration-200">
                            <img src={linkedin_logo} alt="LinkedIn" className="w-5 h-5 object-contain" />
                        </a>
                        <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-black/5 transition-all duration-200">
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
                        <h1 className="text-5xl md:text-7xl font-black text-text-dark tracking-tight leading-none mb-2">
                            Hello,
                        </h1>
                        <h1 className="text-5xl md:text-7xl font-black text-text-dark tracking-tight leading-none mb-4">
                            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-accent-red">Jonas!</span>
                        </h1>
                        <h2 className="text-xl md:text-4xl font-bold text-text-muted tracking-wide leading-none mb-2">
                            Aspiring Developer
                        </h2>
                    </div>

                    {/* Right Side: Big Normal Photo */}
                    <div className="flex justify-center w-auto">
                        <img 
                            src={my_photo} 
                            alt="My Photo" 
                            className="w-72 md:w-96 h-auto object-contain object-bottom transition-transform duration-500 ease-in-out"
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
                            <h1 className="text-4xl font-black tracking-tight mb-3">
                                ABOUT
                            </h1>
                            {/* Centered Small Red Accent Line */}
                            <div className="w-12 h-1 bg-brand-red rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-text-muted font-medium text-base md:text-lg leading-relaxed max-w-2xl mt-auto xl:mb-auto">
                            <p>
                                I am a passionate <strong className="text-text-light font-bold">Aspiring Developer</strong> dedicated to solving problems 
                                and delivering effective solutions. For our thesis, I developed a school clinic system 
                                capable of Student Records Management, Symptom Reporting and Triage, 
                                Medicine Inventory Tracking, and Health Analytics and Reporting.
                            </p>
                            <p>
                                While I am capable of full-stack development, I am more focused on the backend side. 
                                Now, I am eager to enter the professional industry to improve my skills and contribute to the field.
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
                                php_logo, laravel_logo, javascript_logo, html_logo, css_logo, mysql_logo, python_logo,
                                php_logo, laravel_logo, javascript_logo, html_logo, css_logo, mysql_logo, python_logo
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
                                php_logo, laravel_logo, javascript_logo, html_logo, css_logo, mysql_logo, python_logo,
                                php_logo, laravel_logo, javascript_logo, html_logo, css_logo, mysql_logo, python_logo
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
                            <h1 className="text-4xl font-black tracking-tight mb-3">
                                PROJECTS
                            </h1>
                            <div className="w-12 h-1 bg-brand-red rounded-full"></div>
                        </div>

                        {/* Clickable Modern Project Display Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            <a 
                                href="#" 
                                className="group bg-white border border-gray-200 hover:border-brand-red/30 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden relative cursor-pointer"
                            >
                                <div>
                                    {/* Simulated Project Visual Code Preview Panel */}
                                    <div className="w-full h-32 bg-bg-dark rounded-xl mb-4 p-3 font-mono text-[10px] text-text-muted/80 overflow-hidden flex flex-col gap-1 shadow-inner group-hover:text-text-light/90 transition-colors duration-300">
                                        <p className="text-brand-red font-bold">import <span className="text-accent-red">ClinicSystem</span> from <span className="text-green-600">"./backend"</span>;</p>
                                        <p className="text-text-muted">// Initializing core analytical thesis endpoints</p>
                                        <p>const system = new ClinicSystem();</p>
                                        <p>system.initializeRecordsManagement();</p>
                                        <p>system.runSymptomReportingAndTriage();</p>
                                        <p className="text-accent-red">system.trackMedicineInventory();</p>
                                    </div>
                                    
                                    {/* Project Title */}
                                    <h2 className="text-lg font-bold text-text-dark group-hover:text-brand-red transition-colors duration-200">
                                        School Clinic System (STEALTH)
                                    </h2>
                                    
                                    {/* Project Short Description */}
                                    <p className="text-text-muted font-medium text-xs mt-2 leading-relaxed">
                                        A web-based application designed for the PDM Health Services Office to improve clinic workflow and efficiency.
                                    </p>
                                </div>
                                
                                {/* Click Status Accent */}
                                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-xs font-mono font-bold text-brand-red bg-brand-red/5 px-3 py-1 rounded-md">
                                        Thesis
                                    </span>
                                    <span className="text-sm font-bold text-text-dark group-hover:text-accent-red flex items-center gap-1 transition-colors duration-200">
                                        View Details <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
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
                    className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg hover:bg-accent-red active:scale-95 transition-all duration-200 cursor-pointer"
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </>
    )
}
