import { ComponentPropsWithRef, forwardRef, useRef } from "react";
import s from "./styles.module.css";
import { CloseButton } from "~/shared/close-button";
import { useDialog } from ".";

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
		const dialogProps = useDialog(ref);

		return (
			// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
			<dialog
				id={"modal"}
				className={s.Dialog}
				ref={dialogProps.ref}
				onClick={closeOnBackDropClick}
			>
				<div className={s.Wrapper}>
					<CloseButton onClick={dialogProps.close} className={s.Close} />
					{children}
				</div>
			</dialog>
		);
	},
);
