import React from "react";
import MainNav from "./MainNav";

import "./Navbar.scss";
import TopNav from "./TopNav";
import NavMenu from "./NavMenu";

function Navbar() {
	return (
		<nav className="nav">
			<TopNav />
			<MainNav />
			<NavMenu />
		</nav>
	);
}

export default Navbar;
