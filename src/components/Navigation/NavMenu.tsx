import React from "react";
import "./NavMenu.scss";
import { ReactComponent as CategoryIcon } from "../../assets/cetegory.svg";
import { ReactComponent as DownCaretIcon } from "../../assets/down-caret.svg";
import India from "../../assets/IndiaFlag.png";

function NavMenu() {
	return (
		<div className="nav-menu">
			<div className="nav-menu-li">
				<CategoryIcon /> ALL CATEGORIES
			</div>
			<ul className="nav-menu-ul">
				<li className="nav-menu-li">Factories</li>
				<li className="nav-menu-li">Officials Shops</li>
				<li className="nav-menu-li">Made In Africa</li>
				<li className="nav-menu-li">
					Trade Services <DownCaretIcon />
				</li>
				<li className="nav-menu-li">
					Source on Anaizan.com <DownCaretIcon />
				</li>
				<li className="nav-menu-li">
					Sell on Anaizan <DownCaretIcon />
				</li>
				<li className="nav-menu-li">
					Help <DownCaretIcon />
				</li>
			</ul>
			<div className="nav-menu-li">
				<ul className="nav-menu-ul-right">
					<li className="nav-menu-li">
						English - XOF <DownCaretIcon />
					</li>
					<div style={{ borderLeft: "1px solid grey", height: "10px" }}></div>
					<li
						className="nav-menu-li"
						style={{ display: "flex", alignItems: "center" }}
					>
						Ship to{" "}
						<img
							src={India}
							alt="India"
							style={{ height: "10px", width: "20px", marginInline: "5px" }}
						/>
						<DownCaretIcon />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavMenu;
