"use client";

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import MovieCards from "@/Components/MovieCards";
import { getAllMovies } from "@/Service/fetchData";
import { AllMovieProps } from "@/Utils/types";
import { useEffect, useState } from "react";

export default function Home() {
	const [movieList, setMovieList] = useState<AllMovieProps[]>([]);

	useEffect(() => {
		getAllMovies()
			.then((res) => {
				console.log(res.data);
				setMovieList(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<main className="flex min-h-screen flex-col gap-4">
			<h1 className="text-center text-4xl m-10">All Movies</h1>
			<div className="w-full h-[5vh] flex items-center justify-center">
				{" "}
				<input
					type="text"
					name="search"
					id=""
					className="w-1/3 h-full p-2 rounded-l-full px-4"
					placeholder="Search here..."
				/>
				<button className="bg-red-700 h-full p-2 rounded-r-full text-xl">
					Search
				</button>
			</div>
			<section className="min-screen max-h-fit w-full flex items-center justify-evenly mb-40 flex-wrap gap-4">
				{movieList &&
					movieList.map((movie) => {
						return <MovieCards movie={movie} key={movie.id} />;
					})}
			</section>
		</main>
	);
}
