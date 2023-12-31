import { stepsText } from "~/entities/steps";
import s from "./styles.module.css";
import clsx from "clsx";

export const Schedule = () => {
	return (
		<section className={clsx(s.Root, "container")}>
			<div className={s.Circles}>
				<img src="/photo0.png" alt="" />
				<div className={s.Line} />
				<img src="/photo1.png" alt="" />
				<div className={s.Line} />
				<img src="/photo2.png" alt="" />
			</div>
			<div className={s.Steps}>
				{stepsText.map((el) => (
					<div className={s.Step} key={el.time}>
						<p className={s.Time}>{el.time}</p>
						<p className={s.Place}>{el.place}</p>
					</div>
				))}
			</div>
		</section>
	);
};
