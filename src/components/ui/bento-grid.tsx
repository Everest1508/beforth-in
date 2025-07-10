import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-300 shadow-input bg-card border border-border justify-between flex flex-col overflow-hidden hover:scale-[1.02] relative",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 p-6 flex-1 flex flex-col justify-end">
        <div className="mb-4 text-primary">
          {icon}
        </div>
        <div className="font-sans font-bold text-foreground mb-3 text-lg">
          {title}
        </div>
        <div className="font-sans font-normal text-muted-foreground text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};