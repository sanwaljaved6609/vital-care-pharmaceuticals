import React from 'react';
import { useApp } from "../context/AppContext";
import AnimatedSection from "../components/AnimatedSection";
import { Target, Eye, Heart, Users, ShieldCheck, Activity } from "lucide-react";

function About() {
    const { t } = useApp();

    return (
        <div className="pt-32 pb-20 dark:bg-slate-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Story Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <AnimatedSection>
                        <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 italic">Our Legacy</h2>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                            {t.about.title}
                        </h1>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>{t.about.content}</p>
                            <p>
                                Founded on the principles of trust and scientific rigor, we have grown from a local distributor to a
                                major player in the pharmaceutical marketing landscape. Our journey is defined by the lives we've
                                touched and the healthcare standards we've helped elevate.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop" className="rounded-3xl shadow-lg" alt="About 1" />
                            <div className="bg-primary/10 dark:bg-primary/20 p-8 rounded-3xl">
                                <h4 className="text-3xl font-bold text-primary mb-1">4+</h4>
                                <p className="text-sm font-bold opacity-70">Years of Experience</p>
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                            <div className="bg-secondary dark:bg-slate-800 p-8 rounded-3xl text-white">
                                <h4 className="text-3xl font-bold mb-1">500+</h4>
                                <p className="text-sm font-bold opacity-70">Partner Clinics</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" className="rounded-3xl shadow-lg" alt="About 2" />
                        </div>
                    </AnimatedSection>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    <AnimatedSection className="bg-white dark:bg-slate-800 p-12 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
                            <Target size={28} />
                        </div>
                        <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            To bridge the gap between breakthrough pharmaceutical research and patient accessibility by
                            delivering high-quality medicines with unparalleled marketing integrity.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1} className="bg-white dark:bg-slate-800 p-12 rounded-[40px] border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8">
                            <Eye size={28} />
                        </div>
                        <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            To become the most trusted pharmaceutical partner in the region, recognized for our commitment
                            to healthcare excellence and ethical business practices.
                        </p>
                    </AnimatedSection>
                </div>

                {/* Core Values */}
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Values that Drive Us</h2>
                    <p className="text-slate-600 dark:text-slate-400">The foundation of everything we do at Vital Care.</p>
                </AnimatedSection>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <Heart className="text-red-500" />, title: "Integrity", desc: "Honesty in every interaction." },
                        { icon: <ShieldCheck className="text-blue-500" />, title: "Quality", desc: "No compromise on standards." },
                        { icon: <Users className="text-purple-500" />, title: "Partnership", desc: "Growing together with doctors." },
                        { icon: <Activity className="text-green-500" />, title: "Innovation", desc: "Always finding better ways." },
                    ].map((val, i) => (
                        <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform hover:rotate-12">
                                {val.icon}
                            </div>
                            <h4 className="font-bold text-xl mb-2">{val.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{val.desc}</p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;

