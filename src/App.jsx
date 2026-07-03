import Navbar from "./components/layout/Navbar";
import Hero from "./pages/home/sections/Hero";
import Statistics from "./pages/home/sections/Statistics";
import WhyChooseUs from "./pages/home/sections/WhyChooseUs";
import FeaturedProducts from "./pages/home/sections/FeaturedProducts";
import Footer from "./components/layout/Footer";
import OurStory from "./pages/home/sections/OurStory";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Statistics />
      <WhyChooseUs />
      <OurStory />
      <FeaturedProducts />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;