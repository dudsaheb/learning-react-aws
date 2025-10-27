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
            src="https://via.placeholder.com/170"
            alt="profile"
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
    background: "#ffffff",
    textAlign: "center",
  },
  title: {
    fontSize: "42px",
    marginBottom: "5px"
  },
  subtitle: {
    color: "#666",
    fontSize: "18px",
    marginBottom: "50px"
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "60px",
    marginBottom: "60px",
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
    border: "4px solid #ddd",
  },
  sectionHeader: {
    fontSize: "24px",
    marginBottom: "10px"
  },
  paragraph: {
    lineHeight: "1.6",
    fontSize: "15px",
    color: "#444"
  },
  socialRow: {
    marginTop: "15px",
    display: "flex",
    gap: "15px",
  },
  socialIcon: {
    fontSize: "24px",
    textDecoration: "none",
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
    color: "#0073e6",
    lineHeight: "2"
  },
  resumeBtn: {
    padding: "12px 22px",
    background: "#28a745",
    borderRadius: "6px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  footer: {
    marginTop: "50px",
    fontSize: "13px",
    color: "#888",
  }
};

export default WelcomePage;
