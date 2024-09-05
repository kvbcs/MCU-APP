"use client";
import MovieCards from "@/Components/MovieCards";
import Search from "@/Components/Search";
import { getAllMovies } from "@/Service/fetchData";
import { AllMovieProps } from "@/Utils/types";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Bars } from "react-loader-spinner";

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
		<main className="flex min-h-screen flex-col gap-4 pt-20">
			<section className="min-screen max-h-fit w-full flex items-center justify-evenly mb-40 flex-wrap gap-10">
				{movieList &&
					movieList.map((movie) => {
						return <MovieCards movie={movie} key={movie.id} />;
					})}
			</section>
		</main>
	);
}
