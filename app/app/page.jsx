import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Bus, Users, BookOpen, Award, Star, Heart, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export default function AnantPragnaSchool() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      nav: { home: 'Home', about: 'About', classes: 'Classes', why: 'Why Us', testimonials: 'Parents Say', contact: 'Contact' },
      hero: {
        title: 'Anant Pradnya School',
        subtitle: 'Where Excellence Meets Joy in Learning',
        tagline: 'शिक्षा हे आचरणे | Education is Character',
        cta: 'Start Admission',
        cta2: 'Schedule Tour'
      },
      about: {
        title: 'Our Vision',
        desc: 'We nurture confident, compassionate learners who excel academically while developing strong character values. Every child deserves education that sparks joy and builds future leaders.',
        values: ['Excellence', 'Trust', 'Growth', 'Care']
      },
      classes: {
        title: 'Learning Programs',
        items: [
          { name: 'Nursery', icon: '🎨', color: 'from-pink-400' },
          { name: 'LKG', icon: '📚', color: 'from-purple-400' },
          { name: 'UKG', icon: '✏️', color: 'from-blue-400' },
          { name: 'Classes 1-5', icon: '🎓', color: 'from-green-400' },
          { name: 'Classes 6-8', icon: '⭐', color: 'from-yellow-400' }
        ]
      },
      features: {
        title: 'What Makes Us Special',
        items: [
          { title: 'Expert Teachers', desc: 'TEFL/TESOL Certified & Passionate Educators', icon: 'users' },
          { title: 'Safe Transport', desc: 'Dedicated School Bus Fleet with GPS Tracking', icon: 'bus' },
          { title: 'Bilingual Excellence', desc: 'English + Marathi Medium Quality Education', icon: 'book' },
          { title: 'Activities Galore', desc: 'Sports, Arts, Music, Drama & Cultural Programs', icon: 'award' },
          { title: 'Modern Facilities', desc: 'Smart Classrooms, Library & Play Areas', icon: 'zap' },
          { title: 'Individual Focus', desc: 'Small Class Sizes for Personalized Attention', icon: 'heart' }
        ]
      },
      stats: {
        students: '500+',
        teachers: '25+',
        years: '3+',
        satisfaction: '98%'
      },
      testimonials: [
        {
          name: 'Mrs. Priya Sharma',
          child: 'Aditya (Grade 3)',
          text: 'Anant Pradnya transformed our son\'s confidence. The teachers truly care about each child\'s growth!',
          rating: 5
        },
        {
          name: 'Mr. Rajesh Patel',
          child: 'Isha (Grade 1)',
          text: 'The bilingual approach and focus on values is exactly what we were looking for. Highly recommended!',
          rating: 5
        },
        {
          name: 'Mrs. Anjali Deshmukh',
          child: 'Rohan (Nursery)',
          text: 'Our daughter loves going to school every day. The environment is so warm and nurturing!',
          rating: 5
        }
      ],
      admissions: {
        title: 'Admissions Open Now',
        subtitle: 'Nursery to Grade 8',
        classes: 'Limited Seats | High Demand',
        desc: 'Join our growing community of happy learners. Schedule your campus visit today!'
      },
      contact: {
        title: 'Reach Out Today',
        address: 'Khandala, Vaijapur',
        location: 'Aurangabad (Sambhajinagar), Maharashtra',
        phones: ['965-720-8916', '942-098-9816', '920-995-8215', '935-921-2114'],
        cta: 'Schedule Campus Visit'
      }
    },
    mr: {
      nav: { home: 'होम', about: 'आमच्या बद्दल', classes: 'वर्ग', why: 'का आम्ही', testimonials: 'पालकांचे मत', contact: 'संपर्क' },
      hero: {
        title: 'अनंत प्रज्ञा स्कूल',
        subtitle: 'जेथे उत्कृष्टता आणि आनंद शिक्षणात मिळतात',
        tagline: 'शिक्षा हे आचरणे | विद्वान् सर्वत्र पूज्यते',
        cta: 'प्रवेश सुरू करा',
        cta2: 'भेट ठेवा'
      },
      about: {
        title: 'आमचा दृष्टिकोन',
        desc: 'आम्ही आत्मविश्वासी, करुणाशील शिक्षार्थ्यांचा विकास करतो जे शैक्षणिक उत्कृष्टता साध्य करतात तर मजबूत चरित्र मूल्यांचा विकास करतात.',
        values: ['उत्कृष्टता', 'विश्वास', 'विकास', 'काळजी']
      },
      classes: {
        title: 'शिक्षण कार्यक्रम',
        items: [
          { name: 'नर्सरी', icon: '🎨', color: 'from-pink-400' },
          { name: 'एलकेजी', icon: '📚', color: 'from-purple-400' },
          { name: 'यूकेजी', icon: '✏️', color: 'from-blue-400' },
          { name: 'वर्ग १-५', icon: '🎓', color: 'from-green-400' },
          { name: 'वर्ग ६-८', icon: '⭐', color: 'from-yellow-400' }
        ]
      },
      features: {
        title: 'आम्हें काय विशेष करते',
        items: [
          { title: 'विशेषज्ञ शिक्षक', desc: 'TEFL/TESOL प्रमाणित आणि उत्साही शिक्षक', icon: 'users' },
          { title: 'सुरक्षित वाहतूक', desc: 'GPS ट्र्यांकिंगसह समर्पित स्कूल बस', icon: 'bus' },
          { title: 'द्विभाषिक उत्कृष्टता', desc: 'इंग्रजी + मराठी माध्यम गुणवत्ता शिक्षा', icon: 'book' },
          { title: 'क्रियाकलाप गणना', desc: 'खेल, कला, संगीत, नाटक आणि सांस्कृतिक कार्यक्रम', icon: 'award' },
          { title: 'आधुनिक सुविधा', desc: 'स्मार्ट कक्षा, लायब्रेरी आणि खेळ क्षेत्र', icon: 'zap' },
          { title: 'व्यक्तिगत लक्ष', desc: 'व्यक्तिगत लक्षाकरिता छोटे वर्ग आकार', icon: 'heart' }
        ]
      },
      stats: {
        students: '500+',
        teachers: '25+',
        years: '3+',
        satisfaction: '98%'
      },
      testimonials: [
        {
          name: 'श्रीमती प्रिया शर्मा',
          child: 'आदित्य (वर्ग ३)',
          text: 'अनंत प्रज्ञाने आमच्या मुलाचे आत्मविश्वास वाढवले. शिक्षक खरोखर प्रत्येक मुलाच्या विकासाची काळजी घेतात!',
          rating: 5
        },
        {
          name: 'श्री राजेश पटेल',
          child: 'इशा (वर्ग १)',
          text: 'द्विभाषिक दृष्टिकोन आणि मूल्यांवर लक्ष हेच आम्हाला हवे होते. अत्यंत शिफारस!',
          rating: 5
        },
        {
          name: 'श्रीमती अंजली देशमुख',
          child: 'रोहन (नर्सरी)',
          text: 'आमची मुलगी दररोज शाळेला जाण्यास आनंदित असते. वातावरण अत्यंत उष्ण आणि पोषक आहे!',
          rating: 5
        }
      ],
      admissions: {
        title: 'आता प्रवेश उघडे आहेत',
        subtitle: 'नर्सरी ते वर्ग ८',
        classes: 'मर्यादित आसन | उच्च मागणी',
        desc: 'आमच्या खुशीतून शिकणाऱ्या समुदायात सामील व्हा. आजच परिसर भेटीचे वेळ ठेवा!'
      },
      contact: {
        title: 'आज संपर्क साधा',
        address: 'खंडाळा, वैजापूर',
        location: 'औरंगाबाद (संभाजीनगर), महाराष्ट्र',
        phones: ['965-720-8916', '942-098-9816', '920-995-8215', '935-921-2114'],
        cta: 'परिसर भेटीचे वेळ ठेवा'
      }
    }
  };

  const t = content[language];

  const HappyKidSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <circle cx="100" cy="80" r="35" fill="#f5a962"/>
      <circle cx="85" cy="75" r="6" fill="#000"/>
      <circle cx="115" cy="75" r="6" fill="#000"/>
      <path d="M 95 90 Q 100 95 105 90" stroke="#000" strokeWidth="2" fill="none"/>
      <path d="M 70 60 Q 75 50 85 55" stroke="#f5a962" strokeWidth="3" fill="none"/>
      <path d="M 130 60 Q 125 50 115 55" stroke="#f5a962" strokeWidth="3" fill="none"/>
      <rect x="70" y="110" width="60" height="50" rx="5" fill="#ff6b9d"/>
      <rect x="65" y="120" width="15" height="40" fill="#f5a962"/>
      <rect x="120" y="120" width="15" height="40" fill="#f5a962"/>
    </svg>
  );

  const BooksSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect x="40" y="60" width="50" height="80" rx="3" fill="#ff6b6b" transform="rotate(-15 65 100)"/>
      <rect x="45" y="65" width="40" height="70" fill="#fff" transform="rotate(-15 65 100)"/>
      <rect x="110" y="50" width="50" height="80" rx="3" fill="#4ecdc4" transform="rotate(15 135 90)"/>
      <rect x="115" y="55" width="40" height="70" fill="#fff" transform="rotate(15 135 90)"/>
      <line x1="50" y1="70" x2="80" y2="70" stroke="#999" strokeWidth="2" transform="rotate(-15 65 100)"/>
      <line x1="50" y1="80" x2="80" y2="80" stroke="#999" strokeWidth="2" transform="rotate(-15 65 100)"/>
      <line x1="50" y1="90" x2="80" y2="90" stroke="#999" strokeWidth="2" transform="rotate(-15 65 100)"/>
    </svg>
  );

  const BusSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect x="30" y="70" width="140" height="60" rx="10" fill="#ffd700"/>
      <rect x="35" y="60" width="130" height="20" fill="#4ecdc4"/>
      <circle cx="55" cy="140" r="12" fill="#333"/>
      <circle cx="145" cy="140" r="12" fill="#333"/>
      <circle cx="55" cy="140" r="6" fill="#fff"/>
      <circle cx="145" cy="140" r="6" fill="#fff"/>
      <rect x="45" y="75" width="20" height="15" fill="#87ceeb"/>
      <rect x="75" y="75" width="20" height="15" fill="#87ceeb"/>
      <rect x="105" y="75" width="20" height="15" fill="#87ceeb"/>
      <rect x="135" y="75" width="20" height="15" fill="#87ceeb"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-sky-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full p-2 border-4 border-sky-400 shadow-lg hover:shadow-xl transition">
                <div className="w-full h-full text-3xl flex items-center justify-center font-bold text-sky-700">
                  अ
                </div>
              </div>
              <div>
                <h1 className="font-bold text-sky-900 text-lg leading-tight">Anant Pradnya</h1>
                <p className="text-xs text-sky-600 font-bold">SCHOOL, KHANDALA</p>
                <p className="text-xs text-sky-700 italic">विद्वान् सर्वत्र पूज्यते</p>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <button key={key} className="text-sky-900 hover:text-sky-600 font-bold text-sm transition duration-200 pb-1 border-b-2 border-transparent hover:border-sky-400">
                  {label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
                className="px-4 py-2 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white rounded-full font-bold text-sm transition shadow-md"
              >
                {language === 'en' ? 'मराठी' : 'EN'}
              </button>
              <button className="lg:hidden text-sky-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden pb-6 space-y-3 border-t border-sky-200 pt-4">
              {Object.entries(t.nav).map(([key, label]) => (
                <button key={key} className="block w-full text-left px-4 py-3 text-sky-900 hover:bg-sky-50 rounded-lg font-bold transition">
                  {label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-100 via-blue-50 to-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200 rounded-full opacity-10 blur-3xl -mr-40 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-10 blur-3xl -ml-40 -mb-40"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-6 py-3 bg-sky-100 border-2 border-sky-400 rounded-full shadow-md">
                <p className="text-sky-700 font-bold text-sm">{t.hero.tagline}</p>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black text-sky-900 mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-2xl text-sky-700 mb-10 font-semibold leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition transform hover:scale-105 duration-200 flex items-center justify-center space-x-2">
                  <span>{t.hero.cta}</span>
                  <ArrowRight size={24} />
                </button>
                <button className="border-3 border-sky-500 text-sky-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-sky-50 transition">
                  {t.hero.cta2}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t-2 border-sky-200">
                <div>
                  <p className="text-3xl font-black text-sky-600">{t.stats.students}</p>
                  <p className="text-sky-700 font-semibold">Happy Students</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-sky-600">{t.stats.teachers}</p>
                  <p className="text-sky-700 font-semibold">Expert Teachers</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-blue-200 rounded-3xl opacity-30 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-2xl border-4 border-sky-300">
                <div className="w-full h-80">
                  <HappyKidSVG />
                </div>
                <div className="text-center mt-4">
                  <p className="text-sky-900 font-bold text-lg">Happy Learning! 🎉</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 lg:h-96 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl border-4 border-sky-300">
                <div className="w-full h-80">
                  <BooksSVG />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block bg-sky-100 text-sky-700 px-6 py-2 rounded-full text-sm font-bold mb-6 border-2 border-sky-400">आमचा दृष्टिकोन | OUR VISION</span>
              <h2 className="text-5xl font-black mb-6 text-sky-900">{t.about.title}</h2>
              <p className="text-xl text-sky-800 leading-relaxed mb-10">{t.about.desc}</p>

              <div className="grid grid-cols-2 gap-4">
                {t.about.values.map((value, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-sky-50 p-4 rounded-xl border-2 border-sky-200">
                    <CheckCircle className="text-sky-600 flex-shrink-0" size={28} />
                    <span className="font-bold text-sky-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-sky-100 text-sky-700 px-6 py-2 rounded-full text-sm font-bold mb-6 border-2 border-sky-400">कार्यक्रम | PROGRAMMES</span>
            <h2 className="text-5xl font-black text-sky-900">{t.classes.title}</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {t.classes.items.map((item, i) => (
              <div key={i} className="group">
                <div className={`bg-gradient-to-br ${item.color} to-pink-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-4 h-full flex flex-col items-center justify-center text-center`}>
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <h3 className="font-black text-white text-lg">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-sky-100 text-sky-700 px-6 py-2 rounded-full text-sm font-bold mb-6 border-2 border-sky-400">विशेषता | WHY US</span>
            <h2 className="text-5xl font-black text-sky-900">{t.features.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t.features.items.map((item, i) => {
              const IconMap = { users: Users, bus: Bus, book: BookOpen, award: Award, zap: Zap, heart: Heart };
              const Icon = IconMap[item.icon];
              return (
                <div key={i} className="group bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border-4 border-sky-200 hover:border-sky-400 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-sky-400 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg">
                    <Icon className="text-white" size={40} />
                  </div>
                  <h3 className="font-black text-2xl text-sky-900 mb-3">{item.title}</h3>
                  <p className="text-sky-700 leading-relaxed text-lg font-semibold">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-4 gap-8 bg-gradient-to-r from-sky-400 to-blue-500 rounded-3xl p-12 shadow-2xl text-white">
            <div className="text-center">
              <p className="text-5xl font-black mb-3">{t.stats.students}</p>
              <p className="text-lg font-bold">Active Students</p>
            </div>
            <div className="text-center border-l-4 border-blue-300">
              <p className="text-5xl font-black mb-3">{t.stats.teachers}</p>
              <p className="text-lg font-bold">Dedicated Teachers</p>
            </div>
            <div className="text-center border-l-4 border-blue-300">
              <p className="text-5xl font-black mb-3">{t.stats.years}</p>
              <p className="text-lg font-bold">Years of Excellence</p>
            </div>
            <div className="text-center border-l-4 border-blue-300">
              <p className="text-5xl font-black mb-3">{t.stats.satisfaction}</p>
              <p className="text-lg font-bold">Parent Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-sky-100 text-sky-700 px-6 py-2 rounded-full text-sm font-bold mb-6 border-2 border-sky-400">माता-पितांचे मत | PARENTS SAY</span>
            <h2 className="text-5xl font-black text-sky-900">What Parents Love About Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.map((testimonial, i) => (
              <div
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`p-8 rounded-3xl shadow-lg transition transform cursor-pointer border-4 ${
                  activeTestimonial === i
                    ? 'bg-gradient-to-br from-yellow-100 to-orange-100 border-yellow-400 -translate-y-2 shadow-2xl'
                    : 'bg-white border-sky-200 hover:border-sky-400'
                }`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={24} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sky-800 text-lg font-semibold mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t-2 border-sky-200 pt-4">
                  <p className="font-black text-sky-900 text-lg">{testimonial.name}</p>
                  <p className="text-sky-600 font-semibold text-sm">{testimonial.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bus Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-sky-100 text-sky-700 px-6 py-2 rounded-full text-sm font-bold mb-6 border-2 border-sky-400">सेवा | SERVICE</span>
              <h2 className="text-5xl font-black text-sky-900 mb-6">Safe & Reliable Transport</h2>
              <p className="text-xl text-sky-800 mb-8 leading-relaxed">
                Dedicated school bus fleet with GPS tracking, trained drivers, and regular safety checks. Your child's safety is our priority!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-sky-50 p-4 rounded-xl border-2 border-sky-200">
                  <CheckCircle className="text-sky-600 flex-shrink-0" size={32} />
                  <span className="font-bold text-sky-900">GPS Tracking Available</span>
                </div>
                <div className="flex items-center space-x-4 bg-sky-50 p-4 rounded-xl border-2 border-sky-200">
                  <CheckCircle className="text-sky-600 flex-shrink-0" size={32} />
                  <span className="font-bold text-sky-900">Trained & Verified Drivers</span>
                </div>
                <div className="flex items-center space-x-4 bg-sky-50 p-4 rounded-xl border-2 border-sky-200">
                  <CheckCircle className="text-sky-600 flex-shrink-0" size={32} />
                  <span className="font-bold text-sky-900">Regular Maintenance Checks</span>
                </div>
              </div>
            </div>

            <div className="relative h-80 lg:h-96">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl p-8 shadow-2xl border-4 border-sky-300">
                <div className="w-full h-80">
                  <BusSVG />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">🎓</div>
          <div className="absolute bottom-10 right-10 text-6xl animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
          <div className="absolute top-1/2 left-1/4 text-5xl animate-pulse">📚</div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl font-black text-white mb-4">{t.admissions.title}</h2>
          <p className="text-2xl font-bold text-sky-100 mb-2">{t.admissions.subtitle}</p>
          <p className="text-xl text-sky-100 mb-12 font-semibold">{t.admissions.classes}</p>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed text-sky-50">{t.admissions.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-black text-lg hover:bg-sky-100 transition shadow-xl transform hover:scale-105">
              {t.contact.cta}
            </button>
            <button className="border-3 border-white text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white hover:bg-opacity-10 transition">
              Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-sky-100 text-sky-700 px-6 py-2 rounded-full text-sm font-bold mb-6 border-2 border-sky-400">संपर्क | CONTACT</span>
            <h2 className="text-5xl font-black text-sky-900">{t.contact.title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-8 rounded-3xl border-4 border-sky-300 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="font-black text-sky-900 mb-2 text-xl">{t.contact.address}</h3>
                    <p className="text-sky-700 font-semibold text-lg">{t.contact.location}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl border-4 border-sky-300 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-4 rounded-full flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="font-black text-sky-900 mb-4 text-xl">Direct Line</h3>
                    <div className="space-y-2">
                      {t.contact.phones.map((phone, i) => (
                        <a 
                          key={i} 
                          href={`tel:${phone.replace(/-/g, '')}`} 
                          className="block text-sky-700 hover:text-sky-900 font-black text-lg transition hover:translate-x-1"
                        >
                          📞 {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl border-4 border-sky-300">
              <form className="space-y-6">
                <div>
                  <label className="block text-sky-900 font-black mb-2">Parent/Guardian Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 border-3 border-sky-300 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 font-semibold text-lg"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-sky-900 font-black mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 border-3 border-sky-300 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 font-semibold text-lg"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sky-900 font-black mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    className="w-full px-6 py-4 border-3 border-sky-300 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 font-semibold text-lg"
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <label className="block text-sky-900 font-black mb-2">Child's Grade/Age *</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 border-3 border-sky-300 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 font-semibold text-lg"
                    placeholder="e.g., Grade 2 or Age 5"
                  />
                </div>
                <div>
                  <label className="block text-sky-900 font-black mb-2">Message</label>
                  <textarea 
                    className="w-full px-6 py-4 border-3 border-sky-300 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-200 font-semibold text-lg resize-none"
                    placeholder="Tell us about your child..."
                    rows="4"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black py-4 rounded-xl hover:shadow-2xl transition transform hover:scale-105 text-lg"
                >
                  Send Message & Schedule Tour
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-sky-900 via-blue-900 to-blue-800 text-white py-16 px-4 border-t-4 border-sky-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-black text-2xl mb-4">Anant Pradnya School</h3>
              <p className="text-sky-200 font-semibold leading-relaxed">Building confident learners with strong character values through bilingual excellence.</p>
            </div>
            <div>
              <h3 className="font-black text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sky-200 font-semibold">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Our Programs</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-xl mb-4">Connect</h3>
              <p className="text-sky-200 font-semibold mb-2">📞 965-720-8916</p>
              <p className="text-sky-200 font-semibold">📍 Khandala, Vaijapur</p>
            </div>
          </div>
          
          <div className="border-t-2 border-sky-700 pt-8 text-center text-sky-200">
            <p className="font-bold text-lg mb-2">विद्वान् सर्वत्र पूज्यते</p>
            <p className="font-semibold">© 2024 Anant Pradnya School. Excellence in Education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
