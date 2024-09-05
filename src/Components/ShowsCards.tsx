import { AllShowsProps } from "@/Utils/types";
import Link from "next/link";
import React from "react";

const ShowsCards = ({ shows }: { shows: AllShowsProps }) => {
	return (
		<Link href={`/shows/${shows.id}`}>
			<div className="h-[600px] w-[350px] bg-slate-700 shadow-lg shadow-red-700 rounded-lg mt-10 p-2 hover:cursor-pointer hover:scale-110 transition ease-in-out hover:bg-slate-500">
				<div className="h-[90%] w-full">
					<img
						src={shows.cover_url}
						alt=""
						className="object-contain h-full w-full"
					/>
				</div>
				<h2 className="text-white text-2xl font-bold h-[10%] text-center">
					{shows.title}
				</h2>
			</div>
		</Link>
	);
};

export default ShowsCards;
