import { noteProps } from "@/utils/props";
import { DeleteButton } from "./dialogs/DeleteButtonDialog";
import { EditButton } from "./dialogs/EditButtonDialog";
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

import { MoreVertical } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";

export const Note = ({ id, title, content, createdAt }: noteProps) => {
	return (
		<>
			<div className="flex w-full justify-between">
				<AccordionItem
					value={id}
					className="w-full px-4 items-center justify-between"
				>
					<AccordionTrigger className="font-bold text-xl">
						<span>{title}</span>
					</AccordionTrigger>
					<AccordionContent className="flex space-x-2">
						{content}
					</AccordionContent>
				</AccordionItem>
				<Popover>
					<PopoverTrigger className="z-50">
						<MoreVertical />
					</PopoverTrigger>
					<PopoverContent className="flex flex-col w-fit p-0.5">
						<EditButton id={id} title={title} content={content} />
						<DeleteButton id={id} />
					</PopoverContent>
				</Popover>
			</div>
			<Separator />
		</>
	);
};
