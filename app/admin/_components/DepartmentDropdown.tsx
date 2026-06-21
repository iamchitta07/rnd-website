"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { FieldLabel } from "@/components/ui/field";

export default function ComboboxBasic({
  VALUES,
  id,
  placeHolder,
  title,
  value,
  className,
}: {
  VALUES: { label: string; value: string }[];
  id: string;
  placeHolder: string;
  title: string;
  value?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <FieldLabel htmlFor={id}></FieldLabel>
      <Combobox items={VALUES}>
        {title}
        <ComboboxInput className="rounded-sm" placeholder={placeHolder} value={value} />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item.label}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
