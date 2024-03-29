import { FastifyInstance } from "fastify";

import { prisma } from "../lib/prisma";
import { DeleteNoteSchema } from "../entities/Note";

export async function deleteNote(app: FastifyInstance) {
	app.delete("/delete-note", async (req, res) => {
		try {
			const { id } = DeleteNoteSchema.parse(req.body);

			await prisma.note.delete({
				where: {
					id,
				},
			});

			res.status(200).send("Note Deleted!");
		} catch (err) {
			res.status(500).send(err);
		}
	});
}
