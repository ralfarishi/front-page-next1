import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer position="top-center"></ToastContainer>
		</>
	);
}
