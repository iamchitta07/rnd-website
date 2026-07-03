import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface InputFieldProps {
  id: string;
  title: string;
  type: string;
  placeHolder: string;
  className?: string;
  defaultValue?: string | null;
  disabled?: boolean;
}

export function InputDemo({
  id,
  title,
  type,
  placeHolder,
  className,
  defaultValue,
  disabled,
}: InputFieldProps) {
  return (
    <Field className={cn("gap-0", className)}>
      <FieldLabel className="text-white text-md md:text-lg" htmlFor={id}>
        {title}
      </FieldLabel>
      <Input
        className="text-white rounded-sm md:rounded-md py-4 md:py-5 text-md md:text-lg"
        id={id}
        type={type}
        placeholder={placeHolder}
        defaultValue={defaultValue === null ? undefined : defaultValue}
        name={id}
        disabled={disabled}
      />
    </Field>
  );
}
