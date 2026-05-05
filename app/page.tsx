import About from "./components/About";
import Architecture from "./components/Architecture";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Services from "./components/Services";
import TechMarquee from "./components/TechMarquee";

const HomePage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<TechMarquee />
			<Services />
			<Architecture />
			<Experiences />
			<About />
			<Contact />
			<Footer />
		</>
	);
};

export default HomePage;
