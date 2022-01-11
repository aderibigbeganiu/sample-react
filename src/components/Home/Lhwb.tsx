import React from "react";

function Lhwb(props: any) {
	const { image, headerText, description, buttonText } = props;
	return (
		<div className="lhwb-container">
			<div className="lhwb-text-container">
				<h2
					style={{
						textTransform: "uppercase",
						fontWeight: "bold",
						color: "#fff",
					}}
				>
					{headerText}
				</h2>
				<p style={{ color: "#fff" }}>{description}</p>
				<button
					style={{
						backgroundColor: "#FFFEFD",
						border: "none",
						padding: "10px",
						borderRadius: "30px",
						cursor: "pointer",
						fontWeight: "bold",
						color: "#000",
					}}
				>
					{buttonText}
				</button>
			</div>
			<div style={{ position: "relative" }}>
				<svg
					className="lhwb-svg"
					viewBox="0 0 1150 660"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						opacity="0.5"
						cx="575"
						cy="335.461"
						r="575"
						fill="url(#paint0_radial_411_56)"
						fillOpacity="0.5"
					/>
					<circle
						opacity="0.5"
						cx="575"
						cy="335.461"
						r="419"
						fill="url(#paint1_radial_411_56)"
						fillOpacity="0.3"
					/>
					<circle
						opacity="0.5"
						cx="575"
						cy="335.461"
						r="247"
						fill="url(#paint2_radial_411_56)"
						fillOpacity="0.2"
					/>
					<defs>
						<radialGradient
							id="paint0_radial_411_56"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(575 335.461) rotate(90) scale(575)"
						>
							<stop stopColor="white" stopOpacity="0" />
							<stop offset="1" stopColor="white" />
						</radialGradient>
						<radialGradient
							id="paint1_radial_411_56"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(575 335.461) rotate(90) scale(419)"
						>
							<stop stopColor="white" stopOpacity="0" />
							<stop offset="1" stopColor="white" />
						</radialGradient>
						<radialGradient
							id="paint2_radial_411_56"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(575 335.461) rotate(90) scale(247)"
						>
							<stop stopColor="white" stopOpacity="0" />
							<stop offset="1" stopColor="white" />
						</radialGradient>
					</defs>
				</svg>

				<img className="lhwb-container-img" src={image} alt="Automobile" />
			</div>
		</div>
	);
}

export default Lhwb;
