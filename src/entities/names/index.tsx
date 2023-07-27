import clsx from "clsx";
import { text } from "../../shared/config";
import s from "./styles.module.css";
import { DivProps } from "~/shared/types";
import { Parallax } from "~/shared/ui/parallax";
import { Appear } from "~/shared/ui/appearance-animation";

export const Names = ({ className }: DivProps) => {
	return (
		// <div className={clsx(s.Root, className)}>
		// 	<Parallax>
		// 		<img className={clsx(s.Img, s.R)} src="/R.png" alt="R" />
		// 	</Parallax>
		<Appear>
			<h1 className={s.Title}>{text.title}</h1>
		</Appear>

		// 	<Parallax>
		// 		<img className={clsx(s.Img, s.N)} src="/N.svg" alt="N" />
		// 	</Parallax>
		// </div>
	);
};
