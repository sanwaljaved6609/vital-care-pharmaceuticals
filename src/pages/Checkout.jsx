import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

function Checkout() {
    const { cart, getCartTotal, clearCart, addOrder } = useCart();
    const [isOrdered, setIsOrdered] = useState(false);
    const [lastOrderUrl, setLastOrderUrl] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        paymentMethod: 'cod'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Generate Order Message for WhatsApp
        const orderId = Math.floor(Math.random() * 1000000);
        const date = new Date().toLocaleString();
        
        let message = `*NEW ORDER - Vital Care*\n`;
        message += `--------------------------\n`;
        message += `*Order ID:* #${orderId}\n`;
        message += `*Date:* ${date}\n\n`;
        
        message += `*Customer Details:*\n`;
        message += `Name: ${formData.fullName}\n`;
        message += `Email: ${formData.email}\n`;
        message += `Address: ${formData.address}\n`;
        message += `City: ${formData.city}\n\n`;
        
        message += `*Order Items:*\n`;
        cart.forEach(item => {
            message += `- ${item.name} (${item.quantity} x Rs. ${item.price} = Rs. ${item.price * item.quantity})\n`;
        });
        
        message += `\n*TOTAL AMOUNT: Rs. ${getCartTotal()}*\n`;
        message += `*Payment Method:* ${formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card'}\n`;
        message += `--------------------------\n`;
        message += `Please confirm my order. Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "923014864882";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        setLastOrderUrl(whatsappUrl);

        // Save to Local History
        addOrder({
            id: orderId,
            date,
            customer: { ...formData },
            items: [...cart],
            total: getCartTotal()
        });

        // Simulate processing then redirect
        setTimeout(() => {
            setIsOrdered(true);
            window.open(whatsappUrl, '_blank');
            clearCart();
        }, 1500);
    };

    if (isOrdered) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-6 flex items-center justify-center">
                <AnimatedSection className="text-center max-w-md bg-white dark:bg-slate-800 p-12 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-700">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-bold dark:text-white mb-4">Order Placed!</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">
                        We've received your order. If WhatsApp didn't open automatically, please click the button below to send your order details to us.
                    </p>
                    <div className="flex flex-col gap-4">
                        <a
                            href={lastOrderUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2"
                        >
                            Send via WhatsApp
                        </a>
                        <Link
                            to="/"
                            className="text-slate-500 font-bold hover:underline"
                        >
                            Back to Home
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-6 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold dark:text-white mb-4">Your cart is empty</h2>
                    <Link to="/products" className="text-primary font-bold hover:underline">Go back to products</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <Link to="/cart" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-bold">
                    <ArrowLeft size={20} />
                    Back to Cart
                </Link>

                <h1 className="text-4xl lg:text-5xl font-bold dark:text-white mb-12">Checkout</h1>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Shipping Info */}
                                <div className="bg-white dark:bg-slate-800 rounded-[32px] p-8 border border-slate-100 dark:border-slate-700">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            <Truck size={20} />
                                        </div>
                                        <h3 className="text-2xl font-bold dark:text-white">Shipping Details</h3>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all dark:text-white"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all dark:text-white"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1">Shipping Address</label>
                                            <textarea
                                                required
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all dark:text-white min-h-[100px]"
                                                placeholder="123 Street, Area..."
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-1">City</label>
                                            <input
                                                required
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary transition-all dark:text-white"
                                                placeholder="Karachi"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Method */}
                                <div className="bg-white dark:bg-slate-800 rounded-[32px] p-8 border border-slate-100 dark:border-slate-700">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            <CreditCard size={20} />
                                        </div>
                                        <h3 className="text-2xl font-bold dark:text-white">Payment Method</h3>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <label className={`relative flex items-center gap-4 p-6 rounded-2xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-slate-700'}`}>
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="cod"
                                                checked={formData.paymentMethod === 'cod'}
                                                onChange={handleInputChange}
                                                className="hidden"
                                            />
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === 'cod' ? 'border-primary' : 'border-slate-300'}`}>
                                                {formData.paymentMethod === 'cod' && <div className="w-3 h-3 bg-primary rounded-full" />}
                                            </div>
                                            <div>
                                                <p className="font-bold dark:text-white">Cash on Delivery</p>
                                                <p className="text-xs text-slate-500">Pay when you receive</p>
                                            </div>
                                        </label>

                                        <label className={`relative flex items-center gap-4 p-6 rounded-2xl border-2 cursor-not-allowed opacity-50 transition-all border-slate-100 dark:border-slate-700`}>
                                            <input disabled type="radio" name="paymentMethod" value="card" className="hidden" />
                                            <div className="w-6 h-6 rounded-full border-2 border-slate-300" />
                                            <div>
                                                <p className="font-bold dark:text-white">Credit / Debit Card</p>
                                                <p className="text-xs text-slate-500">Coming Soon</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-6 rounded-[24px] font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all active:scale-[0.98] shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                                >
                                    <ShieldCheck size={24} />
                                    <span>Complete Purchase</span>
                                </button>
                            </form>
                        </AnimatedSection>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <AnimatedSection delay={0.2}>
                            <div className="bg-white dark:bg-slate-800 rounded-[32px] p-8 border border-slate-100 dark:border-slate-700 sticky top-32">
                                <h3 className="text-2xl font-bold dark:text-white mb-6">Summary</h3>
                                <div className="max-h-[300px] overflow-y-auto no-scrollbar mb-6 space-y-4">
                                    {cart.map(item => (
                                        <div key={item.id} className="flex gap-4">
                                            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-grow">
                                                <p className="text-sm font-bold dark:text-white line-clamp-1">{item.name}</p>
                                                <p className="text-xs text-slate-500">{item.quantity} x Rs. {item.price}</p>
                                            </div>
                                            <p className="text-sm font-black text-primary">Rs. {item.price * item.quantity}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6 border-t border-slate-100 dark:border-slate-700 space-y-3">
                                    <div className="flex justify-between text-slate-500">
                                        <span>Subtotal</span>
                                        <span>Rs. {getCartTotal()}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-500">
                                        <span>Shipping</span>
                                        <span className="text-green-500">Free</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-black dark:text-white pt-2">
                                        <span>Total</span>
                                        <span className="text-primary">Rs. {getCartTotal()}</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
