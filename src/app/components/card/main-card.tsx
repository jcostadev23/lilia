import { cn } from "@/lib/utils";

const MainCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", className)}>{children}</div>
  );
};

export default MainCard;