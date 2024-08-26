import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header className="h-[10vh] w-full flex items-center justify-center border-b-2 ">
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
		</header>
	);
};

export default Header;
