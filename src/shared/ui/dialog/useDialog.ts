import { ForwardedRef, useRef } from "react";
import { mergeRefs } from "react-merge-refs";

export const useDialog = (ref?: ForwardedRef<HTMLDialogElement>) => {
	const localRef = useRef<HTMLDialogElement>(null);

	const handleClose = () => {
		localRef.current?.close();
	};

	const open = () => {
		localRef.current?.showModal();
		document.body.classList.add("scroll-lock");
	};

	const returnScroll = () => {
		document.body.classList.remove("scroll-lock");
	};

	localRef.current?.addEventListener("close", returnScroll);

	return {
		ref: ref ? mergeRefs<HTMLDialogElement>([localRef, ref]) : localRef,
		open,
		close: handleClose,
	};
};
