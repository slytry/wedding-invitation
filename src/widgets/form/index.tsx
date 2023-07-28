import clsx from "clsx";
import { text } from "~/shared/config";
import s from "./styles.module.css";
import { Radio } from "~/shared/ui/radio";
import { api } from "~/shared/api";
import { useForm } from "react-hook-form";

export const Form = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid },
	} = useForm({
		mode: "onChange",
	});
	// @ts-ignore
	const onSubmit = (data) => {
		api.addItemClient(data, reset);
	};

	return (
		<section className={clsx(s.Root, "container")}>
			<h1 className={s.Title}>{text.form.title}</h1>
			<form className={s.Form} onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					{...register("name", { required: true, minLength: 2 })}
					placeholder={text.form.placeholder}
					className={s.Input}
				/>
				<legend className={s.Legend}>{text.form.q}</legend>
				{text.form.answ.map((el) => (
					<Radio
						key={el.value}
						label={el.value}
						name={el.name}
						register={register}
						required
					/>
				))}
				<button className={s.Button} type="submit" disabled={!isValid}>
					{text.form.sent}
				</button>
			</form>
		</section>
	);
};
