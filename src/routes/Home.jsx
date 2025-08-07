import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Tour from "../components/Tour";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        title="Your Journey, Our Passion!"
        text="Discover More, Explore More, Be More with Explorex!"
        btnText="Set Plan"
        btnClass="show"
        url="/"
      />
      <Destination />
      <Tour />
      <Footer />
    </>
  );
};

export default Home;
