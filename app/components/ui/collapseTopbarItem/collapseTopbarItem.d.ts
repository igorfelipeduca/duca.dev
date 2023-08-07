export interface CollapseTopbarItemProps {
  weight?: "regular" | "bold" | "thin";
  className?: string;
  text: string;
  items: CollapseItem[];
}

export interface CollapseItem {
  value: string;
  label: string;
  href: string;
}
