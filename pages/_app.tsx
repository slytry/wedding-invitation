import "~/app/main.css";
import type { AppProps } from "next/app";
import { Framer } from "~/app/providers";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Framer>
			<Component {...pageProps} />
		</Framer>
	);
}
