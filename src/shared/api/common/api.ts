import { getCurrentData } from "~/shared/lib/formatter";
import { api } from "./config";

export const sentForm = async (
	user: Record<string, string>,
	onSuccess?: () => void,
) => {
	try {
		const res = await api
			.url("/form")
			.post({ ...user, time: getCurrentData() });

		return res;
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}
};
