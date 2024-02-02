"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { DialogClose } from "../ui/dialog";
import { putNote } from "@/api/put-note";
import { deleteNote } from "@/api/delete-note";
import { noteProps } from "@/utils/props";
import { useQueryClient, useMutation } from "@tanstack/react-query";

const formSchema = z.object({
	title: z.string(),
	content: z.string(),
});

export const UpdateNoteForm = ({
	id,
	oldTitle,
	oldContent,
}: { id: string; oldTitle: string; oldContent: string }) => {
	const queryClient = useQueryClient();

	const { mutateAsync: updateNoteFn } = useMutation({
		mutationFn: putNote,
		onMutate({ id, title, content }) {
			const cached = queryClient.getQueryData<noteProps[]>(["notes"]);

			if (cached) {
				const updatedCache = cached.map((note) =>
					note.id === id ? { ...note, title, content } : note,
				);

				queryClient.setQueryData(["notes"], updatedCache);
			}
		},
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: z.infer<typeof formSchema>) => {
		const putProps = { id, title: data.title, content: data.content };
		updateNoteFn(putProps);
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
								<Input
									type="text"
									placeholder="Title"
									{...field}
									defaultValue={oldTitle}
								/>
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
								<Textarea placeholder="" {...field} defaultValue={oldContent} />
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
