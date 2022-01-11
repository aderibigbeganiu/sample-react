import axios from "axios";
// import authHeader from "../auth/authHeader";

const authToken = JSON.parse(localStorage.getItem("authToken")!);

const endPoint = process.env.REACT_APP_API_URL;

const getUser = () => {
	return axios
		.get(`${endPoint}/rest-auth/user`, {
			headers: { Authorization: `Token ${authToken.key}` },
			// headers: authHeader(),
		})
		.then((res) => {
			// if (res.data) {
			// 	localStorage.setItem("user", JSON.stringify(res.data));
			// }
			return res.data;
		})
		.catch((error) => {
			console.log(error);
		});
};

const userService = {
	getUser,
};

export default userService;
