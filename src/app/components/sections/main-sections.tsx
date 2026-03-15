import { cn } from "@/lib/utils";

const MainSections = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
     <section className={cn("glass-card rounded-3xl p-12",className)}>
      {children}
    </section>
  );
};

export default MainSections;