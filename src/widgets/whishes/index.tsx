import clsx from "clsx";
import { text } from "~/shared/config";
import s from "./styles.module.css";

export const Whishes = () => {
	return (
		<section className={clsx(s.Root, "container")}>
			<h2>{text.whishes}</h2>
		</section>
	);
};
