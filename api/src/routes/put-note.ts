import { FastifyInstance } from "fastify";

import { prisma } from "../lib/prisma";
import { PutNoteScheme } from "../entities/Note";

export async function putNote(app: FastifyInstance) {
	app.put("/put-note", async (req, res) => {
		try {
			const { id, title, content } = PutNoteScheme.parse(req.body);

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
