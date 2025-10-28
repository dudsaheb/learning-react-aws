import React, { useState, useEffect } from 'react';
import './App.css';

function WelcomePage() {
  const [hovered, setHovered] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // ✅ Track screen size dynamically
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Device size breakpoints
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  return (
    <div
      style={{
        ...styles.container,
        ...(isMobile ? styles.containerMobile : {}),
        ...(isTablet ? styles.containerTablet : {}),
      }}
    >
      {/* Header Section */}
      <div
        style={{
          ...styles.headerRow,
          ...(isMobile ? styles.headerRowMobile : {}),
        }}
      >
        <img
          src="https://sdude-demo-bucket-22oct2025.s3.us-east-1.amazonaws.com/_photo_Shaik_DSC_0011a.jpg"
          alt="Shaik"
          style={{
            ...styles.headerProfileImg,
            ...(isMobile ? styles.headerProfileImgMobile : {}),
          }}
        />
        <div style={styles.headerText}>
          <h1
            style={{
              ...styles.title,
              ...(isMobile ? styles.titleMobile : {}),
            }}
          >
            SHAIK DUDSAHEB
          </h1>
          <h1
            style={{
              ...styles.name_title,
              ...(isMobile ? styles.name_titleMobile : {}),
            }}
          >
            Engineering Leader | Cloud • Mobile • AI Integration
          </h1>
          <p
            style={{
              ...styles.subtitle,
              ...(isMobile ? styles.subtitleMobile : {}),
            }}
          >
            Transforming business challenges into powerful digital solutions
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div
        style={{
          ...styles.row,
          ...(isMobile ? styles.rowMobile : {}),
          ...(isTablet ? styles.rowTablet : {}),
        }}
      >
        {/* About Me */}
        <div style={styles.column}>
          <h2 style={styles.sectionHeader}>About Me</h2>
          <p style={styles.paragraph}>
            I am an experienced Project Manager & Senior Technical Lead with strong expertise in Mobile App Development,
            Cloud Automation, AI/ML solutions, Backend/API engineering, CI/CD pipelines, and Low-Code platforms (OutSystems).
            I have delivered enterprise projects in Fintech, Banking, Insurance, and E-commerce at EY, Infinite
            Computer Solutions, Mindtree, and Capgemini.
          </p>
        </div>

        {/* Projects */}
        <div
          style={{
            ...styles.projectColumn,
            ...(isMobile ? styles.projectColumnMobile : {}),
          }}
        >
          <h2 style={styles.sectionHeader}>Demo Projects Portfolio</h2>          
          <ul style={styles.linkList}>
            {[
              { text: "Petowners — React (frontend) and FastAPI (backend), deployed on AWS.", href: "/login" },
              { text: "Payment Load Simulator", href: "/paytest" },
              { text: "House Price Prediction - Agentic AI", href: "/house-price-ai-ml-demo" },
              
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  style={{
                    ...styles.link,
                    ...(hovered === index ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {item.text}
                  <span
                    style={{
                      ...styles.arrow,
                      ...(hovered === index ? styles.arrowHover : {}),
                    }}
                  >
                    ➜
                  </span>
                  <span
                    style={{
                      ...styles.underline,
                      ...(hovered === index ? styles.underlineHover : {}),
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://sdude-demo-bucket-22oct2025.s3.us-east-1.amazonaws.com/Resume_shaik_3c_TPM.pdf"
            download
            style={styles.resumeBtn}
            onMouseEnter={(e) =>
              Object.assign(e.target.style, styles.resumeBtnHover)
            }
            onMouseLeave={(e) => Object.assign(e.target.style, styles.resumeBtn)}
          >
            📥 Download Resume
          </a>
        </div>

        {/* Details */}
        <div style={styles.column}>
          <h2 style={styles.sectionHeader}>Details</h2>
          <p>
            <strong>Name:</strong>
            <br /> Shaik Dud Saheb
          </p>
          <p>
            <strong>Experience:</strong>
            <br /> 16+ years
          </p>
          <p>
            <strong>Location:</strong>
            <br /> Bengaluru, India
          </p>
          <div style={styles.socialRow}>
            <a href="http://linkedin.in/in/sdudsaheb" style={styles.socialIcon}>
              🔗 Linkedin
            </a>
          </div>
        </div>
      </div>
      {/* <p>Demonstrates my technical expertise in end-to-end development — spanning frontend, backend, and API integration — and proficiency in AWS cloud infrastructure (SQS, RDS, Amplify, S3, Elastic Beanstalk, Route 53, Certificate Manager), backed by years of experience in mobile app engineering and delivery.</p> */}

      <p style={styles.footer}>
        © {new Date().getFullYear()} sdude.in — All Rights Reserved
      </p>
    </div>
  );
}

/* ✅ INLINE RESPONSIVE STYLES */
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    background: "linear-gradient(135deg, #A8FBD3 0%, #4FB7B3 60%, #637AB9 100%)",
    minHeight: "100vh",
    color: "#31326F",
    textAlign: "center",
  },
  containerTablet: {
    padding: "30px",
  },
  containerMobile: {
    padding: "20px",
  },

  /* Header */
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
  headerRowMobile: {
    flexDirection: "column",
    textAlign: "center",
    gap: "15px",
  },
  headerProfileImg: {
    borderRadius: "50%",
    width: "140px",
    height: "140px",
    border: "6px solid #4FB7B3",
    boxShadow: "0 0 12px rgba(49,50,111,0.4)",
  },
  headerProfileImgMobile: {
    width: "120px",
    height: "120px",
  },
  headerText: {
    maxWidth: "500px",
  },
  title: { fontSize: "25px", marginBottom: "5px" },
  titleMobile: { fontSize: "22px" },
  name_title: { fontSize: "20px", marginBottom: "5px" },
  name_titleMobile: { fontSize: "18px" },
  subtitle: { fontSize: "18px", opacity: 0.85 },
  subtitleMobile: { fontSize: "16px" },

  /* Content layout */
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "40px",
    background: "#ffffffd9",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    flexWrap: "nowrap",
  },
  rowTablet: {
    flexWrap: "wrap",
    gap: "30px",
  },
  rowMobile: {
    flexDirection: "column",
    gap: "20px",
    padding: "25px",
  },

  column: { width: "250px", textAlign: "left" },
  projectColumn: {
    width: "280px",
    textAlign: "center",
    background: "#F2F4F8CC",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
  },
  projectColumnMobile: {
    width: "100%",
  },

  sectionHeader: {
    fontSize: "22px",
    marginBottom: "10px",
    borderBottom: "3px solid #637AB9",
    display: "inline-block",
    paddingBottom: "6px",
  },
  paragraph: { lineHeight: "1.6", fontSize: "15px" },

  /* Social + links */
  socialRow: { marginTop: "15px", display: "flex", gap: "15px" },
  socialIcon: {
    fontSize: "20px",
    textDecoration: "none",
    transition: "0.3s",
    color: "#637AB9",
  },

  linkList: {
    listStyle: "none",
    padding: 0,
    marginBottom: "25px",
  },
  link: {
    textDecoration: "none",
    color: "#31326F",
    lineHeight: "2.4",
    fontWeight: 600,
    transition: "0.25s",
    display: "block",
    padding: "8px 12px",
    borderRadius: "6px",
  },
  linkHover: {
    background: "#A8FBD3",
    transform: "translateX(6px) scale(1.02)",
    boxShadow: "0 3px 6px rgba(0,0,0,0.18)",
  },
  arrow: { opacity: 0, marginLeft: "5px", transition: "0.25s" },
  arrowHover: { opacity: 1, marginLeft: "10px" },
  underline: {
    display: "block",
    height: "2px",
    width: "0%",
    background: "#4FB7B3",
    transition: "0.3s",
    marginTop: "2px",
  },
  underlineHover: { width: "100%" },

  resumeBtn: {
    padding: "10px 18px",
    background: "#31326F",
    borderRadius: "6px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "15px",
    boxShadow: "0 3px 7px rgba(49,50,111,0.4)",
    transition: "0.3s",
    display: "inline-block",
    marginTop: "10px",
  },
  resumeBtnHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(49,50,111,0.4)",
  },
  footer: {
    fontSize: "13px",
    marginTop: "20px",
    color: "#31326F",
    opacity: 0.8,
  },
};

export default WelcomePage;
