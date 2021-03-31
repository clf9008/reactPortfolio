import React from "react";
import instagram from "../img/instagram.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								href="https://www.instagram.com/clf03/"
								target="_blank"
								rel="noopener noreferrer">
                                <img className="img-fluid" src={instagram} alt=""/>
							</a>
							<a
								className="px-3"
								href="https://github.com/clf9008"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt=""/>
							</a>
							<a
								href="https://www.linkedin.com/in/chase-follett/"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt=""/>
							</a>
						</div>
					</div>
					<h5 className="pt-4">Chase Follett &copy; 2021</h5>
				</div>
			</div>
		);
	}
}

export default Footer;