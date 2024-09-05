"use client";
import Link from "next/link";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
	return (
		<header className="h-[10vh] w-full flex items-center justify-between bg-gradient-to-t from-red-800 to-red-600 border-b-2 px-10 sticky top-0 z-10">
			<Link href={"/"}>
				<h2 className="text-2xl font-bold hover:cursor-pointer hover:scale-125 transition ease-in-out">
					MCU APP
				</h2>
			</Link>
			<ul className="flex gap-6 text-xl">
				<Link href={`/`}>
					<li className="hover:cursor-pointer hover:underline">
						Movies
					</li>
				</Link>
				<Link href={`/shows`}>
					<li className="hover:cursor-pointer hover:underline">
						TV Shows
					</li>
				</Link>
			</ul>
			
		</header>
	);
};

export default Header;
