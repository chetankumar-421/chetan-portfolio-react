
import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, Award, Briefcase, Code, Target, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [profileImage, setProfileImage] = useState(null);
  const [showImageUpload, setShowImageUpload] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skillsData = {
    'Programming & Databases': ['SQL (MySQL, PostgreSQL, MS SQL Server, Oracle)', 'Python (Pandas, NumPy, Matplotlib, Scikit-learn)', 'R (ggplot2, dplyr, caret)', 'Excel & Google Sheets'],
    'Data & BI': ['Tableau', 'Power BI', 'Looker', 'QlikView', 'Google Data Studio', 'Statistical Analysis'],
    'Cloud & Big Data': ['AWS (Redshift, S3, Glue, Lambda)', 'Google Cloud (BigQuery, Dataflow)', 'Azure (Synapse Analytics)', 'Snowflake', 'Hadoop', 'Apache Spark'],
    'ETL & Data Engineering': ['Airflow', 'Talend', 'Alteryx', 'SSIS', 'Kafka', 'Apache Flink', 'Data Pipeline Optimization'],
    'Analytics & ML': ['Regression Analysis', 'Classification & Clustering', 'Time Series Forecasting', 'A/B Testing', 'Predictive Modeling', 'Feature Engineering'],
    'Finance & Risk': ['Financial Modeling', 'Risk Analytics', 'Portfolio Management', 'Credit Analysis', 'Compliance Analytics']
  };

  const experience = [
    {
      role: 'Data Analyst',
      company: 'Charles Schwab',
      period: 'Jan 2024 – Present',
      location: 'Milwaukee, WI',
      highlights: [
        '10+ interactive Power BI & Tableau dashboards reducing reporting delays by 50%',
        'Optimized SQL queries reducing data retrieval from 15 min to 5 min',
        'Automated Python/Apache Airflow tasks saving 30+ hours/month with 98% error reduction',
        'Predictive analysis improving financial forecast accuracy by 15%',
        'A/B testing frameworks leading to 20% user engagement increase & $250K revenue boost',
        '8% operational cost reduction through process improvements & automation',
        'Implemented data governance ensuring 100% financial regulation compliance'
      ]
    },
    {
      role: 'Data Analyst',
      company: 'Mphasis',
      period: 'Jun 2021 – Dec 2022',
      location: 'India',
      highlights: [
        'Processed 5M+ records using SQL, Python, R identifying $500K revenue opportunities',
        'Enterprise KPI dashboards in Looker & Tableau with 12% operational cost reduction',
        'AWS migration (Redshift, S3, Glue) achieving 2x faster processing & 30% cost savings',
        '99% data quality improvement through validation frameworks',
        '20% conversion rate boost via A/B testing & marketing optimization',
        'Customer segmentation models increasing retention rates by 18%',
        '35% ETL workflow efficiency improvement through automation'
      ]
    },
    {
      role: 'Data Analyst Intern',
      company: 'Citius Tech',
      period: 'Jun 2020 – May 2021',
      location: 'India',
      highlights: [
        'Processed & validated 1M+ healthcare records ensuring 99% accuracy & HIPAA compliance',
        'Automated VBA-based reporting reducing monthly generation time by 67%',
        'ML models improving patient readmission predictions by 10%',
        'Real-time Google Data Studio dashboards for hospital administrators',
        '5% patient wait time reduction through statistical analysis',
        '95% automation of data entry reducing manual errors significantly'
      ]
    }
  ];

  const projects = [
    {
      title: 'Box Office Analysis',
      date: 'Dec 2023',
      highlights: [
        '20% increase in opening weekend revenue for 5 major film releases',
        '3 primary profitability drivers identified enhancing market positioning',
        '25% improvement in forecast accuracy via predictive regression models'
      ]
    },
    {
      title: 'Semiconductor Yield Prediction',
      date: 'May 2023',
      highlights: [
        '50+ hours/month reduction in production assessment time',
        'High-accuracy Decision Tree Classifier improving marketing effectiveness by 30%',
        '3 major production factors identified reducing misclassification rates'
      ]
    }
  ];

  const certifications = [
    'Google Data Analytics Professional',
    'Python Essentials 1 - Cisco',
    'SQL Essential Training - NASBA'
  ];

  const education = [
    { degree: 'Master of Science in Information Technology and Management', school: 'University of Wisconsin-Milwaukee', year: 'May 2024', courses: 'Web Mining, Big Data, Machine Learning, Social Media Analytics, BI Technologies' },
    { degree: 'Bachelor of Technology in Electronics and Communication Engineering', school: 'Institute of Aeronautical Engineering, Hyderabad', year: 'May 2021' }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const styles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
      50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.5); }
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInScale {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes pulse-ring {
      0% { transform: scale(1); opacity: 1; }
      100% { transform: scale(1.3); opacity: 0; }
    }
    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }
    @keyframes flip {
      0% { transform: rotateY(0deg); }
      50% { transform: rotateY(180deg); }
      100% { transform: rotateY(360deg); }
    }
    @keyframes bounce-in {
      0% { opacity: 0; transform: scale(0.3); }
      50% { opacity: 1; transform: scale(1.05); }
      100% { opacity: 1; transform: scale(1); }
    }
    .float { animation: float 3s ease-in-out infinite; }
    .glow { animation: glow 3s ease-in-out infinite; }
    .slide-in-left { animation: slideInLeft 0.8s ease-out; }
    .slide-in-right { animation: slideInRight 0.8s ease-out; }
    .slide-in-up { animation: slideInUp 0.8s ease-out; }
    .fade-in-scale { animation: fadeInScale 0.6s ease-out; }
    .pulse-ring { animation: pulse-ring 2s infinite; }
    .shimmer { animation: shimmer 2s infinite; background-size: 1000px 100%; }
    .flip { animation: flip 6s infinite; }
    .bounce-in { animation: bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <style>{styles}</style>
      
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur border-b border-slate-700 z-50 shadow-lg" style={{
        boxShadow: `0 0 20px rgba(59, 130, 246, ${Math.max(0, scrollY / 500)})`
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-lg flip" style={{ transformStyle: 'preserve-3d' }}>C</div>
              <span className="font-bold text-xl group-hover:text-blue-300 transition">Chetan</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'certifications'].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition relative text-sm ${activeSection === item ? 'text-blue-400' : 'text-slate-300 hover:text-blue-300'}`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {item}
                  {activeSection === item && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 slide-in-left"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden hover:rotate-90 transition">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 slide-in-down">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'certifications'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-slate-700 rounded transition slide-in-left"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <div className="mb-8 fade-in-scale relative">
              <div className="w-40 h-40 mx-auto mb-6 relative">
                {profileImage ? (
                  <img 
                    src={profileImage}
                    alt="Chetan Kumar Suppala"
                    className="w-full h-full rounded-full object-cover border-4 border-blue-400 glow float shadow-lg"
                  />
                ) : (
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center glow float cursor-pointer hover:shadow-xl transition" onClick={() => setShowImageUpload(true)}>
                    <span className="text-6xl font-bold">C</span>
                  </div>
                )}
              </div>
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-48 h-48 border-2 border-blue-400 rounded-full pulse-ring pointer-events-none"></div>
              
              {showImageUpload && (
                <div className="mt-6 bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 max-w-md mx-auto fade-in-scale">
                  <p className="text-slate-300 mb-4 text-center">Upload your profile picture</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setProfileImage(reader.result);
                          setShowImageUpload(false);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="w-full text-slate-300 cursor-pointer"
                  />
                </div>
              )}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent slide-in-left animate-pulse">
              Chetan Kumar Suppala
            </h1>
            <h2 className="text-2xl md:text-4xl text-slate-300 mb-6 slide-in-right">
              Data Analyst & Analytics Professional
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed slide-in-up">
              4+ years of expertise in data analysis, visualization, and business intelligence. Transforming complex datasets into actionable insights across finance, healthcare, and technology sectors.
            </p>
            <p className="text-slate-400 mb-8 slide-in-up">📍 Milwaukee, WI | 📞 +1 (414)-369-2444</p>

            {/* Animated buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105 active:scale-95 bounce-in"
              >
                Explore My Work
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="px-8 py-3 border border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition transform hover:scale-105 active:scale-95 bounce-in"
                style={{ animationDelay: '0.1s' }}
              >
                View Experience
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 text-slate-400">
              {[
                { Icon: Mail, link: 'mailto:suppalachetankumar47@gmail.com' },
                { Icon: Linkedin, link: '#' },
                { Icon: Github, link: '#' }
              ].map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  className="hover:text-blue-400 transition transform hover:scale-125 hover:-translate-y-2"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon size={28} className="bounce-in" />
                </a>
              ))}
            </div>

            {/* Animated arrow */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <ChevronDown size={32} className="animate-bounce text-blue-400" />
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="min-h-screen flex items-center py-20 px-4 pt-32 relative z-10">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent slide-in-left">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { Icon: Target, title: 'Professional Focus', text: 'Specialized in extracting, analyzing, and visualizing data to drive business strategies. Expert in ETL processes, machine learning models, and predictive analytics. Proven track record of delivering data-driven solutions that optimize operations and enhance decision-making across multiple industries.' },
                { Icon: Code, title: 'Technical Expertise', text: 'Advanced proficiency in SQL, Python (Pandas, NumPy, Scikit-learn), R, and data visualization tools (Tableau, Power BI, Looker). Strong background in AWS, Google Cloud, Azure cloud platforms, statistical analysis, and machine learning models. Skilled in data cleaning, transformation, and automation.' }
              ].map(({ Icon, title, text }, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 fade-in-scale"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon size={28} className="text-blue-400" />
                    {title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition slide-in-up">
              <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
                {[
                  '50% reduction in reporting delays through dashboard automation',
                  '$250K revenue increase from data-driven insights & A/B testing',
                  '20% user engagement boost through A/B testing frameworks',
                  '2x faster data processing after AWS cloud migration',
                  '99% data quality improvement through validation frameworks',
                  '30% operational cost savings through supply chain optimization',
                  '18% customer retention increase via predictive segmentation',
                  '35% ETL workflow efficiency improvement'
                ].map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 fade-in-scale" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <span className="text-blue-400 font-bold text-xl">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <section className="min-h-screen py-20 px-4 pt-32 relative z-10">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent slide-in-left">Professional Experience</h2>
            <div className="space-y-6 relative">
              {experience.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition transform hover:translate-x-4 hover:shadow-xl hover:shadow-blue-500/20 fade-in-scale"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{job.role}</h3>
                      <p className="text-blue-400 hover:text-cyan-400 transition">{job.company}</p>
                      <p className="text-slate-400 text-sm">{job.location}</p>
                    </div>
                    <span className="text-slate-400 text-sm bg-slate-700 px-3 py-1 rounded-full">{job.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 hover:text-cyan-300 transition slide-in-up" style={{ animationDelay: `${(idx * 0.15 + i * 0.05)}s` }}>
                        <span className="text-cyan-400 mt-1 animate-pulse">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="min-h-screen py-20 px-4 pt-32 relative z-10">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent slide-in-left">Featured Projects</h2>
            <div className="space-y-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 fade-in-scale"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-cyan-300">{project.title}</h3>
                    <span className="text-slate-400 text-sm bg-slate-700 px-3 py-1 rounded-full">{project.date}</span>
                  </div>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 slide-in-left" style={{ animationDelay: `${(idx * 0.2 + i * 0.08)}s` }}>
                        <span className="text-cyan-400 mt-1">◆</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="min-h-screen py-20 px-4 pt-32 relative z-10">
          <div className="max-w-5xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent slide-in-left">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skillsData).map(([category, items], idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 fade-in-scale group"
                  style={{ animationDelay: `${idx * 0.12}s` }}
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400 group-hover:text-cyan-400 transition">{category}</h3>
                  <div className="space-y-3">
                    {items.map((skill, i) => (
                      <div key={i} className="flex items-center gap-3 group/item hover:translate-x-2 transition slide-in-left" style={{ animationDelay: `${(idx * 0.12 + i * 0.08)}s` }}>
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full group-hover/item:scale-150 transition"></div>
                        <span className="text-slate-300 group-hover/item:text-cyan-300 transition">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {activeSection === 'education' && (
        <section className="min-h-screen py-20 px-4 pt-32 relative z-10">
          <div className="max-w-3xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent slide-in-left">Education</h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur p-8 rounded-xl border border-blue-400/30 hover:border-blue-400 transition transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 fade-in-scale"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-cyan-300">{edu.degree}</h3>
                    <span className="text-slate-400 text-sm">{edu.year}</span>
                  </div>
                  <p className="text-blue-400 font-semibold mb-2">{edu.school}</p>
                  {edu.courses && <p className="text-slate-400 text-sm">Coursework: {edu.courses}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {activeSection === 'certifications' && (
        <section className="min-h-screen py-20 px-4 pt-32 relative z-10">
          <div className="max-w-3xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent slide-in-left">Certifications & Awards</h2>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur p-6 rounded-xl border border-blue-400/30 hover:border-blue-400 transition flex items-center gap-4 transform hover:scale-105 hover:translate-x-4 hover:shadow-lg hover:shadow-blue-500/30 fade-in-scale group"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <Award size={32} className="text-blue-400 flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition" />
                  <div>
                    <p className="text-lg font-semibold group-hover:text-cyan-300 transition">{cert}</p>
                    <p className="text-slate-400 text-sm">Professional Certification</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition slide-in-up">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { Icon: Mail, text: 'suppalachetankumar47@gmail.com', link: 'mailto:suppalachetankumar47@gmail.com' },
                  { Icon: Briefcase, text: '+1 (414)-369-2444', link: 'tel:+14143692444' }
                ].map(({ Icon, text, link }, idx) => (
                  <a
                    key={idx}
                    href={link}
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition transform hover:translate-x-2 fade-in-scale"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <Icon size={24} className="text-blue-400" />
                    <span className="hover:underline">{text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer with Navigation */}
      <footer className="bg-slate-900/80 backdrop-blur border-t border-slate-700 py-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {['home', 'about', 'experience', 'projects', 'skills', 'education', 'certifications'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-4 py-2 rounded-lg capitalize transition transform hover:scale-105 ${
                  activeSection === item
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="text-center text-slate-400 hover:text-blue-400 transition cursor-pointer">© 2025 Chetan Kumar Suppala - Data Analyst. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
