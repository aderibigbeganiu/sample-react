import React from "react";
import "./MarketCard.scss";
import { ReactComponent as RightCaret } from "../../../assets/right-caret.svg";
import ConsumerElectronic from "../../../assets/categories/consumer-electronic.svg";
import Apparel from "../../../assets/categories/apparel.svg";
import VehicleAndAccessories from "../../../assets/categories/vehicle-and-accessories.svg";
import SportAndEntertainment from "../../../assets/categories/sport-and-entertainment.svg";
import Machinery from "../../../assets/categories/machinery.svg";
import HomeAndGarden from "../../../assets/categories/home-and-garden.svg";
import BeautyAndPersonalCare from "../../../assets/categories/beautty-and-personal-care.svg";
import AllCategories from "../../../assets/categories/all-categories.svg";

const Category = (props: any) => {
	const { image, name } = props;
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				cursor: "pointer",
				height: "25px",
				marginBlock: "20px",
			}}
		>
			<div
				style={{
					width: "30px",
					height: "30px",
					background: "#F2F2F2",
					borderRadius: "3px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					marginRight: "20px",
				}}
			>
				<img src={image} alt="consumer-electronic" />
			</div>
			<span style={{ marginRight: "auto" }}>{name}</span>
			<RightCaret />
		</div>
	);
};

const MarketCard = () => {
	return (
		<div className="market-card">
			<h3>MY MARKETS</h3>
			<hr style={{ borderTop: "0.1px solid #CA000F" }} />
			<Category image={ConsumerElectronic} name={"Consumer Electronic"} />
			<Category image={Apparel} name={"Apparel"} />
			<Category image={VehicleAndAccessories} name={"Vehical & Accessories"} />
			<Category
				image={SportAndEntertainment}
				name={"Sports & Entertaintment"}
			/>
			<Category image={Machinery} name={"Machinery"} />
			<Category image={HomeAndGarden} name={"Home & Garden"} />
			<Category image={BeautyAndPersonalCare} name={"Beauty & Personal Care"} />
			<Category image={AllCategories} name={"All Categories"} />
		</div>
	);
};

export default MarketCard;
