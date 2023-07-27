import { Main } from "~/app";
import { Attire } from "~/widgets/attire";
import { Form } from "~/widgets/form";
import { GetTouch } from "~/widgets/get-touch";
import { Intro } from "~/widgets/intro";
import { Invite } from "~/widgets/invite";
import { GetRich } from "~/widgets/location";
import { Rules } from "~/widgets/rules";
import { Schedule } from "~/widgets/schedule";
import { Whishes } from "~/widgets/whishes";

export default function HomePage() {
	return (
		<Main>
			<Intro />
			<Invite />
			<Schedule />
			<GetRich />
			<GetTouch />
			<Attire />
			<Rules />
			<Form />
			<Whishes />
		</Main>
	);
}
