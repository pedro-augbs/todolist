import { Skeleton } from "./ui/skeleton";

export const NotesSkeleton = () => {
	return (
		<Skeleton className="flex w-11/12 p-2 items-center justify-between">
			<Skeleton className="py-3 w-1/4" />
			<div className="flex space-x-2">
				<Skeleton className="h-8 w-8" />
				<Skeleton className="h-8 w-8" />
			</div>
		</Skeleton>
	);
};
