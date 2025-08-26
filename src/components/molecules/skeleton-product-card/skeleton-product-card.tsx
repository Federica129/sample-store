import { Card } from "@/components/ui/card";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonProductCard = () => {
  return (
    <Card data-name="SkeletonProductCard" className="w-full rounded-lg p-5">
      <Skeleton className="w-full h-[250px]" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 max-w-[200px]" />
        <div className="flex items-center gap-1">
          <Skeleton className="h-2 w-20" />
          <span>
            <Skeleton className="h-2 w-5" />
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-2 w-[40px] h-[40px]" />
        </div>
      </div>
    </Card>
  );
};
