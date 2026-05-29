import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export interface InputFieldProps {
  id: string;
  title: string;
  type: string;
  placeHolder: string;
}

export function InputDemo({ id, title, type, placeHolder }: InputFieldProps) {
  return (
    <Field className="w-[60%] lg:w-[30%] gap-0">
      <FieldLabel htmlFor={id}>{title}</FieldLabel>
      <Input id={id} type={type} placeholder={placeHolder} />
    </Field>
  );
}
