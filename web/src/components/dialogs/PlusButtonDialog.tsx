import { Plus } from "lucide-react";

import { CreateNoteForm } from "../forms/CreateNoteForm";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

export const PlusButton = () => {
	return (
		<Dialog>
			<DialogTrigger className="fixed bottom-8 rounded-full bg-primary p-2 text-background">
				<Plus />
			</DialogTrigger>
			<DialogContent className="w-11/12 space-y-4 rounded-xl">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">
						Create your note
					</DialogTitle>
				</DialogHeader>
				<div>
					<CreateNoteForm />
				</div>
			</DialogContent>
		</Dialog>
	);
};
