"use client";

import * as React from "react";
import { Check } from "lucide-react";
import localFont from "next/font/local";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Command, CommandEmpty, CommandGroup, CommandItem } from "../command";
import { cn } from "@/app/lib/utils";
import { CollapseTopbarItemProps } from "./collapseTopbarItem";
import { SfThin } from "@/app/lib/fonts";

const sfRegular = localFont({
  src: "../../../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_regular.woff2",
});

const sfBold = localFont({
  src: "../../../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_bold.woff2",
});

const sfLight = localFont({
  src: "../../../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_light.woff2",
});

export default function CollapseTopbarItem({
  weight,
  text,
  className,
  items,
}: CollapseTopbarItemProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const font = () => {
    switch (weight) {
      case "bold":
        return sfBold;

      case "light":
        return sfLight;

      default:
        return sfRegular;
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <h3 className={`font-bold text-sm ${className} ${font().className}`}>
          {text}
        </h3>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandEmpty>No item found.</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <a href={item.href} target="_blank" key={item.value + "-a"}>
                <CommandItem
                  key={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              </a>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
