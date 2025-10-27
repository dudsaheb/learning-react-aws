
import React, { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
//import { useAuth } from './auth/AuthContext';
import './App.css';

function WelcomePage() {
  return (
    <div style={styles.container}>
      {/* ---- Header Section ---- */}
      <div style={styles.header}>
        <img
          src="https://via.placeholder.com/150"
          alt="profile"
          style={styles.profileImg}
        />
        <h1 style={styles.title}>Welcome to sdude.in</h1>
        <h2 style={styles.name}>Shaik Dud Saheb</h2>

        <p style={styles.desc}>
          Project Manager with 16+ years of
          expertise in Software Engineering, Cloud Automation, Mobile
          Development, CI/CD, Python, AI/ML, Fintech Integrations,
          Distributed Systems, and Low-Code Platforms (OutSystems).
          Previously worked with EY, Infinite Computer Solutions, Mindtree, Capgemini and
          contributed in Banking, Fintech, Insurance, and Mobile Engineering.
        </p>
      </div>

      {/* ---- Projects Section ---- */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Explore My Project Demos</h3>
        <ul style={styles.linkList}>
          <li><a href="/react-demo" style={styles.link}>React Project (Petowners)</a></li>
          <li><a href="/paytest" style={styles.link}>Payment Load Simulator</a></li>
          <li><a href="/ai-ml-demo" style={styles.link}>AI / ML Project Demos</a></li>

        </ul>
      </div>

      {/* ---- Credentials Section ---- */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Credentials</h3>
        <p style={styles.text}>
          🔐 Use the Login page to access restricted tools, file conversion dashboards, and
          custom backend utilities.
        </p>
        <a href="/login" style={styles.button}>Go to Login</a>
      </div>

      {/* ---- Resume Download ---- */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Resume</h3>
        <a href="/Shaik_Dud_Saheb_Resume.pdf" download style={styles.resumeBtn}>
          📥 Download My Resume
        </a>
      </div>

      {/* ---- Footer ---- */}
      <p style={styles.footer}>© {new Date().getFullYear()} sdude.in — All Rights Reserved</p>
    </div>
  );
}

/* -------- Inline CSS Styles -------- */
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "30px",
    textAlign: "center",
    background: "#f1f1f1",
    minHeight: "100vh",
  },
  header: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  profileImg: {
    borderRadius: "50%",
    width: "130px",
    height: "130px",
    border: "3px solid #000",
  },
  title: {
    marginTop: "15px",
    fontSize: "28px",
    fontWeight: "700",
  },
  name: {
    fontSize: "20px",
    fontWeight: "600",
    marginTop: "5px",
  },
  desc: {
    fontSize: "15px",
    marginTop: "10px",
    color: "#444",
    lineHeight: "1.5",
  },
  section: {
    marginTop: "30px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "20px",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    fontSize: "16px",
  },
  link: {
    textDecoration: "none",
    color: "#0073e6",
    lineHeight: "2",
  },
  text: {
    color: "#333",
    fontSize: "15px",
    marginBottom: "15px",
    lineHeight: "1.5",
  },
  button: {
    padding: "10px 20px",
    background: "#000",
    color: "#fff",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "15px",
  },
  resumeBtn: {
    padding: "12px 20px",
    background: "#28a745",
    borderRadius: "6px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  footer: {
    marginTop: "40px",
    fontSize: "13px",
    color: "#555",
  },
};

export default WelcomePage;
