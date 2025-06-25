import { Loader2Icon } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export const LoadingState = ({ title, description }: Props) => {
  return (
    <div className="flex flex-1 py-4 px-8 items-center justify-center">
      <div className="flex flex-col items-center justify-center p-10 shadow-sm bg-background rounded-b-lg gap-y-6">
        <Loader2Icon className="size-6 animate-spin text-primary" />
        <div className="flex flex-col gap-y-2 text-center">
          <h6 className="text-lg font-medium">{title}</h6>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
