import axios from "axios";

export async function getAllMovies() {
	let url = `https://mcuapi.herokuapp.com/api/v1/movies`;

	return axios
		.get(url)
		.then((res) => {
			console.log(res);
			return res.data;
		})
		.catch((e) => {
			console.log(e);
			throw new Error(e);
		});
}

export async function getOneMovie(id: number) {
	let url = `https://mcuapi.herokuapp.com/api/v1/movies/${id}`;

	return axios
		.get(url)
		.then((res) => {
			console.log(res);
			return res.data;
		})
		.catch((e) => {
			console.log(e);
			throw new Error(e);
		});
}

export async function getAllShows() {
	let url = `https://mcuapi.herokuapp.com/api/v1/tvshows`;

	return axios
		.get(url)
		.then((res) => {
			console.log(res);
			return res.data;
		})
		.catch((e) => {
			console.log(e);
			throw new Error(e);
		});
}
