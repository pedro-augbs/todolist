import { api } from "@/lib/axios";
import { toast } from "sonner";

export const getNotes = async () => {
	try {
		const response = await api.get("/get-note");
		return response.data;
	} catch (error) {
		console.error("Erro ao buscar as notas:", error);
		toast.error("An error occurred while loading your notes");
	}
};
