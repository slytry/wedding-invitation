import { getCurrentData } from "~/shared/lib/formatter";
import { api } from "./config";
import { NotionCell } from "../types";

type Form = {
	name: NotionCell["title"];
	contact: NotionCell["contact"];
	num: NotionCell["num"];
};

export const sentForm = async (user: Form, onSuccess?: () => void) => {
	try {
		await api.url("/form").post({ ...user, time: getCurrentData() });

		onSuccess?.();
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}
};
