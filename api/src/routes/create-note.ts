import { FastifyInstance } from "fastify";

import { prisma } from "../lib/prisma";
import { PostNoteSchema } from "../entities/Note";

export async function postNote(app: FastifyInstance) {
	app.post("/post-note", async (req, res) => {
		try {
			const { id, title, content } = PostNoteSchema.parse(req.body);

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
