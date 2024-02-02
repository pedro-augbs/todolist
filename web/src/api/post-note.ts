import { api } from "@/lib/axios";
import { toast } from "sonner";

export const postNote = async (data: { title: string; content: string }) => {
	try {
		await api.post("/post-note", data);
		toast.success("Your note has been created!");
	} catch (error) {
		console.error("Erro ao criar a nota:", error);
		toast.error("An error occurred while creating your note");
	}
};
