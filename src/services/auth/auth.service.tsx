import axios from "axios";

const endPoint = process.env.REACT_APP_API_URL;

const register = (
	username: string,
	email: string,
	password1: string,
	password2: string
) => {
	return axios.post(`${endPoint}registration/`, {
		username,
		email,
		password1,
		password2,
	});
};

const login = (username: string, password: string) => {
	return axios
		.post(`${endPoint}/rest-auth/login/`, { username, password })
		.then((response) => {
			if (response.data.key) {
				localStorage.setItem("authToken", JSON.stringify(response.data));
			}
			return response.data;
		});
};

const logout = () => {
	localStorage.removeItem("authToken");
};

const authService = {
	register,
	login,
	logout,
};

export default authService;
