import { useEffect, useRef } from 'react';

const About = () => {
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

    const values = [
        {
            icon: '🎯',
            title: 'Mission-Driven',
            description: 'Creating impactful solutions that solve real-world problems'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'Leveraging cutting-edge technologies for optimal results'
        },
        {
            icon: '🚀',
            title: 'Excellence',
            description: 'Committed to delivering high-quality, scalable solutions'
        },
        {
            icon: '🤝',
            title: 'Collaboration',
            description: 'Strong team player with excellent communication skills'
        }
    ];

    return (
        <section id="about" ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Bio */}
                    <div className="space-y-6 reveal">
                        <h3 className="text-3xl font-bold text-white">
                            Crafting Digital Experiences
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            I'm a passionate Front-End Developer and Team Lead based in Amman, Jordan,
                            specializing in building beautiful, responsive, and user-centered web applications.
                            Currently leading front-end development at Codexal, working on enterprise-scale
                            projects for clients in Jordan, USA, and international markets.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            My expertise lies in React.js, modern UI/UX design principles, and team leadership.
                            I've successfully led development teams, delivered complex enterprise systems, and
                            created engaging user interfaces for clients across Jordan, USA, and Europe.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            I'm committed to staying ahead of front-end technologies and design trends, ensuring
                            that every project delivers exceptional user experiences with clean, maintainable code.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-2 gap-6 reveal">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="glass-effect p-6 rounded-2xl card-hover group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h4 className="text-lg font-semibold mb-2 text-white">
                                    {value.title}
                                </h4>
                                <p className="text-sm text-gray-400">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What I Do */}
                <div className="glass-effect rounded-3xl p-8 md:p-12 reveal">
                    <h3 className="text-3xl font-bold mb-8 text-center">
                        What I <span className="gradient-text">Build</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl">
                                🌐
                            </div>
                            <h4 className="text-xl font-semibold">Web Applications</h4>
                            <p className="text-gray-400 text-sm">
                                Full-stack web apps with admin dashboards, RESTful APIs, and seamless integrations
                            </p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-2xl">
                                🎨
                            </div>
                            <h4 className="text-xl font-semibold">UI/UX Design</h4>
                            <p className="text-gray-400 text-sm">
                                User-centered designs with modern aesthetics, wireframing, and prototyping
                            </p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl">
                                🛒
                            </div>
                            <h4 className="text-xl font-semibold">E-Commerce Solutions</h4>
                            <p className="text-gray-400 text-sm">
                                Complete e-commerce platforms with multi-vendor support and payment integration
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
