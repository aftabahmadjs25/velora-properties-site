import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import FeaturedProperties from './components/sections/FeaturedProperties';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-blue text-white selection:bg-primary selection:text-dark-blue">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProperties />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
