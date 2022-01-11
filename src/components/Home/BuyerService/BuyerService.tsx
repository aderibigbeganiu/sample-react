import React from "react";
import "./BuyerService.scss";
import BuyerServiceImage from "../../../assets/BuyerService.png";
import OnlineTradeMeetingImage from "../../../assets/onlinetrademeeting.png";
import FaceToFaceImage from "../../../assets/facetoface.png";
import EscrowProtection from "../../../assets/escrowprotection.png";
// import orderprotectionimage from "../../../assets/orderprotectionimage.png";
// import paymentsolution from "../../../assets/paymentsolution.png";
// import inspectionimage from "../../../assets/inspectionimage.png";
// import logisticserviceimage from "../../../assets/logisticserviceimage.png";

const Card = (props: any) => {
	const { name, description, image } = props;
	return (
		<div className="buyer-service-card">
			<div
				style={{
					position: "relative",
					display: "flex",
					marginBlockEnd: "10px",
				}}
			>
				<img
					style={{
						zIndex: "0",
						width: "100%",
						objectFit: "cover",
					}}
					src={image}
					alt=""
				/>
				<div
					style={{
						position: "absolute",
						bottom: "20px",
						padding: "0 5px",
						color: "#fff",
						fontSize: "13px",
					}}
				>
					{description}
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div>
					<div style={{ fontWeight: "bold" }}>{name}</div>
				</div>
			</div>
		</div>
	);
};

const BuyerService = () => {
	return (
		<div style={{ backgroundColor: "#fff", padding: "30px 50px" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<div style={{ width: "50%" }}>
					<div style={{ fontWeight: "bold", marginBlockEnd: "10px" }}>
						BUYER SERVICES / SELL ON ANAIZAN
					</div>
				</div>

				<div style={{ width: "100%" }}>
					<hr
						style={{
							// marginInline: "100px",
							width: "80%",
							border: "2px solid #ddd",
						}}
					/>
				</div>
			</div>
			<div className="sub-heading">
				our trade services help ensure that your purchases are protected.
			</div>
			<div className="buyer-service-card-container">
				<Card
					name={"Buyer Sourcing Service"}
					image={BuyerServiceImage}
					// serviceIcon={orderprotectionimage}
					description={
						"We provide manual purchaseing assistants to help you find the right products and suppliers across china. Simple, fast and secure"
					}
				/>
				<Card
					name={"Online Trade Meeting"}
					image={OnlineTradeMeetingImage}
					// serviceIcon={paymentsolution}
					description={
						"Organize online trade meetings between you suppliers. we provide professional trade managers to help buyers and suppliers complete negotiates and...."
					}
				/>
				<Card
					name={"Face To Face"}
					image={FaceToFaceImage}
					// serviceIcon={inspectionimage}
					description={
						"Free call or video chat any time, cloud view factory, check the simple, packaging, logistics etc."
					}
				/>
				<Card
					name={"Escrow Protection"}
					image={EscrowProtection}
					// serviceIcon={logisticserviceimage}
					description={
						"purchase with convenience, security and extended support."
					}
				/>
			</div>
		</div>
	);
};

export default BuyerService;
