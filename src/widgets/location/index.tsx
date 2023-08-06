import { Location } from "~/entities/location";
import s from "./styles.module.css";
import clsx from "clsx";
import { text } from "~/shared/config";
import { HeadingWithBackground } from "~/entities/heading-background";
import { Dialog, useDialog } from "~/shared/ui/dialog";

export const GetRich = () => {
	const dialogProps = useDialog();

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
			<button
				className={clsx(s.Text, "button")}
				type="button"
				onClick={dialogProps.open}
			>
				{String("Показать карту").toUpperCase()}
			</button>

			<Dialog ref={dialogProps.ref}>
				<Location />
			</Dialog>
		</section>
	);
};
