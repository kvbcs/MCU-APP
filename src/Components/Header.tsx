import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="h-[10vh] w-full flex items-center justify-between bg-gradient-to-t from-red-800 to-red-600 border-b-2 px-10">
			<h2 className="text-2xl font-bold">MCU APP</h2>
			<ul className="flex gap-6 text-xl">
				<Link href={`/`}>
					<li className="hover:cursor-pointer hover:underline">
						Movies
					</li>
				</Link>
				<Link href={`shows`}>
					<li className="hover:cursor-pointer hover:underline">
						TV Shows
					</li>
				</Link>
			</ul>
			<button className="bg-white text-black rounded-full p-2 text-xl">Click me</button>
		</header>
	);
};

export default Header;
