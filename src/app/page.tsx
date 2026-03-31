"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const whatsappNumber = "923111537563";
  const instructor = {
    name: "Mr. Naeem Haider",
    title: "Founding Director & Lead Instructor",
    qualifications: [
      "M.Phil. in English Literature (Distinction)",
      "Masters in English Literature (Silver Medal)",
      "MA in Urdu Literature",
      "MA in Islamic Studies & Political Science with B.Ed",
      "Diploma in TEFL",
      "Certificate in EMI (University of Southampton)",
      "TEYL (George Mason University, USA)"
    ],
    experience: "Teaching English since 2012 in colleges and public sector universities."
  };

  const courses = [
    {
      title: "Spoken English Basic",
      price: "PKR 2,999",
      duration: "6 weeks",
      features: ["Live classes", "Recordings", "WhatsApp support"]
    },
    {
      title: "Grammar Mastery",
      price: "PKR 2,499",
      duration: "4 weeks",
      features: ["Basic to Advanced", "Concept building", "Practice exercises"]
    },
    {
      title: "Pro Communication Skills",
      price: "PKR 3,999",
      duration: "8 weeks",
      features: ["Interview prep", "Public speaking", "Confidence building"]
    }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className={`main ${isMenuOpen ? 'menu-open' : ''}`}>
      {/* Sticky Navigation */}
      <nav className={`sticky-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo-section">
            <img src="/logo.png" alt="EnglishKeys Academy Logo" height="50" />
            <div className="logo-text">
              <span className="eka">EnglishKeys</span>
              <span className="academy">Academy</span>
            </div>
          </div>
          
          <div className="nav-links desktop-only">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#instructor">Instructor</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <a href={`https://wa.me/${whatsappNumber}`} className="btn btn-primary nav-cta desktop-only">
              Enroll Now
            </a>
            
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-links">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#courses" onClick={closeMenu}>Courses</a>
            <a href="#instructor" onClick={closeMenu}>Instructor</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              className="btn btn-primary mobile-cta"
              onClick={closeMenu}
            >
              Enroll Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">Unlock Your English Potential</span>
            <h1 className="hero-title">Learn English with <span className="highlight-green">Confidence</span></h1>
            <p className="hero-subtitle">
              Join 140,000+ learners improving their English with EnglishKeys Academy (EKA).
            </p>
            <div className="hero-actions">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Assalamualaikum,%20I%20want%20to%20enroll%20in%20a%20course`}
                className="btn btn-primary lg"
              >
                <i className="fab fa-whatsapp"></i> Enroll Now on WhatsApp
              </a>
              <a href="#courses" className="btn btn-outline lg">View Courses</a>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Stats */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item">
            <h2 className="stat-number">142K+</h2>
            <p className="stat-label">YouTube Subscribers</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">13M+</h2>
            <p className="stat-label">Total Views</p>
          </div>
          <div className="stat-item">
            <h2 className="stat-number">1,600+</h2>
            <p className="stat-label">Educational Videos</p>
          </div>
        </div>
      </section>

      {/* Instructor Highlight */}
      <section id="instructor" className="instructor-section">
        <div className="container instructor-grid">
          <div className="instructor-image">
            <img src="/instructor.png" alt="Sir Naeem Haider" className="main-instructor-img" />
            <div className="experience-badge">{instructor.experience}</div>
          </div>
          <div className="instructor-info">
            <span className="section-tag">Meet Your Instructor</span>
            <h2 className="section-title">{instructor.name}</h2>
            <p className="instructor-bio">
              Sir Naeem is a dedicated lecturer at a public sector university in Pakistan with over a decade of teaching excellence.
            </p>
            <div className="qualifications-list">
              {instructor.qualifications.map((q, i) => (
                <div key={i} className="qual-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header centered">
            <h2 className="section-title">Why EnglishKeys Academy?</h2>
            <p className="section-subtitle">We make learning English simple, effective, and accessible.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-comments"></i></div>
              <h3>Spoken Mastery</h3>
              <p>Overcome hesitation and speak fluent English in everyday life and professional settings.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-book-open"></i></div>
              <h3>Grammar Made Easy</h3>
              <p>Master complex rules with Sir Naeem's unique and easy-to-understand teaching method.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-user-tie"></i></div>
              <h3>Career Guidance</h3>
              <p>Get professional coaching for interviews and communication skills to boost your career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Selection */}
      <section id="courses" className="courses-section">
        <div className="container">
          <div className="section-header centered">
            <h2 className="section-title">Our Featured Courses</h2>
            <p className="section-subtitle">Premium quality learning at an affordable price.</p>
          </div>
          <div className="courses-grid">
            {courses.map((course, idx) => (
              <div key={idx} className="course-card">
                <div className="course-tag">{course.duration}</div>
                <h3 className="course-title">{course.title}</h3>
                <div className="course-price">{course.price}</div>
                <ul className="course-features">
                  {course.features.map((f, i) => <li key={i}><i className="fas fa-check"></i> {f}</li>)}
                </ul>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Assalamualaikum,%20I%20want%20to%20enroll%20in%20${course.title}`}
                  className="btn btn-primary full"
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header centered">
            <span className="hero-badge">Testimonials</span>
            <h2 className="section-title">Student Success Stories</h2>
            <p className="section-subtitle">Real results from our dedicated EKA family members.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">"Sir Naeem makes everything so easy. I was afraid of grammar, but now I love it! The way he explains concepts is truly unique."</p>
              <div className="testimonial-user">
                <div className="user-avatar" style={{ background: 'var(--primary)' }}>AR</div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Ahmed Raza</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Job Seeker</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">"Joined the Spoken course and my confidence level is now on another level. Thank you EKA for this amazing transformation!"</p>
              <div className="testimonial-user">
                <div className="user-avatar" style={{ background: 'var(--secondary)' }}>SB</div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Saira Bano</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>University Student</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">"The best platform for Urdu-speaking beginners to learn professional English. The support system is outstanding."</p>
              <div className="testimonial-user">
                <div className="user-avatar" style={{ background: 'var(--eka-blue)' }}>ZA</div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Zubair Ahmed</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Freelancer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container small">
          <div className="section-header centered">
            <span className="hero-badge">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h4><i className="fas fa-question-circle" style={{ color: 'var(--primary)', marginRight: '10px' }}></i> How do I pay the course fee?</h4>
              <p>You can pay via local methods like **JazzCash**, **EasyPaisa**, or direct bank transfer. Once you message us on WhatsApp, we will provide the current payment details.</p>
            </div>
            <div className="faq-item">
              <h4><i className="fas fa-video" style={{ color: 'var(--secondary)', marginRight: '10px' }}></i> Are live recordings available?</h4>
              <p>Yes, we understand students might miss a session. All students get lifetime access to recorded sessions of their batch so they never stop learning.</p>
            </div>
            <div className="faq-item">
              <h4><i className="fas fa-certificate" style={{ color: 'var(--eka-blue)', marginRight: '10px' }}></i> Is there a certificate?</h4>
              <p>Absolutely! EKA provides completion certificates to all successful learners, which you can use to bolster your professional CV or LinkedIn profile.</p>
            </div>
            <div className="faq-item">
              <h4><i className="fas fa-clock" style={{ color: 'var(--eka-purple)', marginRight: '10px' }}></i> What are the class timings?</h4>
              <p>We offer both morning and evening batches to accommodate students and working professionals. Contact us on WhatsApp for the latest schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo.png" alt="EKA Logo" height="40" />
            <p>EnglishKeys Academy is committed to providing quality education to underserved students in the subcontinent.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          <div className="footer-links-col">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#instructor">Instructor</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <p><i className="fas fa-phone"></i> +92 311 1537563</p>
            <p><i className="fas fa-envelope"></i> englishkeysacademy@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Online (Based in Pakistan)</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Welcome to EKA Family – Happy Learning 🎈</p>
          <p>&copy; {new Date().getFullYear()} EnglishKeys Academy. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={`https://wa.me/${whatsappNumber}`} className="floating-whatsapp" target="_blank">
        <i className="fab fa-whatsapp"></i>
      </a>
    </main>
  );
}
