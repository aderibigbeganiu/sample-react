import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainNav.scss";
import Logo from "../../assets/logo.png";
import { ReactComponent as UserOutline } from "../../assets/user-outline.svg";
import { ReactComponent as MessageIcon } from "../../assets/nav-message.svg";
import { ReactComponent as OrdeIcon } from "../../assets/nav-order.svg";
import { ReactComponent as CartIcon } from "../../assets/nav-cart.svg";
import { ReactComponent as CategoryIcon } from "../../assets/cetegory.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/auth";

const MainNav = () => {
	const [mainNavDisplay, setMainNavDisplay] = useState(false);
	const { isLoggedIn } = useSelector((state: any) => state.auth);
	const dispatch = useDispatch();
	return (
		<>
			<div className="main-nav">
				<Link to="/">
					<img className="logo" src={Logo} alt="logo" />
				</Link>
				<div className="main-nav-search">
					<form className="main-nav-search-form">
						<input className="main-nav-search-input" />
						<button className="main-nav-search-button">Search</button>
					</form>
				</div>
				<CategoryIcon
					className="hambuger"
					onClick={() => {
						setMainNavDisplay(!mainNavDisplay);
					}}
				/>
				<ul className="main-nav-ul">
					{isLoggedIn ? (
						<li onClick={() => dispatch(logout())} className="main-nav-li">
							<div>
								<UserOutline />
							</div>
							<div>logout</div>
						</li>
					) : (
						<li className="main-nav-li auth-nav">
							<div>
								<UserOutline />
							</div>
							<div>
								<div>
									<Link
										style={{ textDecoration: "none", color: "#000" }}
										to="/login"
									>
										Sign In
									</Link>
								</div>
								<div>Join Free</div>
							</div>
						</li>
					)}
					<li className="main-nav-li">
						<div>
							<MessageIcon />
						</div>
						<span>Message</span>
					</li>
					<li className="main-nav-li">
						<div>
							<OrdeIcon />
						</div>
						<span>Order</span>
					</li>
					<li className="main-nav-li">
						<div>
							<CartIcon />
						</div>
						<span>Cart</span>
					</li>
				</ul>
			</div>
			<ul
				id="main-nav-ul-mobile"
				className="main-nav-ul-mobile"
				style={{ display: `${mainNavDisplay ? "flex" : "none"}` }}
			>
				<div
					style={{
						marginInline: "auto 20px",
						marginBlock: "20px",
						fontWeight: "bolder",
						fontSize: "25px",
					}}
					onClick={() => {
						setMainNavDisplay(!mainNavDisplay);
					}}
				>
					X
				</div>
				<li className="main-nav-li-mobile">
					<div className="main-nav-li-icon">
						<UserOutline />
					</div>
					<span>Sign In</span>
				</li>
				<li className="main-nav-li-mobile">
					<div className="main-nav-li-icon">
						<MessageIcon />
					</div>
					<span>Message</span>
				</li>
				<li className="main-nav-li-mobile">
					<div className="main-nav-li-icon">
						<OrdeIcon />
					</div>
					<span>Order</span>
				</li>
				<li className="main-nav-li-mobile">
					<div className="main-nav-li-icon">
						<CartIcon />
					</div>
					<span>Cart</span>
				</li>
			</ul>
		</>
	);
};

export default MainNav;
