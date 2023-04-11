import React from "react";

function HeroContent() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6 text-center hero-text">
					<h1>Would you like to get to know new uniwerse?</h1>
					<h2>Now it is possible</h2>
					<h3>Just wait and see</h3>
					<button className="btn btn-secondary">Więcej</button>
				</div>
				<div className="col-md-6 text-center hero-img-content">
					<img
						className="hero-img-style"
						src={require("../assets/astr1.png")}
						alt={"Add more descriptive alt"}
					/>
				</div>
			</div>
		</div>
	);
}

export default HeroContent;
