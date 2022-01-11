const authHeader = () => {
	const authToken = JSON.parse(localStorage.getItem("authToken")!);

	if (authToken) {
		return { Authorization: `Token ${authToken.key}` };
	} else {
		return {};
	}
};
export default authHeader;
