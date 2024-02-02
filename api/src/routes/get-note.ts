import { FastifyInstance } from "fastify";

import { prisma } from "../lib/prisma";

export async function getNote(app: FastifyInstance) {
	app.get("/get-note", async (req, res) => {
		try {
			const notes = await prisma.note.findMany();

			res.status(200).send(notes);
		} catch (err) {
			res.status(500).send(err);
		}
	});
}
