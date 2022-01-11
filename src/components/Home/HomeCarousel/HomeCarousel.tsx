import React from "react";
import "./HomeCarousel.scss";
import Carousel from "react-multi-carousel";
import banner from "../../../assets/banner.png";
// import carouselimage1 from "../../../assets/carousel-image1.jpeg";
// import carouselimage2 from "../../../assets/carousel-image2.jpeg";
// import carouselimage3 from "../../../assets/carousel-image3.jpeg";

const HomeCarousel = (props: any) => {
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
		<div className="carousel-container">
			<Carousel
				swipeable={true}
				draggable={true}
				showDots={true}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				// autoPlay={props.deviceType !== "mobile" ? true : false}
				autoPlay={true}
				autoPlaySpeed={3000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={300}
				containerClass="carousel"
				// removeArrowOnDeviceType={["tablet", "mobile"]}
				deviceType={props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
			>
				<div
					style={{
						width: "100%",
						height: "435px",
					}}
				>
					<img
						style={{ objectFit: "contain", backgroundColor: "white" }}
						className="carousel-image"
						src={banner}
						alt="carousel1"
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default HomeCarousel;
