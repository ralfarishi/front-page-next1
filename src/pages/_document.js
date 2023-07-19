import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					rel="icon"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
