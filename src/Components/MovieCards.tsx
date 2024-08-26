import { AllMovieProps } from "@/Utils/types";
import Link from "next/link";
import React from "react";

const MovieCards = ({ movie }: { movie: AllMovieProps }) => {
	return (
		<Link href={`/movie/${movie.id}`}>
			<div className="h-[600px] w-full bg-slate-800 rounded-lg mt-24 p-6 hover:cursor-pointer hover:bg-slate-600">
				<div className="h-[90%] w-full">
					<img
						src={movie.cover_url}
						alt=""
						className="object-contain h-full w-full"
					/>
				</div>
				<h2 className="text-white text-xl h-[10%] flex items-center justify-center ">
					{movie.title}
				</h2>
			</div>
		</Link>
	);
};

export default MovieCards;
