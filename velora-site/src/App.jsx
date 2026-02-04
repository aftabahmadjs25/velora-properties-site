import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import BackToTop from './components/layout/BackToTop';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <div className="min-h-screen bg-dark-blue text-white selection:bg-primary selection:text-dark-blue">
      <ScrollToTop />
      <BackToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
