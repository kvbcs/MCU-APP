"use client";
import MovieCards from "@/Components/MovieCards";
import { getOneMovie } from "@/Service/fetchData";
import { AllMovieProps } from "@/Utils/types";
import Link from "next/link";
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
		<main className="min-h-screen max-h-fit w-full flex flex-col mb-40 gap-24 bg-black">
			<section className="flex w-full h-[90vh]">
				<figure className="w-1/3 h-full">
					<img
						src={details?.cover_url}
						className="object-cover h-full"
						alt={details?.title}
					/>
				</figure>
				<div className="w-2/3 p-10 h-full flex flex-col items-center justify-evenly">
					<h2 className="text-white text-6xl text-center font-bold font-serif">
						{details?.title}
					</h2>

					<p className="text-justify p-4 w-2/3">
						{details?.overview}
					</p>
					<h2 className="text-white text-xl text-center">
						Directed by {details?.directed_by}
					</h2>
					<a
						href={details?.trailer_url}
						className="text-blue-400 hover:underline hover:text-blue-200 text-xl font-bold"
						target="_blank"
					>
						Watch the trailer
					</a>
					<div className="flex gap-10 justify-evenly items-center">
						<h3>Duration : {details?.duration} minutes</h3>
						<h3 className="text-green-500 flex gap-2">
							${details?.box_office}
							<span className="text-white">
								at the box office.
							</span>
						</h3>
						<h3>Released on {details?.release_date}</h3>
					</div>
				</div>
			</section>
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
