import React from "react";
import dWeather from "../img/project1APP.png";
import topboardgames from "../img/project2APP.png";
import fitnessTracker from "../img/workoutAPP.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"dweatherbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Destination Weather</h2>
									</div>
									<div>
										<button
											id="dweather-button"
											className="project-button"
											onClick={() => {
													var modalBG = document.getElementById(
													"gallery-card"
												);
												var dWeatherModal = document.getElementById(
													"dWeather"
												);
												modalBG.style.display = "block";
												dWeatherModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"boardgamebg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Top Board Games</h2>
									</div>
									<div>
										<button
											id="boardgame-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var boardgamesModal = document.getElementById(
													"boardgames"
												);
												modalBG.style.display = "block";
												boardgamesModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"fitnessbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Fitness Tracker</h2>
									</div>
									<div>
									<button
											id="fitness-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var fitnessModal = document.getElementById(
													"fitness"
												);
												modalBG.style.display = "block";
												fitnessModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="dWeather" className="modal-card">
						<div className="visual">
							<img src={dWeather} alt="Destination Weather"/>
						</div>
						<div className="modal-info">
							<h2>Destination Weather</h2>
							<div className="modal-description">
								<ul>
									<li>
                                       An application that allows users to search for the 5-day forcast at any destination vacation location. In addition, a live image will display of the destination.
									</li>
									<li>
										HTML5, CSS, Bootstrap,JavaScript, Windy API, and OpenWeather API.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
                                <a href="https://clf9008.github.io/Project1/"
                                    target="_blank"
                                    rel="noreferrer">
									<h3>View Application</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var dWeatherModal = document.getElementById(
											"dWeather"
										);
										modalBG.style.display = "none";
										dWeatherModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="boardgames" className="modal-card">
						<div className="visual">
							<img src={topboardgames} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Top Boardgames</h2>
							<div className="modal-description">
								<ul>
									<li>
                                        An application that allows users to explore the Board Game Atlas API database to find new board games, see recommended board games, and view all the popular board games on the database.
									</li>
									<li>
										JavaScript, CSS, Express-Handlebars, MySQL, Cloudify
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
                                <a href="https://peaceful-spire-39350.herokuapp.com/"
                                    target="_blank"
                                    rel="noreferrer">
									<h3>View Application</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var boardgamesModal = document.getElementById(
											"boardgames"
										);
										modalBG.style.display = "none";
										boardgamesModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="fitness" className="modal-card">
						<div className="visual">
							<img src={fitnessTracker} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Fitness Tracker</h2>
							<div className="modal-description">
								<ul>
									<li>
                                        An Application that allows users to create,
                                        update, and view current workouts. The
                                        workouts are saved in a database and are
                                        able to be recalled and view through the
                                        applications dashboard. 
									</li>
									<li>
										Developed with HTML5, CSS, Mongose, 
										Express, and JavaScript.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
                                <a href="https://clf9008fitness.herokuapp.com/?"
                                    target="_blank"
                                    rel="noreferrer">
									<h3>View Application</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var fitnessModal = document.getElementById(
											"fitness"
										);
										modalBG.style.display = "none";
										fitnessModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};