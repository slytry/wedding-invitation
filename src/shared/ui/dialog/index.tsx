import { ComponentPropsWithRef, forwardRef, useRef } from "react";
import s from "./styles.module.css";
import { CloseButton } from "~/shared/close-button";
import { mergeRefs } from "react-merge-refs";

type DialogProps = ComponentPropsWithRef<"dialog">;
//@ts-ignore
function closeOnBackDropClick({ currentTarget, target }) {
	const dialogElement = currentTarget;
	const isClickedOnBackDrop = target === dialogElement;
	if (isClickedOnBackDrop) {
		dialogElement.close();
	}
}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
	({ children }, ref) => {
		const localRef = useRef<HTMLDialogElement>(null);
		const handleClose = () => {
			localRef.current?.close();
		};

		return (
			// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
			<dialog
				id={"modal"}
				className={s.Dialog}
				ref={mergeRefs([localRef, ref])}
				onClick={closeOnBackDropClick}
			>
				<div className={s.Wrapper}>
					<CloseButton onClick={handleClose} className={s.Close} />
					{children}
				</div>
			</dialog>
		);
	},
);
