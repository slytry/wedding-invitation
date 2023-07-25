import { LazyMotion, domAnimation } from "framer-motion";
import { PropsWithChildren } from "react";

export function Framer({ children }: PropsWithChildren) {
	return (
		<LazyMotion features={domAnimation} strict>
			{children}
		</LazyMotion>
	);
}
