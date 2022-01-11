import React from "react";
import "./ExplorePopularCategories.scss";
import { ReactComponent as RightCaret } from "../../../assets/right-caret.svg";
import Manufacturers from "../../../assets/Manufacturers.png";
import bike from "../../../assets/bike.png";
import tyre from "../../../assets/tyre.png";
import car from "../../../assets/car.png";

const EpcImage = (props: any) => {
	const { name, image } = props;
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
				margin: "20px",
				cursor: "pointer",
			}}
		>
			<div
				style={{
					width: "150px",
					height: "150px",
					borderRadius: "50%",
					backgroundColor: "#EDF2FD",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginBlock: "0 10px",
				}}
			>
				<img style={{ objectFit: "contain" }} src={image} alt={name} />
			</div>
			<div style={{ fontWeight: "bold" }}>{name}</div>
		</div>
	);
};

const VerifiedSuppliersImage = (props: any) => {
	const { name, description, image } = props;
	return (
		<div className="verified-suplier-image">
			<div
				style={{
					backgroundColor: "#fff",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					margin: "10px",
					borderRadius: "5px",
				}}
			>
				<img
					style={{ objectFit: "contain", width: "150px", height: "150px" }}
					src={image}
					alt={name}
				/>
			</div>
			<div style={{ padding: "5px" }}>
				<div style={{ fontWeight: "bold" }}>{name}</div>
				<div style={{ marginBlock: "5px", fontSize: "12px" }}>
					{description}
				</div>
				<div
					style={{
						backgroundColor: "red",
						padding: "5px",
						color: "#fff",
						borderRadius: "5px",
						width: "50px",
					}}
				>
					2 YRS
				</div>
			</div>
		</div>
	);
};

const ExplorePopularCategories = (props: any) => {
	const { headerText, data } = props;
	return (
		<div className="explore-popular-categories-container">
			<div className="epc-header">
				<div style={{ display: "flex", alignItems: "center" }}>
					{headerText === "Manufacturers" && (
						<img src={Manufacturers} alt={headerText} />
					)}
					<div
						style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px" }}
					>
						{headerText}
					</div>
				</div>
				<div style={{ cursor: "pointer" }}>
					See All <RightCaret />
				</div>
			</div>
			{headerText === "Verified Suppliers" ? (
				<div className="verified-suplier-container">
					<>
						<VerifiedSuppliersImage
							image={bike}
							name={"Vetements Bien Finis Avec Des Design À La"}
							description={
								"High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go...."
							}
						/>
						<VerifiedSuppliersImage
							image={tyre}
							name={"Vetements Bien Finis Avec Des Design À La"}
							description={
								"High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go...."
							}
						/>
						<VerifiedSuppliersImage
							image={car}
							name={"Vetements Bien Finis Avec Des Design À La"}
							description={
								"High Quality A AMI LEVEL 3 blue green Disposable sterile 60 gms Go...."
							}
						/>
					</>
				</div>
			) : (
				<div className="epc-container">
					<>
						{data
							? data.map((d: any, index: any) => (
									<EpcImage key={index} name={d.name} image={d.image} />
							  ))
							: null}
					</>
				</div>
			)}
		</div>
	);
};

export default ExplorePopularCategories;
