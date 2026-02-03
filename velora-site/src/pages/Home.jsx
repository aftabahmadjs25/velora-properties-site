import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import FeaturedProperties from '../components/sections/FeaturedProperties';
import Testimonials from '../components/sections/Testimonials';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <FeaturedProperties />
            <Testimonials />
            <Blog />
            <Contact />
        </>
    );
};

export default Home;
