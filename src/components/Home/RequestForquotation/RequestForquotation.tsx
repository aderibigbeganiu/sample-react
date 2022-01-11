import React from "react";
import "./RequestForquotation.scss";
import rfq from "../../../assets/rfq.jpeg";

const RequestForquotation = () => {
	return (
		<div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", width: "50%" }}>
					<img
						style={{ marginRight: "20px", width: "50px", height: "30px" }}
						src={rfq}
						alt="RFQ"
					/>
					<div
						style={{
							fontWeight: "bold",
							fontSize: "25px",
							marginInlineEnd: "10px",
						}}
					>
						REQUEST FOR QUOTATION
					</div>
					<div
						style={{
							fontWeight: "bold",
							color: "grey",
							fontSize: "10px",
						}}
					>
						Customization Service
					</div>
				</div>
				<div style={{ width: "50%" }}>
					<hr
						style={{
							width: "60%",
							border: "2px solid #ddd",
						}}
					/>
				</div>
			</div>
			<div className="rfq-container">
				<div className="rfq-left-banner-container">
					<div className="banner-container">
						<span className="rfq-left-banner-text">
							5 Minutes only global sales easy
						</span>
						<button className="rfq-banner-button">Source Now</button>
					</div>
				</div>
				<div className="ormq-container">
					<form style={{ width: "-webkit-fill-available" }}>
						<div style={{ fontWeight: "bold", marginBlockEnd: "30px" }}>
							A safe way to find your verified suppliers quickly!
						</div>
						{/* <hr className="rfq-hr" /> */}
						<div className="ormq-input-container">
							<input
								style={{
									width: "-webkit-fill-available",
									padding: "10px 20px",
									borderRadius: "30px",
									border: "1px solid #D8D3D3",
									outline: "none",
									backgroundColor: "transparent",
								}}
								placeholder="Tell us what you are looking for"
							/>
							<div style={{ display: "flex", marginBlock: "20px" }}>
								<input
									style={{
										width: "50%",
										padding: "10px 20px",
										borderRadius: "30px",
										border: "1px solid #D8D3D3",
										marginInlineEnd: "10px",
										outline: "none",
										backgroundColor: "transparent",
									}}
									placeholder="Tell us what you are looking for"
								/>
								<input
									style={{
										width: "50%",
										padding: "10px 20px",
										borderRadius: "30px",
										border: "1px solid #D8D3D3",
										outline: "none",
										backgroundColor: "transparent",
									}}
									placeholder="Tell us what you are looking for"
								/>
							</div>
						</div>
						<div style={{ fontWeight: "bold", marginBlockEnd: "30px" }}>
							Select template type
						</div>
						{/* <hr className="rfq-hr" /> */}
						<div
							style={{
								display: "flex",
								marginBlock: "5px 10px",
								fontSize: "12px",
							}}
						>
							<div className="rfq-select-button-selected">Request Price</div>
							<div className="rfq-select-button">Request A Sample</div>
							<div className="rfq-select-button">Request Quotation Details</div>
						</div>
						<button
							style={{
								border: "none",
								padding: "10px 20px",
								borderRadius: "30px",
								backgroundColor: "#E65353",
								color: "#fff",
								fontWeight: "bold",
								cursor: "pointer",
							}}
						>
							Request for Quotation
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RequestForquotation;
