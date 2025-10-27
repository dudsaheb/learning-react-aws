import React from 'react';
import './App.css';

function WelcomePage() {
  return (
    <div style={styles.container}>

      {/* Main Title */}
      <h1 style={styles.title}>Profile</h1>
      <p style={styles.subtitle}>I'm a creative technology leader</p>

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

        {/* Image */}
        <div style={styles.centerColumn}>
          <img
            src="/_photo_Shaik_DSC_0011a.jpg"
            alt="Shaik"
            style={styles.profileImg}
          />
        </div>

        {/* Details */}
        <div style={styles.column}>
          <h2 style={styles.sectionHeader}>Details</h2>
          <p><strong>Name:</strong><br/> Shaik Dud Saheb</p>
          <p><strong>Experience:</strong><br/> 16+ years</p>
          <p><strong>Location:</strong><br/> Bengaluru, India</p>

          {/* SOCIAL ICONS */}
          <div style={styles.socialRow}>
            <a href="https://linkedin.com" style={styles.socialIcon}>🔗</a>
            <a href="https://github.com" style={styles.socialIcon}>🐙</a>
            <a href="https://x.com" style={styles.socialIcon}>🐦</a>
          </div>
        </div>

      </div>

      {/* Project Links */}
      <div style={styles.bottomSection}>
        <h3 style={styles.sectionHeader}>Explore My Project Demos</h3>
        <ul style={styles.linkList}>
          <li><a href="/login" style={styles.link}>React Project (Petowners) + FastAPI</a></li>
          <li><a href="/paytest" style={styles.link}>Payment Load Simulator</a></li>
          <li><a href="/ai-ml-demo" style={styles.link}>AI / ML Project Demos</a></li>
        </ul>

        <a href="/Shaik_Dud_Saheb_Resume.pdf" download style={styles.resumeBtn}>📥 Download My Resume</a>
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
    minHeight: "100vh",
    color: "#31326F",
    textAlign: "center",
  },
  title: {
    fontSize: "42px",
    marginBottom: "5px",
    color: "#31326F",
  },
  subtitle: {
    color: "#31326F",
    fontSize: "18px",
    marginBottom: "50px",
    opacity: 0.85
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "60px",
    marginBottom: "60px",
    background: "#ffffffd9",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  column: {
    width: "250px",
    textAlign: "left"
  },
  centerColumn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  profileImg: {
    borderRadius: "50%",
    width: "170px",
    height: "170px",
    border: "6px solid #4FB7B3",
    boxShadow: "0 0 12px rgba(49,50,111,0.4)"
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
    cursor: "pointer",
    transition: "0.3s",
    color: "#637AB9"
  },
  bottomSection: {
    marginTop: "40px",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    fontSize: "16px",
    marginBottom: "25px"
  },
  link: {
    textDecoration: "none",
    color: "#31326F",
    lineHeight: "2",
    fontWeight: 600,
    transition: "0.3s"
  },
  resumeBtn: {
    padding: "12px 22px",
    background: "#31326F",
    borderRadius: "6px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    boxShadow: "0 3px 7px rgba(49,50,111,0.4)",
    transition: "0.3s"
  },
  footer: {
    marginTop: "50px",
    fontSize: "13px",
    color: "#31326F",
    opacity: 0.8
  }
};

export default WelcomePage;
