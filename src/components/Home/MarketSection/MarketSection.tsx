import React from "react";
import "./MarketSection.scss";
import vr from "../../../assets/vr.png";
import TB1uW2kv3HqK1RjSZFkXXX1 from "../../../assets/TB1uW2kv3HqK1RjSZFkXXX 1.png";

const Card = (props: any) => {
	const { productClass } = props;
	return (
		<div className="market-section-card">
			<span style={{}}>{productClass}</span>
			<img
				style={{ width: "100px", height: "90px", objectFit: "contain" }}
				src={vr}
				alt="vr"
			/>
		</div>
	);
};

function MarketSection(props: any) {
	const { marketName } = props;
	return (
		<div className="market-section-container">
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<div style={{ fontWeight: "bold", width: "50%" }}>{marketName}</div>
				<div style={{ width: "100%" }}>
					<hr
						style={{
							// flexGrow: 1,
							width: "40%",
							border: "2px solid #ddd",
						}}
					/>
				</div>
			</div>
			<div className="card-card-container">
				<div className="left-card-banner">
					<img
						className="left-card-image"
						src={TB1uW2kv3HqK1RjSZFkXXX1}
						alt=""
					/>
					<div style={{ color: "#fff", marginBlockEnd: "30px" }}>
						Shoping Guide for trending styles
					</div>
					<button
						style={{
							border: "none",
							borderRadius: "30px",
							padding: "10px",
							height: "fit-content",
							backgroundColor: "#2B88DE",
							color: "#F2F3F7",
							cursor: "pointer",
						}}
					>
						Source Now
					</button>
				</div>
				<div className="right-cards-container">
					<div className="market-section-card-container">
						<Card productClass={"Produits les mieux classés"} />
						<Card productClass={"Produits les mieux classés"} />
						<Card productClass={"Produits les mieux classés"} />
						<Card productClass={"Produits les mieux classés"} />
					</div>
					<div className="market-section-card-container">
						<Card productClass={"Produits les mieux classés"} />
						<Card productClass={"Produits les mieux classés"} />
						<Card productClass={"Produits les mieux classés"} />
						<Card productClass={"Produits les mieux classés"} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MarketSection;
