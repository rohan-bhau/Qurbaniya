
import { Skeleton, Card } from "@heroui/react";

const AnimalSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[...Array(3)].map((_, index) => (
        <Card
          key={index}
          className="bg-white rounded-xl shadow-sm p-0 overflow-hidden border h-full"
          radius="lg"
        >
          {/* Image Section Skeleton */}
          <Skeleton className="w-full h-45 lg:h-65" />

          <div className="p-3 space-y-3">
            {/* Tag Skeleton */}
            <Skeleton className="w-12 h-6 rounded-md" />

            <div className="flex justify-between items-start">
              <div className="w-full space-y-2">
                {/* Title Skeleton */}
                <Skeleton className="w-3/4 h-4 rounded-lg" />
                {/* Location Skeleton */}
                <Skeleton className="w-1/2 h-3 rounded-lg" />
                {/* Price Skeleton */}
                <Skeleton className="w-1/3 h-5 rounded-lg" />
              </div>
              {/* Icons Skeleton */}
              <div className="flex flex-col gap-2">
                <Skeleton className="w-5 h-5 rounded-full" />
                <Skeleton className="w-5 h-5 rounded-full" />
              </div>
            </div>

            {/* Button Skeleton */}
            <Skeleton className="w-full h-10 rounded-lg mt-3" />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AnimalSkeleton;
