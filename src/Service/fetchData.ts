import axios from "axios";

export async function getAllMovies() {
	let url = `${process.env.NEXT_PUBLIC_API}/movies`;

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
	let url = `${process.env.NEXT_PUBLIC_API}/movies/${id}`;

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
	let url = `${process.env.NEXT_PUBLIC_API}/tvshows`;

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

export async function getOneShow(id: number) {
	let url = `${process.env.NEXT_PUBLIC_API}/tvshows/${id}`;

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
