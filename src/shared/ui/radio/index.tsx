import s from "./styles.module.css";
type RadioProps = { value: string };

export const Radio = (props: RadioProps) => {
	return (
		<label className={s.Root}>
			<input type="radio" className={s.Input} {...props} />
			<span>{props.value}</span>
		</label>
	);
};
