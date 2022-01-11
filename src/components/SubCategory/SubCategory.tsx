import React, { useState } from "react";
import ProductPage from "../ProductPage/ProductPage";
import "./SubCategory.scss";

const CategoriesList = [
	{ name: "Mobile Phones" },
	{ name: "Telephones & Accessories" },
	{ name: "Phone & Tablet Accessories" },
	{ name: "Phone et Tablet Parts" },
];

const CSA = (props: any) => {
	const { header, listItems } = props;
	const [showListItems, setshowListItems] = useState(false);
	return (
		<>
			<div
				style={{
					fontStyle: "normal",
					fontWeight: "bold",
					fontSize: "20px",
					lineHeight: "24px",
					color: "#707070",
					cursor: "pointer",
					userSelect: "none",
				}}
				onClick={() => setshowListItems(!showListItems)}
			>
				{header}
			</div>

			<div
				style={{
					display: showListItems === true ? "" : "none",
					marginBlockEnd: "20px",
				}}
			>
				<hr style={{ color: "#CA000F" }} />
				{listItems.map((listItem: any, index: any) => (
					<div
						key={index}
						style={{
							display: "flex",
							marginBlock: "12px",
						}}
					>
						<div
							style={{
								marginRight: "20px",
								border: "1px solid grey",
								borderRadius: "3px",
								cursor: "pointer",
								height: "15px",
								width: "15px",
							}}
						></div>
						<div
							style={{
								fontStyle: "normal",
								fontWeight: "normal",
								fontSize: "15px",
								lineHeight: "18px",
								color: "#707070",
							}}
						>
							{listItem.name}
						</div>
					</div>
				))}
				<div
					style={{
						color: "#4F9DEB",
						fontStyle: "italic",
						fontSize: "15px",
						lineHeight: "18px",
						cursor: "pointer",
					}}
				>
					See more...
				</div>
			</div>
		</>
	);
};

const ASButton = () => (
	<button
		style={{
			marginInline: "auto",
			backgroundColor: "#CA000F",
			color: "#fff",
			border: "none",
			borderRadius: "25px",
			padding: "10px",
			marginBlockStart: "40px",
			cursor: "pointer",
		}}
	>
		Advanced Search
	</button>
);

const SubCategory = () => {
	return (
		<div style={{ display: "flex" }}>
			<div
				style={{
					width: "30%",
					marginBlock: "100px",
					marginInlineStart: "40px",
				}}
			>
				<div
					style={{
						backgroundColor: "#fff",
						padding: "20px",
						borderRadius: "5px",
						marginBlockEnd: "15px",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<CSA header={"Categories"} listItems={CategoriesList} />
					<hr style={{ width: "100%" }} />
					<CSA header={"Supply Country"} listItems={CategoriesList} />
					<hr style={{ width: "100%" }} />
					<CSA header={"Advanced Search"} listItems={CategoriesList} />
					<ASButton />
				</div>
				<div
					style={{
						backgroundColor: "#fff",
						padding: "20px",
						borderRadius: "5px",
						marginBlockEnd: "15px",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<CSA header={"Verified Suppliers"} listItems={CategoriesList} />
					<ASButton />
				</div>
				<div
					style={{
						backgroundColor: "#fff",
						padding: "20px",
						borderRadius: "5px",
						marginBlockEnd: "15px",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<CSA header={"Temporary name"} listItems={CategoriesList} />
					<hr style={{ width: "100%" }} />
					<CSA header={"Supply Country"} listItems={CategoriesList} />
					<hr style={{ width: "100%" }} />
					<CSA header={"Advanced Search"} listItems={CategoriesList} />
					<ASButton />
				</div>
				<div
					style={{
						backgroundColor: "#fff",
						padding: "20px",
						borderRadius: "5px",
						marginBlockEnd: "15px",
						width: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<CSA header={"Luxuries Products"} listItems={CategoriesList} />
					<hr style={{ width: "100%" }} />
					<CSA header={"Enterprise E1"} listItems={CategoriesList} />
					<hr style={{ width: "100%" }} />
					<CSA header={"Enterprise E2"} listItems={CategoriesList} />
					<hr style={{ width: "100%" }} />
					<CSA header={"Enterprise E3"} listItems={CategoriesList} />
				</div>
			</div>
			<div style={{ width: "-webkit-fill-available" }}>
				<ProductPage />
			</div>
		</div>
	);
};

export default SubCategory;
