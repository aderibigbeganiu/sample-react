import React from "react";
import "./PromotionCard.scss";
import Slider from "react-slick";
import Bulldozer1 from "../../../assets/Bulldozer 1.png";

function PromotionCard() {
	const settings = {
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<div className="promotion-card">
			<Slider {...settings}>
				<div>
					<img className="promotion-image" src={Bulldozer1} alt="Bulldozer1" />
				</div>
				<div>
					<img className="promotion-image" src={Bulldozer1} alt="Bulldozer1" />
				</div>
			</Slider>
			<div className="promotion-text-container">Promotion</div>
		</div>
	);
}

export default PromotionCard;
