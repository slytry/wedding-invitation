import clsx from "clsx";
import { PropsWithChildren } from "react";
import s from "./styles.module.css";

type HeadingWithBackgroundProps = {
	img: string;
	imgClass?: string;
};

export const HeadingWithBackground = ({
	children,
	img,
	imgClass,
}: PropsWithChildren<HeadingWithBackgroundProps>) => {
	return (
		<div className={clsx(s.Root)}>
			<img src={img} alt="" className={clsx(s.Image, imgClass)} />
			<h2 className={clsx(s.Heading)}>{children}</h2>
		</div>
	);
};
