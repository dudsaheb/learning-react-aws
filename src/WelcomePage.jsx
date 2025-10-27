import React from 'react';
import './App.css';

function WelcomePage() {
  return (
    <div style={styles.container}>

      {/* Header Section with image on left, title + subtitle on right */}
      <div style={styles.headerRow}>
        <img
          src="https://sdude-demo-bucket-22oct2025.s3.us-east-1.amazonaws.com/_photo_Shaik_DSC_0011a.jpg"
          alt="Shaik"
          style={styles.headerProfileImg}
        />
        <div>
          <h1 style={styles.title}>Profile</h1>
          <p style={styles.subtitle}>I'm a creative technology leader</p>
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

        {/* Project Links (Now Center Column) */}
        <div style={styles.projectColumn}>
          <h2 style={styles.sectionHeader}>Projects</h2>
          <ul style={styles.linkList}>
            <li><a href="/login" style={styles.link}>React Project (Petowners) + FastAPI</a></li>
            <li><a href="/paytest" style={styles.link}>Payment Load Simulator</a></li>
            <li><a href="/ai-ml-demo" style={styles.link}>AI / ML Project Demos</a></li>
          </ul>

          <a href="/Shaik_Dud_Saheb_Resume.pdf" download style={styles.resumeBtn}>📥 Download Resume</a>
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
    width: "100%",
    color: "#31326F",
    textAlign: "center",
  },

  /* HEADER IMAGE + TEXT */
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
    fontSize: "42px",
    marginBottom: "5px",
    color: "#31326F",
  },
  subtitle: {
    color: "#31326F",
    fontSize: "18px",
    opacity: 0.85
  },

  /* Main content card */
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
  },

  column: {
    width: "250px",
    textAlign: "left"
  },

  /* Projects column */
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
    color: "#637AB9"
  },

  linkList: {
    listStyle: "none",
    padding: 0,
    fontSize: "16px",
    marginBottom: "25px",
    textAlign: "left"
  },
  link: {
    textDecoration: "none",
    color: "#31326F",
    lineHeight: "2",
    fontWeight: 600,
    transition: "0.3s"
  },

  resumeBtn: {
    padding: "10px 18px",
    background: "#31326F",
    borderRadius: "6px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "15px",
    boxShadow: "0 3px 7px rgba(49,50,111,0.4)",
    transition: "0.3s"
  },

  footer: {
    fontSize: "13px",
    color: "#31326F",
    opacity: 0.8
  }
};

export default WelcomePage;
