import { useEffect, useRef, useState } from 'react';

const Skills = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
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

    const skillCategories = [
        {
            title: 'Front-End Development',
            icon: '💻',
            color: 'from-indigo-500 to-purple-600',
            skills: [
                { name: 'HTML & CSS', level: 95 },
                { name: 'JavaScript (ES6+)', level: 92 },
                { name: 'React.js', level: 95 },
                { name: 'Next.js', level: 80 },
                { name: 'Tailwind CSS', level: 95 }
            ]
        },
        {
            title: 'State Management & APIs',
            icon: '⚙️',
            color: 'from-purple-500 to-pink-600',
            skills: [
                { name: 'Redux Toolkit', level: 90 },
                { name: 'Context API', level: 92 },
                { name: 'React Query', level: 85 },
                { name: 'RESTful APIs', level: 90 },
                { name: 'Axios', level: 92 }
            ]
        },
        {
            title: 'Back-End Basics',
            icon: '🔧',
            color: 'from-cyan-500 to-blue-600',
            skills: [
                { name: 'PHP', level: 60 },
                { name: 'Laravel', level: 55 },
                { name: 'MySQL', level: 65 },
                { name: 'API Integration', level: 75 },
            ]
        },
        {
            title: 'UI/UX Design',
            icon: '🎨',
            color: 'from-pink-500 to-red-600',
            skills: [
                { name: 'Figma', level: 92 },
                { name: 'Adobe Illustrator', level: 85 },
                { name: 'Adobe Photoshop', level: 88 },
                { name: 'Wireframing', level: 90 },
                { name: 'Prototyping', level: 88 }
            ]
        },
        {
            title: 'Tools & Technologies',
            icon: '🛠️',
            color: 'from-red-500 to-orange-600',
            skills: [
                { name: 'Git & GitHub', level: 92 },
                { name: 'VS Code', level: 95 },
                { name: 'npm & Yarn', level: 90 },
                { name: 'Webpack & Vite', level: 85 },
                { name: 'Jira & Trello', level: 88 }
            ]
        }
    ];

    const additionalSkills = [
        'Responsive Web Design',
        'Cross-Browser Compatibility',
        'Animation CSS',
        'ApexCharts.js',
        'i18n Translation',
        'NFC Card Programming',
        'Custom QR Codes',
        'Browser Developer Tools',
        'Problem Solving',
        'Team Leadership',
        'Agile Methodology'
    ];

    return (
        <section id="skills" ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A comprehensive toolkit of modern technologies and frameworks
                    </p>
                </div>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className="glass-effect rounded-2xl p-8 reveal card-hover"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold">{category.title}</h3>
                            </div>

                            {/* Skills with Progress Bars */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-indigo-400 font-semibold">{skill.level}%</span>
                                        </div>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-fill"
                                                style={{
                                                    width: isVisible ? `${skill.level}%` : '0%',
                                                    transitionDelay: `${skillIndex * 0.1}s`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Tags */}
                <div className="reveal">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        Additional <span className="gradient-text">Competencies</span>
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {additionalSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="glass-effect px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-500/20 transition-all duration-300 cursor-default group"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <span className="group-hover:text-indigo-400 transition-colors">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Languages */}
                <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-3xl mx-auto reveal">
                    <div className="glass-effect rounded-2xl p-8 text-center card-hover">
                        <div className="text-4xl mb-4">🇯🇴</div>
                        <h4 className="text-xl font-bold mb-2">Arabic</h4>
                        <p className="text-indigo-400 font-semibold">Native Proficiency</p>
                    </div>
                    <div className="glass-effect rounded-2xl p-8 text-center card-hover">
                        <div className="text-4xl mb-4">🇬🇧</div>
                        <h4 className="text-xl font-bold mb-2">English</h4>
                        <p className="text-indigo-400 font-semibold">Professional Working Proficiency</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
