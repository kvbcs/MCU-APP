"use client";

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
			<Header />
			<h1 className="text-center text-4xl m-10">All Movies</h1>
			<section className="min-screen max-h-fit w-full flex items-center justify-evenly flex-wrap gap-4">
				{movieList &&
					movieList.map((movie) => {
						return <MovieCards movie={movie} key={movie.id} />;
					})}
			</section>
		</main>
	);
}
