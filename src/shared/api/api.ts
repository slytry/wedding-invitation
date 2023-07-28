import { databaseId, notion } from "./config";

const formatter = new Intl.DateTimeFormat("ru", {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
});

export async function addItemClient(
	user: Record<string, string>,
	onSuccess?: () => void,
) {
	const response = await fetch("/api/user", {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify({ ...user, time: formatter.format(new Date()) }),
	});

	if (response.ok) {
		onSuccess?.();
		const result = await response.json();
		console.log("Успешно HTTP", result);
	} else {
		console.error(`Ошибка HTTP: ${response.status}`);
	}
}

// @ts-ignore
export async function addItem({ title, contact, time }) {
	try {
		const response = await notion.pages.create({
			// @ts-ignore
			parent: { database_id: databaseId },
			properties: {
				title: {
					title: [
						{
							text: {
								content: title,
							},
						},
					],
				},
				Contact: {
					rich_text: [
						{
							text: {
								content: contact,
							},
						},
					],
				},
				Time: {
					rich_text: [
						{
							text: {
								content: time,
							},
						},
					],
				},
			},
		});

		console.log({ response });

		return response;
	} catch (error) {
		// throw new Error(error);
	}
}
