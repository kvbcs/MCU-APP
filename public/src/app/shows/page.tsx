"use client";
import Header from "@/Components/Header";
import Search from "@/Components/Search";
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
		<main className="min-h-screen bg-black pt-20">
			<section className="w-full min-h-screen flex gap-10 flex-wrap tems-center justify-evenly mb-40">
				{showsList &&
					showsList.map((shows) => {
						return <ShowsCards key={shows.id} shows={shows} />;
					})}
			</section>
		</main>
	);
};

export default page;
