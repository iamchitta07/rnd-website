import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface InputFieldProps {
  id: string;
  title: string;
  type: string;
  placeHolder: string;
  className?: string;
  value?: string | null;
  onChange?: () => void;
}

export function InputDemo({
  id,
  title,
  type,
  placeHolder,
  className,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <Field className={cn("gap-0", className)}>
      <FieldLabel className="text-white" htmlFor={id}>
        {title}
      </FieldLabel>
      <Input
        className="text-white h-10"
        id={id}
        type={type}
        placeholder={placeHolder}
        value={value === null ? undefined : value}
        onChange={onChange}
      />
    </Field>
  );
}
