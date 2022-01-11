import React from "react";
import "./UsefulLinks.scss";
import { ReactComponent as QuestionIcon } from "../../../assets/question-icon.svg";
import { ReactComponent as CallIcon } from "../../../assets/call-icon.svg";
import { ReactComponent as PremiumIcon } from "../../../assets/premium-icon.svg";

function UsefulLinks() {
	return (
		<div className="useful-link-card">
			<div className="useful-link-container">
				<QuestionIcon />
				<div style={{ marginLeft: "10px" }}>
					<div style={{ fontWeight: "bold" }}>Request For Quotation</div>
					<span style={{ fontWeight: "lighter", fontSize: "13px" }}>
						One Request, Multiple Quotes
					</span>
				</div>
			</div>
			<div className="useful-link-container">
				<CallIcon />
				<div style={{ marginLeft: "10px" }}>
					<div style={{ fontWeight: "bold" }}>Our Trade Services </div>
					<span style={{ fontWeight: "lighter", fontSize: "13px" }}>
						Best tools to Grow your business
					</span>
				</div>
			</div>
			<div className="useful-link-container">
				<PremiumIcon />
				<div style={{ marginLeft: "10px" }}>
					<div style={{ fontWeight: "bold" }}>Premium Membership</div>
					<span style={{ fontWeight: "lighter", fontSize: "13px" }}>
						Get Verified, Build Trust
					</span>
				</div>
			</div>
		</div>
	);
}

export default UsefulLinks;
