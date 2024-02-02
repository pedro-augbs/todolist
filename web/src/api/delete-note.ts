import { api } from "@/lib/axios";
import { toast } from "sonner";

export const deleteNote = async (id: string) => {
	try {
		await api.delete("/delete-note", { data: { id } });
		toast.success("Your note has been deleted");
	} catch (error) {
		console.error(error);
		toast.error("Error when deleting your note");
	}
};
