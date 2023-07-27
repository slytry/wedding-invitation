import { Names } from "~/entities/names";
import s from "./styles.module.css";
import clsx from "clsx";
import { Marquee } from "~/shared/ui/marquee";

// @ts-ignore
export const Intro = () => {
	return (
		<>
			<Marquee />
			<section className={clsx(s.Root, "container")}>
				<Names className={s.Names} />
			</section>
		</>
	);
};
