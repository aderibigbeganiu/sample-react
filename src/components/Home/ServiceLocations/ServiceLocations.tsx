import React from "react";
import "./ServiceLocations.scss";
import IndiaFlag from "../../../assets/IndiaFlag.png";

const Region = (props: any) => {
	const { name, image } = props;
	return (
		<div className="region-card">
			<img style={{ marginRight: "10px" }} src={image} alt={name} />
			<span>{name}</span>
		</div>
	);
};

function ServiceLocations() {
	return (
		<div
			style={{
				backgroundColor: "#fff",
				padding: "0px 50px 30px",
				marginBlockEnd: "20px",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginBlockEnd: "10px",
				}}
			>
				<div style={{ width: "50%" }}>
					<div style={{ fontWeight: "bold", marginBlockEnd: "10px" }}>
						CHOOSE YOUR SUPPLIERS BY COUNTRY
					</div>
				</div>
				<div style={{ width: "100%" }}>
					<hr
						style={{
							width: "80%",
							border: "2px solid #ddd",
						}}
					/>
				</div>
			</div>
			<div className="region-container">
				<Region name={"India"} image={IndiaFlag} />
				<Region name={"India"} image={IndiaFlag} />
				<Region name={"India"} image={IndiaFlag} />
				<Region name={"India"} image={IndiaFlag} />
				<Region name={"India"} image={IndiaFlag} />
				<Region name={"India"} image={IndiaFlag} />
				<div className="more-region-text">More Regions</div>
			</div>
		</div>
	);
}

export default ServiceLocations;
