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
												var dweatherModal = document.getElementById(
													"dweather"
												);
												modalBG.style.display = "block";
												dweatherModal.style.display =
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
												var boardgameModal = document.getElementById(
													"project2APP"
												);
												modalBG.style.display = "block";
												boardgameModal.style.display =
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
													"fitnessTracker"
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
							<img src={dWeather} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Destination Weather Application</h2>
							<div className="modal-description">
								<ul>
									<li>
                                        An application that allows the users to
                                        search any destianation and will pull up
                                        that locations weather, forecast for the
                                        next five days, and display a webcam of
                                        the current weather conditions of said
                                        location. 
									</li>
									<li>
										Designed with HTML5, CSS, Bootstrap,
										JavaScript, Windy API, and JQuery.
									</li>
								</ul>
							</div>
						<div className="modal-bottom">
								<a
									href="https://clf9008.github.io/Project1/index.html"
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
											"Destination Weather"
										);
										modalBG.style.display = "none";
										dWeatherModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="topboardgames" className="modal-card">
						<div className="visual">
							<img src={topboardgames} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Top Board Games</h2>
							<div className="modal-description">
								<ul>
									<li>
                                        An application that allows users to search
                                        the BoardGameAtlas API to pull up any board
                                        game, save thier favories, and even see the
                                        top 100 board games right now! In addition,
                                        users have a message board where they can
                                        sign-up, post, and discuss thier favorite
                                        board games!
									</li>
									<li>
										Developed with HTML5, CSS, Bootstrap,
										Express-Handlebars, MySQL, JavaScript,
                                        and Cloudify.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://peaceful-spire-39350.herokuapp.com/"
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
										var topboardgamesModal = document.getElementById(
											"project2APP"
										);
										modalBG.style.display = "none";
										topboardgamesModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="fitness-tracker" className="modal-card">
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
											"workoutAPP"
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