import bcrypt from "bcrypt";
import { FastifyInstance } from "fastify";

import { prisma } from "../lib/prisma";
import { GetUserSchema } from "../entities/User";
import jwt from "jsonwebtoken";

export async function getUser(app: FastifyInstance) {
	app.get("/get-user", async (req, res) => {
		try {
			const { email, password } = GetUserSchema.parse(req.body);

			const user = await prisma.user.findUnique({
				where: {
					email: email,
				},
			});

			if (!user) {
				return res.status(401).send("Email or Password incorrect");
			}

			const passwordConfirmation = await bcrypt.compare(
				password,
				user.password,
			);

			if (!passwordConfirmation) {
				return res.status(401).send("Email or Password incorrect");
			}

			const token = jwt.sign(user.id, "a", {
				expiresIn: 60000 * 10,
			});

			res.status(200).send(user);
		} catch (err) {
			res.status(500).send(err);
		}
	});
}
