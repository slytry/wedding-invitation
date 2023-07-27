import { WeddingDate } from "~/entities/wedding-date";
import s from "./styles.module.css";
import Balancer from "react-wrap-balancer";
import parse from "html-react-parser";
import clsx from "clsx";
import { text } from "~/shared/config";

export const Invite = () => {
	return (
		<section className={clsx(s.Root, "container")}>
			<p className={s.Intro}>{text.intro}</p>
			<WeddingDate className={s.Date} />
			<p className={clsx(s.Desc)}>
				<Balancer>{parse(text.description)}</Balancer>
			</p>
		</section>
	);
};
