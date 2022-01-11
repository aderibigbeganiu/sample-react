import React from "react";
import "./SalesCard.scss";
import { ReactComponent as RightCaret } from "../../../assets/right-caret.svg";
import FlashDeals from "../../../assets/FlashDeals.png";
import CustomizedProducts from "../../../assets/CustomizedProducts.png";
import Dropshiping from "../../../assets/Dropshiping.png";
import TopRankedProducts from "../../../assets/TopRankedProducts.png";
import capimage from "../../../assets/capimage.png";
import jacketimag from "../../../assets/jacketimag.png";
import shoeimage from "../../../assets/shoeimage.png";
import croptopimage from "../../../assets/croptopimage.png";
import wigstand from "../../../assets/wigstand.png";
import dressimage from "../../../assets/dressimage.png";
import sweatshirt from "../../../assets/sweatshirt.png";
import watchandbangle from "../../../assets/watchandbangle.png";
import material from "../../../assets/material.png";
import watches from "../../../assets/watches.png";
import ring from "../../../assets/ring.png";
import armlesscoat from "../../../assets/armlesscoat.png";

const CardContainer = (props: any) => {
	const { headerText, image } = props;

	let card;
	switch (headerText) {
		case "Ready to ship products":
			card = (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						backgroundColor: "#fff",
						borderRadius: "0 0 5px 5px",
						height: "210px",
					}}
				>
					<Card
						offPercentBGColor={"red"}
						price={"$70.50"}
						offPercent={"-76%"}
						vendor={"1233 vendus"}
						image={capimage}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$70.50"}
						offPercent={"-76%"}
						vendor={"1233 vendus"}
						image={jacketimag}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$70.50"}
						offPercent={"-76%"}
						vendor={"1233 vendus"}
						image={shoeimage}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$70.50"}
						offPercent={"-76%"}
						vendor={"1233 vendus"}
						image={capimage}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$70.50"}
						offPercent={"-76%"}
						vendor={"1233 vendus"}
						image={jacketimag}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$70.50"}
						offPercent={"-76%"}
						vendor={"1233 vendus"}
						image={shoeimage}
					/>
				</div>
			);
			break;
		case "Flash Deals":
			card = (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						backgroundColor: "#fff",
						marginBlockEnd: "20px",
						borderRadius: "0 0 5px 5px",
					}}
				>
					<Card
						offPercentBGColor={"red"}
						price={"$70.50"}
						offPercent={"-76%"}
						vendor={"1233 vendus"}
						image={capimage}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$39.99"}
						offPercent={"-76%"}
						vendor={"45667 vendus"}
						image={jacketimag}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$90.50"}
						offPercent={"-76%"}
						vendor={"7984 vendus"}
						image={shoeimage}
					/>
				</div>
			);
			break;
		case "Customized Products":
			card = (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						backgroundColor: "#fff",
						marginBlockEnd: "20px",
						borderRadius: "0 0 5px 5px",
					}}
				>
					<Card
						offPercentBGColor={"red"}
						price={"$70.50"}
						offPercent={"-76%"}
						vendor={"1233 vendus"}
						image={croptopimage}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$39.99"}
						offPercent={"-76%"}
						vendor={"45667 vendus"}
						image={wigstand}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$90.50"}
						offPercent={"-76%"}
						vendor={"7984 vendus"}
						image={dressimage}
					/>
				</div>
			);
			break;
		case "Dropshiping":
			card = (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						backgroundColor: "#fff",
						marginBlockEnd: "20px",
						borderRadius: "0 0 5px 5px",
					}}
				>
					<Card
						offPercentBGColor={"red"}
						price={"$70.50"}
						offPercent={"-76%"}
						vendor={"1233 vendus"}
						image={sweatshirt}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$39.99"}
						offPercent={"-76%"}
						vendor={"45667 vendus"}
						image={watchandbangle}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$90.50"}
						offPercent={"-76%"}
						vendor={"7984 vendus"}
						image={material}
					/>
				</div>
			);
			break;
		case "Top Ranked Products":
			card = (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						backgroundColor: "#fff",
						marginBlockEnd: "20px",
						borderRadius: "0 0 5px 5px",
					}}
				>
					<Card
						offPercentBGColor={"red"}
						price={"$70.50"}
						offPercent={"-76%"}
						vendor={"1233 vendus"}
						image={watches}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$39.99"}
						offPercent={"-76%"}
						vendor={"45667 vendus"}
						image={ring}
					/>
					<Card
						offPercentBGColor={"red"}
						price={"$90.50"}
						offPercent={"-76%"}
						vendor={"7984 vendus"}
						image={armlesscoat}
					/>
				</div>
			);
			break;

		default:
			break;
	}
	return (
		<div
			className={`${
				headerText !== "Ready to ship products"
					? "cardcontainer-component-container"
					: "cardcontainer-component-container-full"
			}`}
		>
			<div
				style={{
					display: "flex",
					height: "30px",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "#f9f9f9",
					padding: "10px 20px",
					borderRadius: "5px 5px 0 0",
				}}
			>
				<div style={{ display: "flex", alignItems: "center" }}>
					<img src={image} alt={headerText} />
					<div style={{ marginLeft: "10px", fontWeight: "bold" }}>
						{headerText}
					</div>
				</div>
				<div style={{ cursor: "pointer" }}>
					See All <RightCaret />
				</div>
			</div>
			{card}
		</div>
	);
};

const Card = (props: any) => {
	const { price, offPercent, offPercentBGColor, vendor, image } = props;
	return (
		<div
			style={{
				width: "calc(100% / 3)",
				margin: "10px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "stretch",
				cursor: "pointer",
			}}
		>
			<div
				style={{
					width: "100%",
					backgroundColor: "#F2F2F2",
					borderRadius: "5px",
				}}
			>
				<img
					style={{
						objectFit: "scale-down",
						height: "140px",
						width: "100%",
					}}
					src={image}
					alt="cap"
				/>
			</div>
			<div style={{}}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginBlock: "10px",
					}}
				>
					<div style={{ fontSize: "14px", fontWeight: "bold" }}>{price}</div>
					<div
						style={{
							backgroundColor: `${offPercentBGColor}`,
							color: "white",
							borderRadius: "5px",
							fontSize: "12px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "2px",
						}}
					>
						{offPercent}
					</div>
				</div>
				<div style={{ fontSize: "14px", color: "#9b9b9b" }}>{vendor}</div>
			</div>
		</div>
	);
};

const SalesCard = () => {
	return (
		<div className="sales-card-container">
			<div className="sales-card-container-banner">
				<CardContainer image={FlashDeals} headerText={"Flash Deals"} />
				<CardContainer
					image={CustomizedProducts}
					headerText={"Customized Products"}
				/>
			</div>
			<div className="sales-card-container-banner">
				<CardContainer image={Dropshiping} headerText={"Dropshiping"} />
				<CardContainer
					image={TopRankedProducts}
					headerText={"Top Ranked Products"}
				/>
			</div>
			<div className="sales-card-container-banner">
				<CardContainer
					image={Dropshiping}
					headerText={"Ready to ship products"}
				/>
			</div>
		</div>
	);
};

export default SalesCard;
