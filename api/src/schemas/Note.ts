import { z } from "zod";

export const NotePostSchema = z.object({
	id: z.string(),
	title: z.string(),
	content: z.string(),
});

export const NoteDeleteSchema = z.object({
	id: z.string(),
});

export const NotePutScheme = z.object({
	id: z.string(),
	title: z.string(),
	content: z.string(),
});
