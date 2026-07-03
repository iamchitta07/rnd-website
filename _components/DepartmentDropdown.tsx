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
      <FieldLabel htmlFor={id} className="text-white text-md md:text-lg">
        {title}
      </FieldLabel>
      <Combobox items={VALUES}>
        <ComboboxInput
          className="text-white rounded-sm md:rounded-md py-4 md:py-5 text-md md:text-lg"
          placeholder={value ?? placeHolder}
          name={id}
        />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.value} value={item.label} className="text-md md:text-lg">
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
