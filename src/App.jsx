import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsList from "./posts/PostsList";
import PostDetails from "./posts/PostDetails";
import Navbar from "./nav/Navbar";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./register/RegisterPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import NotFound from "./auth/NotFound";
import { AuthProvider } from "./auth/AuthContext";
import UserDogs from "./dogs/UserDogs";
import DogsAccount from "./dogs/DogsAccount";
import LoadTestPage from "./LoadTestPage";
import WelcomePage from "./WelcomePage";
import PricePredictor from "./components/PricePredictor";
import ResultCard from "./components/ResultCard";
import HousePriceDemo from "./HousePriceDemo";
import HousePricePropertyAgentDemo from "./HousePricePropertyAgentDemo";

// ✅ Common Layout Wrapper with Header and Footer
const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar /> {/* Common Header */}
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#f7f9fb",
          borderTop: "1px solid #eaeaea",
          fontSize: "14px",
          color: "#666",
        }}
      >
        Built with ❤️ by <strong>Shaik Dud Saheb</strong> using FastAPI, React, and AWS.
      </footer>
    </div>
  );
};

// ✅ Login/Register pages without layout
const AuthLayout = ({ children }) => (
  <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f9fbff" }}>
    {children}
  </div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* ===== Public Routes (No Header/Footer) ===== */}
          <Route
            path="/login"
            element={
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            }
          />
          <Route
            path="/register"
            element={
              <AuthLayout>
                <RegisterPage />
              </AuthLayout>
            }
          />

          {/* ===== Public Routes with Header/Footer ===== */}
          <Route
            path="/"
            element={
              <Layout>
                <WelcomePage />
              </Layout>
            }
          />
          <Route
            path="/welcome"
            element={
              <Layout>
                <WelcomePage />
              </Layout>
            }
          />
          <Route
            path="/house-price-ai-ml-demo"
            element={
              <Layout>
                <HousePriceDemo />
              </Layout>
            }
          />
          <Route
            path="/property-search-by-agentic-ai"
            element={
              <Layout>
                <HousePricePropertyAgentDemo />
              </Layout>
            }
          />
          <Route
            path="/predict"
            element={
              <Layout>
                <PricePredictor />
              </Layout>
            }
          />
          <Route
            path="/result"
            element={
              <Layout>
                <ResultCard />
              </Layout>
            }
          />
          <Route
            path="/loadtest"
            element={
              <Layout>
                <LoadTestPage />
              </Layout>
            }
          />

          {/* ===== Protected Routes (Header/Footer Included) ===== */}
          <Route
            path="/posts"
            element={
              <ProtectedRoute>
                <Layout>
                  <PostsList />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts/:postId"
            element={
              <ProtectedRoute>
                <Layout>
                  <PostDetails />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Layout>
                  <DogsAccount />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dogs/:user_id"
            element={
              <ProtectedRoute>
                <Layout>
                  <UserDogs />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* ===== Fallback ===== */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
