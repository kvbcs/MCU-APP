"use client";
import MovieCards from "@/Components/MovieCards";
import { getOneMovie } from "@/Service/fetchData";
import { AllMovieProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { id: number } }) => {
	const [details, setDetails] = useState<AllMovieProps>();

	useEffect(() => {
		getOneMovie(params.id)
			.then((res) => {
				setDetails(res);
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<main className="min-h-screen w-full flex flex-col gap-24 bg-slate-800">
			<div className="flex w-full min-hscreen">
				<section className="w-1/3 h-full">
					<img
						src={details?.cover_url}
						className="object-cover"
						alt=""
					/>
				</section>
				<section className="w-2/3 p-10 h-screen max-h-fit flex flex-col justify-evenly">
					{" "}
					<h2 className="text-white text-4xl text-center">
						{details?.title}
					</h2>
					<p className="text-justify p-4">{details?.overview}</p>
					<h2 className="text-white text-xl text-center">
						Directed by {details?.directed_by}
					</h2>
					<div className="flex gap-10 justify-evenly items-center">
						<h3>Duration : {details?.duration} minutes</h3>
						<h3 className="text-green-500">
							${details?.box_office} at the box office.
						</h3>
						<h3>Released on {details?.release_date}</h3>
					</div>
				</section>
			</div>
			<section className="min-h-screen w-full">
				<h2 className="text-center text-4xl text-white">
					See related movies :
				</h2>
				<div className="w-full flex flex-wrap justify-center items-center gap-10">
					{details?.related_movies &&
						details.related_movies.map((movie) => {
							return <MovieCards movie={movie} />;
						})}
				</div>
			</section>
		</main>
	);
};

export default page;
