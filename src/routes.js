import React from "react";
// import { Switch, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ProductPage from "./components/ProductPage/ProductPage";
import SubCategory from "./components/SubCategory/SubCategory";
import AuthLayout from "./container/AuthLayout/AuthLayout";
import PagesLayout from "./container/PagesLayout/PagesLayout";

const PagesLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(matchProps) => (
				<PagesLayout>
					<Component {...matchProps} />
				</PagesLayout>
			)}
		/>
	);
};

const AuthLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(matchProps) => (
				<AuthLayout>
					<Component {...matchProps} />
				</AuthLayout>
			)}
		/>
	);
};

const BaseRouter = () => {
	return (
		<Switch>
			<PagesLayoutRoute exact path="/" component={Home} />
			<PagesLayoutRoute exact path="/product-page" component={ProductPage} />
			<PagesLayoutRoute exact path="/sub-category" component={SubCategory} />
			<AuthLayoutRoute exact path="/login" component={Login} />
		</Switch>
	);
};

export default BaseRouter;
