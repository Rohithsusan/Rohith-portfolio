import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';

function Navigation() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          DesignCo
        </Link>
        {!isContactPage && (
          <Link
            to="/contact"
            className="bg-[#E6ff2b] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#e6d519] transition-all duration-300 hover:scale-105"
          >
            Let's Talk
          </Link>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
