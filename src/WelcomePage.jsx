import React, { useState } from 'react';
import './App.css';

function WelcomePage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.container}>

      {/* Header Section */}
      <div style={styles.headerRow}>
        <img
          src="https://sdude-demo-bucket-22oct2025.s3.us-east-1.amazonaws.com/_photo_Shaik_DSC_0011a.jpg"
          alt="Shaik"
          style={styles.headerProfileImg}
        />
        <div>
          <h1 style={styles.title}>SHAIK DUDSAHEB</h1>
          <h1 style={styles.name_title}>Engineering Leader | Cloud • Mobile • AI Integration</h1>
          <p style={styles.subtitle}>Transforming business challenges into powerful digital solutions</p>
        </div>
      </div>

      {/* Content Row */}
      <div style={styles.row}>

        {/* About Me */}
        <div style={styles.column}>
          <h2 style={styles.sectionHeader}>About me</h2>
          <p style={styles.paragraph}>
            I am an experienced Project Manager & Senior Technical Lead with strong expertise in Mobile App Development,
            Cloud Automation, AI/ML solutions, Backend/API engineering, CI/CD pipelines, and Low-Code platforms (OutSystems).
            I have delivered enterprise projects in Fintech, Banking, Insurance, and E-commerce at EY, Infinite
            Computer Solutions, Mindtree, and Capgemini.
          </p>
        </div>

        {/* Projects */}
        <div style={styles.projectColumn}>
          <h2 style={styles.sectionHeader}>Projects</h2>
          
          <ul style={styles.linkList}>
            {[
              { text: "React Project (Petowners) + FastAPI", href: "/login" },
              { text: "Payment Load Simulator", href: "/paytest" },
              { text: "AI / ML Project Demos", href: "/ai-ml-demo" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  style={{
                    ...styles.link,
                    ...(hovered === index ? styles.linkHover : {})
                  }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {item.text}

                  {/* Arrow */}
                  <span style={{
                    ...styles.arrow,
                    ...(hovered === index ? styles.arrowHover : {})
                  }}>
                    ➜
                  </span>

                  {/* Underline */}
                  <span style={{
                    ...styles.underline,
                    ...(hovered === index ? styles.underlineHover : {})
                  }}/>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://sdude-demo-bucket-22oct2025.s3.us-east-1.amazonaws.com/Resume_shaik_3c_TPM.pdf"
            download
            style={styles.resumeBtn}
            onMouseEnter={(e) => Object.assign(e.target.style, styles.resumeBtnHover)}
            onMouseLeave={(e) => Object.assign(e.target.style, styles.resumeBtn)}
          >
            📥 Download Resume
          </a>
        </div>

        {/* Details */}
        <div style={styles.column}>
          <h2 style={styles.sectionHeader}>Details</h2>
          <p><strong>Name:</strong><br/> Shaik Dud Saheb</p>
          <p><strong>Experience:</strong><br/> 16+ years</p>
          <p><strong>Location:</strong><br/> Bengaluru, India</p>

          <div style={styles.socialRow}>
            <a href="http://linkedin.in/in/sdudsaheb" style={styles.socialIcon}>🔗 Linkedin</a>
          </div> 
        </div>

      </div>

      <p style={styles.footer}>© {new Date().getFullYear()} sdude.in — All Rights Reserved</p>
    </div>
  );
}

/* ============ INLINE CSS ============ */
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    background: "linear-gradient(135deg, #A8FBD3 0%, #4FB7B3 60%, #637AB9 100%)",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    height: "100%",
    width: "100%",
    color: "#31326F",
    textAlign: "center",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },

  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "40px"
  },
  headerProfileImg: {
    borderRadius: "50%",
    width: "140px",
    height: "140px",
    border: "6px solid #4FB7B3",
    boxShadow: "0 0 12px rgba(49,50,111,0.4)"
  },

  title: {
    fontSize: "25px",
    marginBottom: "5px",
    color: "#31326F",
  },
  name_title: {
    fontSize: "20px",
    marginBottom: "5px",
    color: "#31326F",
  },
  subtitle: {
    color: "#31326F",
    fontSize: "18px",
    opacity: 0.85
  },

  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "60px",
    background: "#ffffffd9",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    marginBottom: "60px",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto"
  },

  column: {
    width: "250px",
    textAlign: "left"
  },
  projectColumn: {
    width: "280px",
    textAlign: "center"
  },

  sectionHeader: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#31326F",
    borderBottom: "3px solid #637AB9",
    display: "inline-block",
    paddingBottom: "6px"
  },
  paragraph: {
    lineHeight: "1.6",
    fontSize: "15px",
    color: "#31326F",
    opacity: 0.85
  },

  socialRow: {
    marginTop: "15px",
    display: "flex",
    gap: "15px",
  },
  socialIcon: {
    fontSize: "26px",
    textDecoration: "none",
    transition: "0.3s",
    color: "#637AB9",
    cursor: "pointer"
  },

  /* PROJECT LINKS */
  linkList: {
    listStyle: "none",
    padding: 0,
    fontSize: "16px",
    marginBottom: "25px",
    textAlign: "left",
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
    cursor: "pointer",
    position: "relative",
  },
  linkHover: {
    background: "#A8FBD3",
    transform: "translateX(6px) scale(1.02)",
    boxShadow: "0 3px 6px rgba(0,0,0,0.18)",
    borderRadius: "6px"
  },

  /* Animated Arrow */
  arrow: {
    opacity: 0,
    marginLeft: "5px",
    transition: "0.25s",
    position: "relative",
    top: "1px"
  },
  arrowHover: {
    opacity: 1,
    marginLeft: "10px",
  },

  /* Underline Animation */
  underline: {
    content: "''",
    display: "block",
    height: "2px",
    width: "0%",
    background: "#4FB7B3",
    transition: "0.3s",
    marginTop: "2px"
  },
  underlineHover: {
    width: "100%",
  },

  /* Resume Button */
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
    boxShadow: "0 6px 12px rgba(49,50,111,0.4)"
  },

  footer: {
    fontSize: "13px",
    color: "#31326F",
    opacity: 0.8
  }
};

export default WelcomePage;
