import React from "react";
import "./SideBar.scss";
import Slider from "react-slick";
import PremiumOEMFactories from "../../../assets/PremiumOEMFactories.png";
import OfficailShops from "../../../assets/OfficailShops.png";
import TopRankingSuppliers from "../../../assets/TopRankingSuppliers.png";
import AfricanProducts from "../../../assets/AfricanProducts.png";
import sidebarcontainerimage from "../../../assets/sidebar-container-image.png";

const ColorCard = (props: any) => {
	const { name, image, backgroundColor, imgBackgroundColor } = props;
	return (
		<div
			style={{
				backgroundColor: `${backgroundColor}`,
				color: "#fff",
				padding: "5px",
				borderRadius: "5px",
				marginBlock: "12px",
				display: "flex",
				alignItems: "center",
				cursor: "pointer",
			}}
		>
			<div
				style={{
					backgroundColor: `${imgBackgroundColor}`,
					width: "50px",
					height: "50px",
					borderRadius: "50%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img height={27} width={20} src={image} alt={name} />
			</div>
			<div style={{ marginLeft: "8px" }}>{name}</div>
		</div>
	);
};
const SideBar = () => {
	const settings = {
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};

	return (
		<div className="sidebar-container">
			<div>
				<ColorCard
					name="Premium OEM Factories"
					image={PremiumOEMFactories}
					backgroundColor={"#BE0000"}
					imgBackgroundColor={"#FEAEAE"}
				/>
				<ColorCard
					name="Officail Shops"
					image={OfficailShops}
					backgroundColor={"#0040CE"}
					imgBackgroundColor={"#A7C0F7"}
				/>
				<ColorCard
					name="Top Ranking Suppliers"
					image={TopRankingSuppliers}
					backgroundColor={"#2B88DE"}
					imgBackgroundColor={"#B0D9FF"}
				/>
				<ColorCard
					name="African Products"
					image={AfricanProducts}
					backgroundColor={"#FF9900"}
					imgBackgroundColor={"#FFE3BA"}
				/>
			</div>
			<div>
				<div
					style={{
						height: "217px",
						border: "dashed #ddd",
					}}
				></div>
				<div
					style={{
						height: "257px",
						borderStyle: "dashed",
						border: "solid #ddd",
						marginBlock: "16px 0",
						position: "relative",
					}}
				>
					<Slider {...settings}>
						<div style={{ height: "100%" }}>
							<img
								style={{
									height: "257px",
									width: "100%",
									objectFit: "contain",
								}}
								src={sidebarcontainerimage}
								alt="sidebar container"
							/>
						</div>
						<div style={{ height: "100%" }}>
							<img
								style={{
									height: "257px",
									width: "100%",
									objectFit: "contain",
								}}
								src={sidebarcontainerimage}
								alt="sidebar container"
							/>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
