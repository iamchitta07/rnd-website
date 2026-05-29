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
}: {
  VALUES: { label: string; value: string }[];
  id: string;
  placeHolder: string;
  title: string;
}) {
  return (
    <div className="w-[60%] lg:w-[30%]">
      <FieldLabel htmlFor={id}></FieldLabel>
      <Combobox items={VALUES}>
        {title}
        <ComboboxInput className="rounded-sm" placeholder={placeHolder} />
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
