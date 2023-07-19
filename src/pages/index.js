import Head from "next/head";
import Image from "next/image";

import Circle from "../../public/images/circle-accent-1.svg";

import Header from "@/parts/Header";
import Hero from "@/parts/Hero";
import Clients from "@/parts/Clients";
import Footer from "@/parts/Footer";

import ListCourses from "@/parts/ListCourses";
import ListCategories from "@/parts/ListCategories";

import courses from "@/constants/api/courses";

function Home(data) {
	// console.log(data);
	return (
		<>
			<Head>
				<title>EduFlex</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<section className="header-clipping pt-10 min-h-screen md:min-h-0">
					<div className="sunshine max-w-full"></div>
					<Image src={Circle} className="absolute left-0 bottom-0" />
					<div className="container mx-auto px-4">
						<Header></Header>
						<Hero></Hero>
					</div>
				</section>
				<section className="container px-4 mx-auto md:pt-24">
					<Clients></Clients>
				</section>
				<section className="container px-4 mx-auto md:pt-24">
					<ListCourses data={data}></ListCourses>
				</section>
				<section className="container px-4 mx-auto md:pt-24">
					<ListCategories></ListCategories>
				</section>
				<section className="mt-24 bg-indigo-1000 py-12">
					<Footer></Footer>
				</section>
			</main>
		</>
	);
}

Home.getInitialProps = async () => {
	try {
		//const response = await courses.all();
		const data = await courses.all(); //response.data;

		return { data: data.data };
	} catch (error) {
		return error;
	}
};

export default Home;
