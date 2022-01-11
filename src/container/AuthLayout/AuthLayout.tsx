import React from "react";

const AuthLayout = (props: any) => {
	return (
		<div style={{ backgroundColor: "#F6F9FE", minHeight: "100vh" }}>
			{props.children}
		</div>
	);
};

export default AuthLayout;
