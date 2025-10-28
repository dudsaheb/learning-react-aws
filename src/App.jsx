import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './posts/PostsList';
import PostDetails from './posts/PostDetails';
import Navbar from './nav/Navbar';
import LoginPage from './auth/LoginPage';
import RegisterPage from './register/RegisterPage';
import ProtectedRoute from './auth/ProtectedRoute';
import NotFound from './auth/NotFound';
import { AuthProvider } from './auth/AuthContext';
import UserDogs from './dogs/UserDogs';
import DogsAccount from './dogs/DogsAccount';
import LoadTestPage from "./LoadTestPage";
import WelcomePage from './WelcomePage';
import PricePredictor from './components/PricePredictor';   // ✅ AI/ML page
import ResultCard from './components/ResultCard';           // ✅ Prediction results display
import HousePriceDemo from './HousePriceDemo';
import HousePricePropertyAgentDemo from './HousePricePropertyAgentDemo';

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* Global navigation (optional, enable if you want a top nav) */}
        {/* <Navbar /> */}

        <div className="custom-container">
          <Routes>

            {/* ===== Public Routes ===== */}
            <Route path="/" element={<WelcomePage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* ===== Protected Routes ===== */}
            <Route
              path="/posts"
              element={
                <ProtectedRoute>
                  <PostsList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/posts/:postId"
              element={
                <ProtectedRoute>
                  <PostDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <DogsAccount />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dogs/:user_id"
              element={
                <ProtectedRoute>
                  <UserDogs />
                </ProtectedRoute>
              }
            />

            {/* ===== Testing Utilities ===== */}
            <Route path="/loadtest" element={<LoadTestPage />} />
            <Route path="/paytest" element={<LoadTestPage />} />

            {/* ===== AI/ML Routes ===== */}
            <Route path="/predict" element={<PricePredictor />} />
            <Route path="/result" element={<ResultCard />} />
            <Route path="/house-price-ai-ml-demo" element={<HousePriceDemo />} />
            <Route path="/property-search-by-agentic-ai" element={<HousePricePropertyAgentDemo />} />

            {/* ===== Fallback ===== */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
