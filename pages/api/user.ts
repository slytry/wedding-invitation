import { api } from "~/shared/api";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const response = api.addItem({
			title: req.body.name,
			contact: req.body.contact,
		});
		// console.log({ response });

		res.status(200).json(response);
	} catch (error) {
		res.status(400).json(error);
	}
};

export default handler;
