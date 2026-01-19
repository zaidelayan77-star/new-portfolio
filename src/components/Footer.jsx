const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/zaidelayan' },
        { name: 'GitHub', icon: '💻', url: 'https://github.com/zaidelayan' },
        { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/zaidelayan' },
        { name: 'Email', icon: '📧', url: 'mailto:zaidelayan39@gmail.com' }
    ];

    return (
        <footer className="bg-gradient-to-b from-transparent to-gray-950 border-t border-gray-800">
            <div className="container-custom py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4">&lt;ZE/&gt;</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Front-End Developer & Team Lead passionate about creating exceptional
                            digital experiences. Based in Amman, Jordan.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p>📧 zaidelayan39@gmail.com</p>
                            <p>📱 +962 79 201 9411</p>
                            <p>📍 Amman, Jordan</p>
                        </div>
                        <div className="flex gap-3 mt-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-indigo-500/20 transition-all"
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Zaid Elayan. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm">
                        Built with ❤️ using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
