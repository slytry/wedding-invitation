import { m } from "framer-motion";
import { PropsWithChildren } from "react";

export const Appear = ({ children }: PropsWithChildren) => {
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: "easeOut", duration: 2 }}
		>
			{children}
		</m.div>
	);
};
