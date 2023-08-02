import clsx from "clsx";
import s from "./styles.module.css";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export const CloseButton = ({ className, ...others }: ButtonProps) => {
	return (
		<button
			type="button"
			className={clsx(s.Root, className)}
			aria-label="Закрыть"
			{...others}
		>
			{/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				className="lucide lucide-x"
				viewBox="0 0 24 24"
			>
				<path d="M18 6L6 18M6 6l12 12" />
			</svg>
		</button>
	);
};
