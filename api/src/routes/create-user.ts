import bcrypt from "bcrypt";
import { FastifyInstance } from "fastify";

import { prisma } from "../lib/prisma";
import { PostUserSchema } from "../entities/User";

export function postUser(app: FastifyInstance) {
	app.post("/post-user", async (req, res) => {
		try {
			const { id, name, email, password } = PostUserSchema.parse(req.body);

			const userAlreadyExists = await prisma.user.findMany({
				where: { email },
			});

			if (userAlreadyExists) {
				return res.status(500).send("User already exists!");
			}

			const hashPassword = await bcrypt.hash(password, 10);

			await prisma.user.create({
				data: {
					id,
					name,
					email,
					password: hashPassword,
				},
			});

			res.status(201).send("User Created!");
		} catch (err) {
			res.status(500).send(err);
		}
	});
}
