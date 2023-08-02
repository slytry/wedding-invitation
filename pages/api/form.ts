import { notionApi } from "~/shared/api";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const response = await notionApi.addNewEntryToDatabase({
			title: req.body.name,
			contact: req.body.contact,
			time: req.body.time,
		});

		res.status(200).json(response);
	} catch (e) {
		res.status(404).json(e);
	}
};

export default handler;
