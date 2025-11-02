import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, ChevronRight, Users, Target, Award, BookOpen, Code, Briefcase, Check, Star } from 'lucide-react';

// Theme Context
const ThemeContext = React.createContext<{
  isDark: boolean;
  toggleTheme: () => void;
}>({ isDark: false, toggleTheme: () => {} });

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight;
        const progress = (containerRef.current.scrollTop / scrollHeight) * 100;
        setScrollProgress(progress);
      }
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        ref={containerRef}
        className={`${
          isDark ? 'bg-[#0E0E10] text-white' : 'bg-white text-gray-900'
        } min-h-screen overflow-y-auto transition-colors duration-300`}
      >
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <HeroSection scrollProgress={scrollProgress} />
          <StatsSection scrollProgress={scrollProgress} />
          <WhoWeAreSection scrollProgress={scrollProgress} />
          <GoalSection scrollProgress={scrollProgress} />
          <TeamSection scrollProgress={scrollProgress} />
          <AchievementsSection scrollProgress={scrollProgress} />
          <StudentsSection scrollProgress={scrollProgress} />
          <ServicesSection scrollProgress={scrollProgress} />
          <CourseLevelsSection scrollProgress={scrollProgress} />
          <SupportSection scrollProgress={scrollProgress} />
          <CTASection scrollProgress={scrollProgress} />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

