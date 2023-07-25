import { WeddingDate } from "~/entities/wedding-date";
import s from "./styles.module.css";

import clsx from "clsx";
import { text } from "~/shared/config";

export const Home = () => {
	return (
		<section className={s.Root}>
			<p className={s.Intro}>{text.intro}</p>
			<WeddingDate className={s.Date} />
			<p className={clsx(s.Desc)}>{text.description}</p>
		</section>
	);
};
