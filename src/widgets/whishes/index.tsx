import clsx from "clsx";
import { text } from "~/shared/config";
import s from "./styles.module.css";
import parse from "html-react-parser";
import Balancer from "react-wrap-balancer";

export const Whishes = () => {
	return (
		<section className={clsx(s.Root, "container")}>
			<p className={s.Glad}>
				<Balancer>{parse(text.weWelGlad)}</Balancer>
			</p>
			<p className={s.Love}>
				<Balancer>{parse(text.withLove)}</Balancer>
			</p>
		</section>
	);
};