const Header = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (v: boolean) => void }) => {
  const { isDark, toggleTheme } = React.useContext(ThemeContext);

  return (
    <header className={`${isDark ? 'bg-[#1a1a1c]' : 'bg-white'} sticky top-0 z-50 shadow-md transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className={`w-10 h-10 ${isDark ? 'bg-blue-600' : 'bg-blue-500'} rounded-lg flex items-center justify-center`}>
              <span className="text-white font-bold text-xl">PS</span>
            </div>
            <span className="font-bold text-xl">Problem Solver</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>Home</a>
            <a href="#about" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>About</a>
            <a href="#courses" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>Courses</a>
            <a href="#contact" className={`${isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}>Contact</a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-[#1a1a1c]' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <nav className="px-4 py-4 space-y-4">
            <a href="#home" className="block">Home</a>
            <a href="#about" className="block">About</a>
            <a href="#courses" className="block">Courses</a>
            <a href="#contact" className="block">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

const HeroSection = ({ scrollProgress }: { scrollProgress: number }) => {
  const { isDark } = React.useContext(ThemeContext);
  const opacity = Math.max(0, 1 - scrollProgress / 20);
  const scale = Math.max(0.8, 1 - scrollProgress / 100);

  return (
    <section
      style={{ opacity, transform: `scale(${scale})` }}
      className="relative py-20 px-4 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Up Your Skills To Be <br />
          <span className="text-blue-500">A Problem Solver</span>
        </h1>
        <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
          Master the art of problem-solving with our comprehensive courses
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
          Get Started
        </button>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className={`${isDark ? 'bg-[#1a1a1c]' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <img src="/api/placeholder/200/150" alt="Course 1" className="w-full h-32 object-cover rounded mb-4" />
            <h3 className="font-semibold">Web Development</h3>
          </div>
          <div className={`${isDark ? 'bg-[#1a1a1c]' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <img src="/api/placeholder/200/150" alt="Course 2" className="w-full h-32 object-cover rounded mb-4" />
            <h3 className="font-semibold">Mobile Apps</h3>
          </div>
          <div className={`${isDark ? 'bg-[#1a1a1c]' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <img src="/api/placeholder/200/150" alt="Course 3" className="w-full h-32 object-cover rounded mb-4" />
            <h3 className="font-semibold">Data Science</h3>
          </div>
          <div className={`${isDark ? 'bg-[#1a1a1c]' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
            <img src="/api/placeholder/200/150" alt="Course 4" className="w-full h-32 object-cover rounded mb-4" />
            <h3 className="font-semibold">AI & ML</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = ({ scrollProgress }: { scrollProgress: number }) => {
  const { isDark } = React.useContext(ThemeContext);
  const opacity = Math.min(1, Math.max(0, (scrollProgress - 10) / 10));

  return (
    <section style={{ opacity }} className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500 transition-opacity duration-500">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="text-white">
          <div className="text-5xl font-bold mb-2">1000+</div>
          <div className="text-xl">Students</div>
        </div>
        <div className="text-white">
          <div className="text-5xl font-bold mb-2">50+</div>
          <div className="text-xl">Courses</div>
        </div>
        <div className="text-white">
          <div className="text-5xl font-bold mb-2">98%</div>
          <div className="text-xl">Success Rate</div>
        </div>
      </div>
    </section>
  );
};

const WhoWeAreSection = ({ scrollProgress }: { scrollProgress: number }) => {
  const { isDark } = React.useContext(ThemeContext);
  const translateX = Math.max(-100, -100 + (scrollProgress - 20) * 5);

  return (
    <section className="py-20 px-4 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div style={{ transform: `translateX(${translateX}%)` }} className="transition-transform duration-500">
          <h2 className="text-4xl font-bold mb-6">Who We Are ?</h2>
          <p className="text-lg mb-8 max-w-2xl">
            We are a team of passionate educators and industry experts dedicated to helping you achieve your goals through quality education and hands-on experience.
          </p>
          <div className="flex items-center space-x-4">
            <Users className="w-12 h-12" />
            <div>
              <h3 className="text-2xl font-semibold">Expert Instructors</h3>
              <p className="text-blue-100">Learn from the best in the industry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GoalSection = ({ scrollProgress }: { scrollProgress: number }) => {
  const { isDark } = React.useContext(ThemeContext);
  const scale = Math.min(1, Math.max(0.5, (scrollProgress - 30) / 20));

  return (
    <section className={`py-20 px-4 ${isDark ? 'bg-[#0E0E10]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-500">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Goal</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/api/placeholder/500/400" alt="Goal" className="rounded-lg shadow-xl" />
            </div>
            <div>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                Our mission is to empower individuals with the skills and knowledge needed to solve real-world problems and advance their careers in technology.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span>Industry-relevant curriculum</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span>Hands-on projects</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-green-500" />
                  <span>Career support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = ({ scrollProgress }: { scrollProgress: number }) => {
  const { isDark } = React.useContext(ThemeContext);

  return (
    <section className="py-20 px-4 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="/api/placeholder/200/200" alt="Team member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-blue-200">Lead Instructor</p>
          </div>
          <div className="text-center">
            <img src="/api/placeholder/200/200" alt="Team member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-blue-200">Course Director</p>
          </div>
          <div className="text-center">
            <img src="/api/placeholder/200/200" alt="Team member" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Mike Johnson</h3>
            <p className="text-blue-200">Tech Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementsSection = ({ scrollProgress }: { scrollProgress: number }) => {
  const { isDark } = React.useContext(ThemeContext);

  return (
    <section className={`py-20 px-4 ${isDark ? 'bg-[#1a1a1c]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Achievements</h2>
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <Award className="w-16 h-16 text-yellow-500" />
            <div>
              <h3 className="text-2xl font-semibold">87K+ 2024 Students</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Growing community of learners</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Award className="w-16 h-16 text-yellow-500" />
            <div>
              <h3 className="text-2xl font-semibold">83K+ 2023 Students</h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Consistent growth year over year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StudentsSection = ({ scrollProgress }: { scrollProgress: number }) => {
  const { isDark } = React.useContext(ThemeContext);

  return (
    <section className={`py-20 px-4 ${isDark ? 'bg-[#0E0E10]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Student Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`${isDark ? 'bg-[#1a1a1c]' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
              <img src="/api/placeholder/300/200" alt="Students" className="w-full h-48 object-cover rounded mb-4" />
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                Amazing experience! The courses helped me land my dream job.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = ({ scrollProgress }: { scrollProgress: number }) => {
  const { isDark } = React.useContext(ThemeContext);

  const services = [
    { icon: Code, title: 'Programming', desc: 'Learn modern programming languages' },
    { icon: Briefcase, title: 'Career Support', desc: 'Get help with job placement' },
    { icon: BookOpen, title: 'Resources', desc: 'Access to premium learning materials' },
    { icon: Users, title: 'Community', desc: 'Join our active community' },
    { icon: Target, title: 'Projects', desc: 'Build real-world projects' },
    { icon: Award, title: 'Certificates', desc: 'Earn recognized certifications' }
  ];

  return (
    <section className="py-20 px-4 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseLevelsSection = ({ scrollProgress }: { scrollProgress: number }) => {
  const { isDark } = React.useContext(ThemeContext);

  const levels = [
    { title: 'Foundation', badge: 'Beginner', price: '$99' },
    { title: 'Intermediate', badge: 'Advanced', price: '$199' },
    { title: 'Advanced', badge: 'Expert', price: '$299' }
  ];

  return (
    <section className={`py-20 px-4 ${isDark ? 'bg-[#0E0E10]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h2 className="text-4xl font-bold mb-4">Course Levels</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Choose the perfect level for your journey</p>
        </div>

        <div className="space-y-8">
          {levels.map((level, i) => (
            <div key={i} className={`${isDark ? 'bg-[#1a1a1c]' : 'bg-gray-50'} rounded-lg p-8 shadow-lg`}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">{level.badge}</span>
                  <h3 className="text-3xl font-bold mt-4">{level.title}</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">{level.price}</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>per course</div>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Video Lessons</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Downloadable Resources</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Lifetime Access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Certificate</span>
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold w-full transition-colors">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SupportSection = ({ scrollProgress }: { scrollProgress: number }) => {
  const { isDark } = React.useContext(ThemeContext);

  return (
    <section className="py-20 px-4 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Our Support</h2>
            <p className="text-blue-100 mb-6">
              We're here to help you succeed. Our dedicated support team is available 24/7 to answer your questions and guide you through your learning journey.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-4">
            <div className="bg-white text-gray-900 p-4 rounded-lg text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
              <div className="text-sm font-semibold">5-Star Support</div>
            </div>
            <div className="bg-white text-gray-900 p-4 rounded-lg text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-sm font-semibold">Expert Team</div>
            </div>
            <div className="bg-white text-gray-900 p-4 rounded-lg text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-sm font-semibold">Proven Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ scrollProgress }: { scrollProgress: number }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready To Start Your Journey?</h2>
        <p className="text-xl mb-8">Join thousands of students who have transformed their careers</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-12 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  const { isDark } = React.useContext(ThemeContext);

  return (
    <footer className={`${isDark ? 'bg-[#1a1a1c]' : 'bg-gray-900'} text-white py-12 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">Empowering learners worldwide with quality education.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © 2025 Problem Solver. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default App;