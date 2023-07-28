import { PropsWithRef } from "react";
import s from "./styles.module.css";

type RadioProps = PropsWithRef<"input">;
//@ts-ignore
export const Radio = ({ label, name, register, required }) => {
	return (
		<label className={s.Root}>
			<input
				className={s.Input}
				{...register(name, { required })}
				value={label}
				type="radio"
			/>
			<span className={s.Label}>{label}</span>
		</label>
	);
};
