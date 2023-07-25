import { Main } from "~/app";
import { Home } from "~/widgets/home";
import { Info } from "~/widgets/info";
import { Intro } from "~/widgets/intro";

export default function HomePage() {
	return (
		<Main>
			<Intro />
			<Home />
			<Info />
		</Main>
	);
}
