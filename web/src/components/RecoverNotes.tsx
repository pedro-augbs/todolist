"use client";

import { useQuery } from "@tanstack/react-query";
import { getNotes } from "@/api/get-notes";
import { noteProps } from "@/utils/props";
import { Note } from "./Note";
import { Accordion } from "@radix-ui/react-accordion";

export const RecoverNotes = () => {
	const { data: notes } = useQuery({
		queryKey: ["notes"],
		queryFn: getNotes,
	});

	return (
		<div className="w-full text-white">
			<Accordion
				type="single"
				collapsible
				className="flex flex-col items-center space-y-2"
			>
				{notes?.map((note: noteProps) => (
					<Note key={note.id} {...note} />
				))}
			</Accordion>
		</div>
	);
};
