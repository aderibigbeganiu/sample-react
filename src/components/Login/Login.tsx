import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./Login.scss";
import buildershopimg1 from "../../assets/builder-shop-img1.png";
import kisspngwomanfashionshoppingbeauty from "../../assets/kisspng-woman-fashion-shopping-beauty.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { clearMessage } from "../../slices/message";
import { login } from "../../slices/auth";
import { Redirect } from "react-router-dom";
import { useAppDispatch } from "../../app/store";

const ErrorMessageComponent = (props: any) => {
	return (
		<div style={{ color: "red", fontWeight: "lighter" }}>{props.children}</div>
	);
};

const Login = (props: any) => {
	const [loading, setLoading] = useState(false);

	const { isLoggedIn } = useSelector((state: any) => state.auth);
	const { message } = useSelector((state: any) => state.message);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(clearMessage);
	}, [dispatch]);

	const validationSchema = Yup.object({
		username: Yup.string().required("Required"),
		password: Yup.string().required("Required"),
	});

	const initialValues = {
		username: "",
		password: "",
	};

	const handleLogin = (e: any) => {
		const { username, password } = e;
		setLoading(true);
		dispatch(login({ username, password }))
			.unwrap()
			.then(() => {
				props.history.push("/");
				window.location.reload();
			})
			.catch(() => {
				setLoading(false);
			});
	};

	if (isLoggedIn) {
		return <Redirect to="/" />;
	}

	return (
		<div
			style={{
				paddingInline: "50px",
			}}
		>
			<div style={{ paddingTop: "20px" }}>
				<Link to="/">
					<img src={Logo} alt="logo" />
				</Link>
			</div>
			<div
				style={{
					// height: "100vh",
					display: "flex",
				}}
			>
				<div
					style={{
						width: "40%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						style={{
							fontWeight: "bolder",
							fontSize: "30px",
							textAlign: "center",
							textTransform: "uppercase",
						}}
					>
						welcome to african{" "}
						<span style={{ color: "#CA000F" }}>b2b & b2c marketplace</span>
					</div>
					<p style={{ fontSize: "16px", textAlign: "center" }}>
						Anaizan.com is a great B2B & B2C platform which is going to be
						launched very soon, we are preparing a lot of supprise for you. We
						are working to offer you features that will allow you to sell easily
						online and increase your turnover. On anaizan.com anyone can work
						and earn money. We are here to offer free training to help you know
						how to use and benefit from the benefits that we offer. Thank you
						for subscribing and following us on our pages.
					</p>
					<img
						src={buildershopimg1}
						height={400}
						width={500}
						alt="builder shop"
					/>
				</div>
				<img
					src={kisspngwomanfashionshoppingbeauty}
					height={600}
					width={250}
					style={{ marginTop: "100px" }}
					alt="builder shop"
				/>
				<div
					style={{
						width: "50%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						alignSelf: "center",
						backgroundColor: "#fff",
						height: "500px",
						borderRadius: "10px",
						boxShadow: "0px 4px 50px 2px rgba(0, 0, 0, 0.09)",
					}}
				>
					<div className="login-form-header">Login with Anaizan Account</div>

					<Formik
						validationSchema={validationSchema}
						initialValues={initialValues}
						onSubmit={handleLogin}
					>
						<>
							{message && <div style={{ color: "red" }}>{message}</div>}
							<Form className="login-form">
								<div className="input-wrapper">
									<label htmlFor="username">Email or Username</label>
									<Field
										className="login-form-field"
										type="text"
										id="username"
										name="username"
										placeholder="email or username"
										autoComplete="username"
									/>
									<ErrorMessage
										component={ErrorMessageComponent}
										name="username"
									/>
								</div>
								<div className="input-wrapper">
									<label htmlFor="password">Password</label>
									<Field
										className="login-form-field"
										type="password"
										id="password"
										name="password"
										placeholder="password"
										autoComplete="current-password"
									/>
									<ErrorMessage
										component={ErrorMessageComponent}
										name="password"
									/>
								</div>
								<button type="submit" className="login-form-submit">
									{loading ? <span>Loading...</span> : <span>SIGN IN</span>}
								</button>
							</Form>
						</>
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Login;
