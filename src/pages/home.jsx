import React from 'react';
import { useApp } from "../context/AppContext";
import AnimatedSection from "../components/AnimatedSection";
import { ArrowRight, ShieldCheck, Activity, Award, FlaskConical, Stethoscope, Building, Hospital, Store, Phone } from "lucide-react";

import { Link } from "react-router-dom";
import teamMembers from "../data/team";

import heroImage from "../assets/hero-pharmaceutical.png";

function Home() {
    const { t } = useApp();

    return (
        <div className="overflow-hidden dark:bg-slate-900 dark:text-white">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/5 dark:bg-primary/10 rounded-l-[100px] hidden lg:block" />

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <Activity size={16} />
                            <span>Trusted Pharmaceutical Excellence</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                            {t.hero.title.split(' ').map((word, i) => (
                                <span key={i} className={i >= 2 ? "text-primary" : ""}>
                                    {word}{" "}
                                </span>
                            ))}
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
                            {t.hero.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/products"
                                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center space-x-2 shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all hover:scale-105"
                            >
                                <span>{t.hero.cta}</span>
                                <ArrowRight size={23} />
                            </Link>
                            <Link
                                to="/about"
                                className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                            >
                                Learn More
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} className="relative">
                        <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src={heroImage}
                                alt="Pharmaceutical Excellence"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl shadow-xl z-20 hidden md:block">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-accent/20 text-accent rounded-2xl flex items-center justify-center font-bold">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className=" font-bold text-slate-400 font-bold uppercase ">100% Quality Assurance</p>
                                    {/* <p className="text-lg font-bold">100% ISO Certified</p> */}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Core Specialties</h2>
                        <p className="text-slate-600 dark:text-slate-400">We maintain the highest standards in pharmaceutical distribution and marketing, ensuring healthcare providers receive the best solutions.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FlaskConical size={32} />,
                                title: "Research Driven",
                                desc: "Our products are backed by extensive clinical research and data."
                            },
                            {
                                icon: <Award size={32} />,
                                title: "Top Quality",
                                desc: "Manufacturing processes that exceed global regulatory standards."
                            },
                            {
                                icon: <Activity size={32} />,
                                title: "Patient First",
                                desc: "Every solution is designed to improve patient outcomes significantly."
                            },
                        ].map((feature, i) => (
                            <AnimatedSection key={i} delay={i * 0.1} className="bg-white dark:bg-slate-800 p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-slate-100 dark:border-slate-700">
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Target Audience</h2>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Who We Serve</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            We bridge the gap between innovation and healthcare delivery by supporting a wide range of medical professionals and institutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Stethoscope size={32} />, title: "Doctors", desc: "Providing specialists with the latest pharmaceutical breakthroughs." },
                            { icon: <Building size={32} />, title: "Clinics", desc: "Equipping private practices with reliable medical solutions." },
                            { icon: <Hospital size={32} />, title: "Hospitals", desc: "Supporting large-scale institutions with bulk requirements." },
                            { icon: <Store size={32} />, title: "Pharmacies", desc: "Ensuring steady supply chains for retail healthcare partners." },
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 0.1} className="text-center group">
                                <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed px-4">{item.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our People</h2>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Meet Our Expert Team</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Dedicated professionals committed to delivering pharmaceutical excellence and improving healthcare standards.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, i) => (
                            <AnimatedSection key={member.id} delay={i * 0.1} className="bg-white dark:bg-slate-800 rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-slate-100 dark:border-slate-700">
                                <div className="relative h-80 overflow-hidden">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                        <div className="text-white">
                                            <p className="text-sm font-medium opacity-80 mb-1">Contact Details</p>
                                            <div className="flex items-center space-x-2">
                                                <Phone size={16} className="text-primary" />
                                                <span className="font-bold">{member.phone}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 text-center">
                                    <h4 className="text-2xl font-bold mb-1">{member.name}</h4>
                                    <p className="text-primary font-bold text-sm uppercase tracking-wider">{member.role}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}

            <section className="py-24 px-6">
                <AnimatedSection className="max-w-7xl mx-auto bg-primary rounded-[50px] p-12 lg:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to provide better care?</h2>
                        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                            Join hundreds of healthcare professionals who trust Vital Care for their pharmaceutical needs.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105"
                        >
                            Get in Touch Today
                        </Link>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}

export default Home;
