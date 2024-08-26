"use client";
import Header from "@/Components/Header";
import ShowsCards from "@/Components/ShowsCards";
import { getAllShows } from "@/Service/fetchData";
import { AllShowsProps } from "@/Utils/types";
import React, { useEffect, useState } from "react";

const page = () => {
	const [showsList, setShowsList] = useState<AllShowsProps[]>([]);
	useEffect(() => {
		getAllShows()
			.then((res) => {
				setShowsList(res.data);
				console.log(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<div className="min-h-screen bg-black">
            <Header />
            <h1 className="text-4xl text-center m-10">All TV Shows</h1>
			<section className="w-full min-h-screen flex gap-10 flex-wrap tems-center justify-evenly mt-24">
				{showsList &&
					showsList.map((shows) => {
						return <ShowsCards key={shows.id} shows={shows} />;
					})}
			</section>
		</div>
	);
};

export default page;
