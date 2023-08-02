import { parsedDatabaseId, notion } from "../notion/config";
import { NotionCell } from "../types";

export const addNewEntryToDatabase = async ({
	title,
	contact,
	time,
}: NotionCell) => {
	const response = await notion.pages.create({
		parent: { database_id: parsedDatabaseId },
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

	return response;
};
