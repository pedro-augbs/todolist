import { FastifyInstance } from "fastify";

import { prisma } from "../lib/prisma";
import { NotePutScheme } from "../schemas/Note";

export async function putNote(app: FastifyInstance) {
	app.put("/put-note", async (req, res) => {
		try {
			const { id, title, content } = NotePutScheme.parse(req.body);

			const note = await prisma.note.update({
				data: {
					title,
					content,
				},
				where: {
					id,
				},
			});

			res.status(200).send(note);
		} catch (err) {
			res.status(500).send(err);
		}
	});
}
