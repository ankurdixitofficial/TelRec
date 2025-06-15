import React from "react";
import { Link } from "react-router-dom";
import SuggestedRoles from "../components/SuggestedRoles";
import VantaBackground from "../components/VantaBackground";
import "../styles/home.css";

const Home = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "HR Director, Infosys",
      logo: "/src/assets/company-logos/infosys-logo.svg",
      quote: "This platform has transformed our talent acquisition process. The AI-powered screening has helped us identify top candidates 60% faster, significantly improving our hiring efficiency."
    },
    {
      id: 2,
      name: "Aditya Verma",
      role: "Senior Software Engineer, Wipro",
      logo: "/src/assets/company-logos/wipro-logo.svg",
      quote: "The resume optimization suggestions were game-changing. Within two weeks of using the platform, I secured interviews with three leading tech companies."
    },
    {
      id: 3,
      name: "Priya Malhotra",
      role: "Talent Acquisition Head, TCS",
      logo: "/src/assets/company-logos/tcs-logo.svg",
      quote: "The intelligent matching algorithms and analytics dashboard have revolutionized how we screen candidates. Our recruitment process is now 45% more efficient."
    }
  ];

  return (
    <div className="home-container">
      <VantaBackground />

      {/* Hero Section */}
      <section className="hero">
        <div className="s-section">
          <h1>Build Your Perfect Resume</h1>
          <p>Create professional resumes in minutes with our advanced AI tools and customizable templates.</p>
          <div className="cta-buttons">
            <Link to="/create" className="btn primary">Create Resume</Link>
            <Link to="/templates" className="btn secondary">Browse Templates</Link>
            <Link to="/upload" className="btn tertiary">Upload Resume</Link>
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section className="suggested-roles-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Explore Job Opportunities</h2>
            <p>Discover roles that match your skills and preferences</p>
          </div>
          <SuggestedRoles />
          <div className="section-footer">
            <Link to="/upload" className="upload-resume-cta">Upload your resume to get personalized job matches</Link>
            <Link to="/hr-dashboard" className="post-job-cta">Are you an employer? Post a job</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Powerful Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2a9 9 0 1 0 9 9" /><path d="M22 2 12 12" /></svg>
            </div>
            <div className="feature-title">AI-Powered Content</div>
            <div className="feature-description">Get smart suggestions to improve your resume's impact with our advanced AI tools.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
            </div>
            <div className="feature-title">Premium Templates</div>
            <div className="feature-description">Choose from dozens of professionally designed templates to stand out from the crowd.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M2 13h20" /></svg>
            </div>
            <div className="feature-title">Easy Customization</div>
            <div className="feature-description">Customize every aspect of your resume with our intuitive drag-and-drop editor.</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
            </div>
            <div className="feature-title">Job Matching</div>
            <div className="feature-description">Find the perfect job opportunities that match your skills and preferences.</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-testimonials">
        <div className="section-header">
          <h2>What People Say</h2>
          <div className="section-divider"></div>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="company-logo">
                  <img src={testimonial.logo} alt={`${testimonial.role} company logo`} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
