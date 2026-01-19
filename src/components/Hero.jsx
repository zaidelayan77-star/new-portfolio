import { useEffect, useState } from 'react';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Front-End Developer',
    'React.js Specialist',
    'UI/UX Designer',
    'Team Lead'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-[140px]">
      {/* Animated Background */}
      <div className="particles-bg">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="space-y-2">
              <p className="text-indigo-400 font-semibold text-lg tracking-wide">
                👋 Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Zaid Bassem
                <br />
                <span className="gradient-text">Elayan</span>
              </h1>
            </div>

            <div className="h-20">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                <span className="text-indigo-400">&lt;</span>
                {text}
                <span className="border-r-2 border-indigo-400 animate-pulse ml-1"></span>
                <span className="text-indigo-400">/&gt;</span>
              </h2>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Passionate Front-End Developer and Team Lead specializing in creating
              responsive, visually compelling, and user-centered digital experiences.
              Expert in React.js, modern UI/UX design, and leading development teams.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold gradient-text">2+</h3>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold gradient-text">50+</h3>
                <p className="text-gray-500 text-sm">Projects Done</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold gradient-text">30+</h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" />

              {/* Image Container */}
              <div className="relative glass-effect rounded-3xl p-2 animate-float">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={profileImg}
                    alt="Zaid Elayan"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/500x500/667eea/ffffff?text=ZE';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl rotate-12 opacity-80 animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
