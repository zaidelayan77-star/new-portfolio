import { useEffect, useRef } from 'react';
import ajMartImg from '../assets/ajmart.png';

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal').forEach((el, index) => {
                            setTimeout(() => {
                                el.classList.add('active');
                            }, index * 150);
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

    const projects = [
        {
            title: 'AJ Mart E-Commerce',
            description: 'Complete e-commerce platform with product management, shopping cart, payment integration, and admin dashboard.',
            image: ajMartImg,
            tech: ['React.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'REST API'],
            link: '#',
            github: '#',
            featured: true
        },
        {
            title: '360 Market Multi-Vendor',
            description: 'Advanced multi-vendor marketplace with vendor management, product listings, order tracking, and analytics.',
            image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=360+Market',
            tech: ['React.js', 'PHP', 'Laravel', 'Redux', 'Bootstrap'],
            link: '#',
            github: '#',
            featured: true
        },
        {
            title: 'Medical Clinic Management',
            description: 'Comprehensive clinic management system with appointment scheduling, patient records, and employee management.',
            image: 'https://via.placeholder.com/600x400/764ba2/ffffff?text=Clinic+System',
            tech: ['React.js', 'Laravel', 'MySQL', 'Chart.js'],
            link: '#',
            github: '#',
            featured: true
        },
        {
            title: 'NFC Business Cards',
            description: 'Digital business card solution with NFC technology, QR codes, and contact sharing capabilities.',
            image: 'https://via.placeholder.com/600x400/f093fb/ffffff?text=NFC+Cards',
            tech: ['React.js', 'NFC', 'QR Code API', 'Tailwind CSS'],
            link: '#',
            github: '#',
            featured: false
        },
        {
            title: 'Doctor Portfolio Website',
            description: 'Professional portfolio website for medical practitioners with appointment booking and service showcase.',
            image: 'https://via.placeholder.com/600x400/4facfe/ffffff?text=Doctor+Portfolio',
            tech: ['React.js', 'Tailwind CSS', 'Animation'],
            link: '#',
            github: '#',
            featured: false
        },
        {
            title: 'Corporate Dashboard',
            description: 'Analytics dashboard with real-time data visualization, reporting, and team collaboration features.',
            image: 'https://via.placeholder.com/600x400/f5576c/ffffff?text=Dashboard',
            tech: ['React.js', 'ApexCharts', 'Laravel', 'WebSocket'],
            link: '#',
            github: '#',
            featured: false
        }
    ];

    return (
        <section id="projects" ref={sectionRef} className="section-padding bg-gradient-to-b from-indigo-950/20 to-transparent">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A selection of my recent work showcasing expertise in full-stack development
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-2xl overflow-hidden card-hover reveal group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.src = `https://via.placeholder.com/600x400/667eea/ffffff?text=${encodeURIComponent(project.title)}`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                                        ⭐ Featured
                                    </div>
                                )}
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        className="flex-1 text-center py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                                    >
                                        View Project
                                    </a>
                                    <a
                                        href={project.github}
                                        className="px-4 py-2 border border-indigo-500 rounded-lg hover:bg-indigo-500/20 transition-all"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center reveal">
                    <a
                        href="#contact"
                        className="inline-block btn-primary"
                    >
                        View All Projects →
                    </a>
                    <p className="text-gray-500 text-sm mt-4">
                        50+ projects completed for clients worldwide
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
