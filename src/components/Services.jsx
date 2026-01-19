import { useEffect, useRef } from 'react';

const Services = () => {
    const sectionRef = useRef(null);

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

    const services = [
        {
            icon: '🎨',
            title: 'UI/UX Design',
            description: 'Creating intuitive and visually stunning user interfaces with modern design principles and user-centered approach.',
            features: [
                'Wireframing & Prototyping',
                'User Research & Testing',
                'Design Systems',
                'Responsive Design'
            ],
            color: 'from-indigo-500 to-purple-600'
        },
        {
            icon: '💻',
            title: 'Front-End Development',
            description: 'Building responsive, performant web applications using React.js, Next.js, and modern CSS frameworks.',
            features: [
                'React.js & Next.js',
                'Tailwind CSS & Bootstrap',
                'Animation & Interactions',
                'Cross-Browser Compatibility'
            ],
            color: 'from-purple-500 to-pink-600'
        },
        {
            icon: '⚙️',
            title: 'Back-End Development',
            description: 'Developing robust server-side applications with Laravel, RESTful APIs, and database management.',
            features: [
                'PHP & Laravel',
                'RESTful API Development',
                'Database Design',
                'Authentication & Security'
            ],
            color: 'from-pink-500 to-red-600'
        },
        {
            icon: '🌐',
            title: 'Full-Stack Web Apps',
            description: 'End-to-end development of complete web applications with admin dashboards and seamless integrations.',
            features: [
                'Complete Web Solutions',
                'Admin Dashboards',
                'API Integration',
                'Real-time Features'
            ],
            color: 'from-red-500 to-orange-600'
        },
        {
            icon: '🛒',
            title: 'E-Commerce Solutions',
            description: 'Building scalable e-commerce platforms with payment integration, inventory management, and multi-vendor support.',
            features: [
                'Shopping Cart Systems',
                'Payment Integration',
                'Multi-Vendor Support',
                'Order Management'
            ],
            color: 'from-orange-500 to-yellow-600'
        },
        {
            icon: '📱',
            title: 'Landing Pages',
            description: 'Designing and developing high-converting landing pages optimized for performance and user engagement.',
            features: [
                'Conversion Optimization',
                'SEO Best Practices',
                'Fast Loading Speed',
                'Mobile Responsive'
            ],
            color: 'from-yellow-500 to-green-600'
        },
        {
            icon: '🔧',
            title: 'Integrations & APIs',
            description: 'Implementing third-party integrations, custom APIs, and connecting various services seamlessly.',
            features: [
                'Third-Party APIs',
                'Custom Integrations',
                'Webhook Setup',
                'Data Synchronization'
            ],
            color: 'from-green-500 to-teal-600'
        },
        {
            icon: '🚀',
            title: 'Deployment & Hosting',
            description: 'Managing server deployment, domain configuration, and ensuring optimal performance and security.',
            features: [
                'Server Management',
                'Domain & Email Setup',
                'SSL Certificates',
                'Performance Optimization'
            ],
            color: 'from-teal-500 to-cyan-600'
        },
        {
            icon: '💡',
            title: 'Consulting & Support',
            description: 'Providing technical consultation, code reviews, and ongoing support for your development projects.',
            features: [
                'Technical Consultation',
                'Code Review',
                'Performance Audit',
                'Ongoing Support'
            ],
            color: 'from-cyan-500 to-blue-600'
        }
    ];

    return (
        <section id="services" ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Services I <span className="gradient-text">Offer</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Comprehensive development services tailored to bring your ideas to life
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-2xl p-6 card-hover reveal group"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-400">
                                        <span className="text-indigo-400 mr-2">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16 reveal">
                    <div className="glass-effect rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Start Your <span className="gradient-text">Project?</span>
                        </h3>
                        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                            Let's collaborate to turn your vision into reality. I'm here to help you build
                            exceptional digital experiences that drive results.
                        </p>
                        <a href="#contact" className="btn-primary">
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
