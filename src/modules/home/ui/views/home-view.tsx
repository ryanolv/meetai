"use client";

import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import { Skeleton } from "@/components/ui/skeleton";

export const HomeView = () => {
  const trpc = useTRPC();
  const greeting = useQuery(trpc.hello.queryOptions({ text: "world" }));

  if (greeting.isLoading) {
    return (
      <div className="flex flex-col items-center  h-screen justify-center space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  if (greeting.isError) {
    return (
      <div className="flex flex-col items-center h-screen justify-center space-y-3">
        <p className="text-red-500">Error: {greeting.error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 gap-y-4">{greeting.data?.greeting}</div>
  );
};
