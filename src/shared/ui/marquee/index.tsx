import s from "./styles.module.css";

const invite = "ПРИГЛАШЕНИЕ";

const block = (
	<>
		<li>{invite}</li>
	</>
);

const blocks = (
	<>
		{block}
		{block}
		{block}
	</>
);

export const Marquee = () => {
	return (
		<div className={s.Root}>
			<ul className={s.Content}>{blocks}</ul>

			<ul aria-hidden="true" className={s.Content}>
				{blocks}
			</ul>
		</div>
	);
};
