interface ExplorerItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function ExplorerItem({
  children,
  className,
}: ExplorerItemProps) {
  return (
    <div className={`flex items-center gap-x-2 ${className}`}>{children}</div>
  );
}
