import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                            V
                        </div>
                        <h2 className="text-2xl font-bold text-white">Vital Care</h2>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Leading the way in pharmaceutical marketing excellence. We deliver quality healthcare solutions
                        with integrity and innovation across Pakistan.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
                    <ul className="space-y-4 text-sm">
                        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Categories</h3>
                    <ul className="space-y-4 text-sm">
                        <li><Link to="/products" className="hover:text-primary transition-colors">Gynecology</Link></li>
                        <li><Link to="/products" className="hover:text-primary transition-colors">Antibiotics</Link></li>
                        <li><Link to="/products" className="hover:text-primary transition-colors">General Medicine</Link></li>
                        <li><Link to="/products" className="hover:text-primary transition-colors">Cardiology</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center space-x-3">
                            <span>hamzarazzaq6172@gmail.com</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span>+92 301 4864882</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <span>Township, Lahore, Pakistan</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest">
                <p>© {new Date().getFullYear()} Vital Care Pharmaceuticals. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="/policy" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
