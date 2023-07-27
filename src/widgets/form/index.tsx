import clsx from "clsx";
import { text } from "~/shared/config";
import s from "./styles.module.css";
import { Radio } from "~/shared/ui/radio";

export const Form = () => {
	return (
		<section className={clsx(s.Root, "container")}>
			<h1 className={s.Title}>{text.form.title}</h1>
			<form className={s.Form}>
				<input
					type="text"
					placeholder={text.form.placeholder}
					className={s.Input}
				/>
				<legend className={s.Legend}>{text.form.q}</legend>
				{text.form.answ.map((el) => (
					<Radio key={el.value} {...el} />
				))}
				<button className={s.Button} type="submit">
					{text.form.sent}
				</button>
			</form>
		</section>
	);
};
