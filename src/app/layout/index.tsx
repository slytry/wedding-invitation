import { PropsWithChildren } from "react";
import { Tenor_Sans } from "next/font/google";
import Head from "next/head";
import styles from "./styles.module.css";
import clsx from "clsx";

const tenor = Tenor_Sans({ subsets: ["cyrillic"], weight: "400" });

export function Main({ children }: PropsWithChildren) {
	return (
		<>
			<Head>
				<title>Приглашение на свадьбу Никиты и Розы</title>
				<meta
					name="description"
					content="Приглашение на свадьбу Никиты и Розы"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<main className={clsx(tenor.className, styles.main)}>{children}</main>
		</>
	);
}
