export interface CollapseTopbarItemProps {
  weight?: "regular" | "bold" | "light";
  className?: string;
  text: string;
  items: CollapseItem[];
}

export interface CollapseItem {
  value: string;
  label: string;
  href: string;
}
