import React from "react";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import MarketCard from "./MarketCard/MarketCard";
import UsefulLinks from "./UsefulLink/UsefulLinks";
import "./Home.scss";
import PromotionCard from "./PromotionCard/PromotionCard";
import ExplorePopularCategories from "./ExplorePopularCategories/ExplorePopularCategories";
import SideBar from "./SideBar/SideBar";
import SalesCard from "./SalesCard/SalesCard";
import Automobile from "../../assets/Automobile.png";
import MarketSection from "./MarketSection/MarketSection";
import RequestForquotation from "./RequestForquotation/RequestForquotation";
import machines from "../../assets/machines.png";
import BuyerService from "./BuyerService/BuyerService";
import ServiceLocations from "./ServiceLocations/ServiceLocations";
import Carousel from "react-multi-carousel";
import Lhwb from "./Lhwb";
import GoFishing from "../../assets/GoFishing.png";
import SetUpCamp from "../../assets/SetUpCamp.png";
import StartPaddling from "../../assets/StartPaddling.png";
import TeeOff from "../../assets/TeeOff.png";
import GetInTheGame from "../../assets/GetInTheGame.png";
import HitTheTrails from "../../assets/HitTheTrails.png";
import GoForaride from "../../assets/GoForaride.png";
import Apparel from "../../assets/Apparel.png";
import FabricTextile from "../../assets/FabricTextile.png";
import Electronics from "../../assets/Electronics.png";
import Phones from "../../assets/Phones.png";
import JewelryWatches from "../../assets/JewelryWatches.png";
import WeddingsEvents from "../../assets/WeddingsEvents.png";

