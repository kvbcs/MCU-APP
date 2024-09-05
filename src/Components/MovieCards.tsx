import { AllMovieProps } from "@/Utils/types";
import Link from "next/link";
import React from "react";

const MovieCards = ({ movie }: { movie: AllMovieProps }) => {
	return (
		<Link href={`/movie/${movie.id}`}>
			<div className="h-[600px] w-[350px] bg-slate-700 shadow-lg shadow-red-700 rounded-lg mt-10 p-3 hover:cursor-pointer hover:scale-110 transition ease-in-out hover:bg-slate-500">
				<div className="h-[85%] w-full">
					<img
						src={movie.cover_url}
						alt={movie.cover_url}
						className="object-cover h-full w-full"
					/>
				</div>
				<h2 className="text-white text-2xl font-bold h-[15%] flex items-center justify-center text-center">
					{movie.title}
				</h2>
			</div>
		</Link>
	);
};

export default MovieCards;
