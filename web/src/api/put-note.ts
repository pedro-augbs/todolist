import { api } from "@/lib/axios";
import { toast } from "sonner";

export const putNote = async (data: {
	id: string;
	title: string;
	content: string;
}) => {
	try {
		await api.put("/put-note", data);
		toast.success("Your note has been updated!");
	} catch (error) {
		console.error("Erro ao excluir a nota:", error);
		toast.error("An error occurred while updating your note");
	}
};