const Home = (props: any) => {
	const epcData = [
		{ name: "Go Fishing", image: GoFishing },
		{ name: "Set up camp", image: SetUpCamp },
		{ name: "Start Paddling", image: StartPaddling },
		{ name: "Tee Off", image: TeeOff },
		{ name: "Get In The Game", image: GetInTheGame },
		{ name: "Hit The Trails", image: HitTheTrails },
		{ name: "Go For a ride", image: GoForaride },
	];
	const manufacturerData = [
		{ name: "Apparel", image: Apparel },
		{ name: "Fabric & Textile", image: FabricTextile },
		{ name: "Electronics", image: Electronics },
		{ name: "Phones", image: Phones },
		{ name: "Jewelry & Watches", image: JewelryWatches },
		{ name: "Bags & Accessories", image: HitTheTrails },
		{ name: "Weddings & Events", image: WeddingsEvents },
	];
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<div className="home-container">
			<div className="container">
				<div className="mcp-container">
					<MarketCard />
					<HomeCarousel />
					<div className="up-wrapper">
						<UsefulLinks />
						<PromotionCard />
					</div>
				</div>
				<ExplorePopularCategories
					headerText={"Explore Popular Categories"}
					data={manufacturerData}
				/>
				<div className="sbsc-container">
					<SideBar />
					<SalesCard />
				</div>
				<ExplorePopularCategories headerText={"Manufacturers"} data={epcData} />
			</div>
			{/* Large Height & width Banner */}
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				// autoPlay={props.deviceType !== "mobile" ? true : false}
				autoPlay={true}
				autoPlaySpeed={5000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={300}
				containerClass="carousel"
				// removeArrowOnDeviceType={["tablet", "mobile"]}
				deviceType={props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
			>
				<div>
					<Lhwb
						image={Automobile}
						headerText={"Automobile"}
						description={
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						}
						buttonText={"Commandez Machine"}
					/>
				</div>
				<div>
					<Lhwb
						image={Automobile}
						headerText={"Automobile 2"}
						description={
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						}
						buttonText={"Machine Commandez"}
					/>
				</div>
			</Carousel>
			<div className="container">
				{/* Small Height Banner */}
				<div className="shb-container shb-container-1">
					<div>Prime Day Preparation Sale</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							backgroundColor: "#E65353",
						}}
					>
						<div style={{ fontWeight: "bold" }}>From 10% off</div>
						<div
							style={{
								backgroundColor: "#F2F3F7",
								color: "#E65353",
								padding: "10px 30px",
								borderRadius: "30px",
								marginLeft: "70px",
							}}
						>
							View More
						</div>
					</div>
				</div>
				{/* Market Section */}
				<MarketSection marketName={"CONSUMER ELECTRONICS"} />
				<MarketSection marketName={"APPARELS"} />
				<RequestForquotation />
				<MarketSection marketName={"VEHICLES & ACCESSORIES"} />
				<ExplorePopularCategories headerText={"Verified Suppliers"} />
			</div>
			<div className="lhwb-container2">
				<div className="lhwb-img-container">
					<svg
						className="lhwb-svg2"
						// style={{
						// 	position: "absolute",
						// 	left: "0px",
						// 	top: "0",
						// 	width: "50%",
						// 	height: "100%",
						// 	zIndex: "0",
						// }}
						viewBox="0 0 945 660"
						preserveAspectRatio="xMidYMid meet"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							opacity="0.5"
							r="778"
							transform="matrix(-1 0 0 1 167 609.461)"
							fill="url(#paint0_radial_411_62)"
							fillOpacity="0.5"
						/>
						<circle
							opacity="0.5"
							r="566.925"
							transform="matrix(-1 0 0 1 167 609.461)"
							fill="url(#paint1_radial_411_62)"
							fillOpacity="0.3"
						/>
						<circle
							opacity="0.5"
							r="334.202"
							transform="matrix(-1 0 0 1 167 609.462)"
							fill="url(#paint2_radial_411_62)"
							fillOpacity="0.2"
						/>
						<defs>
							<radialGradient
								id="paint0_radial_411_62"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(778 778) rotate(90) scale(778)"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="1" stopColor="white" />
							</radialGradient>
							<radialGradient
								id="paint1_radial_411_62"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(566.925 566.925) rotate(90) scale(566.925)"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="1" stopColor="white" />
							</radialGradient>
							<radialGradient
								id="paint2_radial_411_62"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(334.202 334.202) rotate(90) scale(334.202)"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="1" stopColor="white" />
							</radialGradient>
						</defs>
					</svg>

					<img className="lhwb-container-img2" src={machines} alt="machines" />
				</div>
				<div className="lhwb-text-container2">
					<h2
						style={{
							// textTransform: "uppercase",
							fontWeight: "bold",
							color: "#fff",
							fontSize: "30px",
						}}
					>
						Machinery
					</h2>
					<p
						style={{
							color: "#fff",
							fontWeight: "bolder",
							width: "70%",
						}}
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
					<button
						style={{
							backgroundColor: "#FCC314",
							color: "#fff",
							border: "none",
							padding: "10px",
							borderRadius: "30px",
							cursor: "pointer",
							fontWeight: "bold",
						}}
					>
						Commandez Machine
					</button>
				</div>
			</div>
			<div className="container">
				{/* Small Height Banner */}
				<div className="shb-container shb-container-2">
					<svg
						className="shb-svg"
						viewBox="0 0 644 80"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.5">
							<circle
								opacity="0.5"
								cx="69"
								cy="45.4614"
								r="575"
								fill="url(#paint0_radial_411_27)"
								fillOpacity="0.5"
							/>
							<circle
								opacity="0.5"
								cx="69"
								cy="45.4614"
								r="419"
								fill="url(#paint1_radial_411_27)"
								fillOpacity="0.3"
							/>
							<circle
								opacity="0.5"
								cx="69"
								cy="45.4614"
								r="247"
								fill="url(#paint2_radial_411_27)"
								fillOpacity="0.2"
							/>
						</g>
						<defs>
							<radialGradient
								id="paint0_radial_411_27"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(69 45.4614) rotate(90) scale(575)"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="1" stopColor="white" />
							</radialGradient>
							<radialGradient
								id="paint1_radial_411_27"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(69 45.4614) rotate(90) scale(419)"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="1" stopColor="white" />
							</radialGradient>
							<radialGradient
								id="paint2_radial_411_27"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(69 45.4614) rotate(90) scale(247)"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="1" stopColor="white" />
							</radialGradient>
						</defs>
					</svg>

					<div style={{ zIndex: "1" }}>Prime Day Preparation Sale</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<div style={{ fontWeight: "bold" }}>From 10% off</div>
						<div
							style={{
								backgroundColor: "#F2F3F7",
								color: "#FF9900",
								padding: "10px 30px",
								borderRadius: "30px",
								marginLeft: "70px",
							}}
						>
							View More
						</div>
					</div>
				</div>
				{/* Market Section */}
				<MarketSection marketName={"MACHINERY INDUSTRIAL"} />
				<BuyerService />
				<ServiceLocations />
				{/* Small Height Banner */}
				<div className="shb-container shb-container-3">
					<svg
						style={{
							position: "absolute",
							left: "0px",
							top: "0",
							width: "50%",
							height: "100%",
							zIndex: "0",
						}}
						viewBox="0 0 644 80"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g opacity="0.5">
							<circle
								opacity="0.5"
								cx="69"
								cy="45.4614"
								r="575"
								fill="url(#paint0_radial_411_27)"
								fillOpacity="0.5"
							/>
							<circle
								opacity="0.5"
								cx="69"
								cy="45.4614"
								r="419"
								fill="url(#paint1_radial_411_27)"
								fillOpacity="0.3"
							/>
							<circle
								opacity="0.5"
								cx="69"
								cy="45.4614"
								r="247"
								fill="url(#paint2_radial_411_27)"
								fillOpacity="0.2"
							/>
						</g>
						<defs>
							<radialGradient
								id="paint0_radial_411_27"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(69 45.4614) rotate(90) scale(575)"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="1" stopColor="white" />
							</radialGradient>
							<radialGradient
								id="paint1_radial_411_27"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(69 45.4614) rotate(90) scale(419)"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="1" stopColor="white" />
							</radialGradient>
							<radialGradient
								id="paint2_radial_411_27"
								cx="0"
								cy="0"
								r="1"
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(69 45.4614) rotate(90) scale(247)"
							>
								<stop stopColor="white" stopOpacity="0" />
								<stop offset="1" stopColor="white" />
							</radialGradient>
						</defs>
					</svg>

					<div style={{ display: "flex" }}>
						<div
							style={{
								width: "50px",
								height: "40px",
								backgroundColor: "white",
								marginInline: "5px",
							}}
						>
							0
						</div>
						<div
							style={{
								width: "50px",
								height: "40px",
								backgroundColor: "white",
								marginInline: "5px",
							}}
						>
							0
						</div>
						<div
							style={{
								width: "50px",
								height: "40px",
								backgroundColor: "white",
								marginInline: "5px",
							}}
						>
							0
						</div>
					</div>
					<div style={{ zIndex: "1", fontWeight: "bold" }}>
						Watch and Get Product Samples
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<div
							style={{
								backgroundColor: "#F2F3F7",
								color: "#2B88DE",
								padding: "10px 30px",
								borderRadius: "30px",
								marginLeft: "70px",
							}}
						>
							Nous joindre en direct
						</div>
					</div>
					<div style={{ display: "flex" }}>
						<div
							style={{
								width: "50px",
								height: "40px",
								backgroundColor: "white",
								marginInline: "5px",
							}}
						>
							0
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
