import { useEffect, useRef, useState } from 'react';

const Experience = () => {
    const sectionRef = useRef(null);
    const [activeCard, setActiveCard] = useState(null);

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

    const experiences = [
        {
            period: 'Jan 2026 - Present',
            duration: 'Current',
            company: 'Codexal',
            role: 'Front-End Developer & Team Lead',
            type: 'Full-time',
            location: 'Amman, Jordan',
            description: 'Leading front-end development team and building large-scale enterprise applications for clients in Jordan, USA, and international markets.',
            achievements: [
                'Leading a team of front-end developers on multiple projects',
                'Developing complex enterprise systems and web applications',
                'Building responsive and scalable user interfaces using React.js',
                'Working with international clients from Jordan, USA, and abroad',
                'Implementing modern UI/UX best practices and design systems',
                'Mentoring junior developers and conducting code reviews'
            ],
            skills: ['React.js', 'Team Leadership', 'Enterprise Systems', 'UI/UX Design'],
            color: 'from-indigo-500 to-purple-600',
            icon: '�'
        },
        {
            period: 'Mar 2025 - Oct 2025',
            duration: '8 months',
            company: 'Telmeeth EDU',
            role: 'IT Department Manager & Front-End Developer',
            type: 'Full-time',
            location: 'Amman, Jordan',
            description: 'Managed IT department and led front-end development initiatives for educational technology platform.',
            achievements: [
                'Led team of 10 developers and supervised project lifecycle',
                'Built and maintained user interfaces using React.js',
                'Implemented responsive design across all platforms',
                'Trained and mentored interns on front-end technologies',
                'Coordinated with back-end team for seamless integration'
            ],
            skills: ['React.js', 'Team Leadership', 'Project Management', 'Mentoring'],
            color: 'from-purple-500 to-pink-600',
            icon: '💼'
        },
        {
            period: 'Dec 2023 - Aug 2025',
            duration: '1 year 8 months',
            company: 'Petra Marketing Solutions',
            role: 'Front-End Developer & UI/UX Designer',
            type: 'Full-time',
            location: 'Amman, Jordan',
            description: 'Developed and optimized digital solutions for client projects, specializing in e-commerce and interactive web applications.',
            achievements: [
                'Developed AJ Mart E-commerce Website front-end',
                'Built 360 Market E-commerce platform user interface',
                'Designed and implemented NFC card interfaces',
                'Created responsive designs for multiple client projects',
                'Collaborated with design team on UI/UX improvements'
            ],
            skills: ['React.js', 'UI/UX Design', 'E-commerce', 'Responsive Design'],
            color: 'from-pink-500 to-red-600',
            icon: '�'
        },
        {
            period: 'Jun 2024 - Jan 2025',
            duration: '6 months',
            company: 'Blue Design Company',
            role: 'Front-End Developer & UI/UX Designer',
            type: 'Freelance',
            location: 'Remote',
            description: 'Collaborated on front-end development and graphic design projects for international clients.',
            achievements: [
                'Delivered high-quality front-end solutions',
                'Implemented responsive, cross-platform interfaces',
                'Worked with clients from different countries',
                'Maintained design consistency across projects'
            ],
            skills: ['React.js', 'Figma', 'Responsive Design', 'International Clients'],
            color: 'from-red-500 to-orange-600',
            icon: '🌐'
        }
    ];

    return (
        <section id="experience" ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        My professional journey building innovative solutions for clients worldwide
                    </p>
                </div>

                {/* Experience Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="reveal"
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <div className={`glass-effect rounded-3xl p-8 h-full card-hover group relative overflow-hidden transition-all duration-500 ${activeCard === index ? 'scale-[1.02]' : ''
                                }`}>
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            {/* Icon */}
                                            <div className={`w-14 h-14 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                                                {exp.icon}
                                            </div>

                                            {/* Company & Type */}
                                            <div>
                                                <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
                                                    {exp.company}
                                                </h3>
                                                <span className="text-xs text-gray-500">{exp.type} • {exp.location}</span>
                                            </div>
                                        </div>

                                        {/* Period Badge */}
                                        <div className={`bg-gradient-to-r ${exp.color} px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap`}>
                                            {exp.duration}
                                        </div>
                                    </div>

                                    {/* Role */}
                                    <h4 className="text-lg font-semibold text-indigo-400 mb-2">
                                        {exp.role}
                                    </h4>

                                    {/* Period */}
                                    <p className="text-sm text-gray-500 mb-4">
                                        📅 {exp.period}
                                    </p>

                                    {/* Description */}
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    {/* Achievements */}
                                    <div className="mb-4">
                                        <h5 className="text-sm font-semibold text-white mb-2">Key Achievements:</h5>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start text-xs text-gray-400">
                                                    <span className="text-indigo-400 mr-2 mt-0.5">✓</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700/50">
                                        {exp.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <div className="reveal">
                    <h3 className="text-3xl font-bold text-center mb-8">
                        <span className="gradient-text">Education</span>
                    </h3>
                    <div className="max-w-3xl mx-auto glass-effect rounded-3xl p-8 card-hover group">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            {/* Icon */}
                            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                🎓
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h4 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                                    Bachelor of Software Engineering
                                </h4>
                                <p className="text-indigo-400 font-semibold mb-2">
                                    The Hashemite University
                                </p>
                                <p className="text-gray-400 mb-4">
                                    📅 2020 - 2024 • Zarqa, Jordan
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Software Development', 'Data Structures', 'Algorithms', 'Web Development', 'Database Design'].map((course, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
                    {[
                        { label: 'Years Experience', value: '2+', icon: '📊' },
                        { label: 'Projects Completed', value: '50+', icon: '🎯' },
                        { label: 'Happy Clients', value: '30+', icon: '😊' },
                        { label: 'Team Members Led', value: '10+', icon: '👥' }
                    ].map((stat, index) => (
                        <div key={index} className="glass-effect rounded-2xl p-6 text-center card-hover group">
                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <h4 className="text-3xl font-bold gradient-text mb-1">{stat.value}</h4>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
