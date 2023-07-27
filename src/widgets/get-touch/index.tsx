import clsx from "clsx";
import { text } from "~/shared/config";
import s from "./styles.module.css";

export const GetTouch = () => {
	return (
		<section className={clsx(s.Root, "container")}>
			<p className={clsx(s.Text)}>{text.getContact}</p>
			<h2 className={clsx(s.Name)}>РОЗА</h2>
			<div className={clsx(s.Links)}>
				<a className={clsx(s.Link)} href="tel:+79289090068">
					ПОЗВОНИТЬ
				</a>
				<a className={clsx(s.Link)} href="https://wa.me/79289090068">
					НАПИСАТЬ В WHATSAPP
				</a>
			</div>
		</section>
	);
};
