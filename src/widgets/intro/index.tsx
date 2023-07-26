import { Names } from "~/entities/names";
import s from "./styles.module.css";
import clsx from "clsx";

export const Intro = () => {
	return (
		<section className={clsx(s.Root, "container")}>
			<Names className={s.Names} />
		</section>
	);
};
