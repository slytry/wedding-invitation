import clsx from "clsx";
import { text } from "../../shared/config";
import s from "./styles.module.css";
import { DivProps } from "~/shared/types";
import { Appear } from "~/shared/ui/appearance-animation";

export const Names = ({ className }: DivProps) => {
	return (
		<Appear>
			<h1 className={clsx(s.Root, className)}>{text.title}</h1>
		</Appear>
	);
};
