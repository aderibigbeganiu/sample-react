import React from "react";
import "./Footer.scss";
import GooglePlay from "../../assets/GooglePlay.png";
import AppleStore from "../../assets/AppleStore.png";

const FooterCol = (props: any) => {
	const { headerText, links, mainText } = props;
	return (
		<div className="footer-col">
			<div
				style={{ fontWeight: "bolder", marginBlockEnd: "10px", height: "30px" }}
			>
				{headerText}
			</div>
			<div style={{ fontSize: "13px", fontWeight: "normal" }}>
				{links ? (
					<ul className="footer-link-ul">
						{links.map((link: any, index: any) => (
							<li className="footer-link-li" key={index}>
								{link.name}
							</li>
						))}
					</ul>
				) : (
					mainText
				)}
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<footer>
			<div className="main-footer">
				<svg
					style={{
						position: "absolute",
						top: 0,
						right: 0,
						zIndex: "1",
						height: "90%",
						width: "50%",
					}}
					viewBox="0 0 671 676"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g opacity="0.1">
						<ellipse
							opacity="0.5"
							rx="671"
							ry="663.505"
							transform="matrix(-1 0 0 1 671 11.9667)"
							fill="url(#paint0_radial_411_6)"
							fillOpacity="0.5"
						/>
						<ellipse
							opacity="0.5"
							rx="488.955"
							ry="483.494"
							transform="matrix(-1 0 0 1 671 11.9672)"
							fill="url(#paint1_radial_411_6)"
							fillOpacity="0.3"
						/>
						<ellipse
							opacity="0.5"
							rx="288.238"
							ry="285.019"
							transform="matrix(-1 0 0 1 671 11.9671)"
							fill="url(#paint2_radial_411_6)"
							fillOpacity="0.2"
						/>
					</g>
					<defs>
						<radialGradient
							id="paint0_radial_411_6"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(671 663.505) rotate(90) scale(663.505 671)"
						>
							<stop stopColor="white" stopOpacity="0" />
							<stop offset="1" stopColor="white" />
						</radialGradient>
						<radialGradient
							id="paint1_radial_411_6"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(488.955 483.494) rotate(90) scale(483.494 488.955)"
						>
							<stop stopColor="white" stopOpacity="0" />
							<stop offset="1" stopColor="white" />
						</radialGradient>
						<radialGradient
							id="paint2_radial_411_6"
							cx="0"
							cy="0"
							r="1"
							gradientUnits="userSpaceOnUse"
							gradientTransform="translate(288.238 285.019) rotate(90) scale(285.019 288.238)"
						>
							<stop stopColor="white" stopOpacity="0" />
							<stop offset="1" stopColor="white" />
						</radialGradient>
					</defs>
				</svg>

				<>
					<div
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div className="footer-subscribe">
							<form className="footer-subscribe-form">
								<input
									className="footer-subscribe-input"
									placeholder="Your Email"
								/>
								<button className="footer-subscribe-button">Subscriber</button>
							</form>
						</div>
						<div style={{ marginBlock: "30px 15px", color: "#fff" }}>
							Trade Alert: Delivering the latest product trends and industry
							straight to your inbox
						</div>
					</div>
					<div className="footer-row">
						<FooterCol
							headerText="Get to Know Us"
							links={[
								{ name: "About Anaizan" },
								{ name: "About Anaizan Group" },
								{ name: "Careers" },
								{ name: "Blog" },
								{ name: "Investor Relations" },
							]}
						/>
						<FooterCol
							headerText=" Sell on Anaizan.com"
							mainText=""
							links={[
								{ name: "Supplier Memberships" },
								{ name: "Partner Program" },
								{ name: "Careers" },
								{ name: "Blog" },
								{ name: "Investor Relations" },
							]}
						/>
						<FooterCol
							headerText="Customer Services"
							mainText=""
							links={[
								{ name: "Help Center" },
								{ name: "Contact Us" },
								{ name: "Report Abuse" },
								{ name: "Submit a Dispute" },
								{ name: "Policies & Rules" },
							]}
						/>
						<FooterCol
							headerText="Pour les entreprises"
							mainText=""
							links={[
								{ name: "Premium OEM Factories" },
								{ name: "African Products" },
								{ name: "Vérified Suppliers" },
								{ name: "Official Shops" },
								{ name: "Top Ranking Suppliers" },
								{ name: "Dropshiping" },
								{ name: "Customized Products" },
								{ name: "Flash Deals" },
								{ name: "How Sell on Anaizan" },
								{ name: "Set up Stores" },
								{ name: "Post a products" },
							]}
						/>
					</div>
					<div
						className="footer-row"
						style={{ justifyContent: "normal", marginBlockStart: "-200px" }}
					>
						<FooterCol
							headerText=" Make Money with Us"
							mainText=""
							links={[
								{ name: "Become a Partner" },
								{ name: "Become an Affiliate" },
								{ name: "Become an Influcer" },
								{ name: "Advertise Your Products" },
								{ name: "Self-Publish with Us" },
							]}
						/>
						<FooterCol
							headerText="Source on Anaizan.com"
							mainText=""
							links={[
								{ name: "All Categories" },
								{ name: "Request for Quotation" },
								{ name: "Regional Channels" },
								{ name: "Ready to Ship" },
								{ name: "Anaizan.com Select" },
							]}
						/>
						<FooterCol
							headerText="Trade Services"
							mainText=""
							Buyer
							links={[
								{ name: "Sourcing Service" },
								{ name: "Online Trade Meeting" },
								{ name: "Global Online Expo" },
								{ name: "Publish Showroom" },
							]}
						/>
					</div>
				</>
				<hr style={{ marginBlock: "70px" }} />
				<div className="footer-row2">
					<div style={{ flex: "1" }}>
						<div style={{ fontWeight: "bold", marginBlockEnd: "20px" }}>
							Télécharger:
						</div>
						<div>
							<img
								src={GooglePlay}
								alt="Google Play"
								style={{
									height: "35px",
									width: "100px",
									marginInlineEnd: "10px",
									cursor: "pointer",
								}}
							/>
							<img
								src={AppleStore}
								alt="Apple Store"
								style={{
									height: "35px",
									width: "100px",
									cursor: "pointer",
								}}
							/>
						</div>
					</div>
					<div style={{ flex: "3" }}>
						<div style={{ fontSize: "11px" }} className="footer-store">
							Anaïzan.com Español - Português - Deutsch - Français - Italiano -
							Pусский - 한국어 - 日本語 - ภาษาไทย - Türk - Nederlands - tiếng
							Việt - Indonesian
						</div>
						<div className="footer-store">
							Alibaba Group | Taobao Marketplace | Tmall.com | Juhuasuan |
							AliExpress | Alibaba.com | 1688.com | Alimama | Fliggy | Taobao
							GlobalAlibaba Cloud | AliOS | AliTelecom | Autonavi | UCWeb |
							Umeng | Xiami | DingTalk | Alipay | Lazada | Alibaba Security
						</div>
					</div>
					<div style={{ flex: "1" }}>
						<div style={{ fontWeight: "bold", marginBlockEnd: "20px" }}>
							Suivez nous sur:
						</div>
						<div
							style={{
								border: "1px solid #fff",
								borderRadius: "5px",
								height: "fit-content",
								width: "130px",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "5px",
							}}
						>
							<svg
								style={{ cursor: "pointer" }}
								width="28"
								height="28"
								viewBox="0 0 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M24.2145 0.881836H2.95534C2.57455 0.881836 2.19749 0.956837 1.84568 1.10256C1.49388 1.24828 1.17422 1.46187 0.90496 1.73113C0.6357 2.00039 0.422111 2.32005 0.276389 2.67185C0.130666 3.02366 0.0556641 3.40072 0.0556641 3.78151L0.0556641 25.0407C0.0560367 25.8095 0.361702 26.5466 0.905457 27.0901C1.44921 27.6336 2.18654 27.9389 2.95534 27.9389H11.2482V18.7395H7.43909V14.4104H11.2439V11.1073C11.2439 7.35305 13.4788 5.27984 16.9013 5.27984C18.0249 5.29543 19.1457 5.39314 20.255 5.5722V9.25618H18.3659C18.0437 9.21324 17.7159 9.24343 17.407 9.34451C17.098 9.44559 16.8158 9.61497 16.5812 9.84006C16.3467 10.0652 16.1659 10.3402 16.0522 10.6447C15.9385 10.9493 15.8948 11.2755 15.9245 11.5993V14.4104H20.0779L19.4131 18.7395H15.9245V27.9389H24.2173C24.9854 27.9378 25.7216 27.632 26.2645 27.0886C26.8073 26.5453 27.1124 25.8087 27.1128 25.0407V3.78151C27.1128 3.01271 26.8075 2.27538 26.264 1.73163C25.7205 1.18787 24.9833 0.882209 24.2145 0.881836Z"
									fill="white"
								/>
							</svg>
							<svg
								style={{ cursor: "pointer" }}
								width="28"
								height="28"
								viewBox="0 0 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.9399 11.1888C13.0859 11.1895 12.267 11.5292 11.6633 12.1333C11.0595 12.7373 10.7202 13.5563 10.7198 14.4103C10.7202 15.2646 11.0597 16.0838 11.6638 16.6879C12.2678 17.292 13.087 17.6315 13.9413 17.6319C14.7956 17.6315 15.6148 17.292 16.2189 16.6879C16.823 16.0838 17.1625 15.2646 17.1629 14.4103C17.1599 13.5566 16.8194 12.7387 16.2155 12.1351C15.6117 11.5316 14.7937 11.1914 13.9399 11.1888ZM21.4723 8.71779C21.3081 8.30217 21.0604 7.92467 20.7444 7.60868C20.4284 7.29268 20.0509 7.04492 19.6353 6.88072C17.7626 6.49804 15.8472 6.36757 13.9399 6.49279C12.0327 6.36563 10.117 6.49612 8.24458 6.88072C7.82896 7.04492 7.45146 7.29268 7.13547 7.60868C6.81947 7.92467 6.57171 8.30217 6.40751 8.71779C6.02558 10.5896 5.89512 12.504 6.01958 14.4103C5.89503 16.3168 6.02645 18.2313 6.41032 20.1029C6.57388 20.5191 6.82121 20.8974 7.13698 21.2141C7.45275 21.5308 7.83022 21.7793 8.24599 21.9441C10.1187 22.3268 12.0341 22.4573 13.9413 22.3321C15.8486 22.4593 17.7643 22.3288 19.6367 21.9441C20.0527 21.7795 20.4305 21.5311 20.7465 21.2143C21.0625 20.8976 21.31 20.5193 21.4737 20.1029C21.8581 18.23 21.9886 16.3138 21.8617 14.4061C21.9885 12.4984 21.858 10.5823 21.4737 8.70936L21.4723 8.71779ZM13.9399 19.3621C12.6264 19.3621 11.3666 18.8405 10.4375 17.9119C9.50839 16.9834 8.98606 15.7239 8.98532 14.4103C8.98606 13.0973 9.50801 11.8382 10.4365 10.9097C11.365 9.98122 12.624 9.45927 13.9371 9.45853C15.2507 9.45853 16.5105 9.98014 17.4396 10.9087C18.3687 11.8373 18.891 13.0968 18.8917 14.4103C18.8923 15.0604 18.7648 15.7041 18.5165 16.3049C18.2682 16.9056 17.904 17.4516 17.4447 17.9115C16.9854 18.3715 16.4399 18.7365 15.8396 18.9856C15.2392 19.2347 14.5956 19.3632 13.9455 19.3635L13.9399 19.3621ZM19.0969 10.4045C18.7906 10.4041 18.497 10.2823 18.2804 10.0657C18.0638 9.84906 17.9419 9.55541 17.9416 9.2491C17.9419 8.94279 18.0638 8.64913 18.2804 8.43253C18.497 8.21594 18.7906 8.09409 19.0969 8.09372C19.4032 8.09409 19.6969 8.21594 19.9135 8.43253C20.1301 8.64913 20.2519 8.94279 20.2523 9.2491C20.2523 9.5549 20.1309 9.84821 19.9148 10.0646C19.6987 10.2809 19.4056 10.4027 19.0998 10.4031L19.0969 10.4045ZM24.5702 0.880371H3.31105C2.93015 0.880371 2.55297 0.955419 2.20107 1.10123C1.84917 1.24704 1.52945 1.46075 1.26018 1.73016C0.990898 1.99957 0.777338 2.3194 0.631699 2.67136C0.486059 3.02333 0.411193 3.40054 0.411377 3.78145V25.0406C0.41175 25.8094 0.717415 26.5466 1.26117 27.0901C1.80492 27.6336 2.54226 27.9389 3.31105 27.9389H24.5702C25.3388 27.9385 26.0757 27.633 26.6192 27.0896C27.1626 26.5461 27.4681 25.8092 27.4685 25.0406V3.78145C27.4685 3.01265 27.1632 2.27532 26.6197 1.73157C26.0762 1.18781 25.339 0.882149 24.5702 0.881776V0.880371ZM23.5357 18.3965C23.5638 19.8976 23.0033 21.3501 21.9741 22.4431C20.8809 23.4721 19.4285 24.0325 17.9275 24.0047C16.3322 24.0947 11.5505 24.0947 9.95515 24.0047C8.45439 24.031 7.00257 23.4708 5.90854 22.4431C4.87778 21.351 4.31702 19.8979 4.34696 18.3965C4.257 16.8012 4.257 12.0181 4.34696 10.4241C4.31687 8.92272 4.87765 7.46953 5.90854 6.37753C7.00323 5.35141 8.45498 4.79269 9.95515 4.82017C11.5505 4.73021 16.3322 4.73021 17.9275 4.82017C19.4285 4.79249 20.8808 5.35293 21.9741 6.38175C23.0036 7.47575 23.5641 8.9292 23.5357 10.4312C23.6257 12.0209 23.6257 16.7998 23.5357 18.3965Z"
									fill="white"
								/>
							</svg>
							<svg
								style={{ cursor: "pointer" }}
								width="28"
								height="28"
								viewBox="0 0 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M25.8916 0.881836H2.69414C2.18007 0.885552 1.68846 1.09305 1.32719 1.4588C0.965919 1.82455 0.764496 2.31868 0.767115 2.83276V25.988C0.764496 26.5021 0.965919 26.9962 1.32719 27.362C1.68846 27.7277 2.18007 27.9352 2.69414 27.9389H25.8859C26.4015 27.9367 26.8951 27.73 27.2585 27.3643C27.6219 26.9985 27.8253 26.5036 27.8242 25.988V2.83276C27.8253 2.31816 27.6227 1.82404 27.2605 1.45845C26.8983 1.09287 26.4062 0.88555 25.8916 0.881836ZM8.94468 24.0736H4.93461V11.1607H8.95031V24.0736H8.94468ZM6.93895 9.39815C6.32248 9.39777 5.73138 9.15272 5.29547 8.71681C4.85957 8.28091 4.61452 7.68981 4.61414 7.07334C4.61452 6.45688 4.85957 5.86578 5.29547 5.42987C5.73138 4.99397 6.32248 4.74891 6.93895 4.74854C7.55506 4.75003 8.14553 4.99544 8.58119 5.4311C9.01685 5.86676 9.26226 6.45722 9.26375 7.07334C9.26412 7.37874 9.20424 7.68122 9.08754 7.96344C8.97084 8.24567 8.79961 8.5021 8.58365 8.71805C8.3677 8.934 8.11127 9.10523 7.82905 9.22193C7.54682 9.33864 7.24435 9.39852 6.93895 9.39815ZM23.9772 24.0736H19.9671V17.7922C19.9671 16.2938 19.9376 14.3682 17.8841 14.3682C15.794 14.3682 15.4749 15.9987 15.4749 17.6839V24.0736H11.4635V11.1607H15.3105V12.9247H15.3653C15.7505 12.2669 16.3068 11.7258 16.9751 11.359C17.6433 10.9922 18.3985 10.8134 19.1603 10.8417C23.2196 10.8417 23.9744 13.5122 23.9744 16.9952L23.9772 24.0736Z"
									fill="white"
								/>
							</svg>
							<svg
								style={{ cursor: "pointer" }}
								width="28"
								height="28"
								viewBox="0 0 28 28"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M24.8761 0.881836H3.61696C3.23617 0.881836 2.85911 0.956837 2.5073 1.10256C2.1555 1.24828 1.83584 1.46187 1.56658 1.73113C1.29732 2.00039 1.08373 2.32005 0.93801 2.67185C0.792288 3.02366 0.717285 3.40072 0.717285 3.78151L0.717285 25.0407C0.717658 25.8095 1.02332 26.5466 1.56708 27.0901C2.11083 27.6336 2.84816 27.9389 3.61696 27.9389H24.8761C25.6447 27.9386 26.3816 27.6331 26.9251 27.0896C27.4685 26.5462 27.774 25.8092 27.7744 25.0407V3.78151C27.7744 3.01271 27.4691 2.27538 26.9256 1.73163C26.3821 1.18787 25.6449 0.882209 24.8761 0.881836ZM21.9244 10.472C21.9371 10.6407 21.9371 10.8164 21.9371 10.985C21.9475 12.4682 21.6631 13.9387 21.1003 15.311C20.5375 16.6833 19.7075 17.9301 18.6587 18.9788C17.6098 20.0276 16.3629 20.8574 14.9906 21.42C13.6182 21.9826 12.1477 22.2669 10.6645 22.2562C8.50857 22.2608 6.39704 21.6439 4.58259 20.4796C4.89954 20.5137 5.21819 20.5297 5.53696 20.5274C7.31962 20.5333 9.0524 19.9392 10.4564 18.8407C9.62911 18.826 8.82711 18.5529 8.16273 18.0596C7.49836 17.5664 7.00487 16.8777 6.75137 16.09C7.3458 16.1923 7.95514 16.1673 8.53925 16.0169C7.64291 15.8345 6.83734 15.3475 6.25932 14.6385C5.6813 13.9296 5.36647 13.0425 5.3683 12.1278V12.08C5.91605 12.3866 6.52886 12.5586 7.15617 12.5817C6.61133 12.2206 6.16459 11.73 5.856 11.1537C5.5474 10.5775 5.38659 9.93373 5.38797 9.28008C5.38426 8.57772 5.56973 7.88732 5.9249 7.28137C6.91907 8.50612 8.15982 9.50798 9.56651 10.2219C10.9732 10.9357 12.5143 11.3457 14.0898 11.425C13.9541 10.8429 13.9516 10.2377 14.0826 9.65453C14.2136 9.07138 14.4747 8.52538 14.8464 8.05732C15.2181 7.58926 15.6908 7.21126 16.2291 6.95154C16.7674 6.69183 17.3574 6.55713 17.9551 6.5575C18.4972 6.55595 19.0339 6.6661 19.5315 6.88108C20.0292 7.09607 20.4773 7.41127 20.8478 7.80705C21.7341 7.63737 22.5841 7.3144 23.3595 6.85267C23.0642 7.76651 22.4461 8.54148 21.6208 9.0327C22.4083 8.94341 23.1779 8.73586 23.9035 8.41706C23.3659 9.2109 22.6955 9.90607 21.9216 10.472H21.9244Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom-footer-container">
				<div className="bottom-footer-copyright">
					Copyright © 2021 Anaïzan. All rights reserved.
				</div>
				<div className="bottom-footer-text">
					Confidentialité / Conditions d'utilisation / Préférences en matière de
					cookies / Protéger mes données personnelles / AdChoices
				</div>
			</div>
		</footer>
	);
};

export default Footer;
