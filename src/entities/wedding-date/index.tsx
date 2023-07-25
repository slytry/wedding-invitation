import clsx from "clsx";
import s from "./styles.module.css";
import { DivProps } from "~/shared/types";
import { text } from "~/shared/config";

export const WeddingDate = ({ className }: DivProps) => {
	return (
		<div className={clsx(s.Root, className)}>
			<span className={s.Letter}>{text.data.d}</span>
			<div className={s.Separator} />
			<span className={s.Letter}>{text.data.m}</span>
			<div className={s.Separator} />
			<span className={s.Letter}>{text.data.y}</span>
		</div>
	);
};
