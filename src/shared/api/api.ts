import { databaseId, notion } from "./config";

export async function addItemClient(user: string) {
	const response = await fetch("/api/user", {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: user,
	});

	if (response.ok) {
		const result = await response.json();
	} else {
		console.error(`Ошибка HTTP: ${response.status}`);
	}
}

// @ts-ignore
export async function addItem({ title, contact }) {
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
			},
		});

		console.log({ response });

		return response;
	} catch (error) {
		// throw new Error(error);
	}
}
