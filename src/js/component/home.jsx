import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TrafficLight from "./TrafficLight";

//create your first component
const Home = () => {
	return (
		<div className="container d-flex flex-column align-items-center vh-100">
			<TrafficLight />
		</div>
	);
};

export default Home;
