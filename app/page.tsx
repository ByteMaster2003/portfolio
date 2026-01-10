import About from "./components/About";
import Architecture from "./components/Architecture";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechMarquee from "./components/TechMarquee";

const HomePage = () => {
	return (
		<>
			<Hero />
			<TechMarquee />
			<Services />
			<Architecture />
			<Experiences />
			<About />
			<Contact />
		</>
	);
};

export default HomePage;
