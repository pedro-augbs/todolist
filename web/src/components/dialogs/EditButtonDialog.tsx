import { UpdateNoteForm } from "../forms/UpdateNoteForm";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

export const EditButton = ({
	id,
	title,
	content,
}: { id: string; title: string; content: string }) => {
	return (
		<Dialog>
			<DialogTrigger className="rounded-md hover:bg-primary px-4 py-1">
				Edit
			</DialogTrigger>
			<DialogContent className="w-11/12 space-y-4 rounded-xl">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">
						Edit your note
					</DialogTitle>
				</DialogHeader>
				<UpdateNoteForm oldTitle={title} oldContent={content} id={id} />
			</DialogContent>
		</Dialog>
	);
};
