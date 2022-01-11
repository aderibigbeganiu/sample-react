import React from "react";
import { ReactComponent as RightCaret } from "../../assets/right-caret.svg";
import shd from "../../assets/7hd.png";
import atv from "../../assets/atv.png";
import satol from "../../assets/satol.png";
import amazon from "../../assets/amazon.png";
import handdryer from "../../assets/handdryer.png";
import checkshield from "../../assets/bx_bx-check-shield.png";

const BrandsLogo = (props: any) => {
	const { image, altText } = props;
	return (
		<div style={{ marginLeft: "20px" }}>
			<img
				src={image}
				alt={altText}
				style={{ height: "42px", width: "140px" }}
			/>
		</div>
	);
};

const Product = (props: any) => {
	const { name, image, quantity, cfaPrice, dollarPrice } = props;
	return (
		<div
			style={{
				width:
					window.location.pathname === "/product-page"
						? "20%"
						: "calc(100% / 4)",
				// width: "calc(100% / 4)",
			}}
		>
			<div style={{ margin: "20px 10px", padding: "7px", cursor: "pointer" }}>
				<img
					src={image}
					alt="handdryer"
					style={{ width: "100%", marginBlockEnd: "7px", objectFit: "cover" }}
				/>
				<div>
					<div
						style={{
							fontSize: "15px",
							fontWeight: "bold",
							marginBlockEnd: "5px",
							color: "#707070",
						}}
					>
						{name}
					</div>
					<div
						style={{
							marginBlockEnd: "12px",
							color: "#CA000F",
							fontSize: "12px",
						}}
					>
						{cfaPrice}
					</div>
					<div
						style={{
							display: "flex",
							marginBlockEnd: "20px",
							color: "#453B3B",
						}}
					>
						<div style={{ marginRight: "10px" }}>{dollarPrice}</div>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<div style={{ color: "#707070", fontSize: "10px" }}>
							{quantity} Pieces
						</div>
						<div
							style={{
								color: "#1D7B2A",
								fontSize: "10px",
								display: "flex",
								alignItems: "center",
							}}
						>
							<img src={checkshield} alt="check shield" />{" "}
							<span style={{ marginLeft: "3px" }}>Verified Seller</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function ProductPage(props: any) {
	return (
		<div style={{ paddingInline: "50px" }}>
			<div
				style={{
					display: "flex",
					padding: "10px 30px",
					marginBlock: "30px 40px",
					backgroundColor: "#fff",
					width: "fit-content",
					borderRadius: "5px",
				}}
			>
				<div style={{ display: "flex", marginInlineEnd: "15px" }}>
					<div style={{ marginRight: "10px", cursor: "pointer" }}>
						Mobile Phones
					</div>
					<div>
						<RightCaret />
					</div>
				</div>
				<div style={{ display: "flex", marginInlineEnd: "15px" }}>
					<div style={{ marginRight: "10px", cursor: "pointer" }}>
						Mobile Phones
					</div>
					<div>
						<RightCaret />
					</div>
				</div>
				<div style={{ display: "flex", marginInlineEnd: "15px" }}>
					<div style={{ marginRight: "10px", cursor: "pointer" }}>
						Mobile Phones
					</div>
				</div>
			</div>
			<div
				style={{
					borderRadius: "5px",
					backgroundColor: "#fff",
					padding: "20px 30px",
					marginBlockEnd: "20px",
				}}
			>
				{/* Brands */}
				<div
					style={{
						marginBlockEnd: "30px",
						display: "flex",
						alignItems: "center",
					}}
				>
					<div>Brands</div>
					<BrandsLogo image={shd} altText="shd" />
					<BrandsLogo image={atv} altText="atv" />
					<BrandsLogo image={satol} altText="satol" />
					<BrandsLogo image={amazon} altText="amazon" />
				</div>
				<div style={{ display: "flex" }}>
					<div
						style={{
							display: "flex",
							marginInlineEnd: "35px",
							alignItems: "center",
						}}
					>
						<div
							style={{
								marginRight: "20px",
								border: "1px solid grey",
								cursor: "pointer",
								height: "15px",
								width: "15px",
							}}
						></div>
						Diamond Member
					</div>
					<div
						style={{
							display: "flex",
							marginInlineEnd: "35px",
							alignItems: "center",
						}}
					>
						<div
							style={{
								marginRight: "20px",
								border: "1px solid grey",
								cursor: "pointer",
								height: "15px",
								width: "15px",
							}}
						></div>
						Gold Member
					</div>
					<div
						style={{
							display: "flex",
							marginInlineEnd: "35px",
							alignItems: "center",
						}}
					>
						<div
							style={{
								marginRight: "20px",
								border: "1px solid grey",
								cursor: "pointer",
								height: "15px",
								width: "15px",
							}}
						></div>
						Audited supllier
					</div>
				</div>
			</div>
			<div>
				<div style={{ marginBlockEnd: "30px" }}>
					<div
						style={{
							display: "flex",
							backgroundColor: "#FF9900",
							color: "#fff",
							padding: "20px 30px",
							borderRadius: "5px",
						}}
					>
						<div
							style={{
								display: "flex",
								marginInlineEnd: "35px",
								alignItems: "center",
							}}
						>
							<div
								style={{
									marginRight: "20px",
									border: "1px solid white",
									cursor: "pointer",
									height: "15px",
									width: "15px",
								}}
							></div>
							Free shipping
						</div>
						<div
							style={{
								display: "flex",
								marginInlineEnd: "35px",
								alignItems: "center",
							}}
						>
							<div
								style={{
									marginRight: "20px",
									border: "1px solid white",
									cursor: "pointer",
									height: "15px",
									width: "15px",
								}}
							></div>
							Single Piece
						</div>
						<div
							style={{
								display: "flex",
								marginInlineEnd: "35px",
								alignItems: "center",
							}}
						>
							<div
								style={{
									marginRight: "20px",
									border: "1px solid white",
									cursor: "pointer",
									height: "15px",
									width: "15px",
								}}
							></div>
							On SALE
						</div>
						<div
							style={{
								display: "flex",
								marginInlineEnd: "35px",
								alignItems: "center",
							}}
						>
							<div
								style={{
									marginRight: "20px",
									border: "1px solid white",
									cursor: "pointer",
									height: "15px",
									width: "15px",
								}}
							></div>
							ANAIZAN REFER
						</div>
					</div>
					<div style={{ backgroundColor: "#fff", padding: "30px 60px" }}>
						<div
							style={{ fontSize: "20px", fontWeight: "bold", color: "#707070" }}
						>
							Recomended For You
						</div>
						<div
							style={{
								display: "flex",
								width: "100%",
								flexWrap: "wrap",
								marginBlockStart: "30px",
							}}
						>
							{Array.from(Array(30).keys()).map((index: any) => (
								<Product
									name={
										"High Quality A AMI LEVEL 3 blue green Disposable steri..."
									}
									image={handdryer}
									quantity={"10"}
									cfaPrice={"CFA 108 - CFA 324"}
									dollarPrice={"$ 7,50 - $ 8,50"}
									key={index}
								/>
							))}
						</div>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						marginBlockEnd: "100px",
						justifyContent: "center",
						color: "#fff",
						fontWeight: "bold",
					}}
				>
					<div
						style={{
							height: "50px",
							width: "50px",
							backgroundColor: "#646363",
							cursor: "pointer",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{"<<"}
					</div>
					<div
						style={{
							height: "50px",
							width: "50px",
							backgroundColor: "#646363",
							cursor: "pointer",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginInline: "5px",
						}}
					>
						{"<"}
					</div>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index: any) => (
						<div
							style={{
								height: "50px",
								width: "50px",
								backgroundColor: index === 5 ? "red" : "#4E4E4E",
								cursor: "pointer",
								borderRadius: "50%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								marginInline: "5px",
							}}
							key={index}
						>
							{index}
						</div>
					))}
					<div
						style={{
							height: "50px",
							width: "50px",
							backgroundColor: "#646363",
							cursor: "pointer",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginInline: "5px",
						}}
					>
						{">"}
					</div>
					<div
						style={{
							height: "50px",
							width: "50px",
							backgroundColor: "#646363",
							cursor: "pointer",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{">>"}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductPage;
