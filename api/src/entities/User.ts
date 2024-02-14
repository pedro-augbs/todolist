import { z } from "zod";

export const GetUserSchema = z.object({
	email: z.string(),
	password: z.string(),
});

export const PostUserSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string(),
	password: z.string(),
});
