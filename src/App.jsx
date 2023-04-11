// import styled from "styled-components";
import "./App.css";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";

// const Container = styled.div`
// 	height: 100vh;
// 	background-color: grey;
// `;

function App() {
	return (
		<div className="app-back">
			<Hero />
			<Who />
			<Works />
			<Contact />
		</div>
	);
}

export default App;
