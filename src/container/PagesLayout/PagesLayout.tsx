import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navigation/Navbar";

function PagesLayout(props: any) {
	const { isLoggedIn } = useSelector((state: any) => state.auth);
	const history = useHistory();
	useEffect(() => {
		if (isLoggedIn === false) {
			history.push("/login");
		}
	});

	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
}

export default PagesLayout;
