import React from "react";
import { Navbar } from "./Navbar";
import HeroContent from "./HeroContent";

const Hero = () => {
	return (
		<div className="hero">
			<Navbar />
			<HeroContent />
		</div>
	);
};

export default Hero;
