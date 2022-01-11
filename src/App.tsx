import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./slices/user";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector((state: any) => state.auth);

	useEffect(() => {
		isLoggedIn && dispatch(getUser({}));
	}, [dispatch, isLoggedIn]);

	return (
		<Router>
			<ScrollToTop />
			<BaseRouter />
		</Router>
	);
}

export default App;
