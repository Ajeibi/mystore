import { Skeleton } from "@/components/ui/skeleton";

type SkeletonGridProps = {
    count: number;
};

export function SkeletonGrid({ count }: SkeletonGridProps) {
    const skeletonRows = Array.from({ length: count });

    return (
        <div>
            {skeletonRows.map((_, index) => (
                <div
                    key={index}
                    className="grid grid-cols-4 gap-2 items-center mb-2"
                >
                    <div className="flex items-center col-span-1">
                        <Skeleton className="h-10 w-10 bg-gray-200" />
                        <Skeleton className="h-4 w-[170px] ml-2 bg-gray-200" />
                    </div>
                    <Skeleton className="h-4 w-auto col-span-1 bg-gray-200" />
                    <Skeleton className="h-4 w-auto col-span-1 bg-gray-200" />
                    <Skeleton className="h-4 w-auto col-span-1 bg-gray-200" />
                </div>
            ))}
        </div>
    );
}