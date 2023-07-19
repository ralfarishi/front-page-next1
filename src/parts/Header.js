import React, { useState } from "react";
import propTypes from "prop-types";

import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";

import Logo from "@/components/Logo";

export default function Header({ onLight }) {
	const [ToggleMenu, setToggleMenu] = useState(false);

	const linkColor = onLight ? "text-gray-900" : "text-white";

	const router = useRouter();

	const linkCTA =
		router.pathname.indexOf("/login") > -1
			? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
			: `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
	const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

	return (
		<header
			className={[
				"flex justify-between items-center",
				ToggleMenu ? "fixed w-full -mx-4 px-4" : "",
			].join(" ")}
		>
			<div style={{ height: 5, zIndex: 504 }}>
				<Image src={Logo} className="on-dark" />
				{/* <Logo className="on-dark"></Logo> */}
			</div>
			<div className="flex md:hidden">
				<button
					onClick={() => setToggleMenu((prev) => !prev)}
					className={["toggle z-50", ToggleMenu ? "active" : ""].join(" ")}
				></button>
			</div>
			<ul
				className={[
					"transition-all duration-200 items-center fixed inset-0 bg-indigo-1000 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible",
					ToggleMenu ? "opacity-100 visible z-20" : "opacity-0 invisible",
				].join(" ")}
			>
				<li className="my-4 md:my-0">
					<Link href="/" passHref legacyBehavior>
						<a
							className={[
								linkColor,
								"text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
							].join(" ")}
						>
							Home
						</a>
					</Link>
				</li>
				<li className="my-4 md:my-0">
					<Link href="/" passHref legacyBehavior>
						<a
							className={[
								linkColor,
								"text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
							].join(" ")}
						>
							Pricing
						</a>
					</Link>
				</li>
				<li className="my-4 md:my-0">
					<Link href="/" passHref legacyBehavior>
						<a
							className={[
								linkColor,
								"text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
							].join(" ")}
						>
							Features
						</a>
					</Link>
				</li>
				<li className="my-4 md:my-0">
					<Link href="/courses" target="_blank" passHref legacyBehavior>
						<a
							className={[
								linkColor,
								"text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
							].join(" ")}
							href="/courses"
							target="_blank"
						>
							Search
						</a>
					</Link>
				</li>
				<li className="my-4 md:my-0">
					<a
						target="_blank"
						rel="noopener noereferrer"
						href={linkCTA}
						className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6"
					>
						{textCTA}
					</a>
				</li>
			</ul>
		</header>
	);
}

Header.propTypes = {
	onLight: propTypes.bool,
};
