import { useEffect, useRef } from 'react';


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

                {/* Coming Soon Placeholder */}
                <div className="flex flex-col items-center justify-center py-20 reveal">
                    <div className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse">
                        Coming Soon
                    </div>
                    <p className="text-xl text-gray-400 mt-6 max-w-lg text-center">
                        We are working on something amazing. Stay tuned for our latest projects!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
