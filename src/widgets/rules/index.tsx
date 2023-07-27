import clsx from "clsx";
import { text } from "~/shared/config";
import s from "./styles.module.css";
import { HeadingWithBackground } from "~/entities/heading-background";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";

export const Rules = () => {
	return (
		<section className={clsx(s.Root, "container")}>
			<HeadingWithBackground img="/whishes.svg" imgClass={clsx(s.Image)}>
				{text.whishes}
			</HeadingWithBackground>
			<ul className={s.List}>
				<li>
					<div className={s.ImgWrapper}>
						<Image src={"/children.png"} alt="" width={100} height={100} />
					</div>
					<p className={s.Text}>
						<Balancer>{text.rules.childFree}</Balancer>
					</p>
				</li>
				<li>
					<div className={s.ImgWrapper}>
						<Image src={"/gift.png"} alt="" width={100} height={100} />
					</div>
					<p className={s.Text}>
						<Balancer>{text.rules.moneyBetter}</Balancer>
					</p>
				</li>
				<li>
					<div className={s.ImgWrapper}>
						<Image src={"/flower.png"} alt="" width={100} height={100} />
					</div>
					<p className={s.Text}>
						<Balancer>{text.rules.noFlowers}</Balancer>
					</p>
				</li>
			</ul>
		</section>
	);
};
