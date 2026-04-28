import React, { useState } from 'react';
import { useApp } from "../context/AppContext";
import AnimatedSection from "../components/AnimatedSection";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

function Contact() {
    const { t } = useApp();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Product Inquiry',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hamzarazzaq6172@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, '_blank');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-32 pb-20 dark:bg-slate-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <AnimatedSection>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                            Let's start a <span className="text-primary">conversation</span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-lg">
                            Whether you're a healthcare professional looking for specific products or a potential partner,
                            we're here to help you provide better care.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Phone</h4>
                                    <p className="text-slate-600 dark:text-slate-400">+92 301 4864882</p>
                                    <p className="text-xs text-primary font-bold mt-1 uppercase tracking-wider">Mon - Fri, 9am - 6pm</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Email</h4>
                                    <p className="text-slate-600 dark:text-slate-400">hamzarazzaq6172@gmail.com</p>
                                    <p className="text-xs text-accent font-bold mt-1 uppercase tracking-wider">We reply within 24h</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Headquarters</h4>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Township, Lahore, Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Form Side */}
                    <AnimatedSection delay={0.2}>
                        <div className="bg-white dark:bg-slate-800 p-10 lg:p-14 rounded-[40px] shadow-premium dark:shadow-premium-dark border border-slate-100 dark:border-slate-700">
                            <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
                                <MessageCircle className="text-primary" />
                                <span>Send us a message</span>
                            </h3>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold opacity-70 ml-1">{t.contact.name}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50 dark:bg-slate-900 border-none p-4 rounded-2xl focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold opacity-70 ml-1">{t.contact.email}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-50 dark:bg-slate-900 border-none p-4 rounded-2xl focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold opacity-70 ml-1">Subject</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-slate-50 dark:bg-slate-900 border-none p-4 rounded-2xl focus:ring-2 focus:ring-primary/50 transition-all outline-none appearance-none"
                                    >
                                        <option>Product Inquiry</option>
                                        <option>Partnership Proposal</option>
                                        <option>General Support</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold opacity-70 ml-1">{t.contact.message}</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        className="w-full bg-slate-50 dark:bg-slate-900 border-none p-4 rounded-2xl h-40 focus:ring-2 focus:ring-primary/50 transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all hover:scale-[1.02] flex items-center justify-center space-x-3"
                                >
                                    <span>{t.contact.send}</span>
                                    <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
}

export default Contact;

