import clsx from "clsx";
import { text } from "~/shared/config";
import s from "./styles.module.css";
import { HeadingWithBackground } from "~/entities/heading-background";

export const Attire = () => {
	return (
		<section className={clsx(s.Root, "container")}>
			<HeadingWithBackground img="dressCode.svg" imgClass={clsx(s.Image)}>
				{text.dress}
			</HeadingWithBackground>
			<p className={clsx(s.Text)}>
				У нас нет определенного дресс кода. Приходите в одежде в которой вам
				будет комфортно.
			</p>
		</section>
	);
};
