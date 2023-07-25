import { Names } from "~/entities/names";
import s from "./styles.module.css";

export const Intro = () => {
	return (
		<section className={s.Root}>
			<Names className={s.Names} />
		</section>
	);
};
