import { useEffect, useRef, useState } from 'react';

const Contact = () => {
    const sectionRef = useRef(null);
    const [showQR, setShowQR] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('active');
                            }, index * 100);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const contactMethods = [
        {
            icon: '📧',
            title: 'Email',
            value: 'zaidelayan39@gmail.com',
            link: 'mailto:zaidelayan39@gmail.com',
            color: 'from-indigo-500 to-purple-600'
        },
        {
            icon: '📱',
            title: 'WhatsApp',
            value: '+962 79 201 9411',
            link: 'https://wa.me/962792019411',
            color: 'from-green-500 to-emerald-600'
        },
        {
            icon: '💼',
            title: 'LinkedIn',
            value: 'Zaid Elayan',
            link: 'https://linkedin.com/in/zaidelayan',
            color: 'from-blue-500 to-cyan-600'
        },
        {
            icon: '💻',
            title: 'GitHub',
            value: '@zaidelayan',
            link: 'https://github.com/zaidelayan',
            color: 'from-gray-600 to-gray-800'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Amman, Jordan',
            link: '#',
            color: 'from-red-500 to-pink-600'
        },
        {
            icon: '📄',
            title: 'Download CV',
            value: 'Full Resume',
            link: '#',
            color: 'from-purple-500 to-pink-600'
        }
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/zaidelayan' },
        { name: 'GitHub', icon: '💻', url: 'https://github.com/zaidelayan' },
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/zaidelayan' },
        { name: 'Instagram', icon: '📷', url: 'https://instagram.com/zaidelayan' }
    ];

    return (
        <section id="contact" ref={sectionRef} className="section-padding bg-gradient-to-b from-transparent to-indigo-950/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Let's discuss your next project. I'm always open to new opportunities and collaborations.
                    </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.link}
                            target={method.link.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className="glass-effect rounded-2xl p-6 card-hover reveal group block"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {method.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                                {method.title}
                            </h3>
                            <p className="text-gray-400 text-sm break-all">
                                {method.value}
                            </p>
                        </a>
                    ))}
                </div>

                {/* QR Code Section */}
                <div className="text-center mb-16 reveal">
                    <button
                        onClick={() => setShowQR(!showQR)}
                        className="btn-primary mb-6"
                    >
                        {showQR ? 'Hide QR Code' : 'Show QR Code for Quick Contact'}
                    </button>

                    {showQR && (
                        <div className="glass-effect rounded-2xl p-8 max-w-md mx-auto animate-fade-in-up">
                            <h3 className="text-xl font-bold mb-4">Scan to Connect</h3>
                            <div className="bg-white p-6 rounded-xl inline-block">
                                {/* QR Code Placeholder - You can replace this with actual QR code generator */}
                                <div className="w-48 h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-6xl">📱</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mt-4">
                                Scan this QR code to save my contact information
                            </p>
                        </div>
                    )}
                </div>

                {/* Social Links */}
                <div className="reveal">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        Connect on <span className="gradient-text">Social Media</span>
                    </h3>
                    <div className="flex justify-center gap-4 flex-wrap">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 glass-effect rounded-xl flex items-center justify-center text-2xl hover:scale-110 hover:bg-indigo-500/20 transition-all duration-300"
                                title={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Availability Status */}
                <div className="mt-16 text-center reveal">
                    <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-green-400 font-semibold">Available for Freelance Work</span>
                        </div>
                        <p className="text-gray-400">
                            Currently accepting new projects and collaborations.
                            Response time: Usually within 24 hours.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
