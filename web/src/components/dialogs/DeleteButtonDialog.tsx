import { Trash2 } from "lucide-react";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { deleteNote } from "@/api/delete-note";
import { noteProps } from "@/utils/props";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const DeleteButton = ({ id }: { id: string }) => {
	const queryClient = useQueryClient();

	const { mutateAsync: deleteNoteFn } = useMutation({
		mutationFn: deleteNote,
		onMutate(id) {
			const cached = queryClient.getQueryData<noteProps[]>(["notes"]);

			if (cached) {
				const indexToRemove = cached.findIndex((note) => note.id === id);
				const updatedCached = [
					...cached.slice(0, indexToRemove),
					...cached.slice(indexToRemove + 1),
				];

				queryClient.setQueryData(["notes"], updatedCached);
			}
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	return (
		<Dialog>
			<DialogTrigger className="rounded-md hover:bg-destructive px-4 py-1">
				Delete
			</DialogTrigger>
			<DialogContent className="w-11/12 space-y-4 rounded-xl">
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">
						Are you sure?
					</DialogTitle>
					<DialogDescription>This action is irreversible.</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose className="space-x-2">
						<Button>Cancel</Button>
						<Button variant={"destructive"} onClick={() => deleteNoteFn(id)}>
							Delete
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
