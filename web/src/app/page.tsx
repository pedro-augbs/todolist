import { PlusButton } from "@/components/dialogs/PlusButtonDialog";
import { RecoverNotes } from "@/components/RecoverNotes";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center space-y-8 px-4 pt-8 pb-20 lg:px-24">
			<h1 className="text-3xl font-bold text-background">TODO</h1>
			<Separator />
			<RecoverNotes />
			<PlusButton />
		</main>
	);
}
