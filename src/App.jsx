import Navbar from "./components/layout/Navbar";
import Hero from "./pages/home/sections/Hero";
import Statistics from "./pages/home/sections/Statistics";
import WhyChooseUs from "./pages/home/sections/WhyChooseUs";
import FeaturedProducts from "./pages/home/sections/FeaturedProducts";
import Footer from "./components/layout/Footer";
import OurStory from "./pages/home/sections/OurStory";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import HowItWorks from "./pages/home/sections/HowItWorks";
import Testimonials from "./pages/home/sections/Testimonials";
import ShippingInfo from "./pages/home/sections/ShippingInfo";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Statistics />
      <WhyChooseUs />
      <OurStory />
      <HowItWorks />
      <FeaturedProducts />
      <ShippingInfo />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;