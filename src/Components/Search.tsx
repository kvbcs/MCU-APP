import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
	const showToastMessage = () => {
		toast.success("Success Notification !", {});
	};
	return (
		<div className="w-full h-[5vh] flex items-center justify-center">
			<input
				type="text"
				name="search"
				id=""
				className="w-1/3 h-full p-2 rounded-l-full px-4"
				placeholder="Search here..."
			/>
			<button
				className="bg-red-700 hover:bg-red-500 h-full p-2 rounded-r-full text-xl"
				onClick={showToastMessage}
			>
				Search
			</button>
		</div>
	);
};

export default Search;
