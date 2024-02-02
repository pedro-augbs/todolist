"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DialogClose } from "../ui/dialog";
import { postNote } from "@/api/post-note";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { noteProps } from "@/utils/props";
import { toast } from "sonner";

const formSchema = z.object({
	title: z.string(),
	content: z.string(),
});

export const CreateNoteForm = () => {
	const queryClient = useQueryClient();

	const { mutateAsync: createNoteFn } = useMutation({
		mutationFn: postNote,
		onSuccess: (_, variables) => {
			const cached = queryClient.getQueryData<noteProps[]>(["notes"]);

			if (cached) {
				queryClient.setQueryData(
					["notes"],
					(data: noteProps[] | undefined) => {
						if (data) {
							return [...data, variables];
						}
						return [variables];
					},
				);
				return;
			}
		},
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: z.infer<typeof formSchema>) => {
		const note = {
			id: crypto.randomUUID(),
			...data,
		};

		createNoteFn(note);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input type="text" {...field} required />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="content"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Content</FormLabel>
							<FormControl>
								<Textarea {...field} required />
							</FormControl>
						</FormItem>
					)}
				/>
				<DialogClose asChild>
					<Button type="submit" className="float-end">
						Submit
					</Button>
				</DialogClose>
			</form>
		</Form>
	);
};
