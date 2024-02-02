import { FastifyInstance } from "fastify";

import { prisma } from "../lib/prisma";
import { NotePostSchema } from "../schemas/Note";

export async function postNote(app: FastifyInstance) {
	app.post("/post-note", async (req, res) => {
		try {
			const { id, title, content } = NotePostSchema.parse(req.body);

			await prisma.note.create({
				data: {
					id,
					title,
					content,
				},
			});

			res.status(201).send("Note Created!");
		} catch (err) {
			res.status(500).send(err);
		}
	});
}
