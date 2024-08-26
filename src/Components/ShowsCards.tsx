import { AllShowsProps } from "@/Utils/types";
import React from "react";

const ShowsCards = ({ shows }: { shows: AllShowsProps }) => {
	return (
		<div className="h-[600px] w-[400px] bg-slate-800 mt-10 rounded-lg p-4 hover:cursor-pointer hover:bg-slate-600">
			<div className="w-full h-[90%]">
				<img
					src={shows.cover_url}
					alt=""
					className="object-contain h-full w-full"
				/>
			</div>
			<h2 className="text-center text-white text-xl">{shows.title}</h2>
		</div>
	);
};

export default ShowsCards;
