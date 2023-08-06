import clsx from "clsx";
import { text } from "~/shared/config";
import s from "./styles.module.css";
import { Radio } from "~/shared/ui/radio";
import { useFieldArray, useForm } from "react-hook-form";
import { commonApi } from "~/shared/api";
import { NotionCell } from "~/shared/api/types";
import { useState } from "react";
import { Spinner } from "~/shared/ui/spinner";
import { Dialog, useDialog } from "~/shared/ui/dialog";
import Balancer from "react-wrap-balancer";

type Form = {
	names: Array<{ value: NotionCell["title"] }>;
	contact: NotionCell["contact"];
	mainName: NotionCell["title"];
};

export const Form = () => {
	const [loading, setLoading] = useState(false);

	const dialogProps = useDialog();

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { isValid },
	} = useForm<Form>({
		mode: "onChange",
		defaultValues: {
			names: [],
			mainName: "",
		},
	});

	const { fields, append } = useFieldArray({
		name: "names",
		control,
	});

	const onSubmit = async ({ contact, names, mainName }: Form) => {
		try {
			const newArr = [{ value: mainName }, ...names];
			const newData = {
				contact,
				name: newArr.map((el) => el.value.trim()).join(", "),
				num: newArr.length,
			};

			setLoading(true);
			await commonApi.sentForm(newData, () => {
				dialogProps.open();
				reset();
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className={clsx(s.Root, "container")}>
			{loading && (
				<div className={s.Spinner}>
					<Spinner />
				</div>
			)}
			<h1 className={s.Title}>{text.form.title}</h1>

			<form className={s.Form} onSubmit={handleSubmit(onSubmit)}>
				<p className={s.Bio}>Введите ваше имя и с кем вы придете</p>

				<input
					type="text"
					{...register("mainName", {
						required: true,
						minLength: 2,
					})}
					placeholder={text.form.placeholder}
					className={s.Input}
				/>
				{fields.map((field, i) => (
					<input
						type="text"
						key={field.id}
						{...register(`names.${i}.value` as const, {
							minLength: 2,
						})}
						placeholder={text.form.placeholder}
						className={s.Input}
					/>
				))}

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
				<button
					className={clsx(s.Button)}
					onClick={() => append({ value: "" })}
					type="button"
				>
					+1
				</button>
				<button className={s.Button} type="submit" disabled={!isValid}>
					{text.form.sent}
				</button>
			</form>
			<Dialog ref={dialogProps.ref}>
				<div className={s.Dialog}>
					<h1>
						<Balancer>
							Спасибо за ваши ответы! Они помогут нам при организации свадьбы
						</Balancer>
					</h1>
					<form method="dialog">
						{/* rome-ignore lint/a11y/noAutofocus: <explanation> */}
						<button className={s.Button} type="submit" autoFocus>
							Хорошо
						</button>
					</form>
				</div>
			</Dialog>
		</section>
	);
};
