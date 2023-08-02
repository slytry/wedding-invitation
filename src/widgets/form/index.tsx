import clsx from "clsx";
import { text } from "~/shared/config";
import s from "./styles.module.css";
import { Radio } from "~/shared/ui/radio";
import { useForm } from "react-hook-form";
import { commonApi } from "~/shared/api";
import { NotionCell } from "~/shared/api/types";
import { useRef, useState } from "react";
import { Spinner } from "~/shared/ui/spinner";
import { Dialog } from "~/shared/ui/dialog";
import Balancer from "react-wrap-balancer";
type Form = { name: NotionCell["title"]; contact: NotionCell["contact"] };

export const Form = () => {
	const [loading, setLoading] = useState(false);

	const ref = useRef<HTMLDialogElement>(null);

	ref.current?.addEventListener("close", returnScroll);

	function openModalAndLockScroll() {
		ref.current?.showModal();
		document.body.classList.add("scroll-lock");
	}

	function returnScroll() {
		document.body.classList.remove("scroll-lock");
	}

	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid },
	} = useForm<Form>({
		mode: "onChange",
	});

	const onSubmit = async (data: Form) => {
		try {
			setLoading(true);
			await commonApi.sentForm(data, () => {
				openModalAndLockScroll();
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
			<Dialog ref={ref}>
				<div className={s.Dialog}>
					<h1>
						<Balancer>
							Спасибо за ваши ответы!
							<br />
							Ваши ответы очень помогут нам при организации свадьбы
						</Balancer>
					</h1>
					<form method="dialog">
						{/* rome-ignore lint/a11y/noAutofocus: <explanation> */}
						<button className={s.Button} type="submit" autoFocus>
							Агась 🫡
						</button>
					</form>
				</div>
			</Dialog>
		</section>
	);
};
