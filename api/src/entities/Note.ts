import { z } from "zod";

export const PostNoteSchema = z.object({
	id: z.string(),
	title: z.string(),
	content: z.string(),
});

export const DeleteNoteSchema = z.object({
	id: z.string(),
});

export const PutNoteScheme = z.object({
	id: z.string(),
	title: z.string(),
	content: z.string(),
});
