import React from "react";
import "./TopNav.scss";
import { ReactComponent as InstagramIcon } from "../../assets/social-icon/instagram.svg";
import { ReactComponent as YouTubeIcon } from "../../assets/social-icon/youtube.svg";
import { ReactComponent as FacebookIcon } from "../../assets/social-icon/facebook.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/social-icon/linkedin.svg";

function TopNav() {
	return (
		<div className="top-nav">
			{/* <ul className="nav-ul">
				<li className="nav-li">WHISHLIST</li>
				<li className="nav-li">PAINER</li>
				<li className="nav-li">MON COMPTE</li>
			</ul> */}
			<div className="nav-ul">
				Start an ecommerce business in 2022.
				<a
					href="/#"
					style={{
						textDecoration: "underline",
						color: "#fff",
						marginLeft: "10px",
					}}
				>
					8 steps to get started
				</a>
			</div>
			{/* <div className="nav-text">
				Bienvenue Sur Votre Plateforme De Commerce en Ligm
			</div> */}
			<ul className="nav-social-ul">
				<li className="nav-social-li">
					<InstagramIcon className="nav-social-icon" />
				</li>
				<li className="nav-social-li">
					<YouTubeIcon className="nav-social-icon" />
				</li>
				<li className="nav-social-li">
					<FacebookIcon className="nav-social-icon" />
				</li>
				<li className="nav-social-li">
					<LinkedInIcon className="nav-social-icon" />
				</li>
			</ul>
		</div>
	);
}

export default TopNav;
