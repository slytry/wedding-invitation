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
				<video
					className={s.Video}
					src="/loop.mp4"
					autoPlay
					muted
					playsInline
					loop
					poster="/poster.png"
				/>
				<div className={s.Overlay} />
				<Names className={s.Names} />
			</section>
		</>
	);
};
