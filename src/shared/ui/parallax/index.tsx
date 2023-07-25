import { useState, useRef, useLayoutEffect, ReactNode } from "react";
import {
	m,
	useScroll,
	useTransform,
	useSpring,
	useReducedMotion,
} from "framer-motion";

type ParallaxProps = {
	children: ReactNode;
	offset?: number;
};

export const Parallax = ({
	children,
	offset = 50,
}: ParallaxProps): JSX.Element => {
	const prefersReducedMotion = useReducedMotion();
	const [elementTop, setElementTop] = useState(0);
	const [clientHeight, setClientHeight] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const initial = elementTop - clientHeight;
	const final = elementTop + offset;

	const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
	const y = useSpring(yRange, { stiffness: 400, damping: 90 });

	useLayoutEffect(() => {
		const element = ref.current;
		const onResize = () => {
			setElementTop(
				// rome-ignore lint/style/noNonNullAssertion: <explanation>
				element!.getBoundingClientRect().top + window.scrollY,
			);
			setClientHeight(window.innerHeight);
		};
		onResize();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, [ref]);

	// Don't parallax if the user has "reduced motion" enabled
	if (prefersReducedMotion) {
		return <>{children}</>;
	}

	return (
		<m.div ref={ref} style={{ y }}>
			{children}
		</m.div>
	);
};
