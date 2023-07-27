import clsx from "clsx";
import { PropsWithChildren } from "react";
import s from "./styles.module.css";

type HeadingWithBackgroundProps = {
	img: string;
	imgClass?: string;
	className?: string;
};

export const HeadingWithBackground = ({
	children,
	img,
	imgClass,
	className,
}: PropsWithChildren<HeadingWithBackgroundProps>) => {
	return (
		<div className={clsx(s.Root, className)}>
			<img src={img} alt="" className={clsx(s.Image, imgClass)} />
			<h2 className={clsx(s.Heading)}>{children}</h2>
		</div>
	);
};
