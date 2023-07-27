import { Location } from "~/entities/location";
import s from "./styles.module.css";
import clsx from "clsx";
import { text } from "~/shared/config";
import { HeadingWithBackground } from "~/entities/heading-background";

export const GetRich = () => {
	return (
		<section className={clsx(s.Root)}>
			<div className={clsx(s.LeftSide, "container")}>
				<HeadingWithBackground img="/place.svg">
					{text.place.heading}
				</HeadingWithBackground>

				<p className={clsx(s.Text)}>{text.place.place}</p>
				<p className={clsx(s.Text)}>{text.place.gym}</p>
				<p className={clsx(s.Text)}>{text.place.address}</p>
			</div>
			<Location />
		</section>
	);
};
